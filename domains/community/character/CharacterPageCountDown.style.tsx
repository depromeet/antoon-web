import styled from '@emotion/styled';

const TimerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_900};
  padding: 1.2rem 1.6rem;
  width: 26.6rem;
  height: 4.1rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.2rem;
`;

export { TimerWrap };
