import React from 'react'
import styled from 'styled-components'

export default function Content () {
  return (
    <ContentWrapper class='content-part'>
      <h2>Get a step by step guide</h2>
      <p class='subline'>For Free</p>
      <p class='main-content'>You want to know how to import physical products worldwide? Then this course is for you!<br />
        Especially when you are still at the beginning of an e-commerce business, there are often numerous uncertainties.  You will make mistakes that cost not only time but also money.
        With the help of this online course, you can avoid additional costs and a delay in delivery. In a simple step-by-step guide, this course will guide you through each phase of the import process and give you useful tips, recommendations and a checklist to make your first import a success.
      </p>
      <form class='contact-details'>
        <input type='text' required placeholder='name' />
        <input type='text' required placeholder='e-mail' />
        <button>register now</button>
        <p class='disclaimer'>We'll never share your information without your permission</p>
      </form>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
    padding: 2em 1em;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    @media(min-width: 650px) {
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
`
