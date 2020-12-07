import * as React from 'react';
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function DateIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M38.24 4H18.222a.762.762 0 00-.76.76V6.6h9.682a2.282 2.282 0 012.28 2.28v11.407h.73l5.023 5.023a.773.773 0 00.54.228.757.757 0 00.289-.06.75.75 0 00.47-.7v-4.491h1.764c.418 0 .76-.335.76-.76V4.76a.762.762 0 00-.76-.76z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M27.144 8.12H1.76a.762.762 0 00-.76.76v18.733c0 .418.342.76.76.76H4.2v5.89c0 .304.182.585.463.7a.748.748 0 00.828-.16l6.43-6.43h15.223c.418 0 .76-.342.76-.76V8.879a.762.762 0 00-.76-.76zm-7.045 11.194l-5.115 5.107a.73.73 0 01-.532.22.734.734 0 01-.54-.22l-5.107-5.107a4.34 4.34 0 01-1.284-3.093c0-1.17.456-2.273 1.284-3.101a4.388 4.388 0 015.647-.448 4.378 4.378 0 015.64.455 4.34 4.34 0 011.283 3.094 4.301 4.301 0 01-1.276 3.093z"
        fill="#FFC4CD"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={19.649}
          y1={31.259}
          x2={7.285}
          y2={14.373}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.298} stopColor="#7145CB" />
          <Stop offset={1} stopColor="#4596EA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default DateIcon;
