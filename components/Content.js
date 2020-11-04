import React from 'react'
import styled from 'styled-components'

export default function Content () {
  return (
    <ContentWrapper class='content-part'>
      <h2>Get a step by step guide</h2>
      <Subline class='subline'>For Free</Subline>
      <p class='main-content'>You want to know how to import physical products worldwide? Then this course is for you!<br />
        Especially when you are still at the beginning of an e-commerce business, there are often numerous uncertainties.  You will make mistakes that cost not only time but also money.
        With the help of this online course, you can avoid additional costs and a delay in delivery. In a simple step-by-step guide, this course will guide you through each phase of the import process and give you useful tips, recommendations and a checklist to make your first import a success.
      </p>
      <Form class='contact-details'>
        <input type='text' required placeholder='name' />
        <input type='text' required placeholder='e-mail' />
        <button>register now</button>
        <Disclaimer>We'll never share your information without your permission</Disclaimer>
      </Form>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
    padding: 2em 1em;

    > * {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    }

    @media(min-width: 650px) {
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }

    h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;

  @media(min-width: 650px) {
    font-size: 1.75rem;
    align-self: center;
  }

    }

    h2 + p {
  font-family: 'roboto', 'san-serif';
  color: #022ef0;
  font-weight: 900;
  text-transform: uppercase; 
}
`

const Subline = styled.p`
  font-size: 1.125rem;
`

const Form = styled.form`
    width: 80%;
  max-width: 300px;
  margin-top: 1.5em;

  input, button {
  width: 100%;
  border-radius: 25px;
}

input {
  font-family: 'roboto';
  text-align: inherit;
  margin-bottom: 1.5em;
  padding: .5em;
  border: 1px solid #404040;
  outline: none;
}

button {
  font-size: 1.125rem;
  padding: .5em 1em;
  font-weight: 900;
  letter-spacing: 0.2px;
  border: 0;
  display: inline-block;
  background: #93e8f5;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(45deg, red, blue);
  transform: scale(1);
  transition: transform 250ms;
  margin-bottom: .5em;
}

button:hover, button:focus {
  transform: scale(1.1);
}
`

const Disclaimer = styled.p`
    font-size: .75rem;
  letter-spacing: .25px;
`
