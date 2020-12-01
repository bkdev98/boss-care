import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getPopularMovies} from '@actions';
import {RootState} from '@reducers';
import {IPagination} from '@entities/pagination';
import {IMovie} from '@entities/movie';
import {SCREENS} from '@navigation';
import HomeView from './Home.view';

const HomeContainer = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const popularMovies = useSelector((state: RootState) => state.movie.popularMovies);

  function fetchPopularMovies({page}: IPagination) {
    dispatch(getPopularMovies({page: page || popularMovies.page}));
  }

  useEffect(() => {
    fetchPopularMovies({page: 1});
  }, []);

  function handleRefresh() {
    fetchPopularMovies({page: 1});
  }

  function handleLoadMore() {
    if (popularMovies.page < popularMovies.lastPage) {
      fetchPopularMovies({page: popularMovies.page + 1});
    }
  }

  function handleShareMovie(movie: IMovie) {
    Alert.alert(movie.title, 'Shared!');
  }

  function handleWantMovie(movie: IMovie) {
    Alert.alert(movie.title, 'Wanted!');
  }

  function handlePressMovie(movie: IMovie) {
    navigation.navigate(SCREENS.MOVIE_DETAIL, {movie});
  }

  function handlePressSetting() {
    navigation.navigate(SCREENS.SETTING);
  }

  return (
    <HomeView
      username={userInfo?.username}
      popularMovies={popularMovies}
      onRefresh={handleRefresh}
      onLoadMore={handleLoadMore}
      onShareMovie={handleShareMovie}
      onWantMovie={handleWantMovie}
      onPressSetting={handlePressSetting}
      onPressMovie={handlePressMovie}
    />
  );
};

export default HomeContainer;
