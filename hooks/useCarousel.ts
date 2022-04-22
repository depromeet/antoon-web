/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, RefObject } from 'react';

function useCarousel(ref: RefObject<HTMLDivElement>) {
  useEffect(() => {
    let scrollValue: number,
      moved: number,
      startX: number,
      isMouseDown = false;

    if (ref.current) {
      const carouselMouseDown = (e: MouseEvent) => {
        startX = e.pageX - ref.current!.offsetLeft;
        scrollValue = ref.current!.scrollLeft;

        isMouseDown = true;
      };

      const carouselMouseMove = (e: MouseEvent) => {
        if (isMouseDown) {
          moved = (e.pageX - ref.current!.offsetLeft - startX) * 1.3;

          ref.current!.scrollLeft = scrollValue - moved;
        }
      };

      const carouselMouseUp = () => {
        if (isMouseDown) {
          isMouseDown = false;
        }
      };

      const carouselMouseLeave = () => {
        if (isMouseDown) {
          isMouseDown = false;
        }
      };

      ref.current.addEventListener('mousedown', carouselMouseDown);
      ref.current.addEventListener('mousemove', carouselMouseMove);
      ref.current.addEventListener('mouseup', carouselMouseUp);
      ref.current.addEventListener('mouseleave', carouselMouseLeave);
    }
  });
}

export default useCarousel;
