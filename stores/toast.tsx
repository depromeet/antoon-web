import { atom } from 'recoil';

export interface Toast {
  id?: string;
  content?: string;
  duration?: number;
  bottom?: number;
  joinLeaveStatus: string;
}

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
