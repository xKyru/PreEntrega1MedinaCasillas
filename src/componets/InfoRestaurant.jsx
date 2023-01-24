import logo from '../../logo.svg';

const InfoRestaurant = () => {
  return (
    <div className="header-info">  
      <div className="container">      
          <div className="logo">
            <img src={logo} alt="Hamburguesas MX" />
          </div>
          <div className="restaurant-info">
            <p>
              5 de Mayo #123. Colonia Centro
              <br/>
              CP. 20000. Aguascalientes, Ags. 
            </p>
            <div className="info-butttons">
              <a className='btn-tel' href="" uk-icon="icon: receiver"><i className="fa-solid fa-phone"></i></a>
              <a className='btn-wa' href="" uk-icon="icon: whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
              <a className='btn-loc' href="" uk-icon="icon: location"><i className="fa-solid fa-location-dot"></i></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default InfoRestaurant;