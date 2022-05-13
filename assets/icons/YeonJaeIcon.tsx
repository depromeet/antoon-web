/* eslint-disable react/display-name */
import React from 'react';

import Icon from './Icon';

import type { IconProps } from '@_types/icon-type';

// eslint-disable-next-line react/display-name
const YeonJaeIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props} cursor="pointer">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="15"
        rx="2"
        stroke="#B6BCC7"
        strokeWidth="2"
      />
      <path
        d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
        fill="#B6BCC7"
      />
      <path
        d="M7 3L7 6"
        stroke="#B6BCC7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 3L17 6"
        stroke="#B6BCC7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </Icon>
));

export default YeonJaeIcon;
