import React from 'react';
import {View, ImageBackground, ViewStyle} from 'react-native';
import moment from 'moment';

import {IMovie} from '@entities/movie';
import {getImageUri} from '@utils/mixed';
import Typography from '@components/Typography';
import TouchableScale from '@components/TouchableScale';
import Button from '@components/Button';
import styles from './styles';

interface MovieItemProps {
  data: IMovie;
  style: ViewStyle;
  onShare?: any;
  onWant?: any;
  onPress?: any;
}

const MovieItem: React.FC<MovieItemProps> = ({data, style, onShare, onWant, onPress}) => {
  return (
    <TouchableScale activeScale={0.95} tension={30} onPress={onPress}>
      <ImageBackground
        source={{uri: getImageUri({path: data.posterPath})}}
        style={[styles.wrapper, style]}>
        <View style={styles.header}>
          <Typography style={styles.movieTitle}>{data.title}</Typography>
          <Typography style={styles.movieReleaseDate}>
            {moment(data.releaseDate).format('LL')}
          </Typography>
        </View>
        <View style={styles.footer}>
          <Button label="Share" variant="secondary" style={styles.footerBtn} onPress={onShare} />
          <Button label="Want" variant="secondary" style={styles.footerBtn} onPress={onWant} />
        </View>
      </ImageBackground>
    </TouchableScale>
  );
};

export default MovieItem;
