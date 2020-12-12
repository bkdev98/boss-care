import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

function HintSuccess(props: SvgProps) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Circle cx={5} cy={5} r={5} fill="#01B41F" />
      <Path
        d="M4.228 6.733a.292.292 0 01-.213-.086L2.688 5.32a.298.298 0 010-.427c.12-.12.307-.12.427 0l1.12 1.114 2.66-2.654c.12-.12.307-.12.427 0s.12.307 0 .427L4.448 6.647a.318.318 0 01-.22.086z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default HintSuccess;
