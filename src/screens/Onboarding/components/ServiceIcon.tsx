import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, ViewStyle, Easing, Dimensions} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

const {width} = Dimensions.get('window');

interface ServiceIconProps {
  Icon?: any;
  vVal?: number;
  duration?: number;
  style?: ViewStyle;
  animated?: any;
  isGrooming?: boolean;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({
  Icon,
  vVal,
  duration,
  style,
  animated,
  isGrooming,
}) => {
  const translateX = !isGrooming
    ? animated?.interpolate?.({
        inputRange: [0, width * 3],
        outputRange: [0, -width * 3 - getScalableSize.w(80)],
        extrapolate: 'extend',
      })
    : animated?.interpolate?.({
        inputRange: [0, width],
        outputRange: [0, -width + getScalableSize.w(120)],
        extrapolate: 'extend',
      });

  const scale = isGrooming
    ? animated?.interpolate?.({
        inputRange: [0, width],
        outputRange: [1, 1.31],
        extrapolate: 'clamp',
      })
    : 1;

  const [verticalVal] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(verticalVal, {
          toValue: vVal || 20,
          duration: duration || 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
        Animated.timing(verticalVal, {
          toValue: 0,
          duration: duration || 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {transform: [{translateY: verticalVal}, {translateX}, {scale}]},
        style,
      ]}>
      <Icon style={styles.icon} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: getScalableSize.w(64),
    height: getScalableSize.w(64),
    borderRadius: getScalableSize.w(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    zIndex: 1,
    ...theme.effects.roundIconShadow,
  },
  icon: {
    width: getScalableSize.w(20),
    height: getScalableSize.w(20),
  },
});

export default ServiceIcon;
