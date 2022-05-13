import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';

import SearchBar from './SearchBar';
import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import { comments } from '@domains/webtoon/detail/Comment.data';
import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

function HeaderRightMenu({
  rightBtn,
  accessToken,
}: {
  rightBtn?: string;
  accessToken?: string;
}) {
  const data = comments;

  return (
    <RightWrap>
      {rightBtn === 'menu' ? (
        <MenuWrap>
          <Link href="/search" passHref>
            <a>
              <SearchIcon />
            </a>
          </Link>
          {accessToken === '' ? (
            <Link href="/user/mypage" passHref>
              <a>
                <ProfileDefaultImg width="24" height="24" />
              </a>
            </Link>
          ) : (
            <Link href="/user/signin" passHref>
              <a>
                <UserProfile src={data[0].profileimg} width="24" height="24" />
              </a>
            </Link>
          )}
        </MenuWrap>
      ) : rightBtn === 'searchBar' ? (
        <SearchBar />
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
