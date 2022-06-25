export type VoteType = 'AB' | 'CHOICE';

export interface Vote {
  voteId: number;
  voteCategory: VoteType;
  title: string;
  tags: string[];
  votingEndTime: string;
  voteItems: VoteItem[];
  joinCount: number;
  voteStatus: boolean;
}

export interface VoteItem {
  id: number;
  content: string;
  imageUrl: string;
}

export interface VoteResult {
  voteItems: VoteResultItem[];
  joinCount: number;
}

export interface VoteResultItem {
  id: number;
  voteCount: number;
  voteRate: number;
  winner: boolean;
}
