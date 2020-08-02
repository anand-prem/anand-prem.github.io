import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { IExperience } from './Interfaces';

interface ICompanyDetailsProps {
  experience: IExperience;
}

const TimeAndPlaceDetails: React.FunctionComponent<ICompanyDetailsProps> = (
  props: ICompanyDetailsProps
) => {
  const { experience } = props;

  return (
    <Segment basic padded>
      <div>
        {experience.starts.month || ''} {experience.starts.year} -{' '}
        {(experience.ends && experience.ends.month) || ''}{' '}
        {(experience.ends && experience.ends.year) || 'present'}
      </div>
      <div>{experience.location}</div>
    </Segment>
  );
};

export default TimeAndPlaceDetails;
