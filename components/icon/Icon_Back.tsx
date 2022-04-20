/* eslint-disable react/display-name */
import React from 'react';

import Icon from './Icon';
import type { IconProps } from '@_types/icon-type';
import { DEFAULT_ICON_STROKE } from '@constants/icon-constants';

const BackIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon {...props} type="stroke">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={6}
      stroke={DEFAULT_ICON_STROKE}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="70"
        d="M328 112L184 256l144 144"
      />
    </svg>
  </Icon>
));

export default BackIcon;
