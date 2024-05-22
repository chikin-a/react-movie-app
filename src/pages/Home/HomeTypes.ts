interface Media {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  media_type: "movie" | "tv";
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends Media {
  title: string;
}

export interface TVShow extends Media {
  name: string;
}

export type MediaItem = Movie | TVShow;
