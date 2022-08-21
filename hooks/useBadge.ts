import { useState, useEffect, useCallback } from 'react';

type BadgeType = [
  string,
  {
    name: string;
    textStatusWidth: string;
    progressWidth: string;
  },
];

function useBadge(coin: number, badge: string): BadgeType {
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
            textStatusWidth: `${(coin + 1) * 2 + 3}%`,
            progressWidth: `${(coin + 1) * 2}%`,
          });
        case '일개미':
          return setNextBadge({
            name: '여왕개미',
            textStatusWidth: `${(coin - 49) * 0.4 + 5}%`,
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
    getBadgeLevel(badge);
    getNextBadge(badgeName);
  }, [badge, getBadgeLevel, badgeName, getNextBadge]);

  return [badgeName, nextBadge];
}

export default useBadge;
