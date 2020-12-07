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
  ghost: {},
  defaultPressed: {
    backgroundColor: theme.colors.background_neutral_2,
  },
  primaryPressed: {
    backgroundColor: theme.colors.darkBlue,
  },
  ghostPressed: {
    backgroundColor: theme.colors.background_neutral_1,
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
  smallLabel: {
    fontSize: getScalableSize.f(13),
    fontFamily: theme.fonts.semiBold,
  },
});
