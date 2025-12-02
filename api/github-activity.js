// GitHub Activity Fetcher - Vercel Serverless Function
// Fetches recent GitHub activity for the portfolio

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=3600'); // Cache for 1 hour

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GITHUB_USERNAME = 'JackAmichai';

  try {
    const headers = {
      'User-Agent': 'Portfolio-App',
      'Accept': 'application/vnd.github.v3+json'
    };

    // Add GitHub token if available (for higher rate limits)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch user data and events in parallel
    const [userResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`, { headers })
    ]);

    if (!userResponse.ok || !eventsResponse.ok) {
      throw new Error('GitHub API request failed');
    }

    const userData = await userResponse.json();
    const eventsData = await eventsResponse.json();

    // Process recent activity
    const recentActivity = eventsData
      .filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent')
      .slice(0, 5)
      .map(event => ({
        type: event.type,
        repo: event.repo.name,
        message: event.type === 'PushEvent' 
          ? event.payload.commits?.[0]?.message || 'Commit'
          : `Created ${event.payload.ref_type}`,
        date: event.created_at,
        url: `https://github.com/${event.repo.name}`
      }));

    // Return formatted data
    return res.status(200).json({
      user: {
        username: userData.login,
        name: userData.name,
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url
      },
      recentActivity,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('GitHub API error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch GitHub data',
      details: error.message 
    });
  }
}
