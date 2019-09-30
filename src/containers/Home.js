import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Trevor. I'm a product manager/software developer based in NYC.</CenteredHeader>
        <p>
          I'm comfortable throughout the development stack, but my passion lies at the intersection of software innovation and product management.
        </p>
        <p>
          ​Outside of software and biz dev, I like to create in other ways. From <a href="https://www.fiverr.com/tgollaher?up_rollout=true" target="_blank">voice acting</a> to <a href="https://soundcloud.com/slowmovingwave/b7-1" target="_blank">music-making</a>, I'm always looking for new ways to express myself. I also enjoy rock climbing, outdoor adventures and anything that gets the blood moving.
        </p>
        <p>
           Previously, I've <a href="http://www.americanclubofmadrid.com/volunteer-opportunities.html" target="_blank">taught English to immigrants in Spain</a>, worked for a US Congresswoman, and done business consulting for fortune 500 companies. I also hold a degree in History from the University of Santa Barbara and a Masters in International Business from Università Cattolica del Sacro Cuore in Milan.
        </p>
      </div>
    );
  }
}

export default Home;
