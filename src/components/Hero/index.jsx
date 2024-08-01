import './Hero.css'
import github from '../../imgs/icons/github.svg'
import Instagram from '../../imgs/icons/Instagram.svg'
import itchio from '../../imgs/icons/itchio.svg'
import LI from '../../imgs/icons/LI.svg'
import sketchfab from '../../imgs/icons/sketchfab.svg'
import downarrow from '../../imgs/icons/downarrow.svg'


function Hero(props) {
  let t = props.t;
  return (
    <section id='hero' className='hero-bg'>
        <div>
            <h1>Sebastian De Leon</h1>
            <h2>{t("roles")}</h2>
        </div>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/sebastian-manuel-de-leon-santos-919517196/"><img alt='Linkedin' src={LI} width={100}></img></a>
          <a href="https://ctrl-sebastian.itch.io/"><img alt='itchio' src={itchio} width={100}></img></a>
          <a href="https://github.com/ctrl-Sebastian"><img alt='github' src={github} width={100}></img></a>
          <a href="https://www.instagram.com/seb.devs/"><img alt='instagram' src={Instagram} width={100}></img></a>
          <a href="https://sketchfab.com/sebastianMMS"><img alt='sketchfab' src={sketchfab} width={100}></img></a>
        </div>
        <span>
          <h3>Continue</h3>
          <img alt='down arrow' src={downarrow} width={25}></img>
        </span>
    </section>
  )
}

export default Hero