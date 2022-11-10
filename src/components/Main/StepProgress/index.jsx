import Style from './StepProgress.module.css'

const Step = ({status, step, label, circleContent}) => {
  return(
    <div className={`${Style.step} ${status}`}>
      <div className={Style.step__circle}>{circleContent}</div>
      <div className={Style.step__label}>{label}</div>
    </div>
  )
}
const StepProgress = () => {
  return(
    <div className={Style.container}>
      <div className={Style.steps}>
        {/* <!-- step 1 --> */}
        <Step
          circleContent = {'\u2714'}
          label="寄件地址"
          status="checked"
        />

        <span className={`${Style.step__bar} ${Style.done}`}></span>

        {/* <!-- step 2 --> */}
        <Step
          circleContent = "2"
          label="運送方式"
          status="active"
        />
        <span className={`${Style.step__bar} ${Style.undone}`}></span>

        {/* <!-- step 3 --> */}
        <Step
          circleContent = "3"
          label="付款條件"
          status="disabled"
        />
 
      </div>
    </div>
  )
}

export default StepProgress
