import { ReactComponent as LogoBright } from '../../icons/logo-bright.svg'
// import { ReactComponent as LogoDark } from '../../icons/logo-dark.svg'
import { ReactComponent as IconFB } from '../../icons/facebook-bright.svg'
import { ReactComponent as IconIG } from '../../icons/instagram-bright.svg'
import { ReactComponent as IconWApp } from '../../icons/whatsapp-bright.svg'

import Style from './Footer.module.css'


const Footer = () => {
  return(
    <footer className={Style.container}>
    {/* <!-- brand --> */}
    <div className={Style.column__brand}>
      <a href="/">
        <LogoBright className={Style.logo}/>
      </a>
    </div>
    {/* <!-- service --> */}
    <div className={Style.column}>
      <h3 className={Style.column__title}>
        客戶服務
      </h3>
      <a href="/" className={Style.column__link}>運送說明</a>
      <a href="/" className={Style.column__link}>退換貨相關</a>
      <a href="/" className={Style.column__link}>付款資訊</a>
      <a href="/" className={Style.column__link}>FAQ</a>
    </div>
    {/* <!-- about --> */}
    <div className={Style.column}>
      <h3 className={Style.column__title}>
        關於我們
      </h3>
      <a href="/" className={Style.column__link}>品牌故事</a>
      <a href="/" className={Style.column__link}>媒體聯繫</a>
      <a href="/" className={Style.column__link}>Press Kit</a>
    </div>
    {/* <!-- info --> */}
    <div className={Style.column}>
      <h3 className={Style.column__title}>
        資訊
      </h3>
      <a href="/" className={Style.column__link}>隱私權政策</a>
      <a href="/" className={Style.column__link}>Cookie</a>
      <a href="/" className={Style.column__link}>GDPR</a>
    </div>
    {/* <!-- social --> */}
    <div className={Style.column}>
      <h3 className={Style.column__title}>
        追蹤ALPHA Shop
      </h3>
      <a href="tel:+886 02123-45678" className={Style.column__link}>+886 02123-45678</a>
      <div>
        <a href="/" className={Style.social__link}>
          <IconFB className={Style.icon}/>
        </a>
        <a href="/" className={Style.social__link}>
          <IconIG className={Style.icon}/>
        </a>
        <a href="/" className={Style.social__link}>
          <IconWApp className={Style.icon}/>
        </a>
      </div>
    </div>
  </footer>
  )
}


export default Footer