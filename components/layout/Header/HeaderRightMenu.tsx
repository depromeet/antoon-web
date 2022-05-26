import Link from 'next/link';
import { getCookie } from 'cookies-next';

import SearchIcon from '@assets/icons/SearchIcon';
import ShareIcon from '@assets/icons/ShareIcon';

import SearchBar from './SearchBar';
import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import { comments } from '@domains/webtoon/detail/Comment.data';
import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

function HeaderRightMenu({ rightBtn }: { rightBtn?: string }) {
  const data = comments;
  const token = getCookie('access');

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
                <UserProfile src={data[0].profileimg} width="24" height="24" />
              </a>
            </Link>
          )}
        </MenuWrap>
      ) : rightBtn === 'searchBar' ? (
        <SearchBar />
      ) : rightBtn === 'share' ? (
        <ShareIcon />
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
