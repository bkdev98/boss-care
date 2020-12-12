import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  welcome: {
    marginTop: getScalableSize.h(84),
    marginBottom: getScalableSize.h(54),
    fontSize: getScalableSize.f(44),
    lineHeight: getScalableSize.h(55),
    color: theme.colors.white,
  },
  container: {
    marginHorizontal: getScalableSize.w(40),
  },
  facebookBtn: {
    marginBottom: getScalableSize.h(24),
  },
  googleBtn: {
    marginBottom: getScalableSize.h(48),
  },
  emailBtn: {
    marginBottom: getScalableSize.h(80),
  },
});
