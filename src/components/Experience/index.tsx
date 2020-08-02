import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import TimeAndPlaceDetails from './TimeAndPlaceDetails';
import CompanyAndDesigation from './CompanyAndDesignation';
import { IExperience } from './Interfaces';
import myData from '../../models/myData';

const Experience: React.FunctionComponent = () => {
  const experiences = (myData.experience as unknown) as IExperience[];
  const renderExperience = experiences.map((experience, index: number) => (
    <Grid key={index} stackable padded className='cotentGrid'>
      <Grid.Column className='contentGridColumn' width={4}>
        <TimeAndPlaceDetails experience={experience} />
      </Grid.Column>
      <Grid.Column className='contentGridColumn' width={4}>
        <CompanyAndDesigation experience={experience} />
      </Grid.Column>
    </Grid>
  ));

  return <>{renderExperience}</>;
};

export default Experience;
