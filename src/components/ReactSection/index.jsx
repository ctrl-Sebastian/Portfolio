import React from 'react'
import {Button, Card, CardBody, CardImg, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MongoDB from '../../imgs/icons/MongoDB.svg'
import apolowebsite from '../../imgs/websites/apolowebsite.png'
import hospitalwebsite from '../../imgs/websites/hospital.jpeg'
import alurageekwebsite from '../../imgs/websites/alurageekwebsite.jpeg'
import apreciacionwebsite from '../../imgs/websites/apreciacionwebsite.png'
import HrExtras from '../../imgs/websites/HrExtras.png'


import './ReactSection.css'

function ReactSection() {
  return (
    <section className='section-react'>
      <h1>Web & App Projets</h1>
      <div className='react-project-list'>
        <Card id='card'>
          <CardImg src={apolowebsite}></CardImg>
          <CardBody>
            <Card.Title>Apolo27&apos;s Official Website</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
            <Button href='https://www.apolo27.com/' variant='dark'><FontAwesomeIcon icon="fa-regular fa-globe" /> Visitar</Button>
          </CardBody>
          <Card.Footer className='card-footer'>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react" size=''/>  React
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card'>
          <CardImg src={hospitalwebsite}></CardImg>
          <CardBody>
            <Card.Title>Hospital Management Web App</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
            <Button href='https://github.com/ctrl-Sebastian/Hospital' variant='dark'><FontAwesomeIcon icon="fa-brands fa-github" /> Visitar</Button>
          </CardBody>

          <Card.Footer>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react" size=''/>  React
            </Badge>
            <Badge bg='secondary'>
              <img src={MongoDB} width={75}></img>
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card'>
          <CardImg src={alurageekwebsite}></CardImg>
          <CardBody>
            <Card.Title>Alura Geek Online Store</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
            <Button href='https://alura-geek-weld.vercel.app/' variant='dark'><FontAwesomeIcon icon="fa-brands fa-github" /> Visitar</Button>
          </CardBody>

          <Card.Footer>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react" size=''/>  React
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card'>
          <CardImg src={apreciacionwebsite}></CardImg>
          <CardBody>
            <Card.Title>Arts Appreciation portfolio</Card.Title>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>

            <Button href='https://ctrl-sebastian.github.io/Apreciacion-de-las-artes-1/' variant='dark'><FontAwesomeIcon icon="fa-brands fa-github" /> Visitar</Button>
            </CardBody>
            <Card.Footer>
              <Badge bg='danger'>
                <FontAwesomeIcon icon="fa-brands fa-html5" size='md'/>
              </Badge>
              <Badge>
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" size='md'/>
              </Badge>
              <Badge bg='dark'>
                <FontAwesomeIcon icon="fa-brands fa-js" size='md' color='yellow'/>
              </Badge>
            </Card.Footer>

        </Card>

        <Card id='card'>
          <CardImg src={HrExtras}></CardImg>
          <CardBody>
            <Card.Title>Calc. Horas Extras</Card.Title>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>


          </CardBody>
          <Card.Footer>
            <Badge bg='dark'>
              <FontAwesomeIcon icon="fa-brands fa-python" size='md' color='yellow'/>
            </Badge>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" size='md'/>
            </Badge>
          </Card.Footer>

        </Card>

      </div>
    </section>
  )
}

export default ReactSection