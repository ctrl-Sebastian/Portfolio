import './App.css'

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Hero from './components/Hero';
import ReactSection from './components/ReactSection';
import GameDev from './components/GameDev';
import ContactMe from './components/ContactMe';
import Modeling from './components/3DModeling'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container id='container-main'>
        <ReactSection />
        <GameDev />
        <Modeling />
        <ContactMe />
      </Container>
    </>
  )
}

export default App
