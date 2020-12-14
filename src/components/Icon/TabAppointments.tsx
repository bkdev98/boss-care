import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface TabIconProps extends SvgProps {
  focused?: boolean;
}

function TabAppointmentsIcon(props: TabIconProps) {
  if (props.focused) {
    return (
      <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
        <Path
          d="M15 3C9.478 3 5 7.478 5 13s4.478 10 10 10 10-4.478 10-10S20.522 3 15 3zm3.326 12.087a.866.866 0 010 1.24.858.858 0 01-.609.26.858.858 0 01-.608-.26l-2.696-2.697a.858.858 0 01-.26-.608V7.848c0-.478.39-.87.869-.87.478 0 .87.392.87.87v4.826l2.434 2.413z"
          fill="#4552CB"
        />
      </Svg>
    );
  }

  return (
    <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
      <Path
        d="M15 3C9.478 3 5 7.478 5 13s4.478 10 10 10 10-4.478 10-10S20.522 3 15 3zm0 18.26A8.257 8.257 0 016.74 13 8.257 8.257 0 0115 4.74 8.257 8.257 0 0123.26 13 8.257 8.257 0 0115 21.26z"
        fill="#BBC3CE"
      />
      <Path
        d="M18.326 16.326a.866.866 0 000-1.239l-2.435-2.413V7.848a.872.872 0 00-.87-.87.872.872 0 00-.869.87v5.174c0 .217.087.434.261.608l2.696 2.696c.173.174.39.261.608.261a.858.858 0 00.609-.26z"
        fill="#BBC3CE"
      />
    </Svg>
  );
}

export default TabAppointmentsIcon;
