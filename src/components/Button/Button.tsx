import React from 'react';
import {Pressable, PressableProps, TextStyle} from 'react-native';

import Typography from '@components/Typography';

import styles from './styles';

interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'default' | 'primary' | 'ghost' | 'secondary';
  disabled?: boolean;
  icon?: JSX.Element;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
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
        pressed && (styles as any)[`${variant}Pressed`],
        disabled && styles.disabled,
        style,
      ]}>
      <Typography variant="buttonLabel" style={[(styles as any)[`${variant}Label`], labelStyle]}>
        {label}
      </Typography>
      {icon}
    </Pressable>
  );
};

export default Button;
