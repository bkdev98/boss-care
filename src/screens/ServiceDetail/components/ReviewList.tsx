import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';

import {IReview} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import {ReviewCard} from '@components/Card';

interface ReviewListProps {
  data: IReview[];
  style?: ViewStyle;
}

const ReviewList: React.FC<ReviewListProps> = ({data, style}) => {
  function renderNearbyItem({item}: {item: IReview}) {
    return <ReviewCard data={item} />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={renderNearbyItem}
      style={[styles.wrapper, style]}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'visible',
  },
  container: {
    paddingHorizontal: getScalableSize.w(20),
  },
  separator: {
    width: getScalableSize.w(16),
  },
});

export default ReviewList;
