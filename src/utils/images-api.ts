import axios from "axios";
import { Image, SearchResponse } from "../App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY = "dF_wJVOwtbM6cMfTGJnWLGEro4JEyuBgb-FTudwbMnE";

export const fetchImages = async (
  searchQuery: string,
  page: number
): Promise<Image[]> => {
  const response = await axios.get<SearchResponse>(`/search/photos`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      per_page: 9,
      page,
    },
  });
  return response.data.results;
};
