export type TopicCategory = 'RANKS' | 'LATEST' | 'CLOSES';
export type TopicCategoryType = 'ab' | 'choice';

export interface AllTopicsByCategory {
  topics: Topic[];
}

export interface Topic {
  topicId: number;
  topicCategory: TopicCategoryType;
  tags: string[];
  title: string;
  joinCount: number;
  thumbnails: string[];
}
