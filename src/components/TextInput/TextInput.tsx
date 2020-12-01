import React, {useEffect} from 'react';
import {
  View,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  LayoutAnimation,
} from 'react-native';

import Typography from '@components/Typography';

import styles from './styles';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  name?: string;
  error?: string;
  wrapperStyle?: ViewStyle;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  ({label, wrapperStyle, style, error, ...props}, ref: any) => {
    useEffect(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }, [error]);

    return (
      <View style={[wrapperStyle, styles.wrapper]}>
        <Typography variant="inputLabel">{label}</Typography>
        <RNTextInput ref={ref} style={[styles.default, style]} {...props} />
        <Typography variant="caption" style={[styles.helper, Boolean(error) && styles.helperShow]}>
          {error}
        </Typography>
      </View>
    );
  },
);

export default TextInput;
