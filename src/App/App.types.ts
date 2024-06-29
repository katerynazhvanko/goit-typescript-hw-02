export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  description?: string;
  user?: {
    name: string | undefined;
  };
  likes?: number;
}

export interface SearchResponse {
  results: Image[];
}