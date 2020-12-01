import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  paw: {
    width: getScalableSize.w(36),
    height: getScalableSize.w(36),
    position: 'absolute',
  },
});
