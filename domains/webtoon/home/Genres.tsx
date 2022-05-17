import { useGetWebtoonsGenres } from '@apis/webtoons';
import { Genre } from '@_types/webtoon-type';
import {
  GenresWrapper,
  CarouselBox,
  GenreContentWrapper,
  GenreThumbnailContainer,
  GenreThumbnail,
  GenreDescription,
} from './Genres.style';

type GenreData = {
  name: Genre;
  description1: string;
  description2: string;
  rank1: string;
  rank2: string;
  rank3: string;
};

function Genres() {
  const genres: GenreData[] = [
    {
      name: '일상',
      description1: '매일매일',
      description2: '일상툰',
      rank1:
        'https://shared-comic.pstatic.net/thumb/webtoon/785250/thumbnail/thumbnail_IMAG04_b2a285d6-0172-44cc-bfb0-ea5eaab41f1a.jpg',
      rank2:
        'https://shared-comic.pstatic.net/thumb/webtoon/725586/thumbnail/thumbnail_IMAG04_147bdc44-14ef-4a49-81d0-aeec09b898be.jpg',
      rank3:
        'https://shared-comic.pstatic.net/thumb/webtoon/784140/thumbnail/thumbnail_IMAG04_fdda97b7-d253-4918-8f18-3c1f207c5ab3.jpg',
    },
    {
      name: '개그',
      description1: '웃고 싶을 땐',
      description2: '개그툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=eNX91/hzwBoN7oTV/8QrTETu9V8FSNroprSKjpK&filename=th2',
      rank2:
        'https://dn-img-page.kakao.com/download/resource?kid=uraBC/hzhOmcyHt8/0dHjJOKDEcCiSmDsh0sWh1&filename=th2',
      rank3:
        'https://dn-img-page.kakao.com/download/resource?kid=b770SR/hzhOh35Y2t/kKgrwpThkNK1hUMsCV3Gm1&filename=th2',
    },
    {
      name: '판타지',
      description1: '세상에 이런일이',
      description2: '판타지툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=Lwtpm/hyVkJ2jSWA/xla5DKWEGyggTl98ZdItOk&filename=th2',
      rank2:
        'https://shared-comic.pstatic.net/thumb/user_contents_data/challenge_comic/2021/07/06/336633/thumbnail_98x79a66592c2_5a50_48af_b2e4_a83a31434e03_00001275.JPEG',
      rank3:
        'https://dn-img-page.kakao.com/download/resource?kid=b770SR/hzhOh35Y2t/kKgrwpThkNK1hUMsCV3Gm1&filename=th2',
    },
    {
      name: '액션',
      description1: '박진감이 넘치는',
      description2: '액션툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=tBNi4/hzhOjgcJmm/ueOVwIx2VOdiCX0oHiBS01&filename=th2',
      rank2:
        'https://dn-img-page.kakao.com/download/resource?kid=bJHG0X/hzhOe7jLtR/yr0qMvDmDWjJTsMCvcmdM0&filename=th2',
      rank3:
        'https://dn-img-page.kakao.com/download/resource?kid=Iclj1/hzwBhuJRRD/enP8TIBHrvjvKjYG3C7PN1&filename=th2',
    },
    {
      name: '드라마',
      description1: '극적인',
      description2: '드라마툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=r6wte/hzwBq54veA/Dqz1sTnCkwcDaHrsPKO1zK&filename=th2',
      rank2:
        'https://dn-img-page.kakao.com/download/resource?kid=xrExW/hzhOeepcP0/QXsAVYv6Ck6JOKeiKofXG1&filename=th2',
      rank3:
        'https://shared-comic.pstatic.net/thumb/user_contents_data/challenge_comic/2022/04/23/350668/thumbnail_98x796163aa9f_11ab_4fb6_8602_37272bf271b0_00001977.JPEG',
    },
    {
      name: '순정',
      description1: '두근두근',
      description2: '순정툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=Lwtpm/hyVkJ2jSWA/xla5DKWEGyggTl98ZdItOk&filename=th2',
      rank2:
        'https://dn-img-page.kakao.com/download/resource?kid=3KKN4/hzhOhQl2Ks/dsgCHKGrwHmZUyULOokQg1&filename=th2',
      rank3:
        'https://dn-img-page.kakao.com/download/resource?kid=tBNi4/hzhOjgcJmm/ueOVwIx2VOdiCX0oHiBS01&filename=th2',
    },
    {
      name: '감성',
      description1: '잔잔한 힐링',
      description2: '감성툰',
      rank1:
        'https://shared-comic.pstatic.net/thumb/webtoon/783518/thumbnail/thumbnail_IMAG04_bd5359ed-4e96-4c16-ba90-d35aa13208e9.jpg',
      rank2:
        'https://shared-comic.pstatic.net/thumb/user_contents_data/challenge_comic/2021/04/08/115332/thumbnail_98x79dc5ac035_2aac_4c8a_9d94_d2f897e10e11_00000931.JPEG',
      rank3:
        'https://shared-comic.pstatic.net/thumb/webtoon/785727/thumbnail/thumbnail_IMAG04_d2eb04a5-3937-4894-ac4e-882ad102c511.jpg',
    },
    {
      name: '스릴러',
      description1: '긴장감 넘치는',
      description2: '스릴러툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=bwhVaU/hzb7rjx2I9/fumKsAjzwt6m281XdAZGq1&filename=th2',
      rank2:
        'https://shared-comic.pstatic.net/thumb/user_contents_data/challenge_comic/2022/01/11/249829/thumbnail_98x796fdae536_b0a0_4608_a9b1_f14bf46c5ca2_00001481.JPEG',
      rank3:
        'https://shared-comic.pstatic.net/thumb/webtoon/790404/thumbnail/thumbnail_IMAG04_44e0712a-45be-4106-a23d-96e3d63ecbf6.jpg',
    },
    {
      name: '무협',
      description1: '흥미진진한',
      description2: '무협/사극툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=e6voS/hy41M9zDt6/IinBxHk6kIL1BL63KEm5E0&filename=th2',
      rank2:
        'https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG04_42cb4e1c-b182-4be1-ac4e-ad45b748cf0d.jpg',
      rank3:
        'https://shared-comic.pstatic.net/thumb/webtoon/733034/thumbnail/thumbnail_IMAG04_0e9e0e35-1ccc-4b1c-952d-b6d31d8c766f.jpg',
    },
    {
      name: '스포츠',
      description1: '열정을 깨워주는',
      description2: '스포츠툰',
      rank1:
        'https://dn-img-page.kakao.com/download/resource?kid=uraBC/hzhOmcyHt8/0dHjJOKDEcCiSmDsh0sWh1&filename=th2',
      rank2:
        'https://shared-comic.pstatic.net/thumb/user_contents_data/challenge_comic/2022/05/06/316160/thumbnail_98x7966efc76c_a18f_41cd_8121_bdda7d9831f6_00001723.JPEG',
      rank3:
        'https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG04_5235afbd-077c-4972-b105-99329dd3c50e.jpg',
    },
  ];

  return (
    <GenresWrapper>
      {genres.map((genre) => (
        <CarouselBox key={genre.name} genreName={genre.name}>
          <GenreContentWrapper>
            <GenreThumbnailContainer>
              <div>
                <GenreThumbnail src={genre.rank1} width={24} height={24} />
              </div>
              {/* TODO: 래퍼 좀 더 나은 방법 생각해보기*/}
              <div style={{ position: 'relative', left: '-0.5rem' }}>
                <GenreThumbnail src={genre.rank2} width={24} height={24} />
              </div>
              <div style={{ position: 'relative', left: '-1rem' }}>
                <GenreThumbnail src={genre.rank3} width={24} height={24} />
              </div>
            </GenreThumbnailContainer>
            <GenreDescription>
              {genre.description1} <br /> {genre.description2}
            </GenreDescription>
          </GenreContentWrapper>
        </CarouselBox>
      ))}
    </GenresWrapper>
  );
}

export default Genres;
