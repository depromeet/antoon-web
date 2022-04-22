import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { CarouselWrapper } from './Carousel.style';

interface Props {
  ref: ForwardedRef<HTMLDivElement>;
  children: React.ReactNode;
}

function Carousel<T>(
  props: PropsWithChildren<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return <CarouselWrapper ref={ref}>{props.children}</CarouselWrapper>;
}

export default forwardRef<HTMLDivElement, Props>(Carousel);
