import React from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';

interface TypographyProps extends TextProps {
  variant?:
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
