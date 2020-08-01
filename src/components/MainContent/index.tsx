import React from 'react';
import { Grid } from 'semantic-ui-react';
import PrimaryCard from './PrimaryCard';
import './styles.css';

const MainContent: React.FunctionComponent = () => {
  return (
    <Grid stackable padded className='mainCotentGrid'>
      <Grid.Column width={4}>
        <PrimaryCard />
      </Grid.Column>
      <Grid.Column width={4}>
        <PrimaryCard />
      </Grid.Column>
    </Grid>
  );

  // return (
  //   <header>
  //     <img src={woodImage} alt={'Something went wrong!'} sizes={} />
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       width='100%'
  //       height='100%'
  //       preserveAspectRatio='xMidYMid slice'
  //     >
  //       <defs>
  //         <mask id='mask' x='0' y='0' width='100%' height='100%'>
  //           <rect x='0' y='0' width='100%' height='100%' />
  //           <text x='0' y='50' width='100%' height='100%'>
  //             Anand Prem
  //           </text>
  //         </mask>
  //       </defs>
  //       <rect x='0' y='0' width='100%' height='100%' />
  //     </svg>
  //   </header>
  // );
};

export default MainContent;
