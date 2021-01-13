import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function CheckIcon(props: SvgProps) {
  return (
    <Svg width={12} height={9} viewBox="0 0 12 9" fill="none" {...props}>
      <Path
        d="M10.949 2.14h0a.743.743 0 000-1.114.854.854 0 00-1.158 0L4.4 6 2.21 3.985h-.001a.854.854 0 00-1.158 0 .742.742 0 000 1.113l2.756 2.549c.167.154.37.22.58.22.211 0 .41-.067.584-.213h0l.008-.007 5.97-5.507z"
        fill={props.color || '#fff'}
        stroke={props.color || '#fff'}
        strokeWidth={0.4}
      />
    </Svg>
  );
}

export default CheckIcon;
