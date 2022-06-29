import styled from '@emotion/styled';

const Button = styled.button`
  margin-left: -1rem;
  border-radius: 0.6rem;
  background-color: #ffe3d9;
  padding: 0.4rem 0.8rem;
  width: max-content;
  color: ${(props) => props.theme.colors.secondary.red};
  font-size: 1.2rem;
  font-weight: 500;
`;

/* TODO: 탑승하기 기능 구현*/
function CharacterJoinButton() {
  return <Button>탑승하기</Button>;
}

export default CharacterJoinButton;
