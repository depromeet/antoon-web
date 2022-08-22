import styled from '@emotion/styled';

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    width: 2.4rem;
    height: 2.3rem;
  }
`;

const EditNameWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.div`
  margin: 0 0 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const DefaultName = styled.div`
  margin: 0 0 0 1.2rem;
  line-height: 2.304rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.6rem;
  font-weight: 700;
`;

export { ProfileWrap, EditNameWrap, Name, DefaultName };
