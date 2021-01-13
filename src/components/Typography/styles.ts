import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  default: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
  },
  h1: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: getScalableSize.f(32),
  },
  h2: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: getScalableSize.f(24),
  },
  h3: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: getScalableSize.f(18),
  },
  h4: {
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    fontSize: getScalableSize.f(16),
  },
  h5: {
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
    fontSize: getScalableSize.f(14),
  },
  h6: {
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
    fontSize: getScalableSize.f(13),
  },
  body1: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: getScalableSize.f(16),
    lineHeight: getScalableSize.h(24),
    letterSpacing: 0.2,
  },
  body2: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: getScalableSize.f(12),
    lineHeight: getScalableSize.h(18),
    letterSpacing: 0.2,
  },
  body3: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    fontSize: getScalableSize.f(14),
  },
  button: {
    fontFamily: theme.fonts.bold,
    fontSize: getScalableSize.f(16),
    textAlign: 'center',
  },
  paragraph: {
    color: theme.colors.black,
    fontSize: getScalableSize.f(14),
    letterSpacing: 0.2,
  },
  header: {},
  title: {
    color: theme.colors.text_title,
    fontSize: getScalableSize.f(28),
    fontFamily: theme.fonts.bold,
    letterSpacing: 0.2,
  },
  subTitle: {
    color: theme.colors.text_subTitle,
    fontSize: getScalableSize.f(28),
    fontFamily: theme.fonts.bold,
    letterSpacing: 0.2,
  },
  caption: {
    fontSize: getScalableSize.f(11),
    fontFamily: theme.fonts.regular,
    letterSpacing: 0.4,
    color: theme.colors.black,
  },
  buttonLabel: {
    color: theme.colors.text_paragraph,
    fontSize: getScalableSize.f(14),
    fontFamily: theme.fonts.bold,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: getScalableSize.f(16),
    lineHeight: getScalableSize.h(20),
    fontFamily: theme.fonts.semiBold,
    letterSpacing: 0.2,
    color: theme.colors.gray,
  },
});
