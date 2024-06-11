import './GameDev.css'
import React from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'
import { Card, CardBody, CardImg, CardText } from 'react-bootstrap'
import bg2 from '../../imgs/bg2.png'
import bg3 from '../../imgs/bg3.png'

function GameDevSection() {
  return (
    <section className='section-react'>
    <h1>Game Dev projects</h1>
    <Carousel fade className='carousel-gamedev'>
      <Carousel.Item>
        {/*<div className='carousel-item-info'>
          <h1>Title</h1>
          <section className='carousel-item-imgs'>
            <img src={bg3}></img>
            <img src={bg3}></img>
            <img src={bg3}></img>
          </section>
        </div>*/}
        <img src={bg2}></img>
        <Carousel.Caption>
          <section className='carousel-item-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </section>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  </section>
  )
}

export default GameDevSection