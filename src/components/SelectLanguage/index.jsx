import React from 'react';

import './SelectLanguage.css'

import i18next from 'i18next'
import Dropdown from 'react-bootstrap/Dropdown';
import en from '../../imgs/en.png'
import es from '../../imgs/es.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SelectLanguage = () => {
  const languages = [
    {
      code: 'es',
      name: 'Español',
      country_flag: es
    },
    {
      code: 'en',
      name: 'English',
      country_flag: en
    }
  ]


  return(
    <Dropdown id='lang-Selector'>
    <Dropdown.Toggle variant="link" id="dropdown-basic">
    <FontAwesomeIcon icon="fa-solid fa-globe" size='xl' color='white'/>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {
        languages.map(({code, name, country_flag}) =>(
          <Dropdown.Item key={code} onClick={() => {
            i18next.changeLanguage(code)
            sessionStorage.setItem("i18nextLng", code)
          }}>
          <img src={country_flag} width={35} alt='country flag' style={{marginRight: 3}}></img>
          {name}
          </Dropdown.Item>
        ))
      }
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default SelectLanguage