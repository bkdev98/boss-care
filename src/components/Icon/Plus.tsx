import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';

function PlusIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G>
        <Path
          d="M17.842 9.167c0 .833-.667 1.5-1.5 1.5h-6v5.666c0 .834-.667 1.5-1.5 1.5-.834 0-1.5-.666-1.5-1.5v-5.666H1.675c-.833 0-1.5-.667-1.5-1.5 0-.834.667-1.5 1.5-1.5h5.667v-6c0-.834.666-1.5 1.5-1.5.833 0 1.5.666 1.5 1.5v6h6c.833 0 1.5.666 1.5 1.5z"
          fill="#fff"
        />
      </G>
      <Defs />
    </Svg>
  );
}

export default PlusIcon;
