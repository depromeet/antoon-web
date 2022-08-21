import React from 'react';

import {
  Division,
  CoinUsageWrap,
  TextWrap,
  Date,
  Reason,
  RemittanceType,
  AmountWrap,
  Amount,
  Wallet,
} from '@domains/user/mypage/coin/CoinUsage.style';

import { ICoins } from '@_types/user-type';

function CoinUsage({ coin }: { coin: ICoins }) {
  const sign = coin.status === 'PLUS' ? '+' : '-';

  return (
    <>
      <Division />
      <CoinUsageWrap>
        <TextWrap>
          <Date>{coin.date}</Date>
          <div>
            <Reason>{coin.reason}</Reason>
            <RemittanceType>{coin.remittanceType}</RemittanceType>
          </div>
        </TextWrap>
        <AmountWrap>
          <Amount sign={sign}>
            {sign}
            {coin.amount}
          </Amount>
          <Wallet>{coin.wallet}</Wallet>
        </AmountWrap>
      </CoinUsageWrap>
    </>
  );
}

export default CoinUsage;
