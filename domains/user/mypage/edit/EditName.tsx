import { KeyboardEvent } from 'react';

import DeleteIcon from '@assets/icons/DeleteIcon';

import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';

import { usePatchUserName } from '@apis/user';

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
  const [isMaxLength, setIsMaxLength] = useState(false);

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  const onChangeInput = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName],
  );

  const onResetInput = useCallback(() => {
    setName('');
  }, []);

  const { mutate } = usePatchUserName(name);

  const onClickEditName = () => {
    mutate(name as unknown as void);
    router.push('/user/mypage');
  };

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      mutate(name as unknown as void);
      router.push('/user/mypage');
    }
  };

  useEffect(() => {
    if (name.length >= 20) {
      setIsMaxLength(true);
    } else {
      setIsMaxLength(false);
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
          status={isMaxLength}
          maxLength={20}
          autoFocus
        />
        {name && <DeleteIcon onResetInput={onResetInput} />}
      </InputWrap>
      <CountWrap>
        <Warning status={isMaxLength}>최대 20자까지 입력 가능합니다.</Warning>
        <CountInput status={isMaxLength}>{name.length}/20</CountInput>
      </CountWrap>
      <EditBtn onClick={onClickEditName}>수정하기</EditBtn>
    </>
  );
}

export default EditName;
