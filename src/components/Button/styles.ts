import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  button: {
    height: getScalableSize.h(38),
    borderRadius: getScalableSize.h(38 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: getScalableSize.w(16),
  },
  default: {
    backgroundColor: theme.colors.background_neutral_1,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  ghost: {},
  defaultPressed: {
    backgroundColor: theme.colors.background_neutral_2,
  },
  primaryPressed: {
    backgroundColor: '#2674D2',
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
});
