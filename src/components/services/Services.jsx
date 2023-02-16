import React,{useState, useEffect} from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'


const Services = () => {
  const [services, setServices] = useState([]);

  return (
      <section id="services">
          <h5 className="text-light">Olayinka V </h5>
          <h2 className="text-light">Services</h2>
          <div className="container services__container">
              <article className="service">
                  {services.map((service, i) => (
                      <div key={service.title + i}>
                          <div className="service__head">
                              <h3>{service.title}</h3>
                          </div>
                          <ul className="service__list">
                              <li>
                                  <BsFillCheckCircleFill className="service__list-icon" />
                                  <p>{service.description}</p>
                              </li>
                          </ul>
                      </div>
                  ))}
              </article>
          </div>
          <div>
              {/* <a href="https://cloudez.io/br?utm_campaign=partner-atavares-seoxperts-badge&autm_medium=badge&utm_source=partner&utm_content=partner&utm_term=">
        <img alt="" width="220" height="60" src="https://files.cloudez.io/stamp/partner-sm.svg">
      </a> */}
          </div>
      </section>
  );
}

export default Services