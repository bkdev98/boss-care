import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';

import {ISpecialist} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import {Card} from '@components/Card';

interface NearbyListProps {
  data: ISpecialist[];
  style?: ViewStyle;
}

const NearbyList: React.FC<NearbyListProps> = ({data, style}) => {
  function renderNearbyItem({item}: {item: ISpecialist}) {
    return <Card data={item} />;
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
  wrapper: {},
  container: {
    paddingHorizontal: getScalableSize.w(20),
  },
  separator: {
    width: getScalableSize.w(16),
  },
});

export default NearbyList;
