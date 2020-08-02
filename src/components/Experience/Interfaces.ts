interface IDate {
  year: string;
  month?: string;
  day?: string;
}

export interface IExperience {
  employer: string;
  starts: IDate;
  ends: IDate;
  position: string;
  location?: string;
}
