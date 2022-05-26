import { memo } from 'react';

const SearchIcon: React.VFC<React.SVGProps<SVGSVGElement>> = ({
  stroke,
}: {
  stroke?: string;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11Z"
        fill={`${stroke ? stroke : '#1C1C1C'}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9433 15.9428C16.3339 15.5523 16.967 15.5523 17.3575 15.9428L21.2072 19.7929C21.5977 20.1835 21.5976 20.8167 21.2071 21.2072C20.8165 21.5977 20.1833 21.5976 19.7928 21.2071L15.9432 17.357C15.5527 16.9664 15.5528 16.3333 15.9433 15.9428Z"
        fill={`${stroke ? stroke : '#1C1C1C'}`}
      />
    </svg>
  );
};

export default memo(SearchIcon);
