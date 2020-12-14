import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SearchIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.362 15.295a6.959 6.959 0 001.524-4.343C17.905 7.124 14.78 4 10.952 4 7.124 4 4 7.124 4 10.952c0 3.829 3.124 6.953 6.952 6.953a6.96 6.96 0 004.343-1.524l3.41 3.41c.152.133.343.209.533.209s.381-.076.533-.229a.759.759 0 000-1.085l-3.41-3.39zM5.524 10.952a5.438 5.438 0 015.428-5.428 5.438 5.438 0 015.429 5.428 5.438 5.438 0 01-5.429 5.429 5.438 5.438 0 01-5.428-5.429z"
        fill="#4552CB"
      />
    </Svg>
  );
}

export default SearchIcon;
