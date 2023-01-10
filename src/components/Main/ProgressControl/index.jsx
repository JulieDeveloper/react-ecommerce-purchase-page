import Style from './ProgressControl.module.css'

import { ReactComponent as IconNext } from '../../../icons/arrow-right.svg'
import { ReactComponent as IconPrev } from '../../../icons/arrow-left.svg'
import { useContext } from 'react'
import { CartProductsContext } from '../CartProductsContext'
import { CardInfoContext } from '../CardInfoContext'


function Btn({type, disabled, text, iconDisabled, onClick}){
  if(disabled) return

  let btnStyle;
  let icon;
  let textStyle;

  if(type === 'prev'){
    btnStyle = Style.btn__prev
    icon = <IconPrev className={Style.arrow}/>
    textStyle = Style.btn__prev__text
    return(
      <button className={btnStyle} onClick={onClick}>
       {icon}
       <span className={textStyle}>{text}</span>
      </button>
  )
  }else{
    btnStyle = Style.btn__next
    icon = <IconNext className={Style.arrow}/>
    textStyle = Style.btn__next__text
    return(
      <button className={btnStyle} onClick={onClick}>
        <span className={textStyle}>{text}</span>
        {!iconDisabled && icon}
      </button>
    )
  }

  
}

const ProgressControl = ({step, setStep}) =>{
  const {cardInfo} = useContext(CardInfoContext)
  const {cartProducts} = useContext(CartProductsContext)
  let prevBtnText = '上一步'
  let nextBtnText = '下一步'
  if(step === 3){
    nextBtnText = '完成訂單'
  }

   function Total(products) {
    let total=0
    products.forEach( product => {
      total += product.price * product.quantity
    })
    return total
  }

  return(
    <div className={Style.container}>
      <Btn 
        type="prev"
        disabled={step === 1}
        text={prevBtnText}
        onClick={() => setStep(step - 1)}
      />
      <Btn 
        type="next"
        disabled={false}
        text={nextBtnText}
        iconDisabled={step === 3}
        onClick={() => {
          if(step<3){
            setStep(step + 1)
          }
          if(step===3){
            console.log('Card information:',cardInfo)
            console.log('Total payment amount:$', Total(cartProducts))
          }
        }}
      />
    </div>
  )
}

export default ProgressControl