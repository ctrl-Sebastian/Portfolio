import './GameDev.css'
import React from 'react'
import {Button, Card, Carousel} from 'react-bootstrap'
import flappybee from '../../imgs/gamedev/flappybee.png'
import palmonte from "../../imgs/gamedev/palmonte.png";
import polaritypanic from "../../imgs/gamedev/polaritypanic.png";
import ratspotting from "../../imgs/gamedev/ratspotting.png";
import roversimulation from "../../imgs/gamedev/roversimulation.png";


function GameDevSection() {
  return (
    <section className='section-react'>
    <h1>Game Dev projects</h1>
    <Carousel fade id='carousel-gamedev'>
      <Carousel.Item>
        <img src={roversimulation}></img>
        <iframe src="https://itch.io/embed/2319119?linkback=true&amp;dark=true" width="552" height="167"><a href="https://ctrl-sebastian.itch.io/rover-simulation">NASA HERC Simulation by ctrl-Sebastian</a></iframe>        
        <Card>
          <Card.Title>Title</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </Card.Body>
        </Card>
      </Carousel.Item>


      <Carousel.Item>
        <img src={ratspotting}></img>
        <iframe src="https://itch.io/embed/2739808?border_width=2&amp;dark=true" width="554" height="169"><a href="https://ctrl-sebastian.itch.io/rat-spotting">Rat Spotting by ctrl-Sebastian</a></iframe>

      </Carousel.Item>

      <Carousel.Item>
        <img src={palmonte}></img>
        <iframe  src="https://itch.io/embed/2200102?dark=true" width="552" height="167"><a href="https://ctrl-sebastian.itch.io/palmonte">Palmonte by ctrl-Sebastian</a></iframe>
      </Carousel.Item>

      <Carousel.Item>
        <img src={flappybee}></img>
        <iframe src="https://itch.io/embed/2168157?linkback=true&amp;dark=true" width="552" height="167"><a href="https://ctrl-sebastian.itch.io/flappy-bee">Flappy Bee by ctrl-Sebastian</a></iframe>

      </Carousel.Item>

      <Carousel.Item>
        <img src={polaritypanic}></img>
        <iframe src="https://itch.io/embed/2324479?linkback=true&amp;dark=true" width="552" height="167"><a href="https://ctrl-sebastian.itch.io/polarity-panic">Polarity Panic by ctrl-Sebastian</a></iframe>

      </Carousel.Item>
    </Carousel>
  </section>
  )
}

export default GameDevSection