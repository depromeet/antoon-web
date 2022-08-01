import styled from '@emotion/styled';

const UserDataWrap = styled.div`
  display: flex-start;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    width: 2.4rem;
    height: 2.3rem;
  }
`;

const UserName = styled.div`
  margin: 0 0 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const UserDefaultName = styled.div`
  margin: 0 0 0 1.2rem;
  line-height: 2.304rem;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1.6rem;
  font-weight: 700;
`;

const UserProfileDataWrap = styled.div`
  display: flex;
  align-items: center;
`;

const EditNameWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export {
  UserDataWrap,
  UserName,
  UserDefaultName,
  UserProfileDataWrap,
  EditNameWrap,
};
