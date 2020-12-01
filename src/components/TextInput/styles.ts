import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  default: {
    fontSize: getScalableSize.f(18),
    lineHeight: getScalableSize.h(25),
    color: theme.colors.text_title,
    marginVertical: getScalableSize.h(5),
    paddingBottom: getScalableSize.h(5),
    fontWeight: '700',
    letterSpacing: 1,
    borderBottomWidth: getScalableSize.h(1),
    borderBottomColor: theme.colors.background_neutral_2,
  },
  wrapper: {},
  helper: {
    height: 0,
    color: theme.colors.danger,
  },
  helperShow: {
    height: 'auto',
  },
});
