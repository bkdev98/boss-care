import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';

export default StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    marginVertical: getScalableSize.h(32),
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: getScalableSize.h(25),
  },
  section: {
    paddingHorizontal: getScalableSize.w(20),
    flexGrow: 1,
    flex: 1,
  },
  formInput: {
    marginHorizontal: -getScalableSize.w(10),
    marginBottom: getScalableSize.h(5),
  },
  switchInput: {
    marginBottom: getScalableSize.h(24),
  },
  sectionTitle: {
    marginBottom: getScalableSize.h(16),
  },
  formWrapper: {
    flex: 1,
    flexGrow: 1,
  },
  editAvatar: {
    width: getScalableSize.w(30),
    height: getScalableSize.w(30),
    borderRadius: getScalableSize.w(30 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingLeft: 2,
  },
  editAvatarWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
