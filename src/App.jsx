import InfoRestaurant from "./componets/InfoRestaurant";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import ItemListContainer from "./componets/ItemListContainer";

function App() {

  return (
    <>
      <div className="site-header section">
        <InfoRestaurant/>
        <Hero/>
        <Navbar/>
      </div>
      <div className="item-list-container section">
        <ItemListContainer greeting={"Buen día. Bienvenido al portal de Burguer Mania"}/>
      </div>
    </>
  )
}

export default App;