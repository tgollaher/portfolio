import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi I'm Trevor! I am a product professional</CenteredHeader>
        <p>
          My true interests lie at bridging the gaps between business and technology with a product focus.
        </p>
        <p>
          ​Outside of my product work, I also like to create in other ways. From <a href="https://www.fiverr.com/tgollaher?up_rollout=true" target="_blank">voice acting</a> to <a href="https://soundcloud.com/slowmovingwave/b7-1" target="_blank">music-making</a>, I'm always looking for new ways to express myself and for that next unforseen adventure!
        </p> 
      </div>
    );
  }
}

export default Home;
