export type VoteType = 'AB' | 'CHOICE';

export interface Vote {
  topicId: number;
  voteCategory: VoteType;
  title: string;
  tags: string[];
  topicVoteEndTime: string;
  candidates: VoteItem[];
  joinCount: number;
  topicVoteStatus: boolean;
}

export interface VoteItem extends VoteResultItem {
  topicId: number;
  content: string;
  imageUrl: string;
}

export interface VoteResult {
  candidates: VoteResultItem[];
  joinCount: number;
}

export interface VoteResultItem {
  id: number;
  votingCount: number;
  votingCountRate: number;
  winner: boolean;
}
