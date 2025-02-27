import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ShareIcon(props: SvgProps) {
  return (
    <Svg width={20} height={16} viewBox="0 0 20 16" fill="none" {...props}>
      <Path
        d="M15.405 14.1v1c0 .44-.38.7-.82.7H1.525c-.44 0-.72-.24-.72-.7V5.2c0-.44.28-.84.72-.84h2.34c.44 0 .8.36.8.8 0 .44-.36.8-.8.8h-1.46v8.24h11.4v-.1c0-.44.36-.8.8-.8.46-.02.8.36.8.8zm3.56-7.46l-4.96 5.06a.806.806 0 01-1.38-.56V8.96c-1.6-.04-5.44.12-6.84 2.58-.14.26-.42.42-.7.42-.06 0-.14 0-.2-.02a.81.81 0 01-.6-.78c0-.66 0-3.22 2.32-5.52 1.46-1.48 3.42-2.28 6.02-2.42V1c0-.32.2-.62.5-.74s.66-.06.88.18l4.98 5.06c.3.32.3.82-.02 1.14zm-1.72-.58l-3.04-3.08v.98c0 .44-.34.8-.8.8-2.48 0-4.38.66-5.68 1.98-.6.6-1 1.26-1.26 1.9 1.88-1.12 4.26-1.32 5.72-1.32.76 0 1.26.06 1.32.06.4.04.7.4.7.8v.98l3.04-3.1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ShareIcon;
