export async function GET() {
    const API_KEY = process.env.YOUTUBE_API_KEY; // Store in .env
    const CHANNEL_ID = "UCqqms3kQqMZ-I9oY1-iTUBA";
    const MAX_RESULTS = 10; // Number of videos to fetch
  
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return Response.json(data.items);
    } catch (error) {
      return Response.json({ error: "Failed to fetch videos" }, { status: 500 });
    }
  }
  