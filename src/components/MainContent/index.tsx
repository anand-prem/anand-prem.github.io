import React from 'react';
import PrimaryCard from './PrimaryCard';
import DescriptionCard from './DescriptionCard';

const MainContent: React.FunctionComponent = () => {
  return (
    <div className='mainContentGrid'>
      <div className='primaryGridItem'>
        <PrimaryCard />
      </div>
      <div className='descriptionGridItem'>
        <DescriptionCard />
      </div>
    </div>
  );
};

export default MainContent;
