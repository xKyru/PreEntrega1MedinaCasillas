import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';

const InfoRestaurant = React.memo(() => {
  return (
    <div className="header-info">  
      <div className="container">      
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Hamburguesas MX" />            
            </Link>
          </div>
          <div className="restaurant-info">
            <p>
              5 de Mayo #123. Colonia Centro
              <br/>
              CP. 20000. Aguascalientes, Ags. 
            </p>
            <div className="info-butttons">
              <a className='btn-tel' href="tel:4491234567" rel='noopener noreferrer' uk-icon="icon: receiver"><i className="fa-solid fa-phone"></i></a>
              <a className='btn-wa' href="https://wa.me/524491234567" target="_blank" rel='noopener noreferrer' uk-icon="icon: whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
              <a className='btn-loc' href="https://goo.gl/maps/SCqKgwait9KWug2a6" target="_blank" rel='noopener noreferrer' uk-icon="icon: location"><i className="fa-solid fa-location-dot"></i></a>
            </div>
          </div>
      </div>
    </div>
  )
});

export default InfoRestaurant;