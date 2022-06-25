export interface IUser {
  user: {
    name: string;
    email: string;
    imageUrl: string;
    age: number;
  };
}

export interface IProfile {
  profile?: {
    name: string;
    imageUrl: string;
  };
}
