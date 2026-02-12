import { Code2, ExternalLink, Github, Loader2, Target, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  loading?: boolean;
}

// Default fallback values (used if API calls fail)
const DEFAULTS = {
  leetcode: {
    problemsSolved: '400+',
    ranking: '233,555',
  },
  gfg: {
    problemsSolved: '100+',
    codingScore: '207',
    instituteRank: '33',
  },
  hackerrank: {
    problemsSolved: '100+',
    goldBadges: '5',
    hackos: '6064',
  },
  github: {
    repositories: '15+',
    contributions: '170+',
    followers: '20+',
  },
};

const CodingProfiles = () => {
  const [leetcodeStats, setLeetcodeStats] = useState<{ problemsSolved: string; ranking: string } | null>(null);
  const [gfgStats, setGfgStats] = useState<{ problemsSolved: string; codingScore: string } | null>(null);
  const [githubStats, setGithubStats] = useState<{ repos: string; followers: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllStats = async () => {
      // Fetch all APIs in parallel
      const results = await Promise.allSettled([
        // LeetCode API
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

        // GeeksforGeeks API
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

        // GitHub API (Official)
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

      // Log any failures for debugging (optional)
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const apis = ['LeetCode', 'GeeksforGeeks', 'GitHub'];
          console.warn(`Failed to fetch ${apis[index]} stats:`, result.reason);
        }
      });

      setLoading(false);
    };

    fetchAllStats();
  }, []);

  // Build the profiles array with live data (or fallbacks)
  const profiles: CodingProfile[] = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      icon: <Code2 size={24} />,
      description: 'Problem solving and algorithm practice platform',
      stats: [
        {
          label: 'Problems Solved',
          value: leetcodeStats?.problemsSolved ?? DEFAULTS.leetcode.problemsSolved,
        },
        {
          label: 'Global Ranking',
          value: leetcodeStats?.ranking ?? DEFAULTS.leetcode.ranking,
        },
      ],
      url: 'https://leetcode.com/u/arunkumar_66/',
      username: 'arunkumar_66',
      color: 'from-orange-400 to-yellow-500',
      loading: loading && !leetcodeStats,
    },
    {
      id: 'gfg',
      name: 'GeeksforGeeks',
      icon: <Trophy size={24} />,
      description: 'Coding practice and interview preparation',
      stats: [
        {
          label: 'Problems Solved',
          value: gfgStats?.problemsSolved ?? DEFAULTS.gfg.problemsSolved,
        },
        {
          label: 'Coding Score',
          value: gfgStats?.codingScore ?? DEFAULTS.gfg.codingScore,
        },
        {
          label: 'Institute Rank',
          value: DEFAULTS.gfg.instituteRank, // Not available via API
        },
      ],
      url: 'https://www.geeksforgeeks.org/profile/arun87pwrs',
      username: 'arun87pwrs',
      color: 'from-green-400 to-emerald-500',
      loading: loading && !gfgStats,
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      icon: <Target size={24} />,
      description: 'Coding challenges and skill assessments',
      stats: [
        { label: 'Problems Solved', value: DEFAULTS.hackerrank.problemsSolved },
        { label: 'Gold Badges', value: DEFAULTS.hackerrank.goldBadges },
        { label: 'Hackos', value: DEFAULTS.hackerrank.hackos },
      ],
      url: 'https://www.hackerrank.com/profile/23cs020_kpriet',
      username: '23cs020_kpriet',
      color: 'from-green-500 to-teal-500',
      loading: false, // No API available, always show hardcoded
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={24} />,
      description: 'Open source contributions and projects',
      stats: [
        {
          label: 'Repositories',
          value: githubStats?.repos ?? DEFAULTS.github.repositories,
        },
        {
          label: 'Contributions',
          value: DEFAULTS.github.contributions, // Not available via REST API without auth
        },
        {
          label: 'Followers',
          value: githubStats?.followers ?? DEFAULTS.github.followers,
        },
      ],
      url: 'https://github.com/arun-66102',
      username: 'arun-66102',
      color: 'from-gray-600 to-gray-800',
      loading: loading && !githubStats,
    },
  ];

  // Compute dynamic summary stats
  const totalProblemsSolved = (() => {
    const lc = leetcodeStats ? parseInt(leetcodeStats.problemsSolved) : 400;
    const gfg = gfgStats ? parseInt(gfgStats.problemsSolved) : 100;
    const hr = parseInt(DEFAULTS.hackerrank.problemsSolved); // always fallback ~100
    return lc + gfg + hr;
  })();

  const totalRepos = githubStats ? parseInt(githubStats.repos) : 15;

  return (
    <section id="coding-profiles" className="py-20 bg-secondary-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My competitive programming journey and open source contributions across various platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-secondary-200/80 rounded-xl p-8 card-hover purple-border"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.color} text-white`}>
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">
                      {profile.name}
                    </h3>
                    <p className="text-secondary-600">@{profile.username}</p>
                  </div>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent-200 text-accent-800 hover:bg-accent-300 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Description */}
              <p className="text-secondary-600 mb-6">
                {profile.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {profile.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-secondary-300/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">
                      {profile.loading ? (
                        <Loader2 size={20} className="animate-spin mx-auto text-primary-400" />
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-xs text-secondary-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${profile.color} text-white font-medium rounded-lg hover:opacity-90 transition-opacity`}
              >
                <ExternalLink size={18} className="mr-2" />
                View {profile.name} Profile
              </a>
            </div>
          ))}
        </div>

        {/* Overall Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Coding Journey Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">
                  {loading ? (
                    <Loader2 size={28} className="animate-spin mx-auto" />
                  ) : (
                    `${totalProblemsSolved}+`
                  )}
                </div>
                <div className="text-accent-200">Total Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {loading ? (
                    <Loader2 size={28} className="animate-spin mx-auto" />
                  ) : (
                    `${totalRepos}+`
                  )}
                </div>
                <div className="text-accent-200">Projects Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">170+</div>
                <div className="text-accent-200">Code Commits</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-accent-200">Active Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
