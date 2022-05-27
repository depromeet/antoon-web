const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
  list: (id: number) => [...webtoons.lists(), id],
  ranks: () => [...webtoons.all, 'ranks'],
  genres: () => [...webtoons.all, 'genres'],
  rising: () => [...webtoons.all, 'rising'],
  days: (day: string) => [...webtoons.all, 'days', day],
};

const comments = {
  all: ['comments'],
  lists: (id: string | string[] | undefined) => [...comments.all, id],
};

export { webtoons, comments };
