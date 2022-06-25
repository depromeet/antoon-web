const FooterMyPageIcon = ({ isMyPage }: { isMyPage: boolean }) => {
  switch (isMyPage) {
    case true:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            fill="#1C1C1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
            fill="#1C1C1C"
          />
          <path
            d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21H4V20Z"
            fill="#1C1C1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 20C3 16.134 6.13401 13 10 13H14C17.866 13 21 16.134 21 20V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V20ZM10 15C7.23858 15 5 17.2386 5 20H19C19 17.2386 16.7614 15 14 15H10Z"
            fill="#1C1C1C"
          />
        </svg>
      );
    case false:
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
            d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
            fill="#1C1C1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 20C3 16.134 6.13401 13 10 13H14C17.866 13 21 16.134 21 20V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V20ZM10 15C7.23858 15 5 17.2386 5 20H19C19 17.2386 16.7614 15 14 15H10Z"
            fill="#1C1C1C"
          />
        </svg>
      );
  }
};

export default FooterMyPageIcon;
