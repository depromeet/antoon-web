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
  padding: 50px;
  width: 80%;
  max-width: 708px;
  height: 250px;
  text-align: center;
`;
const ModalTitle = styled.h2`
  line-height: 26.4px;
  font-size: 24px;
  font-weight: 700;
`;
const ModalInfo = styled.p`
  margin-top: 14px;
  margin-bottom: 20px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: 15px;
`;
const ModalClose = styled.button`
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 48%;
  height: 30%;
`;
const ModalFunc = styled.button<{ joinLeave: string }>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.joinLeave === 'JOIN'
      ? props.theme.colors.chart.point_up_100
      : props.theme.colors.chart.point_down_100};
  width: 48%;
  height: 30%;
  color: ${(props) => props.theme.colors.basic.white};
`;

export {
  ModalContainer,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalInfo,
  ModalClose,
  ModalFunc,
};
