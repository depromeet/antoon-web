import React from "react";

import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  DEFAULT_ICON_SIZE,
} from "@constants/icon-constants";

import Child from "@components/Child";

import type { IconProps } from "@_types/icon-type";

const Icon: React.FC<IconProps> = ({
  children,
  width,
  height,
  size = DEFAULT_ICON_SIZE,
  fill = DEFAULT_ICON_FILL,
  stroke = DEFAULT_ICON_STROKE,
  type = "fill",
  ...props
}) => {
  return React.cloneElement(<Child>{children}</Child>, {
    ...(type === "fill" ? { fill } : {}),
    ...(type === "stroke" ? { stroke } : {}),
    width: width ?? size,
    height: height ?? size,
    ...props,
  });
};

export default Icon;
