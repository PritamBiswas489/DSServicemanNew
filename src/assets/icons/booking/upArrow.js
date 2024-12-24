import React from 'react';
import Svg, {Path} from 'react-native-svg';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';

export function UpArrow() {
  const {isDark} = useValues();
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24">
      <Path
        fill={isDark ? appColors.white : appColors.darkText}
        d="m12 4.836l-6.207 6.207l1.414 1.414L12 7.664l4.793 4.793l1.414-1.414zm0 5.65l-6.207 6.207l1.414 1.414L12 13.314l4.793 4.793l1.414-1.414z"></Path>
    </Svg>
  );
}