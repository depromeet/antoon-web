import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';
import Header from '@components/layout/Header/Header';
import GenreWebtoons from '@domains/genres/GenreWebtoons';

function Genres() {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: '장르별 페이지',
    });
  }, []);

  return (
    <>
      <Header title="장르별" left="뒤로가기" right="검색" />
      <GenreWebtoons />
    </>
  );
}

export default Genres;
