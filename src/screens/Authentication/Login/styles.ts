import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  logo: {
    textAlign: 'center',
    marginVertical: getScalableSize.h(40),
  },
  formWrapper: {
    marginHorizontal: getScalableSize.w(20),
  },
  formInput: {
    marginBottom: getScalableSize.h(20),
  },
  formBtn: {
    marginBottom: getScalableSize.h(20),
  },
});
