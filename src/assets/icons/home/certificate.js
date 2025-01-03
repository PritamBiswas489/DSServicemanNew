import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Certificate(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 12.4993C13.1066 12.4993 15.625 10.0742 15.625 7.08268C15.625 4.09114 13.1066 1.66602 10 1.66602C6.8934 1.66602 4.375 4.09114 4.375 7.08268C4.375 10.0742 6.8934 12.4993 10 12.4993Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={'1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.26613 11.2672L6.25781 17.4172C6.25781 18.1672 6.78282 18.5339 7.43282 18.2255L9.66614 17.1672C9.84948 17.0755 10.1578 17.0755 10.3411 17.1672L12.5828 18.2255C13.2245 18.5255 13.7578 18.1672 13.7578 17.4172V11.1172"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={'1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
