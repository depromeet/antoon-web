import styled from '@emotion/styled';

const ModalContainer = styled.div``;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0 0 0 / 70%);
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const ModalLogo = styled.span`
  margin-right: 10px;
`;
const ModalHeaderTitle = styled.h1`
  align-self: center;
  color: ${(props) => props.theme.colors.chart.point_up_100};
  font-size: 24px;
  font-weight: 700;
`;
const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 999;
  margin-right: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.basic.white};
  padding: 20px 40px 40px;
  width: 84%;
  max-width: 708px;
  height: auto;
  text-align: center;
`;
const ModalTitle = styled.h2`
  line-height: 26.4px;
  font-size: 18px;
  font-weight: 700;
`;
const ModalInfo = styled.p`
  margin-top: 12px;
  margin-bottom: 20px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 13px;
`;

const ModalCoin = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 100%;
  height: 40px;
`;

const ModalCoinText = styled.p`
  margin-left: 20px;
  padding-top: 12px;
  font-size: 12px;
  font-weight: 500;
`;
const ModalMyCoin = styled.p`
  margin-right: 20px;
  padding-top: 10px;
  font-size: 12px;
  font-weight: 700;
`;

const MyCoinReserve = styled.span`
  position: relative;
  top: -5px;
  align-self: top;
  margin-left: 6px;
`;

const ModalBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const ModalClose = styled.button`
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 46%;
  height: 50px;
`;
const ModalFunc = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.basic.black};
  width: 46%;
  height: 50px;
  color: ${(props) => props.theme.colors.basic.white};
`;

export {
  ModalContainer,
  ModalOverlay,
  ModalHeader,
  ModalLogo,
  ModalHeaderTitle,
  ModalContent,
  ModalTitle,
  ModalInfo,
  ModalCoin,
  ModalCoinText,
  ModalMyCoin,
  MyCoinReserve,
  ModalBtns,
  ModalClose,
  ModalFunc,
};
