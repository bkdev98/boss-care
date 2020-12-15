import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.637 16.929a1.202 1.202 0 010 1.721c-.242.242-.537.35-.86.35-.322 0-.618-.108-.86-.35L12 13.728 7.083 18.65c-.242.242-.538.35-.86.35-.323 0-.618-.108-.86-.35a1.202 1.202 0 010-1.721l4.917-4.922-4.917-4.922a1.202 1.202 0 010-1.722 1.2 1.2 0 011.72 0L12 10.285l4.918-4.922a1.2 1.2 0 011.72 0 1.202 1.202 0 010 1.722l-4.918 4.922 4.917 4.922z"
        fill="#4552CB"
      />
    </Svg>
  );
}

export default CloseIcon;
