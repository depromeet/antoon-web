import { KeyboardEvent } from 'react';

import DeleteIcon from '@assets/icons/DeleteIcon';

import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';

import { usePatchName } from '@apis/user';

import {
  InputWrap,
  NameInput,
  CountWrap,
  Warning,
  CountInput,
  EditBtn,
} from './EditName.style';

import { IUser } from '@_types/user-type';

function EditName({ user }: IUser) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState(false);

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  const onChangeInput = useCallback(
    (e) => {
      setName(e.target.value.slice(0, 20));
    },
    [setName],
  );

  const onResetInput = useCallback(() => {
    setName('');
  }, []);

  const { mutate: mutateName } = usePatchName(name);

  const onClickEditName = () => {
    if (!isError) {
      mutateName();
      router.push('/user/mypage');
    }
  };

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && !isError) {
      mutateName();
      router.push('/user/mypage');
    }
  };

  useEffect(() => {
    if (name.length >= 20) {
      setIsError(true);
      setErrorText(true);
    } else if (name.length === 0) {
      setIsError(true);
      setErrorText(false);
    } else {
      setIsError(false);
      setErrorText(false);
    }
  }, [name]);

  return (
    <>
      <InputWrap>
        <NameInput
          value={name}
          onChange={onChangeInput}
          onKeyDown={onKeyDownEnter}
          placeholder="닉네임을 입력해주세요."
          status={errorText}
          autoFocus
        />
        {name && <DeleteIcon onResetInput={onResetInput} />}
      </InputWrap>
      <CountWrap>
        <Warning status={errorText}>최대 20자까지 입력 가능합니다.</Warning>
        <CountInput status={errorText}>{name.length}/20</CountInput>
      </CountWrap>
      <EditBtn isError={isError} onClick={onClickEditName}>
        수정하기
      </EditBtn>
    </>
  );
}

export default EditName;
