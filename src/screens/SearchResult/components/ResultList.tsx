import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ISpecialist} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import {Card} from '@components/Card';

interface ResultListProps {
  data: ISpecialist[];
}

const ResultList: React.FC<ResultListProps> = ({data}) => {
  function renderResultItem({item}: {item: ISpecialist}) {
    return <Card data={item} />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderResultItem}
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    paddingTop: getScalableSize.h(70),
    paddingHorizontal: getScalableSize.w(8),
    paddingBottom: getScalableSize.h(8),
  },
  separator: {
    height: getScalableSize.h(8),
  },
});

export default ResultList;
