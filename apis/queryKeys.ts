const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
  list: (id: number) => [...webtoons.lists(), id],
  ranks: () => [...webtoons.all, 'ranks'],
};

export { webtoons };
