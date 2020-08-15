import * as React from 'react';
import { IExperience } from './Interfaces';

interface ICompanyAndDesigationProps {
  experience: IExperience;
}

const CompanyAndDesigation: React.FunctionComponent<ICompanyAndDesigationProps> = (
  props: ICompanyAndDesigationProps
) => {
  const { experience } = props;
  return (
    <div>
      {experience.position} @ {experience.employer}
    </div>
  );
};

export default CompanyAndDesigation;
