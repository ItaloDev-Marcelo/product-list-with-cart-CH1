import { createContext, useState } from "react";
import data from '../data/data.json'
// create the context
export const GobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({children}) {

// json file state 
  
const [objData, setObjData] = useState(data)

// ativa e desativa menu de order
  const  checkId = (myId) => {
    setObjData(prevState => 
      prevState.map(item =>
        item.id === myId ? {...item, openState: true} : item
     )
    )    
}

// incrementar o valor em +1
const hundleUp  = (myId) => {
  
  setObjData(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: item.valor + 1} : item
   )
  )   

  // update totalOfthisPlate
  setObjData(prevState => 
    prevState.map(item => (
        item.valor > 0 ? {...item, totalOfthisplate: (item.valor * item.price)} : item
    ))
  )
}

 // dencrementar o valor em -1
const hundleDown  = (myId) => {
  setObjData(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: item.valor - 1} : item
   )
  )  
  
  // update totalOfthisPlate
  setObjData(prevState => 
    prevState.map(item => (
        item.valor <= 1 ? {...item, totalOfthisplate: (item.totalOfthisplate -  item.price )} : item
    ))
  )
}

// remover e corrigir
const RemovePlate = (myId) => {
  setObjData(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: 0, openState: false} : item
   )
  ) 

  // update totalOfthisPlate

  setObjData(prevState => 
    prevState.map(item => (
        item.valor <= 1 ? {...item, totalOfthisplate:0} : item
    ))
  )
} 



    return (
       <GobalContext.Provider value={{objData, hundleDown, hundleUp,
      checkId, RemovePlate, setObjData}} >{children}</GobalContext.Provider>) 
}


export default GlobalState