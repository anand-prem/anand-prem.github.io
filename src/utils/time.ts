import { DateTime } from 'luxon';

export const getYearOfExperience = (beginDate: DateTime): number => {
  const yearOfExpObj = DateTime.now().diff(beginDate, ['years']);
  return Math.floor(yearOfExpObj.years);
};
