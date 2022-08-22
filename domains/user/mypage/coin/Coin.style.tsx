import styled from '@emotion/styled';

const CoinWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.6rem 0 0;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  padding: 1.3rem 2rem;
  width: 100%;
  height: 7rem;
  color: ${(props) => props.theme.colors.basic.white};
`;

const CoinAmount = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Coins = styled.span`
  margin: 0 0.3rem 0 0;
  font-size: 2.4rem;
  font-weight: 800;
`;

const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TextGuide = styled.div`
  margin: 0.2rem 0 0;
  font-size: 1rem;
  font-weight: 500;
`;

export { CoinWrap, CoinAmount, Coins, Text, TextGuide };
