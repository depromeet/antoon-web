import { MyPageCoin } from '@assets/icons';

import {
  CoinWrap,
  CoinAmount,
  Coins,
  Text,
  TextGuide,
} from '@domains/user/mypage/coin/Coin.style';

function Coin({ coin }: { coin: number }) {
  return (
    <CoinWrap>
      <div>
        <CoinAmount>
          <Coins>{coin}</Coins>
          <Text>ANT</Text>
        </CoinAmount>
        <TextGuide>보유 안트코인</TextGuide>
      </div>
      <MyPageCoin />
    </CoinWrap>
  );
}

export default Coin;
