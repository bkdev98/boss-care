import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import getScalableSize from '@utils/getScalableSize';

interface HeaderProps {
  title?: string;
  leftButton?: JSX.Element;
  rightButton?: JSX.Element;
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({style, leftButton, rightButton, title}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.leftButton}>{leftButton}</View>
      <Typography variant="h3" style={styles.title}>
        {title}
      </Typography>
      <View style={styles.rightButton}>{rightButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: getScalableSize.h(44),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(20),
  },
  leftButton: {
    flex: 1,
    flexGrow: 1,
  },
  rightButton: {
    flex: 1,
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    flexGrow: 3,
    flex: 1,
  },
});

export default Header;
