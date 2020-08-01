import React from 'react';
import { Card, Divider, Image, Icon, Label } from 'semantic-ui-react';

const PrimaryCard: React.FunctionComponent = () => {
  return (
    <Card className='primaryCard' centered raised>
      <Card.Content textAlign='center'>
        <Image circular src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Label basic className='nameLabel'>
          Anand Prem
        </Label>
        <Divider className='primaryContentSeparator' />
        <Card.Description className='jobDescription'>Consultant Developer</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center' className='socialNetworksLinks'>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/anand-prem/'>
          <Icon color='black' size='large' name={'linkedin'} />
        </a>
        <a target='_blank' rel='noreferrer' href='https://github.com/anand-prem'>
          <Icon color='black' size='large' name={'github'} />
        </a>
      </Card.Content>
    </Card>
  );
};

export default PrimaryCard;
