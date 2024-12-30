import { createContext, useState } from "react";
import data from '../data/data.json'
// create the context
export const GobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({children}) {



    const [dt, setDt] = useState(data)
    const [totalBill, setTotalBill] = useState()

     // ativa e desativa menu de order
  const  checkId = (myId) => {
    setDt(prevState => 
      prevState.map(item =>
        item.id === myId ? {...item, openState: true} : item
     )
    )    
}

// incrementar o valor em +1
const hundleUp  = (myId) => {
  setDt(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: item.valor + 1} : item
   )
  )   
}

 // dencrementar o valor em -1
const hundleDown  = (myId) => {
  setDt(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: item.valor - 1} : item
   )
  )   
}

// remover e corrigir
const RemovePlate = (myId) => {
  setDt(prevState => 
    prevState.map(item =>
      item.id === myId ? {...item, valor: 0, openState: false} : item
   )
  ) 
} 



    return  <GobalContext.Provider value={{dt, hundleDown, hundleUp,
       checkId, RemovePlate, totalBill, setTotalBill}} >{children}</GobalContext.Provider>
}


export default GlobalState