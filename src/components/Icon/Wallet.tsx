import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function WalletIcon(props: SvgProps) {
  return (
    <Svg width={13} height={12} viewBox="0 0 13 12" fill="none" {...props}>
      <Path
        d="M9.51 6.44a.937.937 0 01.267.667c0 .24-.094.48-.267.653a.95.95 0 01-.667.28 1 1 0 01-.666-.28.929.929 0 01-.267-.653c0-.254.107-.48.267-.667a.937.937 0 01.666-.267c.254 0 .494.094.667.267zm2.493-2.08v5.893c0 .6-.48 1.08-1.08 1.08H1.27a1.266 1.266 0 01-1.267-1.266v-7.8c0-.88.72-1.6 1.6-1.6h7.374c.733 0 1.293.6 1.293 1.333v.8h.24c.827 0 1.493.733 1.493 1.56zM.99 2.267c0 .293.24.533.533.533h7.68v-.827a.239.239 0 00-.24-.24h-7.44a.535.535 0 00-.533.534zm9.947 2.093c0-.227-.187-.493-.427-.493H1.283c-.12 0-.213.16-.213.28v5.92c0 .106.093.2.2.2h9.653c.014 0 .014-.014.014-.014V4.36z"
        fill="#070821"
      />
    </Svg>
  );
}

export default WalletIcon;