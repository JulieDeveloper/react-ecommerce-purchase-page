import Style from './Step3.module.css'
import { useContext } from 'react'
import { CardInfoContext } from '../CardInfoContext'

const Step3 = () =>{
  const {cardInfo, setCardInfo} = useContext(CardInfoContext)
  const handleInputChange = (e) =>{
    setCardInfo({
      ...cardInfo,
      [e.target.name]:e.target.value
    })
  }
  return(
  <>
    <h2>
      付款資訊
    </h2>
    <div className={Style.content}>
      <div className={Style.row}>
       {/* <!-- card-host --> */}
        <div className={Style.wrapper__holder}>
          <label for="card-holder" className={Style.label}>
            持卡人姓名
          </label>
          <input 
            type="text" 
            name="cardHolder"
            placeholder="John Doe" 
            id="card-host" 
            onChange={handleInputChange}
            required 
          />
        </div>
      </div>
      <div className={Style.row}>
        {/* <!-- card-num --> */}
        <div className={Style.wrapper__num}>
          <label for="card-num" className={Style.label}>
            卡號
          </label>
          <input 
            type="text" 
            name="cardNum"
            placeholder="1111 2222 3333 4444" 
            id="card-num" 
            onChange={handleInputChange}
            inputmode="numeric" 
            required 
          />
        </div>
      </div>
      <div className={Style.row}>
        {/* <!-- card-valid --> */}
        <div className={Style.wrapper__valid}>
          <label for="card-valid" className={Style.label}>有效日期</label>
          <input 
            type="text" 
            name="cardValid"
            placeholder="MM/YY" 
            id="card-valid" 
            onChange={handleInputChange}
            required 
          />
        </div>
        {/* <!-- card-ccv --> */}
        <div className={Style.wrapper__ccv}>
          <label for="card-ccv" className={Style.label}>CVC/CCV</label>
          <input 
            type="text" 
            name="cardCCV"
            placeholder="123" 
            id="card-ccv" 
            onChange={handleInputChange}
            inputmode="numeric" 
            maxlength="3"
            required 
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default Step3
