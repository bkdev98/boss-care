import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  default: {
    fontSize: getScalableSize.f(16),
    textAlignVertical: 'center',
    height: getScalableSize.h(34),
    color: theme.colors.black,
    marginVertical: getScalableSize.h(5),
    fontFamily: theme.fonts.regular,
    letterSpacing: 0.1,
    borderBottomWidth: getScalableSize.h(1),
    borderBottomColor: theme.colors.background_neutral_2,
  },
  wrapper: {
    borderRadius: getScalableSize.w(20),
    paddingHorizontal: getScalableSize.w(10),
    paddingTop: getScalableSize.h(0),
    paddingBottom: getScalableSize.h(8),
  },
  rightIconWrapper: {
    position: 'absolute',
    top: getScalableSize.h(32),
    right: getScalableSize.w(10),
    justifyContent: 'center',
    alignItems: 'center',
    padding: getScalableSize.w(6),
    borderRadius: 20,
    zIndex: 1,
  },
  helper: {
    height: 0,
    color: theme.colors.danger,
  },
  helperShow: {
    height: 'auto',
  },
});
