import styled from '@emotion/styled';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(0 0 0 / 50%);
`;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.basic.white};
  width: 31.2rem;
  height: 26.5rem;
  user-select: none;
  text-align: center;
`;

const UserName = styled.p`
  margin: 0 0 0.6rem;
  line-height: 2.3rem;
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: 800;
`;

const Introduce = styled.p`
  margin: 0 0 2.4rem;
  line-height: 1.9rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.4rem;
  font-weight: 400;
`;

const StartBtn = styled.button`
  margin: 3.2rem 0 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 26.4rem;
  height: 4.8rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
`;

export { Background, ModalContainer, UserName, Introduce, StartBtn };
