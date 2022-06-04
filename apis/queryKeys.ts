const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
  list: (id: number) => [...webtoons.lists(), id],
  ranks: () => [...webtoons.all, 'ranks'],
  genres: () => [...webtoons.all, 'genres'],
  genresTop3: () => [...webtoons.all, 'genres', 'top3'],
  rising: () => [...webtoons.all, 'rising'],
  recommendation: () => [...webtoons.all, 'recommendation'],
  joinLeave: (webtoonId: number, status: string) => [
    ...webtoons.all,
    'joinLeave',
  ],
  days: (day: string) => [...webtoons.all, 'days', day],
};

const comments = {
  all: ['comments'],
  lists: (id: number) => [...comments.all, 'lists', id],
  isLiked: (id: number) => [...comments.all, 'isLiked', id],
};

const user = {
  all: ['userInfo'],
  tokens: (refreshToken: string) => [...user.all, 'tokens', refreshToken],
  information: () => [...user.all, 'information'],
};

const graph = {
  all: ['graph'],
  lists: (id: number, chartType: string) => [...graph.all, id, chartType],
};

export { webtoons, comments, graph, user };
