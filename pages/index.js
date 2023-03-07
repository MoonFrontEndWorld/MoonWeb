import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Head from 'next/head';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
export default function Home() {
  return (
    <>
      <Head>
        <title>Liang | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
