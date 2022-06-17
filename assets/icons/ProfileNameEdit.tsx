import { memo } from 'react';
import { useRouter } from 'next/router';

const ProfileNameEdit: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  const router = useRouter();

  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.push('/user/mypage/edit')}
      cursor="pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8067 2.75329C12.0667 3.01329 12.0667 3.43329 11.8067 3.69329L10.8224 4.67759C10.6922 4.80776 10.4811 4.80776 10.351 4.67759L8.32237 2.64899C8.19219 2.51882 8.19219 2.30776 8.32237 2.17759L9.30667 1.19329C9.56667 0.933291 9.98667 0.933291 10.2467 1.19329L11.8067 2.75329ZM0 10.7761C0 10.5993 0.0702376 10.4297 0.195262 10.3047L7.13763 3.36233C7.26781 3.23216 7.47886 3.23216 7.60904 3.36233L9.63763 5.39093C9.76781 5.5211 9.76781 5.73216 9.63763 5.86233L2.69526 12.8047C2.57024 12.9297 2.40067 13 2.22386 13H0.666667C0.298477 13 0 12.7015 0 12.3333V10.7761Z"
        fill="#B4B4B4"
      />
    </svg>
  );
};

export default memo(ProfileNameEdit);
