import Style from './Step2.module.css'

const OptionGroup = ({id, value, title, info, price }) => {

  function showPrice(price){
    if(price === 0){
      return '免費'
    }else {
      return `$${price}`
    }
  }
  

  return(
    <div className={Style.row}>
      <input type="radio" id={id} name="shipment" value={value} />
      <label for={id}>
        <div>
          <p className={Style.title}>{title}</p>
          <p>{info}</p>
        </div> 
        <span className={Style.price}>{showPrice(price)}</span>
      </label>
    </div>
  )
}


const Step2 = () =>{
  return(
    <>
      <h2>
        運送方式
      </h2>
      <div className={Style.content}>
        <OptionGroup
          id="standard"
          value="standard"
          price={0}
          title="標準運送"
          info="約 3~7 個工作天"
        />
        <OptionGroup
          id="DHL"
          value="DHL"
          price={500}
          title="DHL 貨運"
          info="48 小時內送達"
        />        
      </div>
    </>
  )
}

export default Step2
