import deleteIcon from '../images/icon-remove-item.svg';


import { useContext } from 'react'
import { GobalContext } from '../../../context';

export default function Order({name, valor, price, id, key}) {

  const total1 = valor * price ; 
 
  const {RemovePlate} = useContext(GobalContext);

    return (
        <article key={key}>
          <div>
             <h4 className='plate-name'>{name}</h4>
             <div className='price-information'>
                <p className='timesOrder'>{valor}x</p>
                <p className='fix-price'><span className='inactive-zone'>@$ {price}</span>  <br /> <br />
                <span className='update-Value'>$ {total1.toFixed(2)}</span> </p>
             </div>
          </div>
          <button className='delete-btn' onClick={() => RemovePlate(id)}><img src={deleteIcon} alt=''/></button>
        </article>
    ) 
}