export const makeEndings = (totalCount: number) => {
  if (totalCount === 0) {
    return 'Нет статей';
  }

  if (totalCount === 1) {
    return `${totalCount} статья`;
  }

  if (totalCount < 5) {
    return `${totalCount} статьи`;
  }

  if (totalCount < 21) {
    return `${totalCount} статей`;
  }

  if (totalCount < 23) {
    return `${totalCount} статья`;
  }

  return `${totalCount} статей`;
};
