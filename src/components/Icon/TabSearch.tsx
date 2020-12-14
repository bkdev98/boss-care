import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface TabIconProps extends SvgProps {
  focused?: boolean;
}

function TabSearchIcon(props: TabIconProps) {
  if (props.focused) {
    return (
      <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.41 11.2c0 4.529-3.673 8.2-8.205 8.2C8.674 19.4 5 15.729 5 11.2S8.674 3 13.205 3c4.532 0 8.205 3.671 8.205 8.2zm-14.359 0a6.152 6.152 0 006.154 6.15 6.152 6.152 0 006.154-6.15 6.152 6.152 0 00-6.154-6.15 6.152 6.152 0 00-6.154 6.15z"
          fill="#4552CB"
        />
        <Path
          d="M13.205 19.9c4.807 0 8.705-3.895 8.705-8.7h-1c0 4.252-3.45 7.7-7.705 7.7v1zM4.5 11.2c0 4.805 3.898 8.7 8.705 8.7v-1A7.703 7.703 0 015.5 11.2h-1zm8.705-8.7C8.398 2.5 4.5 6.395 4.5 11.2h1c0-4.252 3.45-7.7 7.705-7.7v-1zm8.705 8.7c0-4.805-3.898-8.7-8.705-8.7v1a7.703 7.703 0 017.705 7.7h1zm-8.705 5.65a5.652 5.652 0 01-5.654-5.65h-1c0 3.673 2.98 6.65 6.654 6.65v-1zm5.654-5.65c0 3.12-2.531 5.65-5.654 5.65v1a6.652 6.652 0 006.654-6.65h-1zm-5.654-5.65a5.652 5.652 0 015.654 5.65h1c0-3.673-2.98-6.65-6.654-6.65v1zM7.551 11.2c0-3.12 2.531-5.65 5.654-5.65v-1a6.652 6.652 0 00-6.654 6.65h1z"
          fill="#4552CB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.923 23.666a1.026 1.026 0 001.487-1.412l-5.64-5.935a1.026 1.026 0 00-1.488 1.412l5.641 5.935z"
          fill="#4552CB"
          stroke="#4552CB"
        />
      </Svg>
    );
  }

  return (
    <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.41 11.2c0 4.529-3.673 8.2-8.205 8.2C8.674 19.4 5 15.729 5 11.2S8.674 3 13.205 3c4.532 0 8.205 3.671 8.205 8.2zm-14.359 0a6.152 6.152 0 006.154 6.15 6.152 6.152 0 006.154-6.15 6.152 6.152 0 00-6.154-6.15 6.152 6.152 0 00-6.154 6.15z"
        fill="#BBC3CE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.923 23.666a1.026 1.026 0 001.487-1.412l-5.64-5.935a1.026 1.026 0 00-1.488 1.412l5.641 5.935z"
        fill="#BBC3CE"
      />
    </Svg>
  );
}

export default TabSearchIcon;
