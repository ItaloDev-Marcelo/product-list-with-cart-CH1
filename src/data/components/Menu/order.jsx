import deleteIcon from '../images/icon-remove-item.svg';
import { useContext } from 'react';
import { GobalContext } from '../../../context';

export default function Order({name, valor, price, id}) {

  // totalPrice
  const totalPrice = valor * price ; 
 
  // global state 
  const {RemovePlate} = useContext(GobalContext);

    return (
        <article className='order-item'>
          <div>
             <h4 className='plate-name'>{name}</h4>
             <div className='price-information'>
                <p className='timesOrder'>{valor}x</p>
                <p className='fix-price'><span className='fix-price'>@$ {price}</span>  <br /> <br />
                <span className='update-Value'>$ {totalPrice.toFixed(2)}</span> </p>
             </div>
          </div>
          <button className='delete-btn' onClick={() => RemovePlate(id)}><img src={deleteIcon} alt=''/></button>
        </article>
    ) 
}