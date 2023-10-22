export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[],
    time: string
  }
export interface Genre {
    id: number;
    name: string
  }
export interface Combo{
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    sale: string
  }