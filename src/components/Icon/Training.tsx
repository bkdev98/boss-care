import * as React from 'react';
import Svg, {SvgProps, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function TrainingIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M23.979 6.478a10.912 10.912 0 001.69 9.402c1.937 2.711 5 4.366 8.416 4.507l.915.035V20c0-6.796-4.542-12.57-10.774-14.402l-.247.88z"
        fill="#FFCF6F"
      />
      <Path
        d="M34.014 22.5c-4.05-.176-7.711-2.113-10.035-5.387a12.852 12.852 0 01-2.042-11.198l.21-.774A14.356 14.356 0 0020 5C12.43 5 6.162 10.634 5.14 17.922l.81.071a13.129 13.129 0 019.473 5.317 13.09 13.09 0 012.183 10.634l-.176.845c.845.14 1.69.211 2.57.211 7.394 0 13.592-5.387 14.789-12.465l-.775-.035z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M15.563 33.486a11.052 11.052 0 00-1.83-8.944c-1.902-2.535-4.79-4.19-7.958-4.437L5 20.035C5 26.69 9.366 32.324 15.387 34.26l.176-.774z"
        fill="#FFCF6F"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={8.152}
          y1={42.969}
          x2={-9.13}
          y2={19.642}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.298} stopColor="#7145CB" />
          <Stop offset={1} stopColor="#4596EA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default TrainingIcon;
