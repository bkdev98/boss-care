import {generateThunkAction, generateThunkType} from '@utils/redux';
import {IPagination} from '@entities/pagination';
import {IMovie} from '@entities/movie';

export const GET_POPULAR_MOVIES = generateThunkType('GET_POPULAR_MOVIES');
export const getPopularMovies = (pagination: IPagination) =>
  generateThunkAction({
    actionType: GET_POPULAR_MOVIES,
    apiOptions: {
      endpoint: '/movie/popular',
      params: pagination,
    },
  })();

export const GET_MOVIE_DETAIL = generateThunkType('GET_MOVIE_DETAIL');
export const getMovieDetail = (movie: IMovie) =>
  generateThunkAction({
    actionType: GET_MOVIE_DETAIL,
    apiOptions: {
      endpoint: `/movie/${movie.id}`,
    },
    inputPayload: {movie},
  })();
