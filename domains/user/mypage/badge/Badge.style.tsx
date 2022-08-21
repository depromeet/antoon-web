import styled from '@emotion/styled';

const BadgeWrap = styled.div`
  margin: 1.2rem 0 0;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_100};
  padding: 1.2rem 2rem;
  width: 100%;
`;

const UpperWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BadgeDataWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Badge = styled.span`
  margin: 0 0 0 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const DefaultBadge = styled.span`
  margin: 0 0 0 1rem;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
  font-size: 1.6rem;
  font-weight: 600;
`;

const BadgeInfo = styled.button`
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.2rem;
  font-weight: 500;
`;

const LowerWrap = styled.div<{ width: string }>`
  margin: ${(props) =>
    props.width === '0%' ? '1.6rem 0 0' : 'margin: 0.3rem 0 0'};
  width: 100%;
`;

const CoinWrap = styled.div<{ width: string }>`
  display: ${(props) => (props.width === '0%' ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-end;
  width: ${(props) => props.width};
`;

const Coin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1rem;
  font-weight: 500;

  svg {
    margin: 0.2rem 0 0;
  }
`;

const ProgressBar = styled.div`
  margin: 0.4rem auto 0;
  border-radius: 2.4rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_300};
  width: 100%;
  height: 0.6rem;
`;

const NextBadgeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem auto 0;
  width: 100%;
`;

const CoinStatus = styled.div<{ width: string }>`
  z-index: 100;
  border-radius: 2.4rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  width: ${(props) => props.width};
  height: 0.6rem;
`;

const NextBadge = styled.span`
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 1rem;
  font-weight: 500;
`;

export {
  BadgeWrap,
  UpperWrap,
  BadgeDataWrap,
  Badge,
  DefaultBadge,
  BadgeInfo,
  LowerWrap,
  CoinWrap,
  Coin,
  ProgressBar,
  CoinStatus,
  NextBadgeWrap,
  NextBadge,
};
