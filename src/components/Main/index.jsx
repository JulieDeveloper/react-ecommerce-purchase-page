
import StepProgress from './StepProgress/index'
import Step1 from './Step1'
// import Step2 from './Step2'
// import Step3 from './Step3'
import Cart from './Cart'
import ProgressControl from './ProgressControl'

import Style from './Main.module.css'




const Main = () => {
  return (
    <main className={Style.main}>
      <h2>結帳</h2>
      <div className={Style.main__panel}>
        <div className={Style.left__panel}>
          <StepProgress/>
          <form className={Style.form}>
              <Step1/>
              {/* <Step2/> */}
              {/* <Step3/> */}
          </form>
        </div>
        <div className={Style.right__panel}>
          <Cart/>
        </div>
      </div>
      <div className={`${Style.left__panel} ${Style.progressControl__wrapper}`}>
        <ProgressControl/>
      </div>
      
    </main>
  )
}

export default Main