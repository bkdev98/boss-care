import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function CalendarIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.205 7.16V4.6c0-.56.44-1 1-1s1 .44 1 1v2.56c0 .56-.44 1-1 1s-1-.44-1-1zm8.6 1c.56 0 1-.44 1-1V4.6c0-.56-.44-1-1-1s-1 .44-1 1v2.56c0 .56.44 1 1 1zm5.4-2.28V19.4c0 .44-.36.8-.8.8h-16.8c-.44 0-.8-.36-.8-.8V5.88c0-.44.36-.88.8-.88h1.86c.44 0 .8.36.8.8 0 .44-.36.8-.8.8h-1.08V10h15.2V6.6h-1.06c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h1.86c.46 0 .82.44.82.88zm-1.6 12.72v-7.2h-15.2v7.2h15.2zm-8.86-12h2.52c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8h-2.52c-.44 0-.8.36-.8.8 0 .44.36.8.8.8z"
        fill={props.color || '#BBC3CE'}
      />
    </Svg>
  );
}

export default CalendarIcon;
