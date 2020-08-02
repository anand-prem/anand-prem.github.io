import React from 'react';
import { Card, Divider, Image, Icon, Label } from 'semantic-ui-react';
import myData from '../../models/myData';

const PrimaryCard: React.FunctionComponent = () => {
  return (
    <Card className='primaryCard' centered raised>
      <Card.Content textAlign='center'>
        <Image circular src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Label basic className='nameLabel'>
          {myData.name}
        </Label>
        <Divider className='primaryContentSeparator' />
        <Card.Description className='jobDescription'>{myData.jobTitle}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center' className='socialNetworksLinks'>
        <a target='_blank' rel='noreferrer' href={myData.socialNetworks.linkedin}>
          <Icon color='black' size='large' name={'linkedin'} />
        </a>
        <a target='_blank' rel='noreferrer' href={myData.socialNetworks.github}>
          <Icon color='black' size='large' name={'github'} />
        </a>
      </Card.Content>
    </Card>
  );
};

export default PrimaryCard;
