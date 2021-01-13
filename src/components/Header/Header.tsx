import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import IconButton from '@components/IconButton';
import BackIcon from '@components/Icon/ArrowLeft';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import NavigationService from '@navigation/service';

interface HeaderProps {
  title?: string;
  leftButton?: JSX.Element;
  rightButton?: JSX.Element;
  style?: ViewStyle;
  bordered?: boolean;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  style,
  leftButton,
  rightButton,
  title,
  bordered,
  showBack,
}) => {
  return (
    <View style={[styles.wrapper, bordered && styles.bordered, style]}>
      <View style={styles.leftButton}>
        {showBack ? (
          <IconButton onPress={NavigationService.goBack}>
            <BackIcon primary />
          </IconButton>
        ) : (
          leftButton
        )}
      </View>
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
    paddingHorizontal: getScalableSize.w(8),
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
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray2,
  },
});

export default Header;
