import {
  CommentTextInputWrapper,
  TextAreaWrapper,
  TextArea,
  ProfileWrapper,
  ContentCheckArea,
  Profile,
  ProfileName,
  SubmitButton,
  ContentCheckMsg,
  NoLoginTextArea,
} from '@components/detail/commentTextInput/CommentTextInput.style';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useGetUserInformation } from '@apis/user';
import { usePostCommentsById } from '@apis/comments';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import OnError from '@components/OnError';
import { CommentType } from '@_types/comments-type';

interface Props {
  length: number;
  id: number;
  commentType: CommentType;
}

function CommentTextInput(props: Props) {
  const { data: user, isError } = useGetUserInformation();
  const MAX_LENGTH_CONTENT = 300;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);
  const [content, setContent] = useState('');
  const [isOver, setIsOver] = useState(false);

  const {
    isLoading,
    isSuccess,
    error,
    mutate: postData,
  } = usePostCommentsById(props.commentType, props.id, content);

  useEffect(() => {
    if (content.length >= MAX_LENGTH_CONTENT && textareaRef.current?.focus())
      setIsOver(true);
    else {
      setIsOver(false);
    }
  }, [content]);

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
        textareaRef.current.offsetHeight * 6
      }px`;
    }
    setFocused(true);
  };

  const onSubmitReply = () => {
    try {
      postData();
      setContent('');
      setFocused(false);
    } catch (e) {
      console.log(e);
    }
  };

  const goLoginPage = () => {
    window.location.replace('/user/signin');
  };

  const getIsOver = () => {
    return content.length >= MAX_LENGTH_CONTENT ? true : false;
  };

  if (isError) return <OnError>로그인이 필요합니다.</OnError>;

  return (
    <CommentTextInputWrapper isOver={getIsOver()}>
      {user ? (
        <>
          <ProfileWrapper isShow={focused}>
            <Profile>
              <Image
                src={user.imageUrl}
                alt={user.name}
                width={20}
                height={20}
              />
              <ProfileName>{user.name}</ProfileName>
            </Profile>
            <ContentCheckMsg isOver={getIsOver()}>
              최대 300자까지 입력 가능합니다.
            </ContentCheckMsg>
            <ContentCheckArea isOver={getIsOver()}>
              {content.length} / {MAX_LENGTH_CONTENT}
            </ContentCheckArea>
          </ProfileWrapper>
          <TextAreaWrapper>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <TextArea
                ref={textareaRef}
                placeholder={placeHolderText}
                onFocus={focusHandler}
                value={content}
                onChange={(e) => ContentCheckHandler(e.target.value)}
                isShow={focused}
              />
            )}
            <SubmitButton isShow={focused} onClick={onSubmitReply}>
              등록
            </SubmitButton>
          </TextAreaWrapper>
        </>
      ) : (
        <NoLoginTextArea onClick={goLoginPage}>
          로그인 후 댓글을 작성해 주세요
        </NoLoginTextArea>
      )}
    </CommentTextInputWrapper>
  );
}

export default CommentTextInput;
