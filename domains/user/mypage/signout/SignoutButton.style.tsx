import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.secondary.black};
  font-size: 1.6rem;
  font-weight: 600;
`;

export { Button };
