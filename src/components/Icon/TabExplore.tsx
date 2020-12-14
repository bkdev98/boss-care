import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

interface TabIconProps extends SvgProps {
  focused?: boolean;
}

function TabExploreIcon(props: TabIconProps) {
  if (props.focused) {
    return (
      <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S5 17.522 5 12 9.478 2 15 2zm0 8.98a1.02 1.02 0 110 2.04 1.02 1.02 0 010-2.04zm4.504-4.3a.5.5 0 01.668.646l-2.397 5.818a3 3 0 01-1.542 1.593l-5.737 2.583a.5.5 0 01-.668-.646l2.397-5.818a3 3 0 011.542-1.593l5.737-2.583z"
          fill="#4552CB"
        />
      </Svg>
    );
  }

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.294 9.742l5.278-2.301-2.174 5.11a3.25 3.25 0 01-1.692 1.707L7.428 16.56l2.175-5.11a3.25 3.25 0 011.691-1.707z"
        stroke="#BBC3CE"
        strokeWidth={1.5}
      />
      <Path
        d="M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2zm0 18.26A8.257 8.257 0 013.74 12 8.257 8.257 0 0112 3.74 8.257 8.257 0 0120.26 12 8.257 8.257 0 0112 20.26z"
        fill="#BBC3CE"
      />
      <Circle cx={12} cy={12} r={1} fill="#BBC3CE" />
    </Svg>
  );
}

export default TabExploreIcon;
