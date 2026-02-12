import { Code2, ExternalLink, Github, Loader2, Target, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
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

// Default fallback values (used if API calls fail)
const DEFAULTS = {
  leetcode: { problemsSolved: '400+', ranking: '233,555' },
  gfg: { problemsSolved: '100+', codingScore: '207', instituteRank: '33' },
  hackerrank: { problemsSolved: '100+', goldBadges: '5', hackos: '6064' },
  github: { repositories: '15+', contributions: '170+', followers: '20+' },
};

const CodingProfiles = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [leetcodeStats, setLeetcodeStats] = useState<{ problemsSolved: string; ranking: string } | null>(null);
  const [gfgStats, setGfgStats] = useState<{ problemsSolved: string; codingScore: string } | null>(null);
  const [githubStats, setGithubStats] = useState<{ repos: string; followers: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllStats = async () => {
      await Promise.allSettled([
        fetch('https://leetcode-stats-api.herokuapp.com/arunkumar_66')
          .then(res => res.json())
          .then(data => {
            if (data.status === 'success') {
              setLeetcodeStats({
                problemsSolved: String(data.totalSolved),
                ranking: Number(data.ranking).toLocaleString(),
              });
            }
          }),
        fetch('https://gfgstatscard.vercel.app/arun87pwrs?raw=true')
          .then(res => res.json())
          .then(data => {
            if (data.total_problems_solved !== undefined) {
              setGfgStats({
                problemsSolved: String(data.total_problems_solved),
                codingScore: String(data.total_score),
              });
            }
          }),
        fetch('https://api.github.com/users/arun-66102')
          .then(res => res.json())
          .then(data => {
            if (data.public_repos !== undefined) {
              setGithubStats({
                repos: String(data.public_repos),
                followers: String(data.followers),
              });
            }
          }),
      ]);
      setLoading(false);
    };
    fetchAllStats();
  }, []);

  const profiles: CodingProfile[] = [
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
      color: 'from-orange-400 to-yellow-500',
      glowColor: 'rgba(251, 146, 60, 0.3)',
      loading: loading && !leetcodeStats,
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
      color: 'from-green-400 to-emerald-500',
      glowColor: 'rgba(52, 211, 153, 0.3)',
      loading: loading && !gfgStats,
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
      color: 'from-green-500 to-teal-500',
      glowColor: 'rgba(20, 184, 166, 0.3)',
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
      color: 'from-gray-400 to-gray-600',
      glowColor: 'rgba(156, 163, 175, 0.3)',
      loading: loading && !githubStats,
    },
  ];

  const totalProblemsSolved = (() => {
    const lc = leetcodeStats ? parseInt(leetcodeStats.problemsSolved) : 400;
    const gfg = gfgStats ? parseInt(gfgStats.problemsSolved) : 100;
    const hr = parseInt(DEFAULTS.hackerrank.problemsSolved);
    return lc + gfg + hr;
  })();

  const totalRepos = githubStats ? parseInt(githubStats.repos) : 15;

  return (
    <section id="coding-profiles" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-neon-green/5 top-[20%] right-[-10%]" />
      <div className="orb w-[300px] h-[300px] bg-primary-400/8 bottom-[5%] left-[-5%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            My competitive programming journey and open source contributions across various platforms
          </p>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`glass-card rounded-2xl p-7 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${profile.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Header */}
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

              {/* Description */}
              <p className="text-secondary-600 text-sm mb-5 leading-relaxed">{profile.description}</p>

              {/* Stats */}
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

              {/* Action */}
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

        {/* Summary */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-neon-cyan/5 to-neon-green/5" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">Coding Journey Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: loading ? null : `${totalProblemsSolved}+`, label: 'Total Problems', color: 'from-primary-500 to-neon-cyan' },
                  { value: loading ? null : `${totalRepos}+`, label: 'Projects Created', color: 'from-neon-cyan to-neon-green' },
                  { value: '170+', label: 'Code Commits', color: 'from-neon-green to-primary-500' },
                  { value: '4', label: 'Active Platforms', color: 'from-neon-pink to-primary-500' },
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
