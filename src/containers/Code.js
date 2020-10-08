import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>Sequelize</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Hubspot</li>
                <li>JSON</li>
                <li>Jira</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent Product/Development work:</CenteredHeader>
          <PortRow>
            <a href="http://sole-search.surge.sh/" target="_blank">
              <CodeThumbnail src={require("../assets/sole_search.png")} />
            </a>
            <br></br>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Sole Search</PortTitle>
                <PortButtonContainer>
                  <PortButton href="http://sole-search.surge.sh/mens/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/tgollaher/sole-search"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <br></br>
              <PortDescription>
                My most recent product design project, Sole Search was a prototype front-end designed mock up that I worked on with three UX designers, implementing A/B testing and user feedback
                to achieve this design and interface. The mockup has full filter fuctionality and was built out in the front end using React.js and flexbox CSS for styling.
                
            </PortDescription>
    
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Flexbox</UsedItem>
                <UsedItem>Zeplin</UsedItem>
                <UsedItem>Sketch</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="http://routine-me.surge.sh/" target="_blank">
              <CodeThumbnail
                src={require("../assets/routine_me.png")}
              />
            </a>
            <br></br>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Routine Me</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="http://routine-me.surge.sh/"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/tgollaher/routine-me"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                
                </PortButtonContainer>
              </PortTitleContainer>
              <br></br>
              <PortDescription>
              This is a full-stack React and Node.js CRUD app with login and sign up functionality using React and Node.js 
              that allows you to create, update and delete your own routines and compare them to others.
              </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Express and Passport</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="http://hack-a-manager.surge.sh/" target="_blank">
              <CodeThumbnail
                src={require("../assets/hackathon.png")}
              />
            </a>
            <br></br>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Hack-a-manager</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="http://hack-a-manager.surge.sh/"
                    target="_blank"
                  >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/tgollaher/hack-a-manager"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <br></br>
              <PortDescription>
                For a Hackathon project at General Assembly,
                I built an full-stack web app that I though would be cool for people who would want to manage their NYC meetups or events -- a tech themed event manager for
                anyone wishing to manage any events they wish to attend. View all users, view each user's profile and
                information, compare and track events, and filter and search events based on matching key words.

                It was built out using PostgreSQL, React, and Ruby on Rails with full authentication and backend functionality.
            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Ruby</UsedItem>
                <UsedItem>Rails</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
        </div>
      </div>
    );
  }
}

export default Code;
