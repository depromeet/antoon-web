import { StockDownIcon, StockUpIcon } from '@components/icon/Icon_StockUpDown';
import { Webtoon } from '@_types/webtoon-type';
import { ProInfoWrap, ContentBasicInfo, ContentBar } from './ProInfo.style';

type Props = {
  status?: string | 'UP';
  author?: string;
  date?: string;
  platform?: string | '기타';
};

function ProInfo(props: Props) {
  const { status, author, date, platform } = props;
  return (
    <ProInfoWrap>
      {status === 'UP' ? (
        <StockUpIcon stroke={status} />
      ) : (
        <StockDownIcon stroke={status} />
      )}
      <ContentBasicInfo>
        <b>{author}</b>
      </ContentBasicInfo>
      <ContentBar />
      <ContentBasicInfo>{date}</ContentBasicInfo>
      <ContentBar />
      <ContentBasicInfo>{platform}</ContentBasicInfo>
    </ProInfoWrap>
  );
}

export default ProInfo;
