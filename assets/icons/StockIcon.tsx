/* eslint-disable react/display-name */
import React from 'react';

import Icon from './Icon';

import type { IconProps } from '@_types/icon-type';

// eslint-disable-next-line react/display-name
const StockIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props}>
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0417 14.7917L15.2417 13.5917L11.1751 9.52502L8.4334 12.2667C8.1084 12.5917 7.5834 12.5917 7.2584 12.2667L2.2584 7.25835C1.9334 6.93335 1.9334 6.40835 2.2584 6.08335C2.5834 5.75835 3.1084 5.75835 3.4334 6.08335L7.84173 10.5L10.5834 7.75835C10.9084 7.43335 11.4334 7.43335 11.7584 7.75835L16.4167 12.4083L17.6167 11.2083C17.8751 10.95 18.3251 11.1333 18.3251 11.5V15.075C18.3251 15.3083 18.1417 15.4917 17.9084 15.4917H14.3334C13.9667 15.5 13.7834 15.05 14.0417 14.7917Z"
        fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  </Icon>
));

export const StockUpIcon: React.FC<IconProps> = React.memo((props) => (
  <StockIcon style={{ transform: 'rotate(360deg) scaleY(-1)' }} {...props} />
));

export const StockDownIcon: React.FC<IconProps> = React.memo((props) => (
  <StockIcon style={{ transform: 'rotate(0deg)' }} {...props} />
));
