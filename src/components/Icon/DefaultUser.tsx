import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function DefaultUserIcon(props: SvgProps) {
  return (
    <Svg width={47} height={45} viewBox="0 0 47 45" fill="none" {...props}>
      <Path
        d="M23.5 28.289c7.56 0 13.742-6.339 13.742-14.145C37.242 6.34 31.061 0 23.5 0 15.94 0 9.758 6.339 9.758 14.144c0 7.806 6.181 14.145 13.742 14.145zm6.386 1.362c-.664-.21-1.43-.053-1.941.419L23.5 33.946l-4.445-3.876c-.561-.472-1.277-.629-1.94-.42C14.252 30.595 0 35.624 0 42.906 0 44.056.92 45 2.043 45h42.913C46.08 45 47 44.057 47 42.904c0-7.281-14.253-12.31-17.114-13.253z"
        fill="#fff"
      />
    </Svg>
  );
}

export default DefaultUserIcon;
