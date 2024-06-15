import './Modeling.css'
import { Masonry } from '@mui/lab';
import {Button} from 'react-bootstrap'

function ModelingSection() {
  return (
    <section className='section-react'>
      <h1>3D Modeling</h1>
      <div className='models-list'>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Leo" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={400}
          src="https://sketchfab.com/models/3278bb9dd3d349b6b8d4a913115bcec0/embed?autospin=1&autostart=1&camera=0&dnt=1"> 
          </iframe> 

        </div>

        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Phone"  allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={200}
          src="https://sketchfab.com/models/d3eb4c66a6b0420788b9e9374c0a1e63/embed?autospin=1&camera=0&ui_theme=dark&dnt=1"> 
        </iframe> 
        </div>

        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Pokemon building" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={400}
          src="https://sketchfab.com/models/5674c82608b94436bd29b0a27702af3a/embed?autospin=1&camera=0&ui_theme=dark&dnt=1"> 
          </iframe> 
        </div>

        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Lighthouse" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={300}
          src="https://sketchfab.com/models/e8220fa6954549a6bd20423dcfff66e9/embed?autospin=1&camera=0&ui_theme=dark&dnt=1"> 
          </iframe> 
        </div>

        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Train Station" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={200}
          src="https://sketchfab.com/models/54ff63c2631c4e68a615acf2d24658aa/embed?autospin=1&camera=0&ui_theme=dark&dnt=1"> 
          </iframe> 
        </div>

        <div className="sketchfab-embed-wrapper"> 
          <iframe title="Chuckie Finster" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
          height={300}
          src="https://sketchfab.com/models/cfda564dbe3c40a48103ed53703cbd73/embed?autospin=1&camera=0&dnt=1"> 
          </iframe> 
        </div>
        </Masonry>

      <Button variant='link' id='vermas' href='https://sketchfab.com/sebastianMMS'>Ver mas</Button>
      </div>
    </section>
  )
}

export default ModelingSection