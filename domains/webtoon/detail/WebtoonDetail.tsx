import { Webtoon } from '@_types/webtoon-type';
import Bar from '@components/bar/Bar';
import Thumbnail from '@components/image/Thumbnail';
import {
  DetailWrap,
  TopInfo,
  WebtoonInfo,
  Title,
  Jenre,
  SubInfoWrap,
} from './WebtoonDetail.style';
import LabelIcon from '@components/icon/Icon_Label';
import HeartIcon from '@components/icon/Icon_Heart';
import ProInfo from '@components/webtoonDetail/ProInfo';

interface Props {
  item: Webtoon;
}

function WebtoonDetail(props: Props) {
  const { item } = props;

  return (
    <>
      <DetailWrap>
        <TopInfo>
          <WebtoonInfo>
            <HeartIcon fill={item.isLike} />
            <Jenre className="jenre">
              <LabelIcon />
              {item.jenre}
            </Jenre>
            <Title> {item.title}</Title>
            <ProInfo
              status={item.status}
              author={item.author}
              date={item.date}
              platform={item.platform}
            />
            <Thumbnail
              category="main"
              scale={true}
              src={item.thumnail || ''}
              alt={item.title}
            />
            <Bar />
            <SubInfoWrap>
              <p>{item.content}</p>
            </SubInfoWrap>
          </WebtoonInfo>
        </TopInfo>
      </DetailWrap>
    </>
  );
}

export default WebtoonDetail;
