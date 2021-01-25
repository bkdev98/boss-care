import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface StarIconProps extends SvgProps {
  isEmpty?: boolean;
  isHalf?: boolean;
}

function StarIcon({isHalf, isEmpty, ...props}: StarIconProps) {
  function renderStar() {
    if (isHalf) {
      return (
        <>
          <Path
            d="M6 .809l1.11 3.414.055.173h3.772l-2.904 2.11-.147.107.056.172 1.11 3.415-2.905-2.11L6 7.983l-.147.107-2.904 2.11 1.11-3.415.055-.172-.147-.107-2.904-2.11h3.772l.056-.173L6 .81z"
            stroke="#E4E3F3"
            strokeWidth={0.5}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0L4.653 4.146H.293L3.82 6.708l-1.347 4.146L6 8.292V0z"
            fill="#FFCF6F"
          />
        </>
      );
    }

    if (isEmpty) {
      return (
        <Path
          d="M6 .809l1.11 3.414.055.173h3.772l-2.904 2.11-.147.107.056.172 1.11 3.415-2.905-2.11L6 7.983l-.147.107-2.904 2.11 1.11-3.415.055-.172-.147-.107-2.904-2.11h3.772l.056-.173L6 .81z"
          stroke="#E4E3F3"
          strokeWidth={0.5}
        />
      );
    }

    return (
      <Path
        d="M6 0l1.347 4.146h4.36L8.18 6.708l1.347 4.146L6 8.292l-3.527 2.562L3.82 6.708.294 4.146h4.359L6 0z"
        fill="#FFCF6F"
      />
    );
  }

  return (
    <Svg width={12} height={11} viewBox="0 0 12 11" fill="none" {...props}>
      {renderStar()}
    </Svg>
  );
}

export default StarIcon;
