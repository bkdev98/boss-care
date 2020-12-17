import React from 'react';
import {View, Image, StyleSheet, ViewStyle, ImageStyle} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

import DefaultUserIcon from '@components/Icon/DefaultUser';

interface AvatarProps {
  variant?: 'circleFull' | 'smoothFull' | 'smoothMedium' | 'smoothSmall';
  wrapperStyle?: ViewStyle;
  style?: ImageStyle;
  uri?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  variant = 'circleFull',
  wrapperStyle,
  style,
  uri,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, styles[variant], wrapperStyle]}>
      {uri ? (
        <Image style={[styles.base, styles[variant], style]} {...props} source={{uri}} />
      ) : (
        <DefaultUserIcon />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    backgroundColor: theme.colors.gray,
    resizeMode: 'cover',
  },
  circleFull: {
    width: getScalableSize.w(112),
    height: getScalableSize.w(112),
    borderRadius: getScalableSize.w(112 / 2),
  },
  smoothFull: {},
  smoothMedium: {},
  smoothSmall: {},
});

export default Avatar;
