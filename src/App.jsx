import CartItem from './components/Card/CardItem';
import './App.css';
import './responsive.css';
import MenuOrder from './components/Menu/Menu' ;
import { useContext} from 'react';
import { GlobalContext } from './context';
import useWindowResize from './hooks/use-window-resize';
function App() {

  // global state 
  const {objData} = useContext(GlobalContext)
  
  const size = useWindowResize()

  console.log(size.width)
  return (
    <main>
    <div className='container' >    
    <div id="Grid-C">
    <h1>Desserts largura atual</h1>
    {
      objData.map(dataItem => {
        /*destructor in an object*/ 
        const {name, image, category,price, id, valor, openState} = dataItem
         return (
            <CartItem name={name}  image={ size.width <= 400 || size.width <= 600  ?
              image.mobile : size.width >= 700  ||  size.width <= 900 ? image.tablet : image.desktop } id={id}
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
