import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';

import styles from './styles';

interface IconButtonProps extends PressableProps {
  disabled?: boolean;
  children: JSX.Element;
  style?: ViewStyle;
  pressedStyle?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  style,
  pressedStyle,
  disabled,
  children,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
        pressed && pressedStyle,
      ]}>
      {children}
    </Pressable>
  );
};

export default IconButton;
