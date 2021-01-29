import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ClockIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        opacity={0.6}
        d="M10.005.8C4.925.8.805 4.92.805 10c0 5.08 4.12 9.2 9.2 9.2 5.08 0 9.2-4.12 9.2-9.2 0-5.08-4.12-9.2-9.2-9.2zm0 16.8c-4.2 0-7.6-3.4-7.6-7.6 0-4.2 3.4-7.6 7.6-7.6 4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6zm3.06-5.68c.32.32.32.82 0 1.14a.79.79 0 01-.56.24c-.2 0-.4-.08-.56-.24l-2.48-2.48a.79.79 0 01-.24-.56V5.26c0-.44.36-.8.8-.8.44 0 .8.36.8.8V9.7l2.24 2.22z"
        fill={props.color || '#F0F0F8'}
      />
    </Svg>
  );
}

export default ClockIcon;
