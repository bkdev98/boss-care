import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function FilterIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M14.607 8.487v6.817a.698.698 0 01-.696.696.698.698 0 01-.697-.696V8.487c0-.383.314-.696.697-.696.383 0 .696.313.696.696zm-.696-6.504a.698.698 0 00.696-.696V.696A.698.698 0 0013.911 0a.698.698 0 00-.697.696v.59c0 .384.314.697.697.697zM4.144 8c0 1.148-.94 2.087-2.072 2.087C.94 10.087 0 9.147 0 8c0-1.148.94-2.087 2.072-2.087 1.131 0 2.072.94 2.072 2.087zM2.75 8a.695.695 0 00-.68-.696.695.695 0 00-.678.696c0 .383.313.696.679.696A.695.695 0 002.75 8zm7.312 3.426c0 1.148-.94 2.087-2.072 2.087-1.131 0-2.072-.94-2.072-2.087 0-1.148.94-2.087 2.072-2.087a2.08 2.08 0 012.072 2.087zm-1.393 0a.695.695 0 00-.679-.696.695.695 0 00-.679.696c0 .383.314.696.68.696a.695.695 0 00.678-.696zM16 4.974c0 1.148-.94 2.087-2.072 2.087-1.132 0-2.072-.94-2.072-2.087 0-1.148.94-2.087 2.072-2.087 1.132 0 2.072.94 2.072 2.087zm-1.393 0a.695.695 0 00-.679-.696.695.695 0 00-.679.696c0 .383.314.696.68.696a.683.683 0 00.678-.696zm-6.616 9.235a.698.698 0 00-.696.695v.4c0 .383.313.696.696.696a.698.698 0 00.697-.696v-.4a.698.698 0 00-.697-.695zm0-5.74a.698.698 0 00.697-.695V.696A.698.698 0 007.99 0a.698.698 0 00-.696.696v7.078c0 .383.313.696.696.696zm-5.92 2.54a.698.698 0 00-.696.695v3.6c0 .383.314.696.697.696a.698.698 0 00.696-.696v-3.6a.698.698 0 00-.696-.695zm0-5.983a.698.698 0 00.697-.696V.696A.698.698 0 002.072 0a.698.698 0 00-.697.696V4.33c0 .383.314.696.697.696z"
        fill="#070821"
      />
    </Svg>
  );
}

export default FilterIcon;