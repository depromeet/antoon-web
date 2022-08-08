function shareAPI(path: string) {
  if (navigator.share) {
    navigator
      .share({
        title: '개미는 툰툰 :: 웹툰의 새로운 덕질 문화',
        url: `https://antoon.fun${path}&shared=true`,
      })
      .catch(console.error);
  } else {
    alert('공유 기능이 지원되지 않는 브라우저입니다.');
  }
}

export default shareAPI;
