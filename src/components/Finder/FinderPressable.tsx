import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

interface FinderPressableProps {
  renderIcon?: JSX.Element;
  title?: string;
  description?: string;
  style?: ViewStyle;
}

const FinderPressable: React.FC<FinderPressableProps> = ({
  renderIcon,
  title,
  description,
  style,
}) => {
  return (
    <Pressable style={({pressed}) => [styles.wrapper, style, pressed && styles.pressed]}>
      {renderIcon}
      <Typography variant="h5" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="body2" style={styles.desc}>
        {description}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(187, 195, 206, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    height: getScalableSize.h(38),
    borderRadius: getScalableSize.h(10),
    paddingHorizontal: getScalableSize.w(12),
  },
  pressed: {
    backgroundColor: 'rgba(187, 195, 206, 0.30)',
  },
  desc: {
    marginLeft: getScalableSize.w(5),
    color: theme.colors.gray,
    fontSize: getScalableSize.f(14),
  },
  title: {
    marginLeft: getScalableSize.w(8),
  },
});

export default FinderPressable;
