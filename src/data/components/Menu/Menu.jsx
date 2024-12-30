import cake from '../images/illustration-empty-cart.svg';
import Order from './order';
import { useContext } from 'react'
import { GobalContext } from '../../../context';

//test

export default function MenuOrder() {

     const {dt} = useContext(GobalContext);
    
     const litte = dt.filter(item => item.openState === true).
     filter(item => item.valor >  0).map(item => item.valor).reduce((num,sum) => {
      return num + sum
     }, 0) 

     const responseData = dt.filter(item => item.openState === true &&  item.valor >  0)


     const filterObj =  responseData.map(data => 
      {
      const {name,valor,price} = data;
      return <Order name={name} valor={valor} price={price}/>
   })
     
 
    return (
        <>
        <article id="Menu">
           <div>
           <h3 id="menu-title">You Cart ({litte}) </h3>
           {
            responseData <= 0 ? <>
            <div id="order-image-empty">
               <img src={cake} alt='' />
            </div>
            <p id="information-card">Your added items will appear here</p>
            </> : filterObj
           }
           
           </div>
        </article>

       
        </>
    )
}