import Head from 'next/head'
import Hero from '../components/Hero'
import Content from '../components/Content'
import GlobalStyles from '../styles/GlobalStyles'

export default function Home () {
  return (
    <>
      <Head>
        <title>Next.js landing Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
        <body>
          <GlobalStyles />
          <Hero />
          <Content />
        </body>
    </>
  )
}
