import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function CheckIcon(props) {
  return (
    <Svg
      width={props.width ? props.width : '25'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 25 20"
      fill="none">
      <Path
        d="M9.09638 20C8.6995 19.9998 8.31765 19.8395 8.02877 19.5519L0.487378 12.0292C0.338948 11.8811 0.219588 11.7036 0.136071 11.5067C0.0525529 11.3099 0.00653823 11.0976 0.000647475 10.8819C-0.00524328 10.6663 0.0291097 10.4515 0.101743 10.2499C0.174376 10.0483 0.283864 9.8638 0.423963 9.70691C0.564062 9.55003 0.732012 9.42385 0.918248 9.33557C1.10448 9.2473 1.30536 9.19866 1.50938 9.19244C1.7134 9.18621 1.91656 9.22252 2.10731 9.29929C2.29805 9.37606 2.47262 9.49179 2.62105 9.63986L9.00973 16.0178L22.2945 0.538974C22.5715 0.216279 22.9584 0.0231026 23.3702 0.00194072C23.7819 -0.0192211 24.1847 0.133365 24.49 0.426132C24.7954 0.7189 24.9781 1.12787 24.9982 1.56306C25.0182 1.99826 24.8738 2.42404 24.5968 2.74673L10.246 19.4603C10.1083 19.6215 9.94161 19.7521 9.75565 19.8445C9.56969 19.9369 9.3682 19.9892 9.16291 19.9984L9.09638 20Z"
        fill={props.color ? props.color : 'white'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : 4}
      />
    </Svg>
  );
}