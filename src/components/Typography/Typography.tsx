import React from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';

interface TypographyProps extends TextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
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

const Typography: React.FC<TypographyProps> = ({variant = 'paragraph', style, ...props}) => {
  return <Text style={[styles.default, styles[variant], style]} {...props} />;
};

export default Typography;
