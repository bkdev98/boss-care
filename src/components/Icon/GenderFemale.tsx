import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import theme from '@theme';

interface GenderFemaleIconProps extends SvgProps {
  isActive?: boolean;
}

function GenderFemaleIcon(props: GenderFemaleIconProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.294 14.03a4.93 4.93 0 002.058.768l-.013 2.166-1.151-.006a.647.647 0 10-.008 1.293l1.152.006-.009 1.428a.647.647 0 001.293.008l.009-1.428 1.151.006a.647.647 0 10.008-1.292l-1.152-.007.013-2.166c1.39-.175 2.7-.93 3.53-2.19a4.974 4.974 0 00-1.413-6.882A4.974 4.974 0 007.88 7.148a4.973 4.973 0 001.414 6.882zm4.756-7.217a3.68 3.68 0 011.046 5.091 3.68 3.68 0 01-5.09 1.046 3.68 3.68 0 01-1.047-5.09 3.679 3.679 0 015.091-1.047z"
        fill={!props.isActive ? '#FD90AA' : theme.colors.text_contrast}
      />
    </Svg>
  );
}

export default GenderFemaleIcon;
