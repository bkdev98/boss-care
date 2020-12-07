import React from 'react';
import {View} from 'react-native';

import styles from './styles';

interface SliderPaginationProps {
  curPage?: number;
  maxPage?: number;
}

const SliderPagination: React.FC<SliderPaginationProps> = ({curPage = 1, maxPage = 3}) => {
  return (
    <View style={styles.wrapper}>
      {Array.from({length: maxPage}, (_, k) => k + 1).map((item) => {
        return <View key={item} style={[styles.dot, curPage === item && styles.activeDot]} />;
      })}
    </View>
  );
};

export default SliderPagination;
