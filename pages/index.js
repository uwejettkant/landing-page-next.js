import Head from 'next/head'
import Hero from '../components/Hero'
import Content from '../components/Content'

export default function Home () {
  return (
    <>
      <Head>
        <title>Next.js landing Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
        <body>
          <Hero />
          <Content />
        </body>
    </>
  )
}
