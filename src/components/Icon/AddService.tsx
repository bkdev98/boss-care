import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function AddServiceIcon(props: SvgProps) {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M21.046 7.38c-.16-.16-.361-.18-.562-.18h-4.213V4.8c0-.44-.4-.8-.842-.8h-6.74c-.441 0-.843.36-.843.8v2.4H3.634c-.442 0-.803.26-.803.7v11.3c0 .44.361.8.803.8h16.85c.441 0 .802-.36.802-.8V7.94c0-.22-.08-.4-.24-.56zM9.45 5.6h5.216v1.6H9.45V5.6zm10.23 12.8H4.437V8.8h15.246v9.6zM8.79 13.5c0-.38.321-.7.702-.7h1.766v-1.78c0-.38.32-.7.702-.7a.71.71 0 01.702.7v1.78h1.966a.71.71 0 01.702.7c0 .38-.321.7-.702.7H12.66v1.88c0 .38-.321.7-.702.7a.71.71 0 01-.702-.7V14.2H9.49a.71.71 0 01-.702-.7z"
        fill="#4552CB"
      />
    </Svg>
  );
}

export default AddServiceIcon;
