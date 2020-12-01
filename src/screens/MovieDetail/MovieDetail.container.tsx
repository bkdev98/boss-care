import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getMovieDetail} from '@actions';
import {RootState} from '@reducers';
import MovieDetailView from './MovieDetail.view';

const MovieDetailContainer = ({route, navigation}: {route: any; navigation: any}) => {
  const {movie} = route.params;

  const dispatch = useDispatch();
  const movieDetail = useSelector((state: RootState) => state.movie.movieDetail[movie?.id]);

  function fetchMovieDetail() {
    if (!movie) {
      return;
    }
    dispatch(getMovieDetail(movie));
  }

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  function handlePressBack() {
    navigation.goBack();
  }

  function handleRefresh() {
    dispatch(getMovieDetail(movie));
  }

  const loading = movieDetail?.loading && !movieDetail?.data?.homepage;

  return (
    <MovieDetailView
      loading={loading}
      data={movieDetail?.data}
      error={movieDetail?.error}
      onPressBack={handlePressBack}
      onRefresh={handleRefresh}
    />
  );
};

export default MovieDetailContainer;
