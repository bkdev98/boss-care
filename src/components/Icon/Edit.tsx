import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function EditIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20.49 5.06l-.557-.556A1.71 1.71 0 0018.716 4c-.47 0-.887.174-1.218.504L6.51 15.511a.589.589 0 00-.156.244L5.048 19.04a.698.698 0 00.157.747c.14.14.313.21.487.21a.697.697 0 00.26-.053l3.304-1.287a.73.73 0 00.244-.156L20.507 7.495c.66-.66.66-1.756-.018-2.434zM7.57 16.468l.973.974-1.617.626.644-1.6zm11.928-9.946L9.9 16.12 8.89 15.11l9.599-9.616a.354.354 0 01.243-.104c.052 0 .157.017.243.104l.557.557c.104.122.104.33-.035.47z"
        fill="#4552CB"
      />
    </Svg>
  );
}

export default EditIcon;
