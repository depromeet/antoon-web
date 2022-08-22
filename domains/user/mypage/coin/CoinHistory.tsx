import React, { useState } from 'react';

import { AntCoinIcon } from '@assets/icons';

import CustomHr from '@components/line/CustomHr';
import ErrorBoundary from '@components/ErrorBoundary';

import CoinUsage from '@domains/user/mypage/coin/CoinUsage';
import CoinGuideModal from '@domains/user/mypage/coin/CoinGuideModal';

import {
  WalletText,
  WalletWrap,
  WalletIconWrap,
  Wallet,
  WalletGuide,
} from '@domains/user/mypage/coin/CoinHistory.style';

import { ICoins } from '@_types/user-type';

function CoinHistory({ coins, wallet }: { coins: ICoins[]; wallet: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <CoinGuideModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <ErrorBoundary message="코인 히스토리를 불러오지 못하고 있어요 😭😭😭">
        <>
          <WalletText>보유 안트코인</WalletText>
          <WalletWrap>
            <WalletIconWrap>
              <AntCoinIcon />
              <Wallet>{wallet}</Wallet>
            </WalletIconWrap>
            <WalletGuide onClick={() => onClickModal()}>
              안트코인 가이드
            </WalletGuide>
          </WalletWrap>
          <CustomHr margin="2.4rem 0 0 -2.4rem" />
          {coins.map((coin, index) => (
            <CoinUsage key={String(index)} coin={coin} />
          ))}
        </>
      </ErrorBoundary>
    </>
  );
}

export default CoinHistory;
