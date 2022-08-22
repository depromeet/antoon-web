import { useState } from 'react';

import BadgeIcon from '@assets/icons/BadgeIcon';
import { CoinStatusArrow } from '@assets/icons';

import BadgeInfoModal from '@domains/user/mypage/badge/BadgeInfoModal';

import useBadge from '@hooks/useBadge';

import {
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
} from '@domains/user/mypage/badge/Badge.style';

function UserBadge({ coin, badge }: { coin: number; badge: string }) {
  const [badgeName, nextBadge] = useBadge(coin, badge);

  const [modalStatus, setModalStatus] = useState(false);

  const onClickOpen = () => {
    setModalStatus(true);
  };

  return (
    <>
      {modalStatus && (
        <BadgeInfoModal
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />
      )}
      <BadgeWrap>
        <UpperWrap>
          <BadgeDataWrap>
            <BadgeIcon badge={badgeName} />
            {badgeName.length < 5 ? (
              <Badge>{badgeName}</Badge>
            ) : (
              <DefaultBadge>등급이 아직 없어요</DefaultBadge>
            )}
          </BadgeDataWrap>
          <BadgeInfo onClick={onClickOpen}>등급 보기</BadgeInfo>
        </UpperWrap>

        <LowerWrap width={nextBadge.textStatusWidth}>
          <CoinWrap width={nextBadge.textStatusWidth}>
            <Coin>
              {coin}ANT <CoinStatusArrow />
            </Coin>
          </CoinWrap>
          <ProgressBar>
            <CoinStatus width={nextBadge.progressWidth} />
          </ProgressBar>
          <NextBadgeWrap>
            <NextBadge>{badgeName}</NextBadge>
            <NextBadge>{nextBadge.name}</NextBadge>
          </NextBadgeWrap>
        </LowerWrap>
      </BadgeWrap>
    </>
  );
}

export default UserBadge;
