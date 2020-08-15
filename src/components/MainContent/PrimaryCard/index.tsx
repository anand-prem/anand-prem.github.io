import React from 'react';
import ContactMe from './ContactMe';
import avatarCovidMask from './avatarCovidMask.svg';
import myData from '../../../models/myData';

const PrimaryCard: React.FunctionComponent = () => {
  return (
    <div className='primaryCard'>
      <img className='avatarImg' src={avatarCovidMask} />
      <label className='nameLabel'>{myData.name}</label>
      <div className='primaryContentSeparator' />
      <div className='jobTitleLabel'>{myData.jobTitle}</div>
      <ContactMe />
    </div>
  );
};

export default PrimaryCard;
