import * as React from 'react';
import { Card } from 'semantic-ui-react';
import myData from '../../models/myData';

const DescriptionCard: React.FunctionComponent = () => {
  return (
    <Card centered className='descriptionCard'>
      <Card.Content>
        <Card.Header className='welcomeLabel'>Hello</Card.Header>
        <Card.Description>
          {myData.latestJobTitle} @{' '}
          <a target='_blank' rel='noreferrer' href={myData.presentEmployerWebsite}>
            <i>{myData.presentEmployer}</i>
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content className='detailedDescription'>{myData.personalDescription}</Card.Content>
    </Card>
  );
};

export default DescriptionCard;
