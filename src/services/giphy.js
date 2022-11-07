const API_KEY = "bVzSbFfc3MbDubLmRTc7LNq64IWEey7S";

export default function gifFetch(query, limit) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=es`
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
