import Head from 'next/head'
import Hero from '../components/Hero'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js landing Page</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Hero />
        <Content />
      </main>
    </>
  )
}
