import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  large: {
    height: getScalableSize.h(46),
    borderRadius: getScalableSize.h(46 / 2),
    paddingHorizontal: getScalableSize.w(16),
  },
  small: {
    height: getScalableSize.h(26),
    borderRadius: getScalableSize.h(26 / 2),
    paddingHorizontal: getScalableSize.w(8),
  },
  default: {
    backgroundColor: theme.colors.background_neutral_1,
  },
  primary: {
    backgroundColor: theme.colors.violet,
  },
  white: {
    backgroundColor: theme.colors.white,
  },
  ghost: {},
  ghostWhite: {},
  ghostOutline: {
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  defaultPressed: {
    backgroundColor: theme.colors.background_neutral_2,
  },
  primaryPressed: {
    backgroundColor: theme.colors.darkBlue,
  },
  whitePressed: {
    backgroundColor: theme.colors.background_neutral_2,
  },
  ghostWhitePressed: {
    opacity: 0.8,
  },
  ghostPressed: {
    backgroundColor: theme.colors.background_neutral_1,
  },
  ghostOutlinePressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  disabled: {opacity: 0.3},
  secondary: {
    backgroundColor: theme.colors.text_paragraph,
  },
  secondaryPressed: {
    backgroundColor: theme.colors.text_title,
  },
  secondaryLabel: {
    color: theme.colors.text_contrast,
  },
  primaryLabel: {
    color: theme.colors.text_contrast,
  },
  ghostLabel: {
    color: theme.colors.violet,
  },
  ghostOutlineLabel: {
    color: theme.colors.white,
  },
  ghostWhiteLabel: {
    color: theme.colors.white,
  },
  whiteLabel: {
    color: theme.colors.violet,
  },
  smallLabel: {
    fontSize: getScalableSize.f(13),
    fontFamily: theme.fonts.semiBold,
  },
  leftIcon: {
    marginRight: getScalableSize.w(16),
  },
  rightIcon: {
    marginLeft: getScalableSize.w(16),
  },
  leftIconSmall: {
    marginRight: getScalableSize.w(4),
  },
  rightIconSmall: {
    marginLeft: getScalableSize.w(4),
  },
});
