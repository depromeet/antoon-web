import {
  CommentTextInputWrapper,
  TextAreaWrapper,
  TextArea,
  ProfileWrapper,
  ContentCheckArea,
  Profile,
  ProfileName,
  SubmitButton,
} from '@components/detail/commentTextInput/CommentTextInput.style';
import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  length: number;
}

function CommentTextInput(props: Props) {
  const MAX_LENGTH_CONTENT = 300;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);
  const [content, setContent] = useState('');

  const placeHolderText =
    Number(props.length) > 0
      ? `${props.length + 1}번째 행진에 동참해 보세요!`
      : '첫 번째 행진에 동참해 보세요!';

  const ContentCheckHandler = useCallback(
    (text) => {
      setContent(text.slice(0, MAX_LENGTH_CONTENT));
    },
    [MAX_LENGTH_CONTENT, setContent],
  );

  const focusHandler = () => {
    if (!focused && textareaRef.current != null) {
      textareaRef.current.style.height = `${
        textareaRef.current.offsetHeight * 4
      }px`;
    }
    setFocused(true);
  };

  return (
    <CommentTextInputWrapper>
      <ProfileWrapper isShow={focused}>
        <Profile>
          <Image
            src="https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png"
            alt="프로필"
            width={20}
            height={20}
          />
          <ProfileName>{'ae-혜린개미'}</ProfileName>
        </Profile>
        <ContentCheckArea>
          {content.length} / {MAX_LENGTH_CONTENT}
        </ContentCheckArea>
      </ProfileWrapper>
      <TextAreaWrapper>
        <TextArea
          ref={textareaRef}
          placeholder={placeHolderText}
          onFocus={focusHandler}
          value={content}
          onChange={(e) => ContentCheckHandler(e.target.value)}
        />
        <SubmitButton isShow={focused}>등록</SubmitButton>
      </TextAreaWrapper>
    </CommentTextInputWrapper>
  );
}

export default CommentTextInput;
