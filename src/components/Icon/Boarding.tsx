import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function BoardingIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.055 19H1.945c-.537 0-1.006.328-1.375.798A3.522 3.522 0 000 21.72V35h2.777v-5.255h34.446V35H40V21.721c0-.75-.201-1.407-.57-1.923-.369-.47-.838-.798-1.375-.798z"
        fill="#FD90AA"
      />
      <Path
        d="M21.861 15.012c-.503 0-.905.347-.905.82v3.152h-1.912V15.83c0-.472-.402-.82-.905-.82H8.684c-.47 0-.872.348-.872.82v3.153H5.767v-8.038c0-.252.1-.505.302-.662.167-.19.436-.284.704-.284h26.454c.269 0 .537.095.704.284.202.157.302.41.302.662v8.038h-2.045V15.83c0-.472-.403-.82-.872-.82h-9.455z"
        fill="#FFC4CD"
      />
    </Svg>
  );
}

export default BoardingIcon;
