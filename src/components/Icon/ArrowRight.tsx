import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowRightIcon(props: SvgProps) {
  return (
    <Svg width={7} height={11} viewBox="0 0 7 11" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.067 2.357l.87-.857 4.13 4.063-4.13 4.062-.87-.857 3.258-3.206-3.258-3.205z"
        fill={props.color || '#4552CB'}
        stroke={props.color || '#4552CB'}
      />
    </Svg>
  );
}

export default ArrowRightIcon;
