import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { PortButton } from './Code.js'

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`


class Contact extends Component {

  render() {
    return (
      <div>
        <CenteredHeader>Reach out to me!</CenteredHeader>

        <FormDiv>
          <form action="https://formspree.io/tgollaher@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>
      </div>
    );
  }
}

export default Contact;
