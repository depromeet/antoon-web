import { useState, useEffect, useCallback } from 'react';

import UserBadgeIcon from '@assets/icons/UserBadgeIcon';
import { CoinStatusArrow } from '@assets/icons';

import {
  BadgeWrap,
  UpperWrap,
  UserBadgeDataWrap,
  BadgeName,
  DefaultBadgeName,
  BadgeInfo,
  LowerWrap,
  CoinStatusWrap,
  CoinStatus,
  ProgressBar,
  CoinStatusBar,
  BadgeStatusWrap,
  BadgeStatus,
} from './UserBadge.style';

function UserBadge({ coin, badge }: { coin: number; badge: string }) {
  const [nextBadge, setNextBadge] = useState({
    name: '',
    textStatusWidth: '',
    progressWidth: '',
  });

  const getNextBadge = useCallback(
    (badge) => {
      switch (badge) {
        case '거지개미':
          return setNextBadge({
            name: '일개미',
            textStatusWidth: `${(coin + 1) * 2 + 2}%`,
            progressWidth: `${(coin + 1) * 2}%`,
          });
        case '일개미':
          return setNextBadge({
            name: '여왕개미',
            textStatusWidth: `${(coin - 49) * 0.4 + 4}%`,
            progressWidth: `${(coin - 49) * 0.4}%`,
          });
        case '여왕개미':
          return setNextBadge({
            name: '🎉',
            textStatusWidth: '102%',
            progressWidth: '100%',
          });
        case '로그인을 하시면 등급을 받을 수 있어요':
          return setNextBadge({
            name: '',
            textStatusWidth: '0%',
            progressWidth: '0%',
          });
      }
    },
    [coin],
  );

  useEffect(() => {
    getNextBadge(badge);
  }, [badge, getNextBadge]);

  return (
    <BadgeWrap>
      <UpperWrap>
        <UserBadgeDataWrap>
          <UserBadgeIcon badge={badge} />
          {badge.length < 5 ? (
            <BadgeName>{badge}</BadgeName>
          ) : (
            <DefaultBadgeName>등급이 아직 없어요</DefaultBadgeName>
          )}
        </UserBadgeDataWrap>
        <BadgeInfo>등급 보기</BadgeInfo>
      </UpperWrap>

      <LowerWrap width={nextBadge.textStatusWidth}>
        <CoinStatusWrap width={nextBadge.textStatusWidth}>
          <CoinStatus>
            {coin}ANT <CoinStatusArrow />
          </CoinStatus>
        </CoinStatusWrap>
        <ProgressBar>
          <CoinStatusBar width={nextBadge.progressWidth} />
        </ProgressBar>
        <BadgeStatusWrap>
          <BadgeStatus>{badge}</BadgeStatus>
          <BadgeStatus>{nextBadge.name}</BadgeStatus>
        </BadgeStatusWrap>
      </LowerWrap>
    </BadgeWrap>
  );
}

export default UserBadge;
