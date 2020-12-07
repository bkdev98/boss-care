import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: getScalableSize.w(8),
    height: getScalableSize.w(8),
    borderRadius: getScalableSize.w(8 / 2),
    backgroundColor: '#E6E7F8',
    marginHorizontal: getScalableSize.w(5),
  },
  activeDot: {
    backgroundColor: theme.colors.orange,
    width: getScalableSize.w(22),
  },
});
