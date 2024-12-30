import { createContext, useState } from "react";
import data from '../data/data.json'
// create the context
export const GobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({children}) {



    const [dt, setDt] = useState(data)
    const [totalBill, setTotalBill] = useState(0)

     // ativa e desativa menu de order
  const  checkId = (myId) => {
    setDt(prevState => 
      prevState.map(item =>
        item.id === myId ? {...item, openState: !item.openState} : item
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
    return  <GobalContext.Provider value={{dt, hundleDown, hundleUp, checkId}} >{children}</GobalContext.Provider>
}


export default GlobalState