import React from 'react';
import {Pressable, PressableProps, TextStyle, View} from 'react-native';

import Typography from '@components/Typography';

import styles from './styles';

interface ButtonProps extends PressableProps {
  label: string | JSX.Element;
  variant?: 'default' | 'primary' | 'ghost' | 'secondary' | 'white' | 'ghostOutline' | 'ghostWhite';
  size?: 'large' | 'small';
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  size = 'large',
  style,
  disabled,
  leftIcon,
  rightIcon,
  labelStyle,
  ...props
}) => {
  function renderLeftIcon() {
    return leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>;
  }

  function renderRightIcon() {
    return rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>;
  }

  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        styles[variant],
        styles[size],
        pressed && (styles as any)[`${variant}Pressed`],
        disabled && styles.disabled,
        style,
      ]}>
      {renderLeftIcon()}
      <Typography
        variant="button"
        style={[(styles as any)[`${variant}Label`], (styles as any)[`${size}Label`], labelStyle]}>
        {label}
      </Typography>
      {renderRightIcon()}
    </Pressable>
  );
};

export default Button;
