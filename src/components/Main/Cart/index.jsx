
import { ReactComponent as IconMinus } from '../../../icons/amount-control-minus.svg'
import { ReactComponent as IconPlus } from '../../../icons/amount-control-plus.svg'
// import product1 from '../../../images/product-1.jpg'
// import product2 from '../../../images/product-2.jpg'

import Style from './Cart.module.css'
import { useContext } from 'react'
import { CartProductsContext } from '../CartProductsContext'

const Cart = () => {

  const { cartProducts, setCartProducts} = useContext(CartProductsContext)
  
  function getTotal(data){
    let result = 0
    data.forEach((item) => result += item.price*item.quantity)
    return result.toLocaleString()
  }

  function handleDecreaseAmount(productId){
    setCartProducts(cartProducts.map(data => {
      if(data.id === productId && data.quantity!==1){
        return {...data, quantity: data.quantity - 1}
      }else{
        return data
      }
    }))
  }

  function handleIncreaseAmount(productId){
    setCartProducts(cartProducts.map(data => {
      if(data.id === productId){
        return {...data, quantity: data.quantity + 1}
      }else{
        return data
      }
    }))
  }
  const listItems = cartProducts.map(product => 
    <div className={Style.item}>
      <img className={Style.img__container} src={product.img} alt={product.name} />
      <div className={Style.info__wrapper}>
        <div className={Style.info}>
          <div className={Style.info__name}>{product.name}</div>
            <div className={Style.info__amount__wrapper}>
              <button className={Style.btn__controlAmount} onClick={()=>handleDecreaseAmount(product.id)}>
                <IconMinus />
              </button>
              <span className={Style.info__amount}>
                {product.quantity}
              </span>
              <button className={Style.btn__controlAmount} onClick={()=>handleIncreaseAmount(product.id)}>
                <IconPlus />
              </button>
            </div>
          </div>
        <div className={Style.info__price}>${product.price*product.quantity}</div>
      </div>
    </div>
  )

  return(
    <div className={Style.container}>
      {/* <!-- cart title --> */}
      <h3 className={Style.title}>購物籃</h3>
      <div>
        {listItems}
      </div>
      {/* <!-- cart shipping --> */}
      <div className={Style.row}>
        <div>運費</div>
        <div className={Style.row__price}>尚未選擇運送方式</div>
      </div>
      {/* <!-- cart total --> */}
      <div className={Style.row}>
        <div>小計</div>
        <div className={Style.row__price}>$ {getTotal(cartProducts)}</div>
      </div>
    </div>
  )
}

export default Cart