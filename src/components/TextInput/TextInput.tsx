import React, {useEffect, useState} from 'react';
import {
  View,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  LayoutAnimation,
  Animated,
  Pressable,
} from 'react-native';

import theme from '@theme';
import Typography from '@components/Typography';
import HintClearIcon from '@components/Icon/HintClear';
import HintSuccessIcon from '@components/Icon/HintSuccess';

import styles from './styles';
import getScalableSize from 'utils/getScalableSize';

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  name?: string;
  error?: string;
  wrapperStyle?: ViewStyle;
  onBlur?: any;
  onFocus?: any;
  onChangeText?: any;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  (
    {label, wrapperStyle, style, error, onBlur, onFocus, value, onChangeText, ...props},
    ref: any,
  ) => {
    useEffect(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }, [error]);

    const [animated] = useState(new Animated.Value(value ? 1 : 0));
    const [fieldStatus, setFieldStatus] = useState({actived: false, focused: false});

    function handleFocus() {
      if (!fieldStatus.actived) {
        setFieldStatus({actived: true, focused: true});
        Animated.timing(animated, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else {
        setFieldStatus({...fieldStatus, focused: true});
      }
      onFocus && onFocus();
    }

    function handleBlur() {
      if (fieldStatus.actived && !value) {
        setFieldStatus({focused: false, actived: false});
        Animated.timing(animated, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else if (fieldStatus.actived) {
        setFieldStatus({...fieldStatus, focused: false});
      }
      onBlur && onBlur();
    }

    function renderRightIcon() {
      if (value) {
        if (fieldStatus.focused) {
          return (
            <Pressable
              onPress={() => onChangeText('')}
              style={({pressed}) => [
                styles.rightIconWrapper,
                pressed && {backgroundColor: theme.colors.lightGray},
              ]}>
              <HintClearIcon width={getScalableSize.w(10)} height={getScalableSize.w(10)} />
            </Pressable>
          );
        }
        if (!error) {
          return (
            <View style={styles.rightIconWrapper}>
              <HintSuccessIcon width={getScalableSize.w(10)} height={getScalableSize.w(10)} />
            </View>
          );
        }
      }
    }

    const labelTranslateY = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [getScalableSize.h(30), getScalableSize.h(7)],
    });

    const labelFontSize = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [getScalableSize.f(16), getScalableSize.f(13)],
    });

    const labelColor = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.gray, theme.colors.violet],
    });

    const inputBorderWidth = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    });

    const inputBorderColor = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.background_neutral_2, theme.colors.violet],
    });

    return (
      <View
        style={[
          styles.wrapper,
          wrapperStyle,
          fieldStatus.focused && {backgroundColor: theme.colors.palegray},
        ]}>
        <Typography
          animated
          style={{
            color: error
              ? theme.colors.danger
              : fieldStatus.focused
              ? labelColor
              : theme.colors.gray,
            fontSize: labelFontSize,
            transform: [{translateY: labelTranslateY}],
          }}
          variant="inputLabel">
          {label}
        </Typography>
        <AnimatedTextInput
          ref={ref}
          style={[
            styles.default,
            {
              borderBottomColor: !error ? inputBorderColor : theme.colors.danger,
              borderBottomWidth: inputBorderWidth,
            },
            style,
          ]}
          selectionColor={theme.colors.violet}
          value={value}
          onChangeText={onChangeText}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {renderRightIcon()}
        <Typography variant="caption" style={[styles.helper, Boolean(error) && styles.helperShow]}>
          {error}
        </Typography>
      </View>
    );
  },
);

export default TextInput;
