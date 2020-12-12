import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function HintClear(props: SvgProps) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5A5 5 0 110 5a5 5 0 0110 0zM6.833 3.772L5.656 4.949l1.177 1.177a.5.5 0 11-.707.707L4.95 5.656 3.772 6.833a.5.5 0 11-.707-.707L4.242 4.95 3.065 3.772a.5.5 0 11.707-.707l1.177 1.177 1.177-1.177a.5.5 0 11.707.707z"
        fill="#BBC3CE"
      />
    </Svg>
  );
}

export default HintClear;
