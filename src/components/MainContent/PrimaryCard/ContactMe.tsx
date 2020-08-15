import React from 'react';
import linkedin from './linkedin.svg';
import github from './github.svg';
import mail from './mail.svg';
import cv from './cv.svg';
import myData from '../../../models/myData';

const ContactMe: React.FunctionComponent = () => (
  <div className='socialNetworksLinks'>
    <a title='linkedin' target='_blank' rel='noreferrer' href={myData.socialNetworks.linkedin}>
      <img className='socialNetWorkIcon' src={linkedin} />
    </a>
    <a title='github' target='_blank' rel='noreferrer' href={myData.socialNetworks.github}>
      <img className='socialNetWorkIcon' src={github} />
    </a>
    <a title='mail' target='_blank' rel='noreferrer' href={`mailto:${myData.email.personal}`}>
      <img className='socialNetWorkIcon' src={mail} />
    </a>
    <a title='resume' target='_blank' rel='noreferrer' href={'/public/resume.pdf'}>
      <img className='socialNetWorkIcon' src={cv} />
    </a>
  </div>
);

export default ContactMe;
