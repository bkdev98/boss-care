import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  wrapper: {
    height: getScalableSize.w(18),
    width: getScalableSize.w(18),
    borderRadius: getScalableSize.w(7),
    borderWidth: getScalableSize.w(2),
    borderColor: '#e6e6f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderWidth: 0,
    backgroundColor: theme.colors.violet,
  },
});
