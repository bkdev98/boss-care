import React from 'react';
import {Text, TextProps, Animated, TextStyle} from 'react-native';

import styles from './styles';

interface TypographyProps extends TextProps {
  style?: TextStyle | any;
  animated?: boolean;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'button'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'header'
    | 'title'
    | 'subTitle'
    | 'paragraph'
    | 'caption'
    | 'buttonLabel'
    | 'inputLabel';
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  style,
  animated,
  ...props
}) => {
  if (animated) {
    return <Animated.Text style={[styles.default, styles[variant], style]} {...props} />;
  }
  return <Text style={[styles.default, styles[variant], style]} {...props} />;
};

export default Typography;
