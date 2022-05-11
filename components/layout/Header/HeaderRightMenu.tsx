import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';

import SearchBar from './SearchBar';
import UserProfile from '@components/image/UserProfile';

import { RightWrap, MenuWrap } from './HeaderRightMenu.style';

import { comments } from '@domains/webtoon/detail/Comment.data';

function HeaderRightMenu({ rightBtn }: { rightBtn?: string }) {
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
          <Link href="/user/mypage" passHref>
            <a>
              <UserProfile src={data[0].profileimg} width="24" height="24" />
            </a>
          </Link>
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
