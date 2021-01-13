import React, {useRef, useState} from 'react';
import {StatusBar, Animated, ScrollView, Dimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AirbnbRating} from 'react-native-ratings';

import Layout from '@components/Layout';
import Button from '@components/Button';
import theme from '@theme';
import {
  BoardingIcon,
  DateIcon,
  DogWalkingIcon,
  GroomingIcon,
  TaxiIcon,
  VetIcon,
} from '@components/Icon';
import getScalableSize from '@utils/getScalableSize';
import SliderPagination from '@components/SliderPagination';

import BackgroundLine from './components/BackgroundLine';
import DogOne from './components/DogOne';
import DogTwo from './components/DogTwo';
import DogThree from './components/DogThree';
import SlideMeta from './components/SlideMeta';
import ServiceIcon from './components/ServiceIcon';
import styles from './styles';

const {width} = Dimensions.get('window');

interface OnboardingViewProps {
  onFinish?: any;
  onLogin?: any;
}

const SLIDES = [
  {
    id: 1,
    title: 'Welcome to Boss Care',
    description: 'All types of services for your pet in one place, instantly searchable.',
    image: (
      <DogOne style={{marginTop: getScalableSize.h(29), marginLeft: -getScalableSize.w(30)}} />
    ),
  },
  {
    id: 2,
    title: 'Proven experts',
    description: 'We interview every specialist before they get to work.',
    image: <DogTwo style={{marginTop: getScalableSize.w(72)}} />,
  },
  {
    id: 3,
    title: 'Reliable reviews',
    description: 'A review can be left only by a user who used the service.',
    image: <DogThree style={{marginTop: getScalableSize.w(60)}} />,
  },
];

const SERVICE_ICONS = [
  {
    id: 1,
    Icon: VetIcon,
    duration: 1100,
    vVal: 14,
    style: {
      left: -getScalableSize.w(3),
      top: getScalableSize.h(25),
    },
  },
  {
    id: 2,
    Icon: BoardingIcon,
    duration: 1400,
    vVal: 6,
    style: {
      left: getScalableSize.w(40),
      top: getScalableSize.h(120),
    },
  },
  {
    id: 3,
    Icon: TaxiIcon,
    duration: 1500,
    vVal: 10,
    style: {
      left: getScalableSize.w(14),
      top: getScalableSize.h(212),
    },
  },
  {
    id: 4,
    Icon: GroomingIcon,
    duration: 1200,
    vVal: 13,
    style: {
      right: getScalableSize.w(25),
      top: getScalableSize.h(10),
    },
  },
  {
    id: 5,
    Icon: DateIcon,
    duration: 1000,
    vVal: 9,
    style: {
      right: getScalableSize.w(57.7),
      top: getScalableSize.h(102),
    },
  },
  {
    id: 6,
    Icon: DogWalkingIcon,
    duration: 1300,
    vVal: 7,
    style: {
      right: getScalableSize.w(27.7),
      top: getScalableSize.h(192),
    },
  },
];

const OnboardingView: React.FC<OnboardingViewProps> = ({onFinish, onLogin}) => {
  const slideRef = useRef<ScrollView>(null);
  const [step, setStep] = useState(1);
  const bgLineAnimated = useRef(new Animated.Value(0));
  const insets = useSafeAreaInsets();

  function handleNext() {
    if (step !== SLIDES.length) {
      setStep(step + 1);
      slideRef?.current?.scrollTo({x: step * width, y: 0, animated: true});
    } else {
      onFinish();
    }
  }

  const bgLineTranslate = bgLineAnimated.current.interpolate({
    inputRange: [0, width * 3],
    outputRange: [0, -width * 3 + getScalableSize.w(150)],
    extrapolate: 'extend',
  });

  function renderServiceIcons() {
    return SERVICE_ICONS.map((item) => (
      <ServiceIcon
        key={item.id}
        Icon={item.Icon}
        duration={item.duration}
        vVal={item.vVal}
        style={item.style}
        animated={bgLineAnimated.current}
        isGrooming={item.id === 4}
      />
    ));
  }

  const ratingTranslate = bgLineAnimated.current.interpolate({
    inputRange: [width, width * 2],
    outputRange: [width * 2, width - getScalableSize.w(180 + 20)],
    extrapolate: 'extend',
  });

  function renderRating() {
    return (
      <Animated.View style={[styles.rating, {transform: [{translateX: ratingTranslate}]}]}>
        <AirbnbRating
          showRating={false}
          size={getScalableSize.w(26)}
          defaultRating={5}
          selectedColor={theme.colors.yellow}
          starStyle={styles.ratingStar}
        />
      </Animated.View>
    );
  }

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={theme.colors.gradientBg}
        style={[styles.wrapper, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <View style={styles.header}>
          <Button label="Sign In" variant="ghost" size="small" onPress={onLogin} />
        </View>
        <View style={styles.slideWrapper}>
          <Animated.View
            style={[styles.backgroundLine, {transform: [{translateX: bgLineTranslate}]}]}>
            <BackgroundLine />
          </Animated.View>
          {renderServiceIcons()}
          {renderRating()}
          <Animated.ScrollView
            ref={slideRef}
            style={styles.slideScroll}
            decelerationRate={0}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            scrollEventThrottle={32}
            pagingEnabled
            onMomentumScrollEnd={({nativeEvent}) => {
              const index = Math.round(nativeEvent.contentOffset.x / width) + 1;
              if (index !== step) {
                setStep(index);
              }
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: bgLineAnimated.current}}}],
              {
                useNativeDriver: true,
              },
            )}
            horizontal>
            {SLIDES.map((slide) => (
              <View key={slide.id} style={styles.slideItem}>
                {slide.image}
              </View>
            ))}
          </Animated.ScrollView>
          <SliderPagination maxPage={SLIDES.length} curPage={step} />
        </View>
        <View style={styles.footerWrapper}>
          <SlideMeta slides={SLIDES} activeIndex={step - 1} />
          <Button
            variant="primary"
            label={step !== SLIDES.length ? 'Next' : 'Get started'}
            style={styles.button}
            onPress={handleNext}
          />
        </View>
      </LinearGradient>
    </Layout>
  );
};

export default OnboardingView;
