/* eslint-disable react/display-name */
import React from 'react';

import type { IconProps } from '@_types/icon-type';

const BackIcon: React.FC<IconProps> = React.memo(() => (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
  >
    <path
      d="M9.65669 0.313349C9.2005 -0.10445 8.46502 -0.10445 8.00884 0.313349L0.272314 7.39888C-0.0907715 7.73141 -0.0907715 8.26858 0.272314 8.60112L8.00884 15.6867C8.46502 16.1045 9.2005 16.1045 9.65669 15.6867C10.1129 15.2689 10.1129 14.5953 9.65669 14.1775L2.91632 7.99574L9.666 1.81402C10.1129 1.40474 10.1129 0.722622 9.65669 0.313349Z"
      fill="black"
    />
  </svg>
));

export default BackIcon;
