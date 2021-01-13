import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  container: {
    height: getScalableSize.h(34),
    borderBottomWidth: getScalableSize.h(1),
    borderBottomColor: theme.colors.background_neutral_2,
    marginVertical: getScalableSize.h(5),
    justifyContent: 'center',
  },
  active: {
    borderBottomWidth: getScalableSize.h(2),
    borderBottomColor: theme.colors.violet,
  },
  default: {
    fontSize: getScalableSize.f(16),
    textAlignVertical: 'center',
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    letterSpacing: 0.1,
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
  optionItem: {
    paddingHorizontal: getScalableSize.w(20),
    height: getScalableSize.h(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionItemPressed: {
    backgroundColor: theme.colors.background_neutral_1,
  },
  doneBtn: {
    marginHorizontal: getScalableSize.w(20),
  },
});
