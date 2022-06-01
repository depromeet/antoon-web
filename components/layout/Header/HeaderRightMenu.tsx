import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';
import ShareIcon from '@assets/icons/ShareIcon';

import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

function HeaderRightMenu({
  rightBtn,
  imageUrl,
}: {
  rightBtn?: string;
  imageUrl?: string;
}) {
  return (
    <RightWrap>
      {rightBtn === 'menu' ? (
        <MenuWrap>
          <Link href="/search" passHref>
            <a>
              <SearchIcon />
            </a>
          </Link>
          {imageUrl ? (
            <Link href="/user/mypage" passHref>
              <a>
                <UserProfile src={imageUrl} width="24" height="24" />
              </a>
            </Link>
          ) : (
            <Link href="/user/signin" passHref>
              <a>
                <ProfileDefaultImg width="24" height="24" />
              </a>
            </Link>
          )}
        </MenuWrap>
      ) : rightBtn === 'share' ? (
        <ShareIcon />
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
