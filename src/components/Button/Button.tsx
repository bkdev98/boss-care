import React from 'react';
import {Pressable, PressableProps, TextStyle} from 'react-native';

import Typography from '@components/Typography';

import styles from './styles';

interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'default' | 'primary' | 'ghost' | 'secondary';
  size?: 'large' | 'small';
  disabled?: boolean;
  icon?: JSX.Element;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  size = 'large',
  style,
  disabled,
  icon,
  labelStyle,
  ...props
}) => {
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
      <Typography
        variant="button"
        style={[(styles as any)[`${variant}Label`], (styles as any)[`${size}Label`], labelStyle]}>
        {label}
      </Typography>
      {icon}
    </Pressable>
  );
};

export default Button;
