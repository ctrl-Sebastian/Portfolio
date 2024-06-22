import './GameDev.css'
import React from 'react'
import {Button, Card, Carousel} from 'react-bootstrap'
import flappybee from '../../imgs/gamedev/flappybee.png'
import palmonte from "../../imgs/gamedev/palmonte.png";
import polaritypanic from "../../imgs/gamedev/polaritypanic.png";
import ratspotting from "../../imgs/gamedev/ratspotting.png";
import roversimulation from "../../imgs/gamedev/roversimulation.png";


function GameDevSection(props) {
  let t = props.t;
  return (
    <section id='gamedev' className='section-react'>
    <h1>{t("gamedev")}</h1>
    <Carousel fade id='carousel-gamedev'>
      <Carousel.Item>
        <img alt='portada del juego nasa herc simulation' src={roversimulation}></img>
        <iframe title='NASA HERC Simulation' src="https://itch.io/embed/2319119?linkback=true&amp;dark=true" 
         
        >
        <a href="https://ctrl-sebastian.itch.io/rover-simulation">NASA HERC Simulation by ctrl-Sebastian</a></iframe>        
        <button href='https://ctrl-sebastian.itch.io/rover-simulation'> Ver en Itch.io</button>

      </Carousel.Item>


      <Carousel.Item>
        <img alt='portada del juego Rat Spotting' src={ratspotting}></img>
        <iframe title='Rat Spotting' src="https://itch.io/embed/2739808?border_width=2&amp;dark=true" 
         
        >
        <a href="https://ctrl-sebastian.itch.io/rat-spotting">Rat Spotting by ctrl-Sebastian</a></iframe>
        <button href='https://ctrl-sebastian.itch.io/rat-spotting'> Ver en Itch.io</button>

      </Carousel.Item>

      <Carousel.Item>
        <img alt='portada del juego Palmonte' src={palmonte}></img>
        <iframe title='Palmonte' src="https://itch.io/embed/2200102?dark=true" 
         
        >
        <a href="https://ctrl-sebastian.itch.io/palmonte">Palmonte by ctrl-Sebastian</a></iframe>
        <button href='https://ctrl-sebastian.itch.io/palmonte'> Ver en Itch.io</button>
      </Carousel.Item>

      <Carousel.Item>
        <img alt='portada del Juego Flappy Bee' src={flappybee}></img>
        <iframe title='Flappy Bee' src="https://itch.io/embed/2168157?linkback=true&amp;dark=true" 
         
        >
        <a href="https://ctrl-sebastian.itch.io/flappy-bee">Flappy Bee by ctrl-Sebastian</a></iframe>
        <button href='https://ctrl-sebastian.itch.io/flappy-bee'> Ver en Itch.io</button>

      </Carousel.Item>

      <Carousel.Item>
        <img alt='portada del juego polarity panic' src={polaritypanic}></img>
        <iframe title='Polarity Panic' src="https://itch.io/embed/2324479?linkback=true&amp;dark=true" 
         
        >
        <a href="https://ctrl-sebastian.itch.io/polarity-panic">Polarity Panic by ctrl-Sebastian</a></iframe>
        <button href='https://ctrl-sebastian.itch.io/polarity-panic'> Ver en Itch.io</button>

      </Carousel.Item>
    </Carousel>
    <Button variant='link' id='vermas' href='https://ctrl-sebastian.itch.io/'>{t("ver-mas")}</Button>

  </section>
  )
}

export default GameDevSection