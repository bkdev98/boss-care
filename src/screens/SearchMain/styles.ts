import {StyleSheet, Dimensions} from 'react-native';

import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

const {width} = Dimensions.get('window');

const SERVICE_ITEM_SIZE = (width - getScalableSize.w(40 * 2 + 16 * 2)) / 3;

export default StyleSheet.create({
  header: {
    height: getScalableSize.h(44),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    paddingTop: getScalableSize.h(64),
    paddingHorizontal: getScalableSize.w(32),
  },
  greetingTxt: {
    marginBottom: getScalableSize.h(49),
    marginHorizontal: getScalableSize.w(8),
  },
  greetingName: {
    color: theme.colors.yellow,
  },
  linearBg: {
    flex: 1,
  },
  serviceItem: {
    overflow: 'visible',
    backgroundColor: theme.colors.white,
    width: SERVICE_ITEM_SIZE,
    height: SERVICE_ITEM_SIZE,
    borderRadius: getScalableSize.w(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: getScalableSize.w(8),
    ...theme.effects.roundIconShadow,
  },
  serviceItemPressed: {
    backgroundColor: theme.colors.lightGray,
  },
  serviceItemTitle: {
    marginTop: getScalableSize.h(6),
  },
  separator: {
    marginVertical: getScalableSize.h(8),
  },
});