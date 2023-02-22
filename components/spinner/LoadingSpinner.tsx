import styled from '@emotion/styled';
import MoonLoader from 'react-spinners/MoonLoader';

const Wrapper = styled.div<{ height?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height}px;
`;

function LoadingSpinner({ height }: { height?: number }) {
  return (
    <Wrapper height={height}>
      <MoonLoader size={20} />
    </Wrapper>
  );
}

export default LoadingSpinner;
