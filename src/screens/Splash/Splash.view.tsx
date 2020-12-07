import React, {useEffect} from 'react';
import {StatusBar, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Layout from '@components/Layout';
import theme from '@theme';
import styles from './styles';

import {PawIcon} from '@components/Icon';
import getScalableSize from '@utils/getScalableSize';

interface SplashViewProps {
  onFinish?: any;
}

const PAWS = [
  {
    id: 1,
    left: getScalableSize.w(127),
    top: getScalableSize.w(519),
    rotate: '-20.71 deg',
  },
  {
    id: 2,
    left: getScalableSize.w(185),
    top: getScalableSize.w(494),
    rotate: '-17.83 deg',
  },
  {
    id: 3,
    left: getScalableSize.w(169),
    top: getScalableSize.w(422),
    rotate: '-17.83 deg',
  },
  {
    id: 4,
    left: getScalableSize.w(218),
    top: getScalableSize.w(388),
    rotate: '-28.13 deg',
  },
  {
    id: 5,
    left: getScalableSize.w(167),
    top: getScalableSize.w(336),
    rotate: '-58.99 deg',
  },
  {
    id: 6,
    left: getScalableSize.w(195),
    top: getScalableSize.w(283),
    rotate: '-68.5 deg',
  },
];

const STEP_DURATION = 400;

const SplashView: React.FC<SplashViewProps> = ({onFinish}) => {
  const ANIMATED_PAWS = PAWS.map((item) => ({...item, animatedValue: new Animated.Value(0)}));

  useEffect(() => {
    animatePaws();
  }, []);

  function animatePaws() {
    const animations = ANIMATED_PAWS.map((item) => {
      return Animated.timing(item.animatedValue, {
        toValue: 1,
        duration: STEP_DURATION,
        useNativeDriver: true,
      });
    });
    Animated.sequence(animations).start(onFinish);
  }

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={theme.colors.blueViolet}
        start={{x: 0, y: 0}}
        end={{x: 0.9, y: 0.5}}
        style={styles.linearGradient}>
        {ANIMATED_PAWS.map((paw) => (
          <Animated.View
            key={paw.id}
            style={[
              styles.paw,
              {
                top: paw.top,
                left: paw.left,
                transform: [{rotate: paw.rotate}],
                opacity: paw.animatedValue,
              },
            ]}>
            <PawIcon />
          </Animated.View>
        ))}
      </LinearGradient>
    </Layout>
  );
};

export default SplashView;
