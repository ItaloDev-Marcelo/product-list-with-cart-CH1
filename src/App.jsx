import CartItem from './data/components/CardItem'
//import data from './data/data.json'
import './App.css'
import MenuOrder from './data/components/Menu/Menu'
import { useContext } from 'react'
import { GobalContext } from './context'
function App() {

  // esqueleto que eu estudei 


 // data.json file
  //const [dt, setDt] = useState(data)

  const {dt} = useContext(GobalContext)
  

 // console.log(dt)

 

 
  return (
    <>
    {
      dt.map(dataItem => {
        const {name, image, category,price, id, valor, openState} = dataItem
        //const {count} = cartObj
         return (
            <CartItem name={name} image={image.mobile} id={id}
             category={category} price={price} 
              valor={valor} openState={openState} />
         ) 
      })
    }
    <MenuOrder/>
    </>
  )
}

export default App
