import React from 'react'
import {Button, Card, CardBody, CardImg, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MongoDB from '../../imgs/icons/MongoDB.svg'
import apolowebsite from '../../imgs/websites/apolowebsite.png'
import hospitalwebsite from '../../imgs/websites/hospital.jpg'
import alurageekwebsite from '../../imgs/websites/alurageekwebsite.jpg'
import apreciacionwebsite from '../../imgs/websites/apreciacionwebsite.png'


import './ReactSection.css'

function ReactSection(props) {

  let t = props.t


  {/*
  const projects = [
    {
      img: apolowebsite,
      title: "Página oficial de Apolo 27",
      description: "Página oficial del equipo Apolo 27 para el NASA HERC 2024.",
      pageUrl: "https://www.apolo27.com/",
      tech: [
        "react"
      ]
    },
    {
      img: hospitalwebsite,
      title: "Hospital Management Web App",
      description: "Aplicación Web simple para gestionar hospital. (CRUD)",
      pageUrl: "https://github.com/ctrl-Sebastian/Hospital",
      tech: [
        "react",

      ]
    },
    {
      img: alurageekwebsite,
      title: "Alura Geek Online Store",
      description: "Página Web de E-Commerce. (CRUD)",
      pageUrl: "https://alura-geek-weld.vercel.app/",
      githubUrl: "https://github.com/ctrl-Sebastian/AluraGeek-E-Commerce-",
      tech: [
        "react",
        ""

      ]
    },
    {
      img: apreciacionwebsite,
      title: "Arts Appreciation portfolio",
      description: "Página web para publicar bitácora sobre temas de apreciación de las artes.",
      pageUrl: "https://ctrl-sebastian.github.io/Apreciacion-de-las-artes-1/",
      githubUrl: "https://github.com/ctrl-Sebastian/Apreciacion-de-las-artes-1",
      tech: [
        "html5",
        "css",
        "javascript"

      ]
    }
  ]
  */}

  return (
    <section id='webapps' className='section-react'>
      <h1>{t("webapps")}</h1>
      <div className='react-project-list'>

        <Card id='card' data-bs-theme="dark">
          <CardImg alt='portada apolo website' src={apolowebsite}></CardImg>
          <CardBody>
            <Card.Title>{t("apolo-titulo")}</Card.Title>
            <Card.Text>
              {t("apolo-desc")}
            </Card.Text>
            <Button href='https://www.apolo27.com/' variant='link'><FontAwesomeIcon icon="fa-solid fa-globe" /> {t("visitar")}</Button>
          </CardBody>
          <Card.Footer className='card-footer'>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react"/>  React
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card' data-bs-theme="dark">
          <CardImg alt='portada hospital website' src={hospitalwebsite}></CardImg>
          <CardBody>
            <Card.Title>{t("hospital-titulo")}</Card.Title>
            <Card.Text>
            {t("hospital-desc")}
            </Card.Text>
            <Button href='https://github.com/ctrl-Sebastian/Hospital' variant='link'><FontAwesomeIcon icon="fa-brands fa-github" /> {t("visitar")}</Button>
          </CardBody>

          <Card.Footer>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react"/>  React
            </Badge>
            <Badge bg='dark'>
              <img alt='mongoDB icon' src={MongoDB} width={75}></img>
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card' data-bs-theme="dark">
          <CardImg alt='portada alurageek website' src={alurageekwebsite}></CardImg>
          <CardBody>
            <Card.Title>{t("alurageek-titulo")}</Card.Title>
            <Card.Text>
            {t("alurageek-desc")}
            </Card.Text>

            <div  className='project-buttons'>
            
            <Button href='https://alura-geek-weld.vercel.app/' variant='link'><FontAwesomeIcon icon="fa-solid fa-globe" /> {t("visitar")}</Button>
            <Button href='https://github.com/ctrl-Sebastian/AluraGeek-E-Commerce-' variant='link'><FontAwesomeIcon icon="fa-brands fa-github" /> {t("visitar")}</Button>
            </div>

          </CardBody>

          <Card.Footer>
            <Badge>
              <FontAwesomeIcon icon="fa-brands fa-react" />  React
            </Badge>
          </Card.Footer>
        </Card>

        <Card id='card' data-bs-theme="dark">
          <CardImg alt='portada apreciacion website' src={apreciacionwebsite}></CardImg>
          <CardBody>
            <Card.Title>{t("apreciacion-titulo")}</Card.Title>

            <Card.Text>
            {t("apreciacion-desc")}
            </Card.Text>

            <div className='project-buttons'>
              <Button href='https://ctrl-sebastian.github.io/Apreciacion-de-las-artes-1/' variant='link'><FontAwesomeIcon icon="fa-solid fa-globe" /> {t("visitar")}</Button>
              <Button href='https://github.com/ctrl-Sebastian/Apreciacion-de-las-artes-1' variant='link'><FontAwesomeIcon icon="fa-brands fa-github" /> {t("visitar")}</Button>
            </div>

            </CardBody>
            <Card.Footer>
              <Badge bg='danger'>
                <FontAwesomeIcon icon="fa-brands fa-html5" />
              </Badge>
              <Badge>
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
              </Badge>
              <Badge bg='dark'>
                <FontAwesomeIcon icon="fa-brands fa-js"  color='yellow'/>
              </Badge>
            </Card.Footer>

        </Card> 
      
      </div>

      <Button variant='link' id='vermas' href='https://github.com/ctrl-Sebastian'>{t("ver-mas")}</Button>

    </section>
  )
}

export default ReactSection