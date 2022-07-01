import { useState } from 'react';

import ChebronRightIcon from '@assets/icons/ChebronRightIcon';

import SignoutModal from './SignoutModal';
import CustomHr from '@components/line/CustomHr';

import { SignoutButton } from './SignoutBtn.style';

function SignoutBtn() {
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
      <SignoutButton onClick={() => onClickModal()}>
        <span>로그아웃</span>
        <ChebronRightIcon />
      </SignoutButton>
    </>
  );
}

export default SignoutBtn;
