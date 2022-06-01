import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';
import ShareIcon from '@assets/icons/ShareIcon';

import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

function HeaderRightMenu({ rightBtn }: { rightBtn?: string }) {
  const token = undefined;

  return (
    <RightWrap>
      {rightBtn === 'menu' ? (
        <MenuWrap>
          <Link href="/search" passHref>
            <a>
              <SearchIcon />
            </a>
          </Link>
          {token === undefined ? (
            <Link href="/user/signin" passHref>
              <a>
                <ProfileDefaultImg width="24" height="24" />
              </a>
            </Link>
          ) : (
            <Link href="/user/mypage" passHref>
              <a>
                <UserProfile
                  src={
                    'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  }
                  width="24"
                  height="24"
                />
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
