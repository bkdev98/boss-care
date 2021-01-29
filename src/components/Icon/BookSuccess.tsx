import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function BookSuccessIcon(props: SvgProps) {
  return (
    <Svg width={56} height={42} viewBox="0 0 56 42" fill="none" {...props}>
      <Path
        d="M19.075 41.046c-.925 0-1.773-.308-2.467-1.002L1.265 24.701c-1.388-1.388-1.388-3.547 0-4.935 1.388-1.387 3.547-1.387 4.934 0l12.954 12.876L49.916 1.956c1.388-1.388 3.547-1.388 4.934 0 1.388 1.388 1.388 3.547 0 4.934L21.62 40.044c-.771.694-1.62 1.002-2.545 1.002z"
        fill={props.color || '#4552CB'}
      />
    </Svg>
  );
}

export default BookSuccessIcon;
