import * as React from 'react';
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function AdoptionIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path d="M13 15v7h12.391L28 19.454 25.391 15H13z" fill="#ED6D4E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 19.969L20 7l13 12.969V35a2 2 0 01-2 2H9a2 2 0 01-2-2V19.969zm18.68-.57c-.023-.028-.005-.05-.005-.05.868-1.06-.267-2.349-1.232-2.349-.643 0-1.211.397-1.558 1.006h-2.339c-.185 0-.306.002-.306.002h-.315l-.47-.002h-2.34C16.768 17.397 16.2 17 15.557 17c-.965 0-2.1 1.288-1.232 2.349 0 0 .018.022-.005.05-.863 1.089.18 2.401 1.237 2.401.645 0 1.216-.4 1.562-1.013h5.762c.346.613.916 1.013 1.562 1.013 1.057 0 2.1-1.312 1.237-2.4zM20 24a4 4 0 00-4 4v7h8v-7a4 4 0 00-4-4z"
        fill="#FFCF6F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.422 3.639a2 2 0 00-2.88-.053L3.415 18.714a2 2 0 102.829 2.829L19.963 7.82l13.62 13.62a2 2 0 002.828-2.829l-14.83-14.83a2.03 2.03 0 00-.159-.143z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.299}
          y1={27.209}
          x2={-1.786}
          y2={7.486}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.298} stopColor="#7145CB" />
          <Stop offset={1} stopColor="#4596EA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default AdoptionIcon;
