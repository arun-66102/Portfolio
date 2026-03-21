import { Code2, ExternalLink, Github, Loader2, RefreshCw, Target, Trophy } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CodingProfile {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  stats: { label: string; value: string; }[];
  url: string;
  username: string;
  loading?: boolean;
}

interface LeetCodeStats { problemsSolved: string; ranking: string; }
interface GfgStats { problemsSolved: string; codingScore: string; }
interface GithubStats { repos: string; followers: string; }

const DEFAULTS = {
  leetcode: { problemsSolved: '400+', ranking: '233,555' },
  gfg: { problemsSolved: '100+', codingScore: '207', instituteRank: '33' },
  hackerrank: { problemsSolved: '100+', goldBadges: '5', hackos: '6064' },
  github: { repositories: '15+', contributions: '170+', followers: '20+' },
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const TAB_RESUME_REFRESH_GAP_MS = 90 * 1000;

const numberText = (value: unknown, fallback: string): string => {
  if (typeof value === 'number' && Number.isFinite(value)) return Math.round(value).toLocaleString();
  if (typeof value === 'string' && value.trim().length > 0) return value.trim();
  return fallback;
};

const fetchJson = async (url: string, timeoutMs = 9000): Promise<any> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const separator = url.includes('?') ? '&' : '?';
    const response = await fetch(`${url}${separator}t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'cache-control': 'no-cache' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timer);
  }
};

const fetchWithFallback = async (urls: string[]): Promise<any> => {
  let lastError: unknown;
  for (const url of urls) {
    try {
      const payload = await fetchJson(url);
      if (payload) return payload;
    } catch (error) { lastError = error; }
  }
  throw lastError instanceof Error ? lastError : new Error('Unable to fetch data');
};

const parseLeetCode = (payload: any): LeetCodeStats | null => {
  const solved = payload?.totalSolved ?? payload?.total_solved ?? payload?.solvedProblem;
  const rank = payload?.ranking ?? payload?.rank;
  if (solved == null) return null;
  return { problemsSolved: numberText(solved, DEFAULTS.leetcode.problemsSolved), ranking: numberText(rank, DEFAULTS.leetcode.ranking) };
};

const parseGfg = (payload: any): GfgStats | null => {
  const solved = payload?.total_problems_solved ?? payload?.solvedProblems ?? payload?.overall?.totalProblemsSolved;
  const score = payload?.total_score ?? payload?.codingScore ?? payload?.overall?.codingScore;
  if (solved == null) return null;
  return { problemsSolved: numberText(solved, DEFAULTS.gfg.problemsSolved), codingScore: numberText(score, DEFAULTS.gfg.codingScore) };
};

const parseGithub = (payload: any): GithubStats | null => {
  if (payload?.public_repos == null || payload?.followers == null) return null;
  return { repos: numberText(payload.public_repos, DEFAULTS.github.repositories), followers: numberText(payload.followers, DEFAULTS.github.followers) };
};

const parseCount = (value: string, fallback: number): number => {
  const num = Number.parseInt(value.replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(num) ? num : fallback;
};

const CodingProfiles = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [gfgStats, setGfgStats] = useState<GfgStats | null>(null);
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const lastFetchAt = useRef<number>(0);

  const fetchAllStats = useCallback(async (showRefreshLoader = false) => {
    if (showRefreshLoader) setRefreshing(true);
    const lc = fetchWithFallback([
      'https://leetcode-stats-api.herokuapp.com/arunkumar_66',
      'https://leetcode-api-faisalshohag.vercel.app/arunkumar_66',
    ]).then(parseLeetCode).then((s) => { if (s) setLeetcodeStats(s); });
    const gfg = fetchWithFallback(['https://gfgstatscard.vercel.app/arun87pwrs?raw=true'])
      .then(parseGfg).then((s) => { if (s) setGfgStats(s); });
    const gh = fetchJson('https://api.github.com/users/arun-66102')
      .then(parseGithub).then((s) => { if (s) setGithubStats(s); });
    await Promise.allSettled([lc, gfg, gh]);
    lastFetchAt.current = Date.now();
    setLastUpdated(new Date().toLocaleTimeString());
    setInitialLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    void fetchAllStats();
    const interval = window.setInterval(() => void fetchAllStats(), REFRESH_INTERVAL_MS);
    const onVis = () => {
      if (document.visibilityState !== 'visible') return;
      if (Date.now() - lastFetchAt.current > TAB_RESUME_REFRESH_GAP_MS) void fetchAllStats();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => { clearInterval(interval); document.removeEventListener('visibilitychange', onVis); };
  }, [fetchAllStats]);

  const profiles: CodingProfile[] = useMemo(() => [
    {
      id: 'leetcode',
      name: 'LeetCode',
      icon: <Code2 size={22} />,
      description: 'Problem solving and algorithm practice platform',
      stats: [
        { label: 'Problems Solved', value: leetcodeStats?.problemsSolved ?? DEFAULTS.leetcode.problemsSolved },
        { label: 'Global Ranking', value: leetcodeStats?.ranking ?? DEFAULTS.leetcode.ranking },
      ],
      url: 'https://leetcode.com/u/arunkumar_66/',
      username: 'arunkumar_66',
      loading: initialLoading && !leetcodeStats,
    },
    {
      id: 'gfg',
      name: 'GeeksforGeeks',
      icon: <Trophy size={22} />,
      description: 'Coding practice and interview preparation',
      stats: [
        { label: 'Problems Solved', value: gfgStats?.problemsSolved ?? DEFAULTS.gfg.problemsSolved },
        { label: 'Coding Score', value: gfgStats?.codingScore ?? DEFAULTS.gfg.codingScore },
        { label: 'Institute Rank', value: DEFAULTS.gfg.instituteRank },
      ],
      url: 'https://www.geeksforgeeks.org/profile/arun87pwrs',
      username: 'arun87pwrs',
      loading: initialLoading && !gfgStats,
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      icon: <Target size={22} />,
      description: 'Coding challenges and skill assessments',
      stats: [
        { label: 'Problems Solved', value: DEFAULTS.hackerrank.problemsSolved },
        { label: 'Gold Badges', value: DEFAULTS.hackerrank.goldBadges },
        { label: 'Hackos', value: DEFAULTS.hackerrank.hackos },
      ],
      url: 'https://www.hackerrank.com/profile/23cs020_kpriet',
      username: '23cs020_kpriet',
      loading: false,
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={22} />,
      description: 'Open source contributions and projects',
      stats: [
        { label: 'Repositories', value: githubStats?.repos ?? DEFAULTS.github.repositories },
        { label: 'Contributions', value: DEFAULTS.github.contributions },
        { label: 'Followers', value: githubStats?.followers ?? DEFAULTS.github.followers },
      ],
      url: 'https://github.com/arun-66102',
      username: 'arun-66102',
      loading: initialLoading && !githubStats,
    },
  ], [gfgStats, githubStats, initialLoading, leetcodeStats]);

  const totalProblemsSolved = (() => {
    const lc = leetcodeStats ? parseCount(leetcodeStats.problemsSolved, 400) : 400;
    const gfg = gfgStats ? parseCount(gfgStats.problemsSolved, 100) : 100;
    const hr = parseCount(DEFAULTS.hackerrank.problemsSolved, 100);
    return lc + gfg + hr;
  })();
  const totalRepos = githubStats ? parseCount(githubStats.repos, 15) : 15;

  return (
    <section id="coding-profiles" ref={ref}>
      {/* Section Header */}
      <div className="cyber-header">
        <div className="ch-num">03</div>
        <div className="ch-title">
          <span className="col-a">CODING</span>_<span className="col-b">PROFILES</span>
        </div>
      </div>

      {/* Refresh bar */}
      <div className="refresh-bar" style={{ marginBottom: 40 }}>
        <span className="refresh-text">Last updated: {lastUpdated ?? 'Fetching...'}</span>
        <button
          type="button"
          className="cyber-refresh-btn"
          onClick={() => void fetchAllStats(true)}
          disabled={refreshing}
        >
          <RefreshCw size={11} className={refreshing ? 'animate-spin' : ''} />
          REFRESH_NOW
        </button>
      </div>

      {/* Profile Cards */}
      <div className="cert-cyber-grid">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="cert-cyber primary"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
            }}
          >
            <div className="cert-corner primary-corner" />

            <div className="cert-cyber-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 44, height: 44, border: '1px solid rgba(155,0,255,0.3)',
                  background: 'rgba(155,0,255,0.1)', color: '#9b00ff',
                }}>
                  {profile.icon}
                </div>
                <div>
                  <div className="cert-cyber-name" style={{ fontSize: 18 }}>{profile.name}</div>
                  <div style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: 'rgba(240,238,255,0.3)', letterSpacing: 1 }}>
                    @{profile.username}
                  </div>
                </div>
              </div>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card-btn"
                style={{ width: 'auto', flex: 'none', padding: '8px 12px' }}
              >
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="cert-cyber-body">
              <p className="cert-cyber-desc">{profile.description}</p>
              {/* Stat boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${profile.stats.length}, 1fr)`, gap: 8, marginTop: 16 }}>
                {profile.stats.map((stat, i) => (
                  <div key={i} className="profile-stat-box">
                    <div className="profile-stat-val">
                      {profile.loading ? <Loader2 size={16} className="animate-spin" style={{ margin: '0 auto', color: '#9b00ff' }} /> : stat.value}
                    </div>
                    <div className="profile-stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cert-cyber-footer">
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="cyber-card-btn btn-live" style={{ flex: 1 }}>
                <ExternalLink size={13} /> VIEW PROFILE
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="coding-summary">
        <div className="coding-summary-title">CODING_JOURNEY_SUMMARY</div>
        <div className="coding-summary-grid">
          {[
            { value: initialLoading ? null : `${totalProblemsSolved}+`, label: 'TOTAL_PROBLEMS' },
            { value: initialLoading ? null : `${totalRepos}+`, label: 'PROJECTS_CREATED' },
            { value: '170+', label: 'CODE_COMMITS' },
            { value: '4', label: 'ACTIVE_PLATFORMS' },
          ].map((item, i) => (
            <div key={i} className="coding-sum-item">
              <div className="coding-sum-val">
                {item.value === null
                  ? <Loader2 size={24} className="animate-spin" style={{ margin: '0 auto', color: '#9b00ff' }} />
                  : item.value}
              </div>
              <div className="coding-sum-lbl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
