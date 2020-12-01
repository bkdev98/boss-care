import React from 'react';
import {
  ImageBackground,
  Image,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import moment from 'moment';

import Layout from '@components/Layout';
import Typography from '@components/Typography';
import Button from '@components/Button';
import {IMovieDetail, IGenre} from '@entities/movie';
import {getImageUri} from '@utils/mixed';
import styles from './styles';

interface MovieDetailViewProps {
  loading: boolean;
  data: IMovieDetail | null;
  error?: any;
  onPressBack?: any;
  onRefresh?: any;
}

const MovieDetailView: React.FC<MovieDetailViewProps> = ({
  loading,
  data,
  onPressBack,
  onRefresh,
}) => {
  function renderGenreItem({item}: {item: IGenre}) {
    return <Button label={item.name} style={styles.genre} />;
  }

  return (
    <Layout>
      <Button label="Back" style={styles.backBtn} onPress={onPressBack} />
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
        <ImageBackground
          source={{uri: getImageUri({path: data?.backdropPath, size: 'original'})}}
          style={styles.backdrop}>
          <View style={styles.overlay} />
          <View style={styles.posterWrapper}>
            <Image source={{uri: getImageUri({path: data?.posterPath})}} style={styles.poster} />
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <Typography style={styles.movieTitle}>{data?.title}</Typography>
          <Typography style={styles.movieReleaseDate}>
            {moment(data?.releaseDate).format('LL')}
          </Typography>
          <View style={styles.actions}>
            <Button label="Save" style={styles.actionBtn} />
            <View style={styles.actionDivider} />
            <Button label="Want" variant="primary" style={styles.actionBtn} />
          </View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <View style={styles.metaInfo}>
                <View style={styles.voteWrapper}>
                  <Typography variant="paragraph">{data?.voteAverage}</Typography>
                </View>
                <View style={styles.metaItemWrapper}>
                  <Typography variant="paragraph" style={styles.metaItemCount}>
                    1724
                  </Typography>
                  <Typography variant="caption" style={styles.metaItemLabel}>
                    Want
                  </Typography>
                </View>
                <View style={styles.metaItemWrapper}>
                  <Typography variant="paragraph" style={styles.metaItemCount}>
                    712
                  </Typography>
                  <Typography variant="caption" style={styles.metaItemLabel}>
                    Watched
                  </Typography>
                </View>
                <View style={styles.metaItemWrapper}>
                  <Typography variant="paragraph" style={styles.metaItemCount}>
                    81
                  </Typography>
                  <Typography variant="caption" style={styles.metaItemLabel}>
                    Review
                  </Typography>
                </View>
              </View>
              <View style={styles.detail}>
                <Typography variant="paragraph" style={styles.sectionTitle}>
                  Synopsis
                </Typography>
                <Typography variant="paragraph">{data?.overview}</Typography>
                <Typography variant="paragraph" style={styles.sectionTitle}>
                  Genres
                </Typography>
                <FlatList
                  data={data?.genres || []}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderGenreItem}
                  horizontal
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default MovieDetailView;
