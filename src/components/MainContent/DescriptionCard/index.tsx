import * as React from 'react';
import myData from '../../../models/myData';

const latestExperience = myData.experience[myData.experience.length - 1];

const DescriptionCard: React.FunctionComponent = () => {
  return (
    <div className='descriptionCard'>
      <label className='welcomeLabel'>Hello</label>
      <div className='jobDescriptionWithCompany'>
        <span>I&apos;m a {latestExperience.position} @ </span>
        <a className='companyLink' target='_blank' rel='noreferrer' href={latestExperience.website}>
          <i className='companyLinkText'>{latestExperience.employer}</i>
        </a>
      </div>
      <div className='detailedDescription'>{myData.personalDescription}</div>
    </div>
  );
};

export default DescriptionCard;
