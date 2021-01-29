import React from 'react';
import {FlatList, Pressable, StyleSheet, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

interface TimeStripProps {
  times?: string[];
  style?: ViewStyle;
  onSelect?: (time: string) => void;
  selected?: string | null;
}

const TimeStrip: React.FC<TimeStripProps> = ({times, style, onSelect, selected}) => {
  function renderTimeItem({item}: {item: string}) {
    const isSelected = selected === item;
    return (
      <Pressable
        onPress={() => onSelect?.(item)}
        style={({pressed}) => [
          styles.item,
          pressed && styles.itemPressed,
          isSelected && styles.itemSelected,
        ]}>
        <Typography
          variant="h5"
          style={{color: isSelected ? theme.colors.text_contrast : theme.colors.black}}>
          {item}
        </Typography>
      </Pressable>
    );
  }

  return (
    <FlatList
      style={[styles.wrapper, style]}
      contentContainerStyle={styles.container}
      data={times}
      keyExtractor={(item) => item}
      renderItem={renderTimeItem}
      extraData={selected}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    paddingHorizontal: getScalableSize.w(16),
  },
  item: {
    height: getScalableSize.h(28),
    borderRadius: getScalableSize.h(28 / 2),
    marginRight: getScalableSize.w(8),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(14),
    backgroundColor: theme.colors.lightGray2,
  },
  itemSelected: {
    backgroundColor: theme.colors.violet,
  },
  itemPressed: {
    backgroundColor: theme.colors.lightGray,
  },
});

export default TimeStrip;
