import * as React from 'react';
import TimeAndPlaceDetails from './TimeAndPlaceDetails';
import CompanyAndDesigation from './CompanyAndDesignation';
import { IExperience } from './Interfaces';
import myData from '../../models/myData';

const Experience: React.FunctionComponent = () => {
  const experiences = (myData.experience as unknown) as IExperience[];
  const renderExperience = experiences.map((experience, index: number) => (
    <>
      <TimeAndPlaceDetails experience={experience} />
      <CompanyAndDesigation experience={experience} />
    </>
  ));

  return <>{renderExperience}</>;
};

export default Experience;
