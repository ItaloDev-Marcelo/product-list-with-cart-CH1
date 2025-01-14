import CartItem from './components/Card/CardItem';
import './App.css';
import MenuOrder from './components/Menu/Menu' ;
import { useContext, useState} from 'react';
import { GlobalContext } from './context';
function App() {

  // global state 
  const {objData, openFinal} = useContext(GlobalContext)

  const [selectedWidth, SetSelectedWidth] = useState()
  
  function update() {
    SetSelectedWidth(window.innerWidth)
  }

  window.addEventListener('resize', update);

  return (
    <main>
    <h1>Desserts</h1>
    <div className='container' >
    <div id="Grid-C">
    {
      objData.map(dataItem => {
        /*destructor in an object*/ 
        const {name, image, category,price, id, valor, openState} = dataItem
         return (
            <CartItem name={name}  image={ selectedWidth <= 400 || selectedWidth <= 600  ?
              image.mobile : selectedWidth === 700  ||  selectedWidth <= 900 ? image.tablet : image.desktop } id={id}
              category={category} price={price} 
              valor={valor} openState={openState} />
         ) 
      })
    }
    </div>
    <div>    
    <MenuOrder/>
    </div>
    </div>
    </main>
  )
}

export default App
