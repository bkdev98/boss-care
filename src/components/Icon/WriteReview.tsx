import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function WriteReviewIcon(props: SvgProps) {
  return (
    <Svg width={17} height={19} viewBox="0 0 17 19" fill="none" {...props}>
      <Path
        d="M16.721 2.44L15.29.98A.571.571 0 0014.87.8a.54.54 0 00-.418.18l-8.336 8.5c-.06.06-.1.12-.14.2l-.934 2.38c-.08.22-.04.48.139.64.12.12.259.18.418.18.08 0 .14-.02.219-.04l2.347-.94c.08-.04.14-.08.2-.14l8.335-8.5c.26-.22.26-.6.02-.82zm-9.092 8.4l-.955.38.378-.98 7.82-7.98.596.6-7.839 7.98zm6.088-.72v8.08c0 .44-.398.8-.835.8H1.58a.8.8 0 01-.796-.8V2.96c0-.44.358-.76.796-.76h8.276a.8.8 0 010 1.6h-7.48v13.6h9.748v-7.28a.8.8 0 01.796-.8.8.8 0 01.796.8z"
        fill={props.color || '#4552CB'}
      />
    </Svg>
  );
}

export default WriteReviewIcon;
