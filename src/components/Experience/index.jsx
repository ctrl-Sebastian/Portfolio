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



function Experience(props) {
  let t = props.t;
  const experiencias =[
    {
      empresa: "Apolo 27",
      anos: "2023 - 2024",
      puesto: t("apolo-puesto"),
      descripcion: [
        t("apolo-rol1"),
        t("apolo-rol2")
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
      puesto: t("cinci-puesto"),
      descripcion: [
        t("cinci-rol1")
      ],
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
      puesto: t("bss-puesto"),
      descripcion: [
        t("bss-rol1"),
        t("bss-rol2"),
        t("bss-rol3"),
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
      <h1>{t("experiencias")}</h1>
      <Timeline position="alternate">
        {
          experiencias.map((exp, i) => {
            return(
              <TimelineItem key={i}>
                <TimelineOppositeContent color="var(--text)">
                  <h5>  {exp.anos}</h5>
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
                              size='xl'
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