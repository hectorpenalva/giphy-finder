const API_KEY = "bVzSbFfc3MbDubLmRTc7LNq64IWEey7S";

export default async function gifFetch(query, limit) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=es`
  );

  const data = await response.json();
  const gifsArray = data.data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.fixed_height_downsampled;
    return { url, title, id };
  });

  return gifsArray;
}
