import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={22} height={25} viewBox="0 0 22 25" fill="none" {...props}>
      <Rect width={22} height={22} rx={2} fill="#4552CB" />
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M16.995 3.252l-2.672-.004c-3 0-4.94 2.013-4.94 5.129v2.365H6.697c-.232 0-.42.19-.42.425v3.427c0 .234.188.425.42.425h2.686v8.646c0 .235.188.425.42.425h3.504c.232 0 .42-.19.42-.425v-8.646h3.14c.233 0 .42-.19.42-.425l.002-3.427a.428.428 0 00-.123-.3.418.418 0 00-.297-.125h-3.142V8.737c0-.964.227-1.453 1.468-1.453h1.8c.231 0 .42-.19.42-.425V3.677a.423.423 0 00-.42-.425z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="matrix(-1 0 0 1 19.477 2.148)" d="M0 0h16.5v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
