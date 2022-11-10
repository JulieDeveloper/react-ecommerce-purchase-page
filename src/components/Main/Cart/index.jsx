
import { ReactComponent as IconMinus } from '../../../icons/amount-control-minus.svg'
import { ReactComponent as IconPlus } from '../../../icons/amount-control-plus.svg'
// import product1 from '../../../images/product-1.jpg'
// import product2 from '../../../images/product-2.jpg'

import Style from './Cart.module.css'

const CartData =[
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const Item = ({name, img, price, quantity}) => {

  return(
    <div className={Style.item}>
      <img className={Style.img__container} src={img} alt={name} />
      <div className={Style.info__wrapper}>
        <div className={Style.info}>
          <div className={Style.info__name}>{name}</div>
            <div className={Style.info__amount__wrapper}>
              <button className={Style.btn__controlAmount}>
                <IconMinus />
              </button>
              <span className={Style.info__amount}>
                {quantity}
              </span>
              <button className={Style.btn__controlAmount}>
                <IconPlus />
              </button>
            </div>
        </div>
        <div className={Style.info__price}>${price}</div>
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
        {CartData.map(data=> { return <Item {...data} key={data.id}/> } )}
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