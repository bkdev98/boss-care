import React from 'react';
import {Pressable, ViewStyle} from 'react-native';

import theme from '@theme';
import CheckIcon from '@components/Icon/Check';
import styles from './styles';

interface CheckBoxProps {
  value?: boolean;
  onValueChange?: any;
  disabled?: boolean;
  style?: ViewStyle;
  pressedStyle?: ViewStyle;
}

const CheckBox: React.FC<CheckBoxProps> = ({value, onValueChange, style, pressedStyle}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.wrapper,
        value && styles.checked,
        style,
        pressed &&
          (value ? {backgroundColor: theme.colors.darkBlue} : {borderColor: theme.colors.gray}),
        pressed && pressedStyle,
      ]}
      onPress={onValueChange}>
      {value && <CheckIcon />}
    </Pressable>
  );
};

export default CheckBox;
