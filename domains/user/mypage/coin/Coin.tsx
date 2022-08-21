import { useRouter } from 'next/router';

import { MyPageCoin, ChebronRightWhite } from '@assets/icons';

import {
  CoinWrap,
  CoinAmount,
  Coins,
  Text,
  ButtonWrap,
  TextGuide,
} from '@domains/user/mypage/coin/Coin.style';

function Coin({ coin }: { coin: number }) {
  const router = useRouter();

  return (
    <CoinWrap>
      <div>
        <CoinAmount onClick={() => router.push('/user/mypage/coins')}>
          <Coins>{coin}</Coins>
          <Text>ANT</Text>
          {0 < coin && (
            <ButtonWrap>
              <ChebronRightWhite />
            </ButtonWrap>
          )}
        </CoinAmount>
        <TextGuide>보유 안트코인</TextGuide>
      </div>
      <MyPageCoin />
    </CoinWrap>
  );
}

export default Coin;
