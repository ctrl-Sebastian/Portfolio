import './App.css'

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Hero from './components/Hero';

import Experience from './components/Experience';

import ReactSection from './components/ReactSection';
import GameDev from './components/GameDev';
import ContactMe from './components/ContactMe';
import Modeling from './components/3DModeling'

import SelectLanguage from './components/SelectLanguage/'

function App() {
  return (
    <>
      {/*<Header />*/}
      <SelectLanguage />
      <Hero />
      <Container id='container-main' className='container-main'>
        <Experience />
        <ReactSection />
        <GameDev />
        <Modeling />
        <ContactMe />
      </Container>
    </>
  )
}

export default App
