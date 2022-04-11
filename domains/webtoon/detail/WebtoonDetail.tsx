import { Webtoon } from '@_types/webtoon-type';
import {
  DetailWrap,
  TopInfo,
  WebtoonInfo,
  ContentBar,
  Title,
  Jenre,
  ProInfoWrap,
  ThumbnailWrap,
  ContentBasicInfo,
  Bar,
  SubInfoWrap,
  ThumbnailImg,
} from './WebtoonDetail.style';

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
            <Jenre className="jenre">{item.jenre}</Jenre>
            <Title>{item.title}</Title>
            <ProInfoWrap>
              <ContentBasicInfo>
                <b>{item.author}</b>
              </ContentBasicInfo>
              <ContentBar />
              <ContentBasicInfo>{item.date}</ContentBasicInfo>
              <ContentBar />
              <ContentBasicInfo>{item.platform}</ContentBasicInfo>
            </ProInfoWrap>
            <ThumbnailWrap>
              <ThumbnailImg
                width={550}
                height={400}
                src={item.thumnail || ''}
                alt={item.title || ''}
              />
            </ThumbnailWrap>
            <Bar></Bar>
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
