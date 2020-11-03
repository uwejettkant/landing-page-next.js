import React from 'react'
import styled from 'styled-components'

export default function Hero () {
  return (
    <HeroWrapper>
      <h1>Learn how to <strong>ship oceanfreight</strong> worldwide!</h1>
      <p>Book your online course today</p>
      <TopLine>Logistic Consulting</TopLine>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
background-image: url(https://images.unsplash.com/photo-1522387026079-bd4a4d73115d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80), 
  linear-gradient(45deg, red, blue);
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50vh;

  > * {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    }

  @media(min-width: 650px) {
    width: 50%;
    min-height: 100vh;
    align-items: center;
  }

  h1 {
  font-family: 'roboto', 'san-serif';
  font-size: 1.75rem;
  font-weight: 300;
  color: #fff;
  margin: 0;

  @media(min-width: 650px) {
    font-size: 3.25rem;
  }

  }

  h1 + p {
  color: #fff;
  text-transform: uppercase;
  margin: 0;
 } 
 
 strong {
  font-size: 900;
  font-family: 'san-serif';
}
`

const TopLine = styled.p`
  font-size: 0,625rem;
  order: -1;
  color: #fff;
  text-transform: uppercase;
  border-top: 5px solid #fff;
  margin: 0;
  border-image: linear-gradient(to right, #fff, red, blue) 1;
`
