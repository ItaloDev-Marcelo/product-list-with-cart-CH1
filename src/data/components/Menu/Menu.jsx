import cake from '../images/illustration-empty-cart.svg';
import Order from './order';
import { useContext } from 'react'
import { GobalContext } from '../../../context';

//test

export default function MenuOrder() {

     // global state
     const {objData} = useContext(GobalContext);
    
     // filter number of items
     const numOfItensinCart = objData.filter(item => item.openState === true).
     filter(item => item.valor >  0).map(item => item.valor).reduce((num,sum) => {
      return num + sum
     }, 0) 

     // check openstate and valor
     const responseData = objData.filter(item => item.openState === true &&  item.valor >  0)
     

     // total price of order
     const totalOrderPrice = objData.filter(item => item.totalOfthisplate > 0)
     .map(item => item.totalOfthisplate) 
     .reduce((num,sum) => {
      return num + sum
     }, 0) 


     // order map itens 
     const filterOrder =  responseData.map(data => 
      {
      const {name,valor,price, id} = data;
      return (
         <>
         <Order key={data.id} name={name} valor={valor} price={price} id={id}/>
         </>
      ) 
   })

  

    return (
        <>
        <article id="Menu">
           <div>
           <h3 id="menu-title">Your Cart ({numOfItensinCart}) </h3>
           {
            responseData <= 0 ? <>
           
           <div id='center-content'>
           <div id="order-image-empty">
               <img src={cake} alt='' />
            </div>
            <p id="information-card">Your added items will appear here</p>
           </div>
            </> : (<div >
               { filterOrder }  <div id='not-show' className='confirm-order'>
           <h4> Order Total $ {totalOrderPrice}</h4>
           <button >Confirm Order</button>
         </div>
            </div>)
           }
           
           </div>
        </article>
        </>
    )
}