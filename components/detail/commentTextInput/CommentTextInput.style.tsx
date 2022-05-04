import styled from '@emotion/styled';

const CommentTextInputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.grey_260};
  padding-top: 5px;
  padding-bottom: 0;
  padding-left: 10px;
  width: 100%;
  height: auto;
`;

const ProfileWrapper = styled.div<{ isShow: boolean }>`
  /* stylelint-disable-next-line */
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  padding: 10px;
  height: 40px;
`;

const Profile = styled.div`
  border: none;
  vertical-align: middle;

  & img {
    border-radius: 50%;
  }
`;

const ProfileName = styled.p`
  display: inline-block;
  margin-left: 10px;
  vertical-align: super;
  color: ${(props) => props.theme.colors.grey_900};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
`;

const ContentCheckArea = styled.p`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${(props) => props.theme.colors.grey_450};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const TextAreaWrapper = styled.div``;

const TextArea = styled.textarea`
  transition: height 0.5s ease;
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.grey_260};
  padding: 10px;
  width: 100%;
  height: 38px;
  resize: none;
  color: ${(props) => props.theme.colors.black};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey_350};
  }
`;

const SubmitButton = styled.button<{ isShow: boolean }>`
  /* stylelint-disable-next-line */
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  position: absolute;
  right: 18px;
  bottom: 15px;
  transition: height 0.5s ease;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.grey_350};
  padding: 4px;
  width: 50px;
  height: 28px;
  color: ${(props) => props.theme.colors.grey_150};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${(props) => props.theme.colors.grey_900};
  }
`;

export {
  CommentTextInputWrapper,
  TextAreaWrapper,
  TextArea,
  ProfileWrapper,
  Profile,
  ProfileName,
  ContentCheckArea,
  SubmitButton,
};
