import {StyleSheet, Dimensions} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
const {width} = Dimensions.get('window');

const CARD_WIDTH = width - getScalableSize.w(20 * 2);
export const CARD_HEIGHT = (CARD_WIDTH * 16) / 10;

export default StyleSheet.create({
  wrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: getScalableSize.h(16),
    resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: getScalableSize.w(20),
    marginVertical: getScalableSize.h(20),
  },
  movieTitle: {
    color: theme.colors.text_contrast,
    fontSize: getScalableSize.f(22),
    lineHeight: getScalableSize.h(28),
    fontWeight: '700',
    letterSpacing: 0.2,
    shadowColor: theme.colors.text_paragraph,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 1,
    elevation: 2,
  },
  movieReleaseDate: {
    color: theme.colors.text_caption,
    fontSize: getScalableSize.f(16),
    fontWeight: '700',
    letterSpacing: 0.2,
    shadowColor: theme.colors.text_paragraph,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    elevation: 2,
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: getScalableSize.h(20),
    marginHorizontal: getScalableSize.w(10),
  },
  footerBtn: {
    marginRight: getScalableSize.w(10),
  },
});
