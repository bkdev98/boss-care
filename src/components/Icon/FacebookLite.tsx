import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function FacebookLite(props: SvgProps) {
  return (
    <Svg width={26} height={32} viewBox="0 0 26 32" fill="none" {...props}>
      <Path
        d="M19.435 4.005L15.837 4c-4.042 0-6.654 2.415-6.654 6.152v2.837H5.566c-.313 0-.566.229-.566.51v4.11c0 .282.253.51.566.51h3.617V28.49c0 .282.253.51.566.51h4.72c.312 0 .565-.228.565-.51V18.12h4.23c.313 0 .566-.229.566-.51l.001-4.11a.486.486 0 00-.165-.361.6.6 0 00-.4-.15h-4.232v-2.405c0-1.155.306-1.742 1.977-1.742h2.424c.312 0 .565-.23.565-.51V4.514c0-.281-.253-.51-.565-.51z"
        fill="#fff"
      />
    </Svg>
  );
}

export default FacebookLite;
