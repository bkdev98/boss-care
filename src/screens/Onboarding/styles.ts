import {StyleSheet, Dimensions} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: getScalableSize.h(44),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: getScalableSize.w(15),
  },
  slideWrapper: {
    height: width,
  },
  slideScroll: {
    flex: 1,
    flexGrow: 1,
  },
  slideItem: {
    width,
    height: width,
    overflow: 'visible',
    alignItems: 'center',
  },
  backgroundLine: {
    position: 'absolute',
    top: getScalableSize.h(82),
    left: getScalableSize.w(32),
  },
  wrapper: {
    flex: 1,
  },
  footerWrapper: {
    paddingHorizontal: getScalableSize.w(20),
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  button: {
    width: getScalableSize.w(260),
    alignSelf: 'center',
  },
  rating: {
    position: 'absolute',
    top: getScalableSize.h(17),
    height: getScalableSize.h(46),
    width: getScalableSize.w(180),
    borderRadius: getScalableSize.h(16),
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    ...theme.effects.outlinePlahaShadow,
  },
  ratingStar: {
    marginHorizontal: getScalableSize.w(3),
  },
});
