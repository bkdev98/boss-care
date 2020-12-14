import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface TabIconProps extends SvgProps {
  focused?: boolean;
}

function TabProfileIcon(props: TabIconProps) {
  if (props.focused) {
    return (
      <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
        <Path
          d="M23.295 22.316H6.705A.692.692 0 016 21.61c0-4.982 3.196-7.731 9-7.731s9 2.75 9 7.731c0 .4-.305.705-.705.705zM15 12.846c-2.585 0-4.676-2.28-4.676-5.076C10.324 5.044 12.344 3 15 3c2.655 0 4.676 2.044 4.676 4.77 0 2.797-2.091 5.076-4.676 5.076z"
          fill="#4552CB"
        />
      </Svg>
    );
  }

  return (
    <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
      <Path
        d="M21.09 16.56c1.247 1.072 1.968 2.668 2.008 4.856H6.902c.04-2.189.76-3.784 2.008-4.856 1.306-1.122 3.316-1.78 6.09-1.78s4.785.658 6.09 1.78zM15 11.946c-2.019 0-3.776-1.804-3.776-4.176 0-2.243 1.632-3.87 3.776-3.87s3.776 1.627 3.776 3.87c0 2.372-1.757 4.176-3.776 4.176z"
        stroke="#BBC3CE"
        strokeWidth={1.8}
      />
    </Svg>
  );
}

export default TabProfileIcon;
