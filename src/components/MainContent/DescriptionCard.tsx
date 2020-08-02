import * as React from 'react';
import { Card } from 'semantic-ui-react';

const DescriptionCard: React.FunctionComponent = () => {
  return (
    <Card centered className='descriptionCard'>
      <Card.Content>
        <Card.Header basic className='welcomeLabel'>
          Hello
        </Card.Header>
        <Card.Description>
          Consultant Developer @{' '}
          <a target='_blank' rel='noreferrer' href='https://www.thoughtworks.com/'>
            <i>ThoughtWorks</i>
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content className='detailedDescription'>
        I&apos;m a full-stack developer with five+ years of experience in e-commerce domain. I have
        worked with Japan&apos;s largest retail clothing MNC for 4 years and now working with one of
        the largest supermarket chain in US for more than 1 year.
      </Card.Content>
    </Card>
  );
};

export default DescriptionCard;
