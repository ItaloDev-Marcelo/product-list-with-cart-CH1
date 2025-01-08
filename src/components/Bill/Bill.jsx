
export default function Bill({thumbnail, name, price, valor}) {

    const data = price * valor
    return (
        <>
         <article className="bill-item">
            <div className="card--bill-left">
             <img src={thumbnail} alt="" />
            </div>
            <div className="card-bill-right">
            <div className="bill-row">
              <h6 className="bill-plate-name">{name}</h6>
                 <p><span className="orders-times">{valor}x</span>  <span className="fix-order-value">@$ {price}</span> </p>
             </div>
            </div>
            <p>{data.toFixed(2)}</p>
        </article>
        <hr></hr>
        </>
    )
}