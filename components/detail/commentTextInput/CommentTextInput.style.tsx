import styled from '@emotion/styled';

const CommentTextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 0px;
  padding-left: 10px;
  background: ${(props) => props.theme.colors.grey_260};
  border-radius: 10px;
`;

const ProfileWrapper = styled.div<any>`
  height: 40px;
  padding: 10px;
  display: ${(props) => (props.isShow ? 'block' : 'none')};
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
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  vertical-align: super;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.grey_900};
`;

const ContentCheckArea = styled.p`
  position: absolute;
  right: 16px;
  top: 16px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey_450};
`;

const TextAreaWrapper = styled.div``;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 38px;
  border: none;
  resize: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.grey_260};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};

  -moz-transition: height 0.5s ease;
  -webkit-transition: height 0.5s ease;
  -o-transition: height 0.5s ease;
  transition: height 0.5s ease;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.grey_350};
  }
`;

const SubmitButton = styled.button<any>`
  position: absolute;
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  width: 50px;
  height: 28px;
  bottom: 15px;
  right: 18px;
  border-radius: 8px;
  padding: 4px;
  background: ${(props) => props.theme.colors.grey_350};
  color: ${(props) => props.theme.colors.grey_150};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
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
