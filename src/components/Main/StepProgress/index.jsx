import Style from './StepProgress.module.css'

const Step = ({status, step, label, circleContent}) => {
  return(
    <div className={Style.step}>
      <div className={`
        ${Style.step__circle} 
        ${status === 'checked' && Style.checked}
        ${status === 'disabled' && Style.disabled}
      `}>      
        {circleContent}
      </div>
      <div className={` 
        ${Style.step__label} 
        ${status === 'checked' && Style.checked}
        ${status === 'disabled' && Style.disabled}
      `}>
        {label}
      </div>
    </div>
  )
}

const StepProgress = ({currentStep}) => {
  function getCircleContent(step){
    if(step < currentStep){
      return '\u2714'
    }
    return step.toString()
  }

  function getStepStatus(step){
    if(step === currentStep){
      return
    }else if(step < currentStep){
      return 'checked'
    }else{
      return 'disabled'
    }
  }

  return(
    <div className={Style.container}>
      <div className={Style.steps}>
        {/* <!-- step 1 --> */}
        <Step
          circleContent = {getCircleContent(1)}
          label="寄件地址"
          status={getStepStatus(1)}
        />

        {/* step bar */}
        <span className={Style.step__bar}></span>

        {/* <!-- step 2 --> */}
        <Step
          circleContent = {getCircleContent(2)}
          label="運送方式"
          status={getStepStatus(2)}
        />

        {/* step bar */}
        <span className={`${Style.step__bar} ${currentStep===1 && Style.disabled}`}></span>

        {/* <!-- step 3 --> */}
        <Step
          circleContent = {getCircleContent(3)}
          label="付款條件"
          status={getStepStatus(3)}
        />
      </div>
    </div>
  )
}

export default StepProgress
