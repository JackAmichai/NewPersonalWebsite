// Analytics Tracking - Vercel Serverless Function
// Tracks page views, referrers, and user behavior

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { page, event } = req.body;
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const referrer = req.headers['referer'] || 'Direct';
    const timestamp = new Date().toISOString();

    // Log analytics data (visible in Vercel logs)
    const analyticsData = {
      timestamp,
      page: page || 'unknown',
      event: event || 'pageview',
      userAgent: userAgent.substring(0, 200), // Truncate for storage
      referrer,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    };

    console.log('Analytics Event:', JSON.stringify(analyticsData));

    // TODO: Store in database when Vercel Postgres is set up
    // For now, just log

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Analytics error:', error);
    return res.status(500).json({ error: 'Failed to track event' });
  }
}
