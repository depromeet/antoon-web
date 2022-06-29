export type VoteType = 'AB' | 'CHOICE';

export interface Vote {
  topicId: number;
  topicCategory: VoteType;
  title: string;
  tags: string[];
  topicVoteEndTime: string;
  candidates: VoteItem[];
  joinCount: number;
  /**
   * @name 본인투표여부
   */
  topicVoteStatus: boolean;
  /**
   * @name 투표종료여부
   */
  topicCloseStatus: boolean;
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
