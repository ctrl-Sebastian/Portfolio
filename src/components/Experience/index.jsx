import './Experience.css'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'; 

import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Experience() {
  const experiencias =[
    {
      empresa: "Apolo 27",
      anos: "2023 - 2024",
      puesto: "Telemetry Assistant",
      descripcion: [
        "Trabajé en un equipo ágil junto a ingenieros de software para crear la página web oficial del equipo 2024 de Apolo 27.", 
        "A parte, trabajé creando una simulación interactiva del NASA Human Exploration Rover Challenge."
      ],
      tech: [
        "react",
        "unity",
        //"arduino"
        ]
    },
    {
      empresa: "Cincinnatus Institute of Craftsmanship",
      anos: "2022 - 2023",
      puesto: "Software Development Student",
      descripcion: ["Estudié creando multiples aplicaciones web aplicando CRUD con Python-flask-sqlite3 y React-MongoDB."],
      tech: [
        "python",
        "react",
        //"mongodb",
        "unity",
        ]
    },
    {
      empresa: "Bioingenious Smart Solutions",
      anos: "2022",
      puesto: "Odoo Developer intern",
      descripcion: [
        "Cree aplicaciones Odoo con un equipo de TI.",
        "Diseño y desarrollo de la página web de la empresa.",
        "Diseño de informes y facturas para la empresa"
      ],
      tech: [
        //"odoo",
        "python",
        //"office"
        ]
    }
  ]
  
  return (
    <section className='section-react'>
      <h1>Experience</h1>
      <Timeline position="alternate">
        {
          experiencias.map((exp, i) => {
            return(
              <TimelineItem key={i}>
                <TimelineOppositeContent color="var(--text)">
                  {exp.anos}
                </TimelineOppositeContent>
      
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
      
                <TimelineContent>
                  <Card data-bs-theme="dark">
                    <Card.Header>{exp.empresa}</Card.Header>

                    <Card.Body>
                      <Card.Title>
                        {exp.puesto}
                      </Card.Title>
                      <ul>
                        {exp.descripcion.map((desc, i)=> {
                          return <li key={i}>{desc}</li>
                        })}
                      </ul>
                    </Card.Body>

                    <Card.Footer className='card-footer'>
                      {exp.tech.map((tech, i) => {
                        return(
                          <FontAwesomeIcon 
                              key={i} 
                              size='2xl'
                              style={{marginLeft: 15, marginRight: 15, color: 'var(--secondary)'}}
                              icon={`fa-brands fa-${tech}`}
                          />
                        )
                      })
                    }
                    </Card.Footer>
                  </Card>
                </TimelineContent>
      
              </TimelineItem>
            )
          })
        }
      </Timeline>
    </section>
  )
}

export default Experience