
export default function Bill({thumbnail, name, price, valor}) {

    const data = price * valor
    return (
        <>
         <article className="bill-item">
            <div className="card--bill-left">
              <div className="img--container">
                 <img src={thumbnail} alt="" />
              </div>
              <h6 className="bill-plate-name">{name}</h6>

              <div className="bill-row">
                 <p><span className="orders-times">{valor}x</span>  <span className="fix-order-value">@ {price}</span> </p>
              </div>
            </div>
            <div className="card-bill-right">
                <p>{data.toFixed(2)}</p>
            </div>
        </article>
        <hr></hr>
        </>
    )
}