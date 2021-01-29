import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.lightGray,
  },
  header: {
    backgroundColor: theme.colors.background,
    zIndex: 1,
  },
  headerWrapper: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    paddingVertical: getScalableSize.h(24),
    borderBottomLeftRadius: getScalableSize.w(34),
    borderBottomRightRadius: getScalableSize.w(34),
    paddingHorizontal: getScalableSize.w(20),
    ...theme.effects.plahaShadow,
  },
});
