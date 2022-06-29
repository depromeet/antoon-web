import styled from '@emotion/styled';

const CommentTextInputWrapper = styled.div<{ isOver: boolean }>`
  position: relative;
  margin-bottom: 40px;
  border: 1.5px solid
    ${(props) =>
      props.isOver
        ? props.theme.colors.chart.point_up_100
        : props.theme.colors.primary.gray_300};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primary.gray_300};
  padding-top: 5px;
  padding-bottom: 0;
  padding-left: 5px;
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
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 12px;
  font-weight: 700;
`;

const ContentCheckArea = styled.p<{ isOver: boolean }>`
  position: absolute;
  right: 20px;
  bottom: -25px;
  color: ${(props) =>
    props.isOver
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.grayscale.gray_700};
  font-size: 12px;
  font-weight: 400;
`;

const ContentCheckMsg = styled.p<{ isOver: boolean }>`
  position: absolute;
  bottom: -25px;
  left: 10px;
  opacity: ${(props) => (props.isOver ? 1 : 0)};
  color: ${(props) => props.theme.colors.chart.point_up_100};
  font-size: 12px;
`;

const TextAreaWrapper = styled.div``;

const TextArea = styled.textarea<{ isShow: boolean }>`
  transition: height 0.5s ease;
  outline: none;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primary.gray_300};
  padding: 10px;
  width: 100%;
  height: 38px;
  resize: none;
  color: ${(props) => props.theme.colors.basic.black};
  font-size: 14px;
  font-weight: 400;
  font-style: normal;

  ::placeholder {
    color: ${(props) => props.theme.colors.grayscale.gray_500};
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
  background: ${(props) => props.theme.colors.grayscale.gray_500};
  padding: 4px;
  width: 50px;
  height: 28px;
  color: ${(props) => props.theme.colors.primary.gray_100};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  :hover {
    background: ${(props) => props.theme.colors.grayscale.gray_800};
  }
`;

const NoLoginTextArea = styled.div`
  margin-top: 25px;
  cursor: pointer;
  height: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 12px;
  font-weight: 700;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colors.grayscale.gray_800};
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
  ContentCheckMsg,
  NoLoginTextArea,
};
