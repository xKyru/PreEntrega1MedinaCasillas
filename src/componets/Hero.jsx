import heroBackground from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="hero" style={{backgroundImage: `url(${heroBackground})`}}>
      <div className="container">
        <h1>Burger Mania</h1>
        <p>Atrévete a probarlas</p>        
      </div>
    </div>
  )
}

export default Hero