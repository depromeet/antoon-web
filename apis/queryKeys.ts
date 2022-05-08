const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'list'],
  list: (id: number) => [...webtoons.lists(), id],
};

export { webtoons };
