export interface IMovie {
  voteAverage: number;
  id: number;
  releaseDate: string;
  backdropPath: string;
  title: string;
  posterPath: string;
  overview: string;
}

export interface IMovieList {
  list: IMovie[];
  loading: boolean;
  page: number;
  lastPage: number;
  error: any;
}

export const movieAdapter = (data: any): IMovie => {
  return {
    voteAverage: data.vote_average,
    id: data.id,
    releaseDate: data.release_date,
    backdropPath: data.backdrop_path,
    title: data.title,
    posterPath: data.poster_path,
    overview: data.overview,
  };
};

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieDetail extends IMovie {
  genres: IGenre[];
  homepage: string;
}

export const movieDetailAdapter = (data: any): IMovieDetail => {
  return {
    ...movieAdapter(data),
    genres: data.genres,
    homepage: data.homepage,
  };
};
