import Style from './ProgressControl.module.css'

import { ReactComponent as IconNext } from '../../../icons/arrow-right.svg'
import { ReactComponent as IconPrev } from '../../../icons/arrow-left.svg'

const ProgressControl = () =>{
  return(
    <div className={Style.container}>
      {/* <!-- prev-btn --> */}
      <button className={Style.btn__prev}>
        <IconPrev className={Style.arrow}/>
        <span className={Style.btn__prev__text}>上一步</span>
      </button>
      {/* <!-- next-btn --> */}
      <button className={Style.btn__next}>
        <span className={Style.btn__next__text}>下一步</span>
        <IconNext className={Style.arrow}/>
      </button>

    </div>
  )
}

export default ProgressControl