import React, { useState, useEffect } from 'react';

import { useGetCoins, useGetProfile } from '@apis/user';

import Header from '@components/layout/Header/Header';
import ErrorBoundary from '@components/ErrorBoundary';

import CoinHistory from '@domains/user/mypage/coin/CoinHistory';

import { ICoins } from '@_types/user-type';

function Coins() {
  const { data: coinData } = useGetCoins();
  const { data: walletData } = useGetProfile();

  const [coins, setCoins] = useState<ICoins[]>([]);
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    coinData && setCoins(coinData.history);
    walletData && setWallet(walletData.wallet);
  }, [coinData, walletData]);

  return (
    <>
      <Header left="뒤로가기" title="안트코인 내역" right="없음" />
      <ErrorBoundary message="코인 히스토리를 불러오지 못하고 있어요 😭😭😭">
        <CoinHistory coins={coins} wallet={wallet} />
      </ErrorBoundary>
    </>
  );
}

export default Coins;
