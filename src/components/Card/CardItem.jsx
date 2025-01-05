import cart from '../images/icon-add-to-cart.svg';
import addToCart from '../images/icon-increment-quantity.svg';
import removeToCart from '../images/icon-decrement-quantity.svg';
import { useContext} from 'react'
import { GlobalContext } from '../../context';

export default function CartItem({image,name,category,price, id, valor, openState}) {

  
  const {checkId, hundleUp, hundleDown} = useContext(GlobalContext)
    

    return (
        <article className="order--item"  >
          <div className={openState ? 'order--image active' : 'order--image'}>
              <img src={image} alt="" />
           <div>

           <div className='float-center'>   
          <div className="btn-row-order">
           
          {
             openState   ?
             <div className='orange'>
             
            
             <button className="remove-to-cart btn" onClick={() =>  hundleDown(id)}>

             <div className='cirlce'>
              <img src={removeToCart} alt="" />
             </div> 

              </button>

              <button className="btn bnt1">{valor}</button>


              <button className="Add-to-cart btn" onClick={() =>  hundleUp(id)}>
               <div className='cirlce'>
               <img src={addToCart} alt=""  />
               </div>
              </button>
             </div>
             : <button className="btn-order" onClick={() => checkId(id) }> <img src={cart} alt="" style={{width: 21, height: 20}} /> <span className='txt-space'>Add to cart</span> </button>
              
          }
          </div>
          
           </div>
           
          </div>
          </div>
          <section className="information-area">
            <h2 className="title">{category}</h2>
            <h2 className="plateInformation">{name}</h2>
            <h2 className="price">${price}</h2>
          </section>
        </article>
    )
}