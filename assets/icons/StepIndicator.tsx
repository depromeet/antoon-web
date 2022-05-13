import themes from '@styles/themes/themes';
import { memo } from 'react';

const StepIndicator = (props: { active?: boolean }) => {
  const { active } = props;

  return (
    <svg
      width="14"
      height="3"
      viewBox="0 0 14 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="14"
        height="3"
        rx="1.5"
        fill={active ? themes.colors.secondary.red : '#D9DEE5'}
        style={{ transition: 'all 300ms ease-in-out' }}
      />
    </svg>
  );
};

export default memo(StepIndicator);
