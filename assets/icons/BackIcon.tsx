import { memo } from 'react';

const BackIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6196 3.49006C16.1296 3.00006 15.3396 3.00006 14.8496 3.49006L6.53957 11.8001C6.14957 12.1901 6.14957 12.8201 6.53957 13.2101L14.8496 21.5201C15.3396 22.0101 16.1296 22.0101 16.6196 21.5201C17.1096 21.0301 17.1096 20.2401 16.6196 19.7501L9.37957 12.5001L16.6296 5.25006C17.1096 4.77006 17.1096 3.97006 16.6196 3.49006Z"
        fill="black"
      />
    </svg>
  );
};

export default memo(BackIcon);
