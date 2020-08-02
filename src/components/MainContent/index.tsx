import React from 'react';
import { Grid } from 'semantic-ui-react';
import PrimaryCard from './PrimaryCard';
import DescriptionCard from './DescriptionCard';
import './styles.css';

const MainContent: React.FunctionComponent = () => {
  return (
    <Grid stackable padded className='cotentGrid'>
      <Grid.Column className='contentGridColumn' width={4}>
        <PrimaryCard />
      </Grid.Column>
      <Grid.Column className='contentGridColumn' width={4}>
        <DescriptionCard />
      </Grid.Column>
    </Grid>
  );
};

export default MainContent;
