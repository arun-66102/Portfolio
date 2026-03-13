import { Code2, ExternalLink, Github, Loader2, RefreshCw, Target, Trophy } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CodingProfile {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  url: string;
  username: string;
  color: string;
  glowColor: string;
  loading?: boolean;
}

interface LeetCodeStats {
  problemsSolved: string;
  ranking: string;
}

interface GfgStats {
  problemsSolved: string;
  codingScore: string;
}

interface GithubStats {
  repos: string;
  followers: string;
}

const DEFAULTS = {
  leetcode: { problemsSolved: '400+', ranking: '233,555' },
  gfg: { problemsSolved: '100+', codingScore: '207', instituteRank: '33' },
  hackerrank: { problemsSolved: '100+', goldBadges: '5', hackos: '6064' },
  github: { repositories: '15+', contributions: '170+', followers: '20+' },
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const TAB_RESUME_REFRESH_GAP_MS = 90 * 1000;

const numberText = (value: unknown, fallback: string): string => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return Math.round(value).toLocaleString();
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed.length > 0) return trimmed;
  }

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

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

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
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Unable to fetch data from fallback endpoints');
};

const parseLeetCode = (payload: any): LeetCodeStats | null => {
  const solved = payload?.totalSolved ?? payload?.total_solved ?? payload?.solvedProblem;
  const rank = payload?.ranking ?? payload?.rank;

  if (solved == null) return null;

  return {
    problemsSolved: numberText(solved, DEFAULTS.leetcode.problemsSolved),
    ranking: numberText(rank, DEFAULTS.leetcode.ranking),
  };
};

const parseGfg = (payload: any): GfgStats | null => {
  const solved =
    payload?.total_problems_solved ??
    payload?.solvedProblems ??
    payload?.overall?.totalProblemsSolved;

  const score = payload?.total_score ?? payload?.codingScore ?? payload?.overall?.codingScore;

  if (solved == null) return null;

  return {
    problemsSolved: numberText(solved, DEFAULTS.gfg.problemsSolved),
    codingScore: numberText(score, DEFAULTS.gfg.codingScore),
  };
};

const parseGithub = (payload: any): GithubStats | null => {
  if (payload?.public_repos == null || payload?.followers == null) return null;

  return {
    repos: numberText(payload.public_repos, DEFAULTS.github.repositories),
    followers: numberText(payload.followers, DEFAULTS.github.followers),
  };
};

const parseCount = (value: string, fallback: number): number => {
  const cleaned = value.replace(/[^0-9]/g, '');
  const num = Number.parseInt(cleaned, 10);
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

    const leetCodePromise = fetchWithFallback([
      'https://leetcode-stats-api.herokuapp.com/arunkumar_66',
      'https://leetcode-api-faisalshohag.vercel.app/arunkumar_66',
    ])
      .then(parseLeetCode)
      .then((stats) => {
        if (stats) setLeetcodeStats(stats);
      });

    const gfgPromise = fetchWithFallback([
      'https://gfgstatscard.vercel.app/arun87pwrs?raw=true',
    ])
      .then(parseGfg)
      .then((stats) => {
        if (stats) setGfgStats(stats);
      });

    const githubPromise = fetchJson('https://api.github.com/users/arun-66102')
      .then(parseGithub)
      .then((stats) => {
        if (stats) setGithubStats(stats);
      });

    await Promise.allSettled([leetCodePromise, gfgPromise, githubPromise]);

    lastFetchAt.current = Date.now();
    setLastUpdated(new Date().toLocaleTimeString());
    setInitialLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    void fetchAllStats();

    const interval = window.setInterval(() => {
      void fetchAllStats();
    }, REFRESH_INTERVAL_MS);

    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;
      const stale = Date.now() - lastFetchAt.current > TAB_RESUME_REFRESH_GAP_MS;
      if (stale) void fetchAllStats();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [fetchAllStats]);

  const profiles: CodingProfile[] = useMemo(
    () => [
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
        color: 'from-primary-500 to-neon-cyan',
        glowColor: 'rgba(34, 211, 238, 0.28)',
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
        color: 'from-neon-green to-primary-500',
        glowColor: 'rgba(52, 211, 153, 0.22)',
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
        color: 'from-accent-500 to-accent-600',
        glowColor: 'rgba(245, 158, 11, 0.2)',
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
        color: 'from-neon-blue to-primary-500',
        glowColor: 'rgba(96, 165, 250, 0.2)',
        loading: initialLoading && !githubStats,
      },
    ],
    [gfgStats, githubStats, initialLoading, leetcodeStats]
  );

  const totalProblemsSolved = (() => {
    const lc = leetcodeStats ? parseCount(leetcodeStats.problemsSolved, 400) : 400;
    const gfg = gfgStats ? parseCount(gfgStats.problemsSolved, 100) : 100;
    const hr = parseCount(DEFAULTS.hackerrank.problemsSolved, 100);
    return lc + gfg + hr;
  })();

  const totalRepos = githubStats ? parseCount(githubStats.repos, 15) : 15;

  return (
    <section id="coding-profiles" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-neon-green/5 top-[20%] right-[-10%]" />
      <div className="orb w-[300px] h-[300px] bg-primary-400/8 bottom-[5%] left-[-5%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Live coding profile snapshots with automatic refresh every 5 minutes
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs text-secondary-700">
            <span>Last updated: {lastUpdated ?? 'Fetching...'}</span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary-400/50 transition-colors"
              onClick={() => void fetchAllStats(true)}
              disabled={refreshing}
            >
              <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
              Refresh now
            </button>
          </div>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`glass-card rounded-2xl p-7 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${profile.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} text-white shadow-lg`}>
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-secondary-600 text-sm">@{profile.username}</p>
                  </div>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-secondary-700 hover:text-neon-cyan hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <p className="text-secondary-600 text-sm mb-5 leading-relaxed">{profile.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="stat-card rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-primary-600">
                      {profile.loading ? (
                        <Loader2 size={18} className="animate-spin mx-auto text-primary-500" />
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-[10px] text-secondary-600 mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r ${profile.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                <ExternalLink size={16} className="mr-2" />
                View Profile
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-neon-cyan/5 to-neon-green/5" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">Coding Journey Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: initialLoading ? null : `${totalProblemsSolved}+`, label: 'Total Problems', color: 'from-primary-500 to-neon-cyan' },
                  { value: initialLoading ? null : `${totalRepos}+`, label: 'Projects Created', color: 'from-neon-green to-primary-500' },
                  { value: '170+', label: 'Code Commits', color: 'from-neon-blue to-primary-500' },
                  { value: '4', label: 'Active Platforms', color: 'from-accent-500 to-accent-600' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-3xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.value === null ? (
                        <Loader2 size={28} className="animate-spin mx-auto text-primary-500" />
                      ) : (
                        item.value
                      )}
                    </div>
                    <div className="text-sm text-secondary-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
