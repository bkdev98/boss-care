import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

export default StyleSheet.create({
  backBtn: {
    alignSelf: 'flex-start',
    marginHorizontal: getScalableSize.w(20),
    marginVertical: getScalableSize.h(20),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(40),
    paddingBottom: getScalableSize.h(100),
  },
  button: {
    width: getScalableSize.w(250),
    marginBottom: getScalableSize.h(10),
  },
  credit: {
    marginTop: getScalableSize.h(40),
    marginBottom: getScalableSize.h(10),
  },
  logoutLabel: {
    color: theme.colors.text_danger,
  },
});
