import React from 'react';
import {View, Image, StyleSheet, ViewStyle, ImageStyle} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

import DefaultUserIcon from '@components/Icon/DefaultUser';
import DefaultBossIcon from '@components/Icon/DefaultBoss';

interface AvatarProps {
  variant?: 'circleFull' | 'smoothFull' | 'smoothMedium' | 'smoothSmall';
  wrapperStyle?: ViewStyle;
  style?: ImageStyle;
  uri?: any;
  boss?: boolean;
  extra?: JSX.Element;
}

const Avatar: React.FC<AvatarProps> = ({
  variant = 'circleFull',
  wrapperStyle,
  style,
  uri,
  boss,
  extra,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, styles[variant], wrapperStyle]}>
      {uri ? (
        <Image style={[styles.base, styles[variant], style]} {...props} source={{uri}} />
      ) : boss ? (
        <DefaultBossIcon />
      ) : (
        <DefaultUserIcon />
      )}
      {extra}
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
  smoothFull: {
    width: getScalableSize.w(88),
    height: getScalableSize.w(88),
    borderRadius: getScalableSize.w(18),
  },
  smoothMedium: {
    width: getScalableSize.w(72),
    height: getScalableSize.w(72),
    borderRadius: getScalableSize.w(18),
  },
  smoothSmall: {},
});

export default Avatar;
