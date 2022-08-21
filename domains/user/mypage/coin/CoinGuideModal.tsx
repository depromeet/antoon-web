import React, {
  useRef,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import { ModalClose } from '@assets/icons';

import {
  Background,
  ModalContainer,
  CloseButtonWrap,
  CloseButton,
  Title,
  RewardWrap,
  RowWrap,
  Text,
  Plus,
  Minus,
  Line,
  IntroWrap,
  ActiveDivider,
  Divider,
  IntroduceText,
} from '@domains/user/mypage/coin/CoinGuideModal.style';

function CoinGuideModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onClickOutSide = useCallback(
    (event: any) => {
      if (
        backgroundRef.current!.contains(event.target) &&
        !containerRef.current!.contains(event.target)
      ) {
        setIsModalOpen(false);
      } else {
        setIsModalOpen(true);
      }
    },
    [setIsModalOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutSide);

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  }, [onClickOutSide]);

  const onClickClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isModalOpen]);

  return (
    <Background ref={backgroundRef}>
      <ModalContainer ref={containerRef}>
        <CloseButtonWrap onClick={onClickClose}>
          <CloseButton>
            <ModalClose />
          </CloseButton>
        </CloseButtonWrap>
        <Title>안트코인 가이드</Title>
        <RewardWrap>
          <RowWrap>
            <Text>웹툰 탑승</Text>
            <Plus>+1</Plus>
            <Text>웹툰 하차</Text>
            <Plus>+1</Plus>
          </RowWrap>
          <RowWrap>
            <Text>인물 탑승</Text>
            <Minus>-5</Minus>
            <Text>커플 탑승</Text>
            <Minus>-5</Minus>
          </RowWrap>
          <RowWrap>
            <Text>투표 참여</Text>
            <Minus>-3</Minus>
            <Text>투표 리워드</Text>
            <Plus>+10</Plus>
          </RowWrap>
          <RowWrap>
            <Text>가입 리워드</Text>
            <Plus>+30</Plus>
            <Text></Text>
            <Plus></Plus>
          </RowWrap>
        </RewardWrap>
        <Line />
        <IntroWrap>
          <ActiveDivider />
          <IntroduceText>
            <strong>
              ‘안트코인’은 ‘개미는 툰툰’에서 사용할 수 있는 화폐
              단위입니다.&nbsp;
            </strong>
            게임 머니, 포인트와 유사한 개념이며, 실물화폐 또는 가상화폐와는
            다릅니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            다른 유저와 안트코인을 거래하는 것은 불가합니다. 현금처럼 사용,
            입출금, 양도, 충전, 구매는 불가합니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            ‘웹툰 탑승’, ‘웹툰 하차’ 코인 보상은 하루에 최대 10회 (최대
            10코인)까지 가능합니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            코인 보상과 관계없이 웹툰 탑승, 웹툰 하차는 무제한으로 가능합니다.
            (단, 웹툰 1개당 탑승 및 하차는 하루에 한 번만 가능합니다.)
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>인물과 커플은 하차가 불가능합니다.</IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            투표 리워드는 커뮤니티의 ‘A/B’, ‘초이스’에서 내가 투표한 종목이
            이겼을 때 지급됩니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            이벤트로 지급되는 코인은 규정된 금액이 없으며 지급 시 ‘이벤트’
            태그로 안트코인 내역에 남게 됩니다.
          </IntroduceText>
        </IntroWrap>
        <IntroWrap>
          <Divider />
          <IntroduceText>
            상기 내용은 서비스 정책에 따라 변경될 수 있습니다.
          </IntroduceText>
        </IntroWrap>
      </ModalContainer>
    </Background>
  );
}

export default CoinGuideModal;
