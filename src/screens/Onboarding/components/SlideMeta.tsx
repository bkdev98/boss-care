import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, View} from 'react-native';

import Typography from '@components/Typography';
import getScalableSize from '@utils/getScalableSize';
import {usePrevious} from '@utils/mixed';

interface SlideMetaProps {
  slides: any[];
  activeIndex: number;
}

const SlideMeta: React.FC<SlideMetaProps> = ({slides, activeIndex}) => {
  const [animatedSlides] = useState(
    slides.map((_, index) => (index === 0 ? new Animated.Value(1) : new Animated.Value(0))),
  );

  const prevActiveIndex = usePrevious(activeIndex);

  useEffect(() => {
    if (prevActiveIndex !== undefined) {
      Animated.sequence([
        Animated.timing(animatedSlides[prevActiveIndex], {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSlides[activeIndex], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [activeIndex, prevActiveIndex]);

  return (
    <View style={styles.wrapper}>
      {slides.map((slide, index) => {
        const opacity = animatedSlides[index];
        return (
          <Animated.View key={slide.id} style={[styles.slide, {opacity}]}>
            <Typography variant="h2" style={styles.title}>
              {slide.title}
            </Typography>
            <Typography variant="body1" style={styles.description}>
              {slide.description}
            </Typography>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: getScalableSize.h(92),
    marginBottom: getScalableSize.h(48),
  },
  title: {
    textAlign: 'center',
    marginBottom: getScalableSize.h(12),
  },
  description: {
    textAlign: 'center',
  },
  slide: {
    alignItems: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default SlideMeta;
