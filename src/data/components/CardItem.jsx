import cart from './images/icon-add-to-cart.svg';
import addToCart from './images/icon-increment-quantity.svg';
import removeToCart from './images/icon-decrement-quantity.svg';


import { useContext} from 'react'
import { GobalContext } from '../../context';

export default function CartItem({image,name,category,price, id, valor, openState}) {

  
  const {checkId, hundleUp, hundleDown} = useContext(GobalContext)
    

    return (
        <article className="order--item"  >
          <div className="order--image">
              <img src={image} alt="" />
              <div>
          <button className="btn-order" onClick={() => checkId(id) }> <img src={cart} alt="" /></button>
          <div className="btn-row-order">
           
          {
             openState ?
             <>
             <button className="Add-to-cart" onClick={() =>  hundleUp(id)}> <img src={addToCart} alt="" /></button>
             <button>{valor < 1 ? 0 : valor }</button>
            
             <button className="remove-to-cart" onClick={() =>  hundleDown(id)}><img src={removeToCart} alt="" /></button>
             </>
             : null
          }
          
          </div>
          </div>
          </div>
          <section id="information-area">
            <h1 className="title">{category}</h1>
            <h2 className="plateInformation">{name}</h2>
            <h2 className="price">${price}</h2>
          </section>
        </article>
    )
}