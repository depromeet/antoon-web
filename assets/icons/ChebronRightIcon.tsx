import React, { memo } from 'react';

const ChebronRightIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.28957 6.70978C8.89957 7.09978 8.89957 7.72978 9.28957 8.11978L13.1696 11.9998L9.28957 15.8798C8.89957 16.2698 8.89957 16.8998 9.28957 17.2898C9.67957 17.6798 10.3096 17.6798 10.6996 17.2898L15.2896 12.6998C15.6796 12.3098 15.6796 11.6798 15.2896 11.2898L10.6996 6.69978C10.3196 6.31978 9.67957 6.31978 9.28957 6.70978Z"
        fill="#B6BCC7"
      />
    </svg>
  );
};

export default memo(ChebronRightIcon);
