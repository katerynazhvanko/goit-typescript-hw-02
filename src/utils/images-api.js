import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY = "dF_wJVOwtbM6cMfTGJnWLGEro4JEyuBgb-FTudwbMnE";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      per_page: 9,
      page,
    },
  });
  return response.data.results;
};
