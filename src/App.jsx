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

import {useTranslation} from "react-i18next"


function App() {
  const {t} = useTranslation()
  return (
    <>
      {/*<Header />*/}
      <SelectLanguage />
      <Hero t={t}/>
      <Container id='container-main' className='container-main'>
        <Experience t={t}/>
        <ReactSection t={t}/>
        <GameDev t={t}/>
        <Modeling t={t}/>
        <ContactMe t={t}/>
      </Container>
    </>
  )
}

export default App
