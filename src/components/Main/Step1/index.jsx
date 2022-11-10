import Style from './Step1.module.css'

const Step1 = () =>{
  return(
    <>
      <h2>
        寄送地址
      </h2>
      <div className={Style.content}>
        <div className={Style.row}>
          {/* <!-- gender --> */}
          <div className={Style.wrapper__gender}>
            <label for="gender">稱謂</label>
            <div className={Style.select__wrapper}>
              <select name="gender" id="gender" required>
                <option value="Male">先生</option>
                <option value="Female">小姐</option>
              </select>
            </div>
          </div>
          {/* <!-- name --> */}
          <div className={Style.wrapper__name}>
            <label for="name">姓名</label>
            <input type="text" placeholder="請輸入姓名" id="name" required />
          </div>
        </div>

        <div className={Style.row}>
          {/* <!-- tel --> */}
          <div className={Style.wrapper__tel}>
            <label for="tel">電話</label>
            <input type="tel" placeholder="請輸入電話" id="tel" inputmode="tel" required /> 
          </div>
          {/* <!-- Email --> */}
          <div className={Style.wrapper__email}>
            <label for="email">Email</label>
            <input type="text" placeholder="請輸入電子信箱" id="email" inputmode="email" required />
          </div>
        </div>
        <div className={Style.row}>
          {/* <!-- city --> */}
          <div className={Style.wrapper__city}>
            <label for="city">縣市</label>
            <div className={Style.select__wrapper}>
              <select name="city" id="city" required>
                <option value="" disabled selected>請選擇縣市</option>
                <option value="KLU">基隆市</option>
                <option value="TPH">新北市</option>
                <option value="TPE">臺北市</option>
                <option value="TYC">桃園市</option>
                <option value="HSH">新竹縣</option>
                <option value="HSC">新竹市</option>
                <option value="MAC">苗栗市</option>
                <option value="MAL">苗栗縣</option>
                <option value="TXG">臺中市</option>
                <option value="CWH">彰化縣</option>
                <option value="CWS">彰化市</option>
                <option value="NTC">南投市</option>
                <option value="NTO">南投縣</option>
                <option value="YLH">雲林縣</option>
                <option value="CHY">嘉義縣</option>
                <option value="CYI">嘉義市</option>
                <option value="TNN">臺南市</option>
                <option value="KHH">高雄市</option>
                <option value="IUH">屏東縣</option>
                <option value="PTS">屏東市</option>
                <option value="ILN">宜蘭縣</option>
                <option value="ILC">宜蘭市</option>
                <option value="HWA">花蓮縣</option>
                <option value="HWC">花蓮市</option>
                <option value="TTC">臺東市</option>
                <option value="TTT">臺東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KMN">金門縣</option>
                <option value="LNN">連江縣</option>
              </select>
            </div>
          </div>
          {/* <!-- address --> */}
          <div className={Style.wrapper__address}>
            <label for="address">地址</label>
            <input type="text" placeholder="請輸入地址" id="address" required />
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1