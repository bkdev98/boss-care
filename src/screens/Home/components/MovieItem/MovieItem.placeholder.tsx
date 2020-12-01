import React from 'react';
import {ViewStyle} from 'react-native';
import {Placeholder, PlaceholderMedia, Fade} from 'rn-placeholder';

import styles from './styles';

interface MovieItemPlaceholderProps {
  style?: ViewStyle;
}

const MovieItemPlaceholder: React.FC<MovieItemPlaceholderProps> = ({style}) => {
  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia style={[styles.wrapper, style]} />
    </Placeholder>
  );
};

export default MovieItemPlaceholder;
