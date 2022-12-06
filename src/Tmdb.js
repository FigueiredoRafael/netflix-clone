const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

/*
  - netflix Originals
  - trending
  - top rated
  - action
  - comedy
  - horror
  - romance
  - documentary
*/

const handleFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originals",
        items: await handleFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Trending",
        items: await handleFetch(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await handleFetch(`/movie/top_rated?&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await handleFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await handleFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await handleFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await handleFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await handleFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
