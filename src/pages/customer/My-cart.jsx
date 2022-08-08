import cssModules from '../../assets/css/Global.module.css'
import pict from '../../assets/img/Transaction.png'
import bin from '../../assets/img/Bin.png'
import logo from '../../assets/img/Logo.png'
import Profile from './Profile'

function MyCart() {
    return (
        <>
        <div className={cssModules.headerContainer}>    
        <a href='/home'>
        <img className={cssModules.logo} src={logo} alt="" />
        </a>
        <Profile />
        </div>
        <div>
            <p className={cssModules.orderTitle}>My Cart</p>
            <div className={cssModules.orderContainer}>
                <p className={cssModules.orderReview}>Review Your Order</p>
                <br></br>
                <div className={cssModules.line1}></div>
                <img className={cssModules.pictOrder1} src={pict} alt="" />
                <p className={cssModules.menuTitle1}>Ice Coffe Palm Sugar</p>
                <p className={cssModules.orderTopping1}>Topping</p>
                <p className={cssModules.orderToppingValue1}>: Bill Berry Boba, Bubble Tea Gelatin</p>
                <p className={cssModules.orderPrice1}> Rp.33.000</p>
                <img className={cssModules.deleteOrder1} src={bin} alt="" />
                <img className={cssModules.orderLogo1} src={logo} alt="" />
                <img className={cssModules.pictOrder2} src={pict} alt="" />
                <p className={cssModules.menuTitle2}>Ice Coffe Palm Sugar</p>
                <p className={cssModules.orderTopping2}>Topping</p>
                <p className={cssModules.orderToppingValue2}>: Bill Berry Boba, Bubble Tea Gelatin</p>
                <p className={cssModules.orderPrice2}> Rp.33.000</p>
                <img className={cssModules.deleteOrder2} src={bin} alt="" />
                <img className={cssModules.orderLogo2} src={logo} alt="" />
                <div className={cssModules.line2}></div>
            </div>
        </div>

        <div>
            <div className={cssModules.orderTotal}>
                <div className={cssModules.line3}></div>
                <p className={cssModules.subTotal}>Subtotal</p><p className={cssModules.subTotalValue}>69.000</p>
                <p className={cssModules.qty}>Qty</p><p className={cssModules.qtyValue}>2</p>
                <div className={cssModules.line4}></div>
                <p className={cssModules.total}>Total</p><p className={cssModules.totalValue}>69.000</p>
                <div className={cssModules.payButtonContainer}>
                    <button className={cssModules.payButton}>
                        <p className={cssModules.payButtonText}>Pay</p>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyCart