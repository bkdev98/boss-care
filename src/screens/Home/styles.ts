import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  heading: {
    marginVertical: getScalableSize.h(20),
  },
  listContainer: {
    paddingHorizontal: getScalableSize.w(20),
  },
  listItem: {
    marginBottom: getScalableSize.h(20),
  },
  settingBtn: {
    position: 'absolute',
    top: getScalableSize.h(0),
    right: getScalableSize.w(0),
  },
});
