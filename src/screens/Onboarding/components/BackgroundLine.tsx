import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function BackgroundLine(props: SvgProps) {
  return (
    <Svg width={1085} height={236} viewBox="0 0 1085 236" fill="none" {...props}>
      <Path
        opacity={0.1}
        d="M90 92.205c150.7-.6 150.9 53.7 301.6 53.2 150.7-.6 150.5-54.8 301.2-55.4 150.7-.6 150.9 53.7 301.6 53.2"
        stroke="#4552CB"
        strokeWidth={180}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default BackgroundLine;
