import styled from '@emotion/styled';
import { CommentType } from '@_types/comments-type';

const CommentListWrap = styled.div<{ commentType: CommentType }>`
  margin: 12px -24px;
  background: ${(props) =>
    props.commentType != 'webtoons' && props.theme.colors.grayscale.gray_100};
  padding: 10px 24px 24px;
  width: calc(100% +24 * 2);
  min-height: 60rem;
`;
const CommentNoWrap = styled.section`
  margin-top: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;
const Title = styled.p`
  margin: 2.4rem 0;
  font-size: 2rem;
  font-weight: 700;
`;

const CommentWrap = styled.div`
  display: flex;

  &:last-child {
    margin-bottom: 160px;
  }
`;

const MainWrap = styled.div`
  margin: 0 0 0 1.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0.8rem;
`;

const Name = styled.span`
  margin: 0 0.8rem 0 0;
  font-size: 1.2rem;
  font-weight: 700;
`;

const TimeStamp = styled.span`
  opacity: 0.8;
  font-size: 1rem;
`;

const Content = styled.div`
  margin: 0 0 1.2rem;
  font-size: 1.4rem;
`;

const FavoriteWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 2.8rem;
`;

const Favorite = styled.span`
  opacity: 0.8;
  margin: 0 0 0 0.4rem;
  font-size: 1.2rem;
`;

export {
  CommentListWrap,
  CommentNoWrap,
  Title,
  CommentWrap,
  MainWrap,
  UserInfo,
  Name,
  TimeStamp,
  Content,
  FavoriteWrap,
  Favorite,
};
