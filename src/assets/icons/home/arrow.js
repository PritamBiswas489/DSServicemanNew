import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Arrow(props) {
  return (
    <Svg
      width={props.width ? props.width : '13'}
      height={props.height ? props.height : '8'}
      viewBox="0 0 13 8"
      fill="none">
      <Path
        d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464467C8.97631 0.269205 8.65973 0.269205 8.46447 0.464467C8.2692 0.659729 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM-4.37114e-08 4.5L12 4.5L12 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
        fill={props.color ? props.color : '#647683'}
      />
    </Svg>
  );
}