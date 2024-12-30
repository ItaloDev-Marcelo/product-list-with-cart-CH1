import deleteIcon from '../images/icon-remove-item.svg';

export default function Order({name, valor, price}) {
  const total1 = valor * price; 
    return (
        <article>
          <div>
             <h4 className='plate-name'>{name}</h4>
             <div className='price-information'>
                <p className='timesOrder'>{valor}x</p>
                <p className='fix-price'><span className='inactive-zone'>@$ {price}</span>  <br /> <br />
                <span className='update-Value'>{total1.toFixed(2)}</span> </p>
             </div>
          </div>
          <button className='delete-btn'><img src={deleteIcon} alt=''/></button>
        </article>
    ) 
}