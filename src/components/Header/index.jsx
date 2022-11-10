import { ReactComponent as IconHamburger } from '../../icons/hamburger.svg'
import { ReactComponent as LogoBright } from '../../icons/logo-bright.svg'
// import { ReactComponent as LogoDark } from '../../icons/logo-dark.svg'
import { ReactComponent as IconSearch } from '../../icons/search.svg'
import { ReactComponent as IconCart } from '../../icons/cart.svg'
import { ReactComponent as IconDarkmodeMoon } from '../../icons/darkmode-moon.svg'
// import { ReactComponent as IconDarkmodeSun } from '../../icons/darkmode-sun.svg'

import Style from './Header.module.css'

const Header = () => {
  return(
    <header>
    {/* <!-- hamburger --> */}
    <label for="navbar-toggle" className={Style.hamburger__label}>
      <IconHamburger/>
    </label>
    {/* <!-- logo --> */}
    <a href="http://www.alphashop.com" className={Style.brand}>
      <LogoBright className={Style.logo}/>
      {/* <LogoDark/> */}
    </a>
    {/* <!-- menu toggle--> */}
    <input type="checkbox" className={Style.hamburger__input} id="navbar-toggle" />
    {/* <!-- menu --> */}
    <nav className={Style.nav}>
      <ul className={Style.nav__menu__list}>
        <li className={Style.menu__item}>
          <a href="/men" className={Style.menu__item__link}>男款</a>
        </li>
        <li className={Style.menu__item}>
          <a href="/women" className={Style.menu__item__link}>女款</a>
        </li>
        <li className={Style.menu__item}>
          <a href="/news" className={Style.menu__item__link}>最新消息</a>
        </li>
        <li className={Style.menu__item}>
          <a href="/custom" className={Style.menu__item__link}>客製商品</a>
        </li>
        <li className={Style.menu__item}>
          <a href="/contact" className={Style.menu__item__link}>聯絡我們</a>
        </li>
      </ul>
      <ul className={Style.nav__icons__list}>
        <li className={Style.icon__wrapper}>
          <IconSearch className={Style.icon}/>
        </li>
        <li className={Style.icon__wrapper}>
          {/* <!-- cart --> */}
          <IconCart className={Style.icon}/>
        </li>
        {/* <!-- darkmode --> */}
        <li className={Style.icon__wrapper}>
          <label className={Style.darkmode__label} for="menu-darkmode-toggle">
            {/* <!-- moon --> */}
            <IconDarkmodeMoon className={Style.icon}/>
            {/* <!-- sun --> */}
            {/* <IconDarkmodeSun className={Style.icon}/> */}
          </label>
          <input type="checkbox" className={Style.darkmode__input}id="menu-darkmode-toggle" />
        </li>
      </ul>
    </nav>

  </header>
  )
}

export default Header