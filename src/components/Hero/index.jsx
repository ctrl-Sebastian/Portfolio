import './Hero.css'
import github from '../../imgs/icons/github.svg'
import Instagram from '../../imgs/icons/Instagram.svg'
import itchio from '../../imgs/icons/itchio.svg'
import LI from '../../imgs/icons/LI.svg'
import sketchfab from '../../imgs/icons/sketchfab.svg'
import downarrow from '../../imgs/icons/downarrow.svg'

function Hero() {
  return (
    <section id='hero' className='hero-bg'>
        <div>
            <h1>Sebastian Marrera</h1>
            <h2>React Developer | Unity Developer</h2>
        </div>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/sebastian-manuel-marrera-santos-919517196/"><img  src={LI} width={100}></img></a>
          <a href="https://ctrl-sebastian.itch.io/"><img  src={itchio} width={100}></img></a>
          <a href="https://github.com/ctrl-Sebastian"><img  src={github} width={100}></img></a>
          <a href="https://www.instagram.com/seb.devs/"><img  src={Instagram} width={100}></img></a>
          <a href="https://sketchfab.com/sebastianMMS"><img  src={sketchfab} width={100}></img></a>
        </div>
        <span>
          <h3>Continue</h3>
          <img src={downarrow} width={25}></img>
        </span>
    </section>
  )
}

export default Hero