import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M21.783 8.938c.14.735.217 1.505.217 2.31C22 17.53 17.707 22 11.225 22 5.023 22 0 17.077 0 11S5.023 0 11.225 0c3.03 0 5.563 1.093 7.506 2.867l-3.164 3.1v-.006c-1.178-1.1-2.673-1.664-4.342-1.664-3.704 0-6.714 3.066-6.714 6.696s3.01 6.703 6.714 6.703c3.36 0 5.647-1.884 6.118-4.468h-6.118v-4.29h10.558z"
        fill="#4552CB"
      />
    </Svg>
  );
}

export default SvgComponent;
