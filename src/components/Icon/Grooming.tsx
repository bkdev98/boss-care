import * as React from 'react';
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function GroomingIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.302 13.155a2.566 2.566 0 100-5.131 2.566 2.566 0 000 5.132zM18.184 24.274a5.11 5.11 0 003.225-1.14 4.276 4.276 0 101.5-5.998 5.133 5.133 0 00-9.856 2.006 5.132 5.132 0 005.131 5.132z"
        fill="#FFC4CD"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.776 8.496c0-1.609 1.287-2.893 2.85-2.893 1.562 0 2.848 1.284 2.848 2.893a1 1 0 102 0c0-2.692-2.16-4.893-4.849-4.893-2.688 0-4.849 2.201-4.849 4.893v6.572a2.566 2.566 0 00-1.565 2.364v2.566H4.5a1.71 1.71 0 000 3.42v1.83c0 6.075 4.924 11 11 11h8.789c6.075 0 11-4.925 11-11v-1.83a1.71 1.71 0 000-3.42H11.342v-2.566a2.566 2.566 0 00-1.566-2.364V8.496z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.264}
          y1={44.919}
          x2={-12.194}
          y2={18.5}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.298} stopColor="#7145CB" />
          <Stop offset={1} stopColor="#4596EA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default GroomingIcon;
