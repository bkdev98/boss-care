import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getScalableSize.w(56),
    height: getScalableSize.w(56),
    borderRadius: getScalableSize.w(56 / 2),
  },
  pressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  disabled: {
    opacity: 0.4,
  },
});
