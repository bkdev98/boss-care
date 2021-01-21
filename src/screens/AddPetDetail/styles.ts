import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

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
  reminderItem: {
    width: getScalableSize.w(120),
    height: getScalableSize.h(144),
    borderRadius: getScalableSize.w(16),
    backgroundColor: theme.colors.background,
    marginRight: getScalableSize.w(16),
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.effects.outlinePlahaShadow,
  },
  reminderAddItem: {
    backgroundColor: theme.colors.lightGray2,
  },
  reminderList: {
    marginHorizontal: -getScalableSize.w(20),
    paddingVertical: getScalableSize.h(24),
  },
  reminderListContainer: {
    paddingHorizontal: getScalableSize.w(20),
  },
  plusIcon: {
    width: getScalableSize.w(40),
    height: getScalableSize.w(40),
    borderRadius: getScalableSize.w(40 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  plusIconWrapper: {
    shadowColor: 'rgba(69, 82, 203, 0.4)',
    shadowRadius: 7,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 15},
    elevation: 3,
    marginBottom: getScalableSize.h(15),
  },
  remiderItemPressed: {
    backgroundColor: theme.colors.lightGray,
  },
});
