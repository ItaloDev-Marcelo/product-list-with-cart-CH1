import cake from '../images/illustration-empty-cart.svg';
import Carbon from '../images/icon-carbon-neutral.svg';
import confirmIcon from '../images/icon-order-confirmed.svg';
import Order from './order';
import Bill from '../Bill/Bill';
import { useContext} from 'react'
import { GlobalContext } from '../../context';

//test

export default function MenuOrder() {

     // global state
     const {objData,  openFinal, confirmOrder,  resetOrder} = useContext(GlobalContext);

    
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

   const BillItem =   responseData.map(data => 
      {
      const {name,valor,price} = data;
      return (
         <>
         <Bill name={name} valor={valor} price={price} thumbnail={data.image.thumbnail}/>
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
           <div className='row'>
           <h4> Order Total</h4>
           <h4 className='product-price'>$ {totalOrderPrice.toFixed(2)}</h4>
           </div>
           <div className='carbon-row'>
              <img src={Carbon} alt='tree' />
              <h4 id="carbon-txt">This is a <strong>carbon-neutral</strong> delivery </h4>
           </div>
           <button id="submit-form" onClick={() => confirmOrder()}>Confirm Order</button>

         </div>
            </div>)
           }  
           </div>
        </article>

         <section className={openFinal ? 'final-bill active' : 'final-bill'}>
                    <img src={confirmIcon} alt=''/>
                    <h5>Order confirmed</h5>
                    <p>We hope you enjoy your food!</p>

                    <div id='order-selected-items'>
                       {BillItem}
                       <div className='row'>
                       <h5> Order Total</h5>
                       <p className='product-price'>$ {totalOrderPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <button id="submit-form" onClick={() => resetOrder()} >Start New Order</button>

        </section>
        </>
    )
}