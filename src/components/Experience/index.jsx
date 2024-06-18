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
              <Card.Body>
                <Card.Title>
                  Experience Title
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
            10:00 am
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
    </Timeline>
    </section>
  )
}

export default Experience