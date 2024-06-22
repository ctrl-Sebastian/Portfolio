import './ContactMe.css'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import yo from '../../imgs/SebastianMarrera.jpg'


function ContactMeSection(props) {
  let t = props.t;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_prx1qkr';
    const templateId = 'template_ko744mn';
    const publicKey = '6HMNKbrBqDfm-dMBG';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sebastian De Leon',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <section>
      <h1>{t("contactme")}</h1>
      <div className='section-contact-me'>
        <a href='#hero'><img id='yo' src={yo} alt='Imagen del desarrollador Sebastian De Leon'></img></a>

        <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type="text"
          placeholder={t("tu-nombre")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={t("tu-email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder={t("tu-mensaje")}
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type="submit">{t("enviar")}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMeSection