export const isEllipsisActive = (e: HTMLParagraphElement | null) => {
  if (!e) return false;
  return e?.offsetHeight < e?.scrollHeight;
};
