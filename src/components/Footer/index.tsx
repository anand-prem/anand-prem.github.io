import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';
import './styles.css';

const Footer: React.FunctionComponent = () => {
  return (
    <Segment padded className='footer'>
      <Container fluid textAlign='right' className='footerMail'>
        <Icon name='mail' />
        <div>anandprem333@gmail.com</div>
      </Container>
    </Segment>
  );
};

export default Footer;
