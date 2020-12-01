import React from 'react';
import {View, FlatList, RefreshControl} from 'react-native';

import {IMovieList, IMovie} from '@entities/movie';
import Layout from '@components/Layout';
import Button from '@components/Button';
import Typography from '@components/Typography';
import getScalableSize from '@utils/getScalableSize';
import MovieItem, {MovieItemPlaceholder} from './components/MovieItem';
import {CARD_HEIGHT} from './components/MovieItem/styles';

import styles from './styles';

interface HomeViewProps {
  username: string;
  popularMovies: IMovieList;
  onRefresh?: any;
  onLoadMore?: any;
  onShareMovie?: (data: IMovie) => void;
  onWantMovie?: (data: IMovie) => void;
  onPressMovie?: (data: IMovie) => void;
  onPressSetting?: any;
}

const HomeView: React.FC<HomeViewProps> = ({
  username,
  popularMovies,
  onShareMovie,
  onWantMovie,
  onRefresh,
  onLoadMore,
  onPressSetting,
  onPressMovie,
}) => {
  function renderHeading() {
    return (
      <View style={styles.heading}>
        <Typography variant="title">Hi, {username}!</Typography>
        <Typography variant="subTitle">New and trending</Typography>
        <Button label="Setting" style={styles.settingBtn} onPress={onPressSetting} />
      </View>
    );
  }

  function renderMovieItem({item}: {item: IMovie}) {
    const handleShare = () => onShareMovie?.(item);
    const handleWant = () => onWantMovie?.(item);
    const handlePress = () => onPressMovie?.(item);

    return (
      <MovieItem
        style={styles.listItem}
        data={item}
        onShare={handleShare}
        onWant={handleWant}
        onPress={handlePress}
      />
    );
  }

  function renderPlaceholder() {
    if (!popularMovies.loading) {
      return null;
    }

    return (
      <>
        <MovieItemPlaceholder style={styles.listItem} />
        <MovieItemPlaceholder style={styles.listItem} />
      </>
    );
  }

  return (
    <Layout>
      <FlatList
        data={popularMovies.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={renderHeading}
        ListFooterComponent={renderPlaceholder}
        refreshControl={<RefreshControl refreshing={popularMovies.loading} onRefresh={onRefresh} />}
        initialNumToRender={20}
        onEndReachedThreshold={0.5}
        onEndReached={onLoadMore}
        pagingEnabled
        snapToInterval={CARD_HEIGHT + getScalableSize.h(20)}
      />
    </Layout>
  );
};

export default HomeView;
