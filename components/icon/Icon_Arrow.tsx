/* eslint-disable react/display-name */
import React from "react";

import Icon from "./Icon";

import type { IconProps } from "@_types/icon-type";

// eslint-disable-next-line react/display-name
const ArrowIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M19 12H6m6-7l-7 7 7 7"></path>
    </svg>
  </Icon>
));

export const ArrowLeftIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowIcon style={{ transform: "rotate(0deg)" }} {...props} />
));

export const ArrowUpIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowIcon style={{ transform: "rotate(90deg)" }} {...props} />
));

export const ArrowRightIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowIcon style={{ transform: "rotate(180deg)" }} {...props} />
));

export const ArrowDownIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowIcon style={{ transform: "rotate(270deg)" }} {...props} />
));
