const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
  list: (id: number) => [...webtoons.lists(), id],
  ranks: () => [...webtoons.all, 'ranks'],
  genres: () => [...webtoons.all, 'genres'],
  genresTop3: () => [...webtoons.all, 'genres', 'top3'],
  rising: () => [...webtoons.all, 'rising'],
  days: (day: string) => [...webtoons.all, 'days', day],
};

const comments = {
  all: ['comments'],
  lists: (id: number) => [...comments.all, id],
};

export { webtoons, comments };
