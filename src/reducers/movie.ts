import {GET_POPULAR_MOVIES, GET_MOVIE_DETAIL, LOGOUT} from '@actions';
import {IAction} from '@utils/redux';
import {IMovieList, movieAdapter, movieDetailAdapter} from '@entities/movie';

interface MovieState {
  popularMovies: IMovieList;
  movieDetail: any;
}

const INITIAL_STATE: MovieState = {
  popularMovies: {
    list: [],
    loading: false,
    page: 1,
    lastPage: 1,
    error: null,
  },
  movieDetail: {},
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES.REQUEST:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: true,
          error: null,
          page: action.payload.params.page,
          // refresh list
          list: action.payload.params.page === 1 ? [] : state.popularMovies.list,
        },
      };
    case GET_POPULAR_MOVIES.SUCCESS:
      return {
        ...state,
        popularMovies: {
          loading: false,
          error: null,
          page: action.payload.page,
          lastPage: action.payload.total_pages || 1,
          list:
            action.payload.page === 1
              ? action.payload.results.map((item: any) => movieAdapter(item))
              : // load more
                [
                  ...state.popularMovies.list,
                  ...action.payload.results.map((item: any) => movieAdapter(item)),
                ],
        },
      };
    case GET_POPULAR_MOVIES.SUCCESS:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          loading: false,
          error: action.payload,
        },
      };
    case GET_MOVIE_DETAIL.REQUEST:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          // movie detail stack
          [action.payload.inputPayload.movie.id]: state.movieDetail[
            action.payload.inputPayload.movie.id
          ]
            ? {
                loading: true,
                error: null,
                data: {
                  ...state.movieDetail[action.payload.inputPayload.movie.id].data,
                  ...action.payload.inputPayload.movie,
                },
              }
            : {
                loading: true,
                error: null,
                data: action.payload.inputPayload.movie,
              },
        },
      };
    case GET_MOVIE_DETAIL.SUCCESS:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          [action.payload.inputPayload.movie.id]: {
            loading: false,
            error: null,
            data: {
              ...state.movieDetail[action.payload.inputPayload.movie.id].data,
              ...movieDetailAdapter(action.payload),
            },
          },
        },
      };
    case GET_MOVIE_DETAIL.FAILURE:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          [action.payload.inputPayload.movie.id]: {
            ...state.movieDetail[action.payload.inputPayload.movie.id],
            loading: false,
            error: action.payload,
          },
        },
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
