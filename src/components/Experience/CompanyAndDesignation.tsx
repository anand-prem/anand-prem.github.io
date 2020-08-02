import * as React from 'react';
import { IExperience } from './Interfaces';
import { Segment } from 'semantic-ui-react';

interface ICompanyAndDesigationProps {
  experience: IExperience;
}

const CompanyAndDesigation: React.FunctionComponent<ICompanyAndDesigationProps> = (
  props: ICompanyAndDesigationProps
) => {
  const { experience } = props;
  return (
    <Segment basic padded>
      <div>
        {experience.position} @ {experience.employer}
      </div>
    </Segment>
  );
};

export default CompanyAndDesigation;
