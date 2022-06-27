import Header from '@components/layout/Header/Header';

import CharacterDetailPageWrap from '@domains/community/character/CharacterDetailPage';

function CharacterDetailPage() {
  const mockData = {
    backGroundColor: '#4E7F86',
  };

  return (
    <>
      <Header
        headerLeft="뒤로가기"
        headerRight="공유하기"
        headerColor={mockData.backGroundColor}
      />
      <CharacterDetailPageWrap />
    </>
  );
}

export default CharacterDetailPage;
