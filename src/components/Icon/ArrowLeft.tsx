import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import theme from '@theme';

interface ArrowLeftProps extends SvgProps {
  primary?: boolean;
}

function ArrowLeft(props: ArrowLeftProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M26.14 16a1.07 1.07 0 01-1.067 1.067H9.5l4.827 4.853a1.062 1.062 0 010 1.52c-.214.213-.48.32-.747.32a1.01 1.01 0 01-.747-.32l-6.64-6.667c-.426-.426-.426-1.093 0-1.493l6.64-6.667a1.063 1.063 0 011.52 0 1.062 1.062 0 010 1.52l-4.853 4.8h15.573c.587 0 1.067.48 1.067 1.067z"
        fill={props.primary ? theme.colors.violet : theme.colors.background}
      />
    </Svg>
  );
}

export default ArrowLeft;
