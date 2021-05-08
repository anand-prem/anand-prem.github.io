import { DateTime } from 'luxon';
import { getYearOfExperience } from '../utils/time';

const carrierBeginningDateTime = DateTime.local(2015, 7, 6);

const myData = {
  name: 'Anand Prem',
  jobTitle: 'Consultant Developer',
  email: {
    personal: 'anandprem333@gmail.com',
    official: '',
  },
  resumeUrl: '',
  imageUrl: '',
  socialNetworks: {
    linkedin: 'https://www.linkedin.com/in/anand-prem/',
    github: 'https://github.com/anand-prem',
  },
  personalDescription: `Full-stack developer with ${getYearOfExperience(
    carrierBeginningDateTime
  )} years of experience in e-commerce domain. I have worked with Japan's largest retail clothing MNC for 4 years and now working with one of the largest supermarket chain in US for more than 1 year.`,
  experience: [
    {
      employer: 'QBurst',
      position: 'Senior Software Engineer',
      location: 'Cochin, Kerala, India',
      starts: { year: '2015', month: 'July' },
      ends: { year: 2019, month: 'July' },
      website: 'https://www.qburst.com/',
    },
    {
      employer: 'ThoughtWorks',
      position: 'Consultant Developer',
      location: 'Bengaluru, Karnataka, India',
      starts: { year: '2019', month: 'July' },
      website: 'https://www.thoughtworks.com/',
    },
  ],
};

export default myData;
