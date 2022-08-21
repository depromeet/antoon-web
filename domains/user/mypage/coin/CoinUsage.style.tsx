import styled from '@emotion/styled';

const Division = styled.div`
  margin: 0 0 0 -2.4rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.grayscale.gray_200};
  width: calc(100% + 4.8rem);
`;

const CoinUsageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TextWrap = styled.div`
  display: flex;
`;

const Date = styled.div`
  margin: 0.3rem 1.6rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
`;

const Reason = styled.div`
  display: box;
  width: 100%;
  max-width: 150px;
  overflow: hidden;
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: 600;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;

  @media (min-width: 430px) {
    max-width: 270px;
  }

  @media (min-width: 380px) and (max-width: 429px) {
    max-width: 210px;
  }

  @media (min-width: 320px) and (max-width: 379px) {
    max-width: 150px;
  }

  @media (max-width: 319px) {
    max-width: 120px;
  }
`;

const RemittanceType = styled.div`
  margin: 0.5rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
`;

const AmountWrap = styled.div`
  margin: 0 0 0 1.2rem;
  text-align: right;
`;

const Amount = styled.div<{ sign: string }>`
  color: ${(props) =>
    props.sign === '+'
      ? props.theme.colors.secondary.red
      : props.theme.colors.secondary.blue};
  font-size: 1.6rem;
  font-weight: 600;
`;

const Wallet = styled.div`
  margin: 0.5rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
`;

export {
  Division,
  CoinUsageWrap,
  TextWrap,
  Date,
  Reason,
  RemittanceType,
  AmountWrap,
  Amount,
  Wallet,
};
