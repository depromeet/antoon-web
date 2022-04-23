/* eslint-disable react/display-name */
import React from 'react';

import Icon from './Icon';

import type { IconProps } from '@_types/icon-type';
import { DEFAULT_COLOR } from '@constants/icon-constants';

// eslint-disable-next-line react/display-name
const HeartIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props} cursor="pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ? DEFAULT_COLOR.HEART : 'none'}
      stroke="none"
      viewBox="0 0 512 512"
    >
      <path
        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
        stroke={props.fill ? 'none' : DEFAULT_COLOR.HEART}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></path>
    </svg>
  </Icon>
));

export default HeartIcon;
