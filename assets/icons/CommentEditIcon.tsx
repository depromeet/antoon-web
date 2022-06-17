import { memo } from 'react';

const CommentEditIcon = ({
  onClickCommentEdit,
}: {
  onClickCommentEdit: () => void;
}) => {
  return (
    <button onClick={onClickCommentEdit}>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99935 7.16663C3.26602 7.16663 2.66602 7.76663 2.66602 8.49996C2.66602 9.23329 3.26602 9.83329 3.99935 9.83329C4.73268 9.83329 5.33268 9.23329 5.33268 8.49996C5.33268 7.76663 4.73268 7.16663 3.99935 7.16663ZM11.9993 7.16663C11.266 7.16663 10.666 7.76663 10.666 8.49996C10.666 9.23329 11.266 9.83329 11.9993 9.83329C12.7327 9.83329 13.3327 9.23329 13.3327 8.49996C13.3327 7.76663 12.7327 7.16663 11.9993 7.16663ZM7.99935 7.16663C7.26602 7.16663 6.66602 7.76663 6.66602 8.49996C6.66602 9.23329 7.26602 9.83329 7.99935 9.83329C8.73268 9.83329 9.33268 9.23329 9.33268 8.49996C9.33268 7.76663 8.73268 7.16663 7.99935 7.16663Z"
          fill="#A0A5B1"
        />
      </svg>
    </button>
  );
};

export default memo(CommentEditIcon);