import styled from '@emotion/styled';

const WalletText = styled.p`
  margin: 0.8rem 0 0;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.2rem;
  font-weight: 500;
`;

const WalletWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0;
`;

const WalletIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Wallet = styled.div`
  margin: 0 0 0 0.8rem;
  font-size: 3.2rem;
  font-weight: 800;
`;

const WalletGuide = styled.button`
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  padding: 0.4rem 0.8rem;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.2rem;
`;

export { WalletText, WalletWrap, WalletIconWrap, Wallet, WalletGuide };
