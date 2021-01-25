import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import StarIcon from '@components/Icon/Star';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

interface RatingProps {
  rating?: number;
  totalReview?: number;
  style?: ViewStyle;
  starStyle?: ViewStyle;
}

const MAX = 5;

const Rating: React.FC<RatingProps> = ({rating = 5, totalReview, style, starStyle}) => {
  function renderStars() {
    if (rating >= MAX) {
      return Array.from({length: rating}).map(() => <StarIcon style={[styles.star, starStyle]} />);
    }

    let stars = Array.from({length: Math.floor(rating)}).map(() => (
      <StarIcon style={[styles.star, starStyle]} />
    ));

    if (Math.round(rating) > Math.floor(rating)) {
      stars = [...stars, <StarIcon isHalf />];
      if (MAX > Math.round(rating) + 1) {
        stars = [
          ...stars,
          ...Array.from({length: MAX - Math.floor(rating - 1)}).map(() => (
            <StarIcon isEmpty style={[styles.star, starStyle]} />
          )),
        ];
      }
    } else {
      stars = [
        ...stars,
        ...Array.from({length: MAX - Math.floor(rating)}).map(() => (
          <StarIcon isEmpty style={[styles.star, starStyle]} />
        )),
      ];
    }

    return stars;
  }

  return (
    <View style={[styles.wrapper, style]}>
      {renderStars()}
      {typeof totalReview === 'number' && (
        <Typography variant="caption" style={styles.totalReview}>
          {totalReview} Reviews
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalReview: {
    color: theme.colors.gray,
    marginLeft: getScalableSize.w(10),
  },
  star: {
    marginHorizontal: getScalableSize.w(1),
  },
});

export default Rating;
