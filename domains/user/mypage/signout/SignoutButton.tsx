import { useState } from 'react';

import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import SignoutModal from '@domains/user/mypage/signout/SignoutModal';
import CustomHr from '@components/line/CustomHr';

import { Button } from '@domains/user/mypage/signout/SignoutButton.style';

function SignoutButton() {
  const [modalStatus, setModalStatus] = useState(false);

  const onClickModal = () => {
    setModalStatus(true);
  };

  return (
    <>
      {modalStatus && (
        <SignoutModal
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />
      )}
      <CustomHr margin="2.4rem 0 1.6rem -2.4rem" />
      <Button onClick={() => onClickModal()}>
        <span>로그아웃</span>
        <ChebronRightIcon />
      </Button>
    </>
  );
}

export default SignoutButton;
