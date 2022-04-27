import {
  CommentTextInputWrapper,
  TextAreaWrapper,
  TextArea,
  ProfileWrapper,
  ByteCheckArea,
  Profile,
  ProfileName,
} from '@components/detail/commentTextInput/CommentTextInput.style';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  length: number;
}

function CommentTextInput(props: Props) {
  const textareaRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const placeHolderText = `${props.length}번째 행진에 동참해 보세요!`;

  const focusHandler = () => {
    setFocused(true);
  };

  return (
    <CommentTextInputWrapper>
      <ProfileWrapper>
        <Profile>
          <Image
            src="https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png"
            alt="프로필"
            width={20}
            height={20}
          />
          <ProfileName>{'ae-혜린개미'}</ProfileName>
        </Profile>
        <ByteCheckArea>{'0 / 300'}</ByteCheckArea>
      </ProfileWrapper>
      <TextAreaWrapper>
        <TextArea
          ref={textareaRef}
          placeholder={placeHolderText}
          onFocus={focusHandler}
        />
      </TextAreaWrapper>
    </CommentTextInputWrapper>
  );
}

export default CommentTextInput;
