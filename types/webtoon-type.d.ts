export type PlatformType = 'NAVER' | 'KAKAO' | 'LEZHIN' | 'ETC';

export enum PlatformEnum {
  NAVER = '네이버 웹툰',
  KAKAO = '카카오 웹툰',
  LEZHIN = '레진코믹스',
  ETC = '기타',
}

export interface Webtoon {
  id: number;
  platform: PlatformEnum[PlatformType];
  title: string;
  author?: string;
  content?: string;
  date?: string;
  jenre?: string;
  status?: ChartStatus;
  isLike?: boolean;
  thumnail?: string;
}

export type ChartStatus = 'UP' | 'DOWN' | 'NONE';

export interface WebtoonRank {
  webtoons: {
    id: number;
    title: string;
    writers: string[];
    thumbnail: string;
    rank: number;
    // rankChangedPercent / set name from backend data
    gapPercent: number;
    score: number;
    scoreChangedPercent: number;
  }[];
}
