import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function MenuArrowIcon(props: SvgProps) {
  return (
    <Svg width={8} height={13} viewBox="0 0 8 13" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.37L1.393 0 8 6.5 1.393 13 0 11.63 5.214 6.5 0 1.37z"
        fill="#BBC3CE"
      />
    </Svg>
  );
}

export default MenuArrowIcon;
