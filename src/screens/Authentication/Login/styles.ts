import {StyleSheet} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: getScalableSize.h(338),
  },
  wrapper: {flex: 1},
  header: {
    paddingHorizontal: getScalableSize.w(10),
  },
  title: {
    marginTop: getScalableSize.h(12),
    marginBottom: getScalableSize.h(24),
    marginHorizontal: getScalableSize.w(40),
    color: theme.colors.white,
  },
  formWrapper: {
    marginHorizontal: getScalableSize.w(20),
    paddingHorizontal: getScalableSize.w(20),
    paddingTop: getScalableSize.h(24),
    paddingBottom: getScalableSize.h(32),
    borderRadius: getScalableSize.w(16),
    backgroundColor: theme.colors.white,
    ...theme.effects.plahaShadow,
  },
  formInput: {
    marginBottom: getScalableSize.h(5),
  },
  formBtn: {},
  footerWrapper: {
    marginTop: getScalableSize.h(50),
    marginBottom: getScalableSize.h(80),
  },
  orWrapper: {
    marginHorizontal: getScalableSize.w(20),
    marginBottom: getScalableSize.h(11),
    flexDirection: 'row',
    alignItems: 'center',
  },
  orTxt: {
    textAlign: 'center',
    marginHorizontal: getScalableSize.w(16),
  },
  orDivider: {
    height: getScalableSize.h(2),
    flexGrow: 1,
    backgroundColor: '#F0F0F8',
  },
  socialActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookBtn: {
    backgroundColor: '#3D5C98',
    marginHorizontal: getScalableSize.w(55 / 2),
  },
  googleBtn: {
    backgroundColor: '#EF403B',
    marginHorizontal: getScalableSize.w(55 / 2),
  },
  haveAccountTxt: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  signInTxt: {
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.violet,
  },
  forgotPassword: {
    marginBottom: getScalableSize.h(24),
    alignSelf: 'flex-end',
    textAlign: 'right',
    color: theme.colors.violet,
  },
});
