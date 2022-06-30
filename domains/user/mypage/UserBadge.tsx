import { useState, useEffect, useCallback } from 'react';

import UserBadgeIcon from '@assets/icons/UserBadgeIcon';
import { CoinStatusArrow } from '@assets/icons';

import BadgeInfoModal from './BadgeInfoModal';

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
  const [badgeName, setBadgeName] = useState('');

  const getBadgeLevel = useCallback((badge) => {
    switch (badge) {
      case 'LEVEL_ONE':
        return setBadgeName('거지개미');
      case 'LEVEL_TWO':
        return setBadgeName('일개미');
      case 'LEVEL_THREE':
        return setBadgeName('여왕개미');
      default:
        return setBadgeName('로그인을 하시면 등급을 받을 수 있어요');
    }
  }, []);

  useEffect(() => {
    getBadgeLevel(badge);
  }, [badge, getBadgeLevel]);

  const [nextBadge, setNextBadge] = useState({
    name: '',
    textStatusWidth: '',
    progressWidth: '',
  });

  const getNextBadge = useCallback(
    (badgeName) => {
      switch (badgeName) {
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
            name: '최고 등급 달성 🎉',
            textStatusWidth: '104%',
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
    getNextBadge(badgeName);
  }, [badgeName, getNextBadge]);

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
          <UserBadgeDataWrap>
            <UserBadgeIcon badge={badgeName} />
            {badgeName.length < 5 ? (
              <BadgeName>{badgeName}</BadgeName>
            ) : (
              <DefaultBadgeName>등급이 아직 없어요</DefaultBadgeName>
            )}
          </UserBadgeDataWrap>
          <BadgeInfo onClick={onClickOpen}>등급 보기</BadgeInfo>
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
            <BadgeStatus>{badgeName}</BadgeStatus>
            <BadgeStatus>{nextBadge.name}</BadgeStatus>
          </BadgeStatusWrap>
        </LowerWrap>
      </BadgeWrap>
    </>
  );
}

export default UserBadge;
