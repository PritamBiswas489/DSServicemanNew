import appColors from '@theme/appColors';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Person(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M10.1331 9.05866C10.0498 9.05033 9.9498 9.05033 9.85814 9.05866C7.8748 8.99199 6.2998 7.36699 6.2998 5.36699C6.2998 3.32533 7.9498 1.66699 9.9998 1.66699C12.0415 1.66699 13.6998 3.32533 13.6998 5.36699C13.6915 7.36699 12.1165 8.99199 10.1331 9.05866Z"
        stroke={props.color ? props.color : appColors.lightText}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.9666 12.133C3.94993 13.483 3.94993 15.683 5.9666 17.0247C8.25827 18.558 12.0166 18.558 14.3083 17.0247C16.3249 15.6747 16.3249 13.4747 14.3083 12.133C12.0249 10.608 8.2666 10.608 5.9666 12.133Z"
        stroke={props.color ? props.color : appColors.lightText}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}