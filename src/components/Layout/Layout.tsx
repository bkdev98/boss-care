import React from 'react';
import {View, ViewProps, SafeAreaView, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';

interface LayoutProps extends ViewProps {
  safeAreaViewStyle?: ViewStyle;
  withoutSafeAreaView?: boolean;
  withInsets?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  style,
  safeAreaViewStyle,
  withoutSafeAreaView,
  withInsets,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  if (withoutSafeAreaView) {
    return (
      <View
        style={[
          styles.wrapper,
          withInsets && {paddingTop: insets.top, paddingBottom: insets.bottom},
          style,
        ]}
        {...props}
      />
    );
  }

  return (
    <SafeAreaView style={[styles.safeAreaView, safeAreaViewStyle]}>
      <View
        style={[
          styles.wrapper,
          withInsets && {paddingTop: insets.top, paddingBottom: insets.bottom},
          style,
        ]}
        {...props}
      />
    </SafeAreaView>
  );
};

export default Layout;
