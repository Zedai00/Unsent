const API_KEY = import.meta.env.VITE_TENOR_API_KEY;
const LIMIT = import.meta.env.VITE_API_LIMIT;

const fetchImages = async () => {
  const query = "anime rain aeshthetic";
  const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(query)}&key=${API_KEY}&limit=${LIMIT}&media_filter=gif`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.results.map((item) => ({
      id: item.id,
      url: item.media_formats.gif.url
    }));
  } catch (error) {
    console.error("Failed to fetch images", error);
    return [];
  }
};

export default fetchImages;
