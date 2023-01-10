
import StepProgress from './StepProgress/index'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Cart from './Cart'
import ProgressControl from './ProgressControl'

import Style from './Main.module.css'

import { useState } from 'react'
import { CardInfoContext, initialCardInfo } from './CardInfoContext'
import { CartProductsContext, initialProducts } from './CartProductsContext'



const Main = () => {
  const [step, setStep] = useState(1)
  const [cardInfo, setCardInfo] = useState(initialCardInfo)
  const [cartProducts, setCartProducts] = useState(initialProducts)

  let form;
  if(step === 1){
    form = <Step1 />
  }else if (step === 2){
    form = <Step2 />
  }else{
    form = <Step3 />
  }

  return (
    <main className={Style.main}>
      <h2>結帳</h2>
        <CardInfoContext.Provider value={{cardInfo,setCardInfo}}>
          <CartProductsContext.Provider value={{cartProducts,setCartProducts}}>
            <div className={Style.main__panel}>
              <div className={Style.left__panel}>
                <StepProgress currentStep={step}/>
                <form className={Style.form}>
                  {form}
                </form>
              </div>
              <div className={Style.right__panel}>
                <Cart/>
              </div>
            </div>
            <div className={`${Style.left__panel} ${Style.progressControl__wrapper}`}>
              <ProgressControl step={step} setStep={setStep}/>
            </div>
          </CartProductsContext.Provider>
        </CardInfoContext.Provider>
    </main>
  )
}

export default Main