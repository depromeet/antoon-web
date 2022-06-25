import { MyPageCoin } from '@assets/icons';

import {
  UserCoinWrap,
  CoinAmount,
  Coin,
  Text,
  TextGuide,
} from './UserCoin.style';

function UserCoin({ coin }: { coin: number }) {
  return (
    <UserCoinWrap>
      <div>
        <CoinAmount>
          <Coin>{coin}</Coin>
          <Text>ANT</Text>
        </CoinAmount>
        <TextGuide>보유 안트코인</TextGuide>
      </div>
      <MyPageCoin />
    </UserCoinWrap>
  );
}

export default UserCoin;
