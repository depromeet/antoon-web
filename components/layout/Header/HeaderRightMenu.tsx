import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';
import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';
import ShareIcon from '@assets/icons/ShareIcon';

import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import { useGetUserInformation } from '@apis/user';

type RightBtn = 'menu' | 'profile' | 'share' | undefined;

function HeaderRightMenu({
  rightBtn,
  imageUrl,
}: {
  rightBtn?: RightBtn;
  imageUrl?: string;
}) {
  const { data: user } = useGetUserInformation();

  const userProfileImg = user?.imageUrl;

  return (
    <RightWrap>
      {rightBtn === 'menu' ? (
        <MenuWrap>
          <Link href="/search" passHref>
            <a>
              <SearchIcon />
            </a>
          </Link>
          {userProfileImg ? (
            <Link href="/user/mypage" passHref>
              <a>
                <UserProfile src={userProfileImg} width="24" height="24" />
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
      ) : rightBtn === 'profile' ? (
        <>
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
        </>
      ) : rightBtn === 'share' ? (
        <ShareIcon />
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
