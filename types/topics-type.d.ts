export type TopicCategory = 'RANKS' | 'LATEST' | 'CLOSES';
export type TopicCategoryType = 'AB' | 'CHOICE';

export interface AllTopicsByCategory {
  data: Topic[];
  firstPage: boolean;
  lastPage: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  request: AxiosError;
}

export interface Topic {
  topicId: number;
  topicCategory: TopicCategoryType;
  tags: string[];
  title: string;
  joinCount: number;
  thumbnails: string[];
}

export interface TopicChoices {
  choiceTopics: Choices[];
}

export interface Choices {
  topicId: number;
  title: string;
  tags: string[];
  joinCount: number;
}
