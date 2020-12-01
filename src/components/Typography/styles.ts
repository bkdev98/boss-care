import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  default: {
    color: theme.colors.text_paragraph,
  },
  paragraph: {
    color: theme.colors.text_paragraph,
    fontWeight: '700',
    fontSize: getScalableSize.f(14),
    letterSpacing: 0.2,
  },
  header: {},
  title: {
    color: theme.colors.text_title,
    fontSize: getScalableSize.f(28),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  subTitle: {
    color: theme.colors.text_subTitle,
    fontSize: getScalableSize.f(28),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  caption: {
    fontSize: getScalableSize.f(12),
    fontWeight: '600',
    letterSpacing: 0.2,
    color: theme.colors.text_caption,
  },
  buttonLabel: {
    color: theme.colors.text_paragraph,
    fontSize: getScalableSize.f(14),
    fontWeight: '700',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: getScalableSize.f(12),
    fontWeight: '500',
    letterSpacing: 0.2,
    color: theme.colors.text_caption,
  },
});
