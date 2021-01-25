import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
  ViewStyle,
} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import Typography from '@components/Typography';

interface SegmentedControlProps {
  style?: ViewStyle;
  size?: 'small' | 'large';
  values: string[];
  selectedIndex: number;
  onChange: (selectedSegmentIndex: number) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  size = 'small',
  values,
  selectedIndex,
  onChange,
  style,
}) => {
  const [indicatorWidth, setIndicatorWidth] = useState<number | null>(null);
  const [animated] = useState(new Animated.Value(0));

  const height = size === 'small' ? getScalableSize.h(32) : getScalableSize.h(38);
  const borderRadius = size === 'small' ? getScalableSize.h(32 / 2) : getScalableSize.h(38);

  function handleSegmentLayout(event: LayoutChangeEvent) {
    setIndicatorWidth(event.nativeEvent.layout.width);
  }

  useEffect(() => {
    typeof selectedIndex === 'number' &&
      Animated.spring(animated, {
        toValue: selectedIndex,
        useNativeDriver: true,
      }).start();
  }, [selectedIndex]);

  const translateX = animated.interpolate({
    inputRange: [0, values?.length - 1],
    outputRange: [0, (values?.length - 1) * (indicatorWidth || 0)],
  });

  return (
    <View style={[styles.wrapper, {height, borderRadius}, style]}>
      {indicatorWidth && (
        <Animated.View
          style={[
            styles.indicator,
            {
              width: indicatorWidth,
              height: height - getScalableSize.h(2),
              borderRadius,
              transform: [{translateX}],
            },
          ]}
        />
      )}
      {values?.map((value, index) => (
        <TouchableOpacity
          key={value}
          style={[styles.segment, {height, borderRadius}]}
          onLayout={handleSegmentLayout}
          onPress={() => onChange?.(index)}>
          <Typography
            variant="h4"
            style={[
              styles.label,
              {
                color: index === selectedIndex ? theme.colors.text_contrast : theme.colors.black,
              },
            ]}>
            {value}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: getScalableSize.h(1),
    borderColor: theme.colors.lightGray2,
    flexDirection: 'row',
    overflow: 'visible',
  },
  segment: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(5),
  },
  indicator: {
    position: 'absolute',
    backgroundColor: theme.colors.violet,
    zIndex: -1,
    ...theme.effects.blueShadow,
  },
  label: {
    fontFamily: theme.fonts.semiBold,
  },
});

export default SegmentedControl;
