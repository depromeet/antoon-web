import { memo } from 'react';
import styled from '@emotion/styled';

const DeleteIcon = ({ onResetInput }: { onResetInput: () => void }) => {
  return (
    <DeleteWrap onClick={onResetInput}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          <circle cx="10.0003" cy="10.0001" r="8.33333" fill="#AEAEAE" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.11666 7.1169C7.32819 6.90537 7.67116 6.90537 7.88269 7.1169L12.8827 12.1169C13.0942 12.3284 13.0942 12.6714 12.8827 12.8829C12.6712 13.0945 12.3282 13.0945 12.1167 12.8829L7.11666 7.88293C6.90512 7.6714 6.90512 7.32844 7.11666 7.1169Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.11666 12.8831C6.90512 12.6716 6.90512 12.3286 7.11666 12.1171L12.1167 7.11706C12.3282 6.90553 12.6712 6.90553 12.8827 7.11706C13.0942 7.3286 13.0942 7.67156 12.8827 7.8831L7.88269 12.8831C7.67116 13.0946 7.32819 13.0946 7.11666 12.8831Z"
            fill="white"
          />
        </g>
      </svg>
    </DeleteWrap>
  );
};

const DeleteWrap = styled.button`
  position: absolute;
  right: 0;
  z-index: 10;
  padding: 1rem;
`;

export default memo(DeleteIcon);
