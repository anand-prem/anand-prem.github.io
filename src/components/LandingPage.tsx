import React, { ReactElement } from 'react';
import { Segment } from 'semantic-ui-react';
import MainContent from './MainContent';
import Footer from './Footer';
import Experience from './Experience';
import './styles.css';

export default class LandingPage extends React.Component {
  render(): ReactElement {
    return (
      <Segment basic className={'landingPageBase'}>
        <MainContent />
        {false && <Experience />}
        <Footer />
      </Segment>
    );
  }
}
