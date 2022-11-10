
import { ReactComponent as IconMinus } from '../../../icons/amount-control-minus.svg'
import { ReactComponent as IconPlus } from '../../../icons/amount-control-plus.svg'
import product1 from '../../../images/product-1.jpg'
import product2 from '../../../images/product-2.jpg'

import Style from './Cart.module.css'

const CartData =[
  {
    id:0,
    img: product1,
    name:'破壞補丁修身牛仔褲',
    price:3999,
    amount:1
  },
  {
    id:1,
    img:product2,
    name:'刷色直筒牛仔褲',
    price:1299,
    amount:1
  },
]

const Item = ({data}) => {
  return(
    <div className={Style.item}>
      <img className={Style.img__container} src={data.img} alt={data.name} />
      <div className={Style.info__wrapper}>
        <div className={Style.info}>
          <div className={Style.info__name}>{data.name}</div>
            <div className={Style.info__amount__wrapper}>
              <button className={Style.btn__controlAmount}>
                <IconMinus />
              </button>
              <span className={Style.info__amount}>
                {data.amount}
              </span>
              <button className={Style.btn__controlAmount}>
                <IconPlus />
              </button>
            </div>
        </div>
        <div className={Style.info__price}>${data.price}</div>
      </div>
    </div>
  )
}

const Cart = () => {
  return(
    <div className={Style.container}>
      {/* <!-- cart title --> */}
      <h3 className={Style.title}>購物籃</h3>
      <div>
        <Item
          data = {CartData[0]}
        />
        <Item
          data = {CartData[1]}
        />
      </div>
      {/* <!-- cart shipping --> */}
      <div className={Style.row}>
        <div>運費</div>
        <div className={Style.row__price}>尚未選擇運送方式</div>
      </div>
      {/* <!-- cart total --> */}
      <div className={Style.row}>
        <div>小計</div>
        <div className={Style.row__price}>$5298</div>
      </div>
    </div>
  )
}

export default Cart