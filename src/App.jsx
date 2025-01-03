import CartItem from './data/components/CardItem';
import './App.css';
import MenuOrder from './data/components/Menu/Menu';
import { useContext} from 'react';
import { GobalContext } from './context';
function App() {

  // global state 
  const {objData} = useContext(GobalContext)
  

  return (
    <main>
    <h1>Desserts</h1>
    <div id="Grid-C">
    {
      objData.map(dataItem => {
        /*destructor in an object*/ 
        const {name, image, category,price, id, valor, openState} = dataItem
         return (
            <CartItem name={name}  image={image.mobile} id={id}
             category={category} price={price} 
              valor={valor} openState={openState} />
         ) 
      })
    }
    </div>
    <MenuOrder/>
    </main>
  )
}

export default App
