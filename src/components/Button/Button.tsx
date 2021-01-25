import React from 'react';
import {Pressable, PressableProps, TextStyle, ViewStyle, View} from 'react-native';

import Typography from '@components/Typography';

import styles from './styles';

interface ButtonProps extends PressableProps {
  label: string | JSX.Element;
  variant?:
    | 'default'
    | 'primary'
    | 'ghost'
    | 'secondary'
    | 'white'
    | 'ghostOutline'
    | 'ghostWhite'
    | 'filter'
    | 'filterGhost';
  size?: 'large' | 'small';
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  leftIconStyle?: ViewStyle;
  rightIconStyle?: ViewStyle;
  style?: ViewStyle | ViewStyle[] | any;
  labelStyle?: TextStyle | TextStyle[] | any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  size = 'large',
  style,
  disabled,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  labelStyle,
  ...props
}) => {
  function renderLeftIcon() {
    return (
      leftIcon && (
        <View style={[styles.leftIcon, size === 'small' && styles.leftIconSmall, leftIconStyle]}>
          {leftIcon}
        </View>
      )
    );
  }

  function renderRightIcon() {
    return (
      rightIcon && (
        <View style={[styles.rightIcon, size === 'small' && styles.rightIconSmall, rightIconStyle]}>
          {rightIcon}
        </View>
      )
    );
  }

  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        styles[size],
        styles[variant],
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
