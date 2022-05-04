/* eslint-disable react/display-name */
import React from 'react';

import Icon from './Icon';

import type { IconProps } from '@_types/icon-type';
import { DEFAULT_COLOR } from '@constants/icon-constants';

// eslint-disable-next-line react/display-name
const StarIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill={DEFAULT_COLOR.STAR}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  </Icon>
));

export default StarIcon;
