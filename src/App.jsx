import CartItem from './components/Card/CardItem';
import './App.css';
import MenuOrder from './components/Menu/Menu' ;
import { useContext, useState} from 'react';
import { GlobalContext } from './context';
function App() {

  // global state 
  const {objData} = useContext(GlobalContext)

  const [selectedWidth, SetSelectedWidth] = useState()
  
  function update() {
    
    SetSelectedWidth(window.innerWidth)

    if(selectedWidth <= 500) {
       console.log('Mobile')
    }else if(selectedWidth <= 768) {
      console.log('Tablet')
    }else {
      console.log('Desktop')
    }
  }

  window.addEventListener('resize', update);

  return (
    <main>
    <h1>Desserts</h1>
    <div className='container'>
      
    <div id="Grid-C">
    {
      objData.map(dataItem => {
        /*destructor in an object*/ 
        const {name, image, category,price, id, valor, openState} = dataItem
         return (
            <CartItem name={name}  image={ selectedWidth >= 300 && selectedWidth <= 600  ?
              image.mobile : selectedWidth > 600  &&  selectedWidth <= 900 ? image.tablet : image.desktop } id={id}
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
