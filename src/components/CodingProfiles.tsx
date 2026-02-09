import { Code2, ExternalLink, Github, RefreshCw, Target, Trophy } from 'lucide-react';
import React, { useState } from 'react';

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
  lastUpdated?: string;
  liveStats?: any;
}

const CodingProfiles = () => {
  const [lastRefresh, setLastRefresh] = useState<string>(new Date().toLocaleDateString());

  // Manual update function - you can trigger this to refresh stats
  const refreshStats = () => {
    setLastRefresh(new Date().toLocaleDateString());
    // In a real implementation, this would fetch from APIs
    console.log('Stats refreshed - update your profile data manually in the code');
  };

  const profiles: CodingProfile[] = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      icon: <Code2 size={24} />,
      description: 'Problem solving and algorithm practice platform',
      stats: [
        { label: 'Problems Solved', value: '400+' },
        { label: 'Global Ranking', value: '233,555' }
      ],
      url: 'https://leetcode.com/u/arunkumar_66/',
      username: 'arunkumar_66',
      color: 'from-orange-400 to-yellow-500',
      lastUpdated: lastRefresh
    },
    {
      id: 'gfg',
      name: 'GeeksforGeeks',
      icon: <Trophy size={24} />,
      description: 'Coding practice and interview preparation',
      stats: [
        { label: 'Problems Solved', value: '100+' },
        { label: 'Coding Score', value: '207' },
        { label: 'Institute Rank', value: '33' }
      ],
      url: 'https://www.geeksforgeeks.org/profile/arun87pwrs',
      username: 'arun87pwrs',
      color: 'from-green-400 to-emerald-500',
      lastUpdated: lastRefresh
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      icon: <Target size={24} />,
      description: 'Coding challenges and skill assessments',
      stats: [
        { label: 'Problems Solved', value: '100+' },
        { label: 'Gold Badges', value: '5' },
        { label: 'Hackos', value: '6064' }
      ],
      url: 'https://www.hackerrank.com/profile/23cs020_kpriet',
      username: '23cs020_kpriet',
      color: 'from-green-500 to-teal-500',
      lastUpdated: lastRefresh
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={24} />,
      description: 'Open source contributions and projects',
      stats: [
        { label: 'Repositories', value: '15+' },
        { label: 'Contributions', value: '170+' },
        { label: 'Followers', value: '20+' }
      ],
      url: 'https://github.com/arun-66102',
      username: 'arun-66102',
      color: 'from-gray-600 to-gray-800',
      lastUpdated: lastRefresh
    }
  ];

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
          <div className="mt-4 flex items-center justify-center space-x-4">
            <span className="text-sm text-secondary-500">Last updated: {lastRefresh}</span>
            <button
              onClick={refreshStats}
              className="inline-flex items-center px-3 py-1 bg-accent-200 text-accent-800 text-sm rounded hover:bg-accent-300 transition-colors"
            >
              <RefreshCw size={14} className="mr-1" />
              Refresh Stats
            </button>
          </div>
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
                      {stat.value}
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
                <div className="text-3xl font-bold mb-2">600+</div>
                <div className="text-accent-200">Total Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
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

        {/* Update Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-secondary-200/60 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              📊 How to Update Stats
            </h4>
            <div className="text-left text-secondary-600 space-y-2">
              <p>• <strong>Manual Update:</strong> Edit the values in <code className="bg-secondary-300 px-2 py-1 rounded text-xs">src/components/CodingProfiles.tsx</code></p>
              <p>• <strong>Live Data:</strong> For automatic updates, you can integrate platform APIs</p>
              <p>• <strong>Refresh Button:</strong> Click "Refresh Stats" to update the timestamp</p>
              <p>• <strong>Best Practice:</strong> Update stats monthly to keep portfolio current</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
