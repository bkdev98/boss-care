import {StyleSheet} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

export default StyleSheet.create({
  profileWrapper: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    paddingTop: getScalableSize.h(16),
    paddingBottom: getScalableSize.h(28),
    marginBottom: getScalableSize.h(22),
    borderBottomLeftRadius: getScalableSize.w(34),
    borderBottomRightRadius: getScalableSize.w(34),
    ...theme.effects.plahaShadow,
  },
  profileAvatar: {
    marginBottom: getScalableSize.h(16),
  },
  locationTxt: {
    color: theme.colors.gray,
    marginTop: getScalableSize.h(4),
  },
  menuList: {
    backgroundColor: theme.colors.lightGray,
  },
  menuItemWrapper: {
    flexDirection: 'row',
    height: getScalableSize.h(40 + 12),
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(20),
    paddingVertical: getScalableSize.w(12),
    marginBottom: getScalableSize.w(12),
  },
  menuItemPressed: {
    backgroundColor: theme.colors.lightGray2,
  },
  menuItemIcon: {
    width: getScalableSize.w(36),
    height: getScalableSize.w(36),
    borderRadius: getScalableSize.w(36 / 2),
    backgroundColor: 'rgba(69, 82, 203, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: getScalableSize.w(15),
  },
  menuItemContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray2,
    height: getScalableSize.w(36),
  },
});
