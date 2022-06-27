export interface IUser {
  user: {
    name: string;
    email: string;
    imageUrl: string;
    age: number;
    coinRank: string;
    wallet: number;
  };
}

export interface IProfile {
  profile?: {
    name: string;
    imageUrl: string;
  };
}
