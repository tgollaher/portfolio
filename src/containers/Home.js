import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Trevor. I'm a product manager based in NYC.</CenteredHeader>
        <p>
          I'm comfortable throughout the development stack, but my passion lies at the intersection of product and technology.
        </p>
        <p>
          ​Outside of tech and product dev, I like to create in other ways. From <a href="https://www.fiverr.com/tgollaher?up_rollout=true" target="_blank">voice acting</a> to <a href="https://soundcloud.com/slowmovingwave/b7-1" target="_blank">music-making</a>, I'm always looking for new ways to express myself. I also enjoy rock climbing, outdoor adventures and anything that gets the blood moving.
        </p>
      </div>
    );
  }
}

export default Home;
