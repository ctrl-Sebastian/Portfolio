import './Experience.css'

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'; 

import Card from 'react-bootstrap/Card'


function Experience() {
  return (
    <section id='modeling' className='section-react'>
      <h1>Experience</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="var(--text)">
            2023 - 2024
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Card>
              <Card.Header>Apolo 27</Card.Header>
              <Card.Body>
                <Card.Title>
                  Telemetry Assistant
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Software</Card.Subtitle>
                
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error temporibus laborum consequatur explicabo id aliquid voluptatem! Iusto, eius facere perferendis, nobis error maiores numquam ducimus totam veniam fugiat nisi dolorem?
                </Card.Text>
              </Card.Body>
            </Card>
          </TimelineContent>

        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent color="var(--text)">
            2022 - 2023
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Card>
              <Card.Header>
                Cincinnatus Institute of Craftsmanship
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Software Developer Student
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error temporibus laborum consequatur explicabo id aliquid voluptatem! Iusto, eius facere perferendis, nobis error maiores numquam ducimus totam veniam fugiat nisi dolorem?
                </Card.Text>
              </Card.Body>
            </Card>
          </TimelineContent>

        </TimelineItem>


        
        <TimelineItem>

          <TimelineOppositeContent color="var(--text)">
            2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Card>
            <Card.Header>Bioingenious Smart Solutions</Card.Header>
              <Card.Body>
                <Card.Title>
                  Odoo Developer
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error temporibus laborum consequatur explicabo id aliquid voluptatem! Iusto, eius facere perferendis, nobis error maiores numquam ducimus totam veniam fugiat nisi dolorem?
                </Card.Text>
              </Card.Body>
            </Card>
          </TimelineContent>

        </TimelineItem>
      
    </Timeline>
    </section>
  )
}

export default Experience