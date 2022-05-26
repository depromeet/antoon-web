import { memo } from 'react';

const ProfileDefaultImg = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#CACFD8" />
      <path
        d="M12.0013 12.0001C13.4746 12.0001 14.668 10.8067 14.668 9.33341C14.668 7.86008 13.4746 6.66675 12.0013 6.66675C10.528 6.66675 9.33464 7.86008 9.33464 9.33341C9.33464 10.8067 10.528 12.0001 12.0013 12.0001ZM12.0013 13.3334C10.2213 13.3334 6.66797 14.2267 6.66797 16.0001V16.6667C6.66797 17.0334 6.96797 17.3334 7.33464 17.3334H16.668C17.0346 17.3334 17.3346 17.0334 17.3346 16.6667V16.0001C17.3346 14.2267 13.7813 13.3334 12.0013 13.3334Z"
        fill="#F6F6FA"
      />
    </svg>
  );
};

export default memo(ProfileDefaultImg);
