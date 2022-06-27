import { RecommendationStatus } from '@_types/webtoon-type';
import { atom } from 'recoil';

export interface Toast {
  id?: string;
  content?: string;
  duration?: number;
  bottom?: number;
  joinLeaveStatus: ToastStatusType;
}

export type ToastStatusType =
  | RecommendationStatus
  | 'VOTE-NO-SELECT'
  | 'VOTING'
  | 'VOTED';

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
