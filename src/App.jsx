import { useState } from 'react'
import CartItem from './data/components/cardItem'
//import data from './data/data.json'
import './App.css'
import MenuOrder from './data/components/Menu/Menu'
import { useContext } from 'react'
import { GobalContext } from './context'
function App() {

  // esqueleto que eu estudei 
  const [cartObj, setCartObj] = useState([
    {id: 1, count : 0, openState: false, price: 6.50, plateName: 'Waffle with Berries'},
    {id: 2, count : 0, openState: false, price: 7, plateName: 'Vanilla Bean Crème Brûlée'},
    {id: 3, count : 0, openState: false, price: 8, plateName: 'Macaron Mix of Five'},
    {id: 4, count : 0, openState: false, price: 5.50, plateName: 'Classic Tiramisu'},
    {id: 5, count : 0, openState: false, price: 4, plateName: 'Pistachio Baklava'},
    {id: 6, count : 0, openState: false, price: 5, plateName: 'Lemon Meringue Pie'},
    {id: 7, count : 0, openState: false, price: 4.50, plateName: 'Red Velvet Cake'},
    {id: 8, count : 0, openState: false, price: 4.50, plateName: 'Salted Caramel Brownie'},
    {id: 9, count : 0, openState: false, price: 6.50, plateName: 'Vanilla Panna Cotta'},
  ])


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
