import React from 'react';
import {View, ViewProps, SafeAreaView, ViewStyle} from 'react-native';

import styles from './styles';

interface LayoutProps extends ViewProps {
  safeAreaViewStyle?: ViewStyle;
  withoutSafeAreaView?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  style,
  safeAreaViewStyle,
  withoutSafeAreaView,
  ...props
}) => {
  if (withoutSafeAreaView) {
    return <View style={[styles.wrapper, style]} {...props} />;
  }

  return (
    <SafeAreaView style={[styles.safeAreaView, safeAreaViewStyle]}>
      <View style={[styles.wrapper, style]} {...props} />
    </SafeAreaView>
  );
};

export default Layout;
