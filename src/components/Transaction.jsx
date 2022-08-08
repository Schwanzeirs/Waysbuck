import cssModules from '../assets/css/Global.module.css'
import pict from '../assets/img/Transaction.png'
import logo from '../assets/img/Logo.png'
import qr from '../assets/img/Qr.png'

function Transaction() {
    return (
        <div className={cssModules.detailTransaction}>
            <img className={cssModules.detailTransactionLogo} src={logo} alt="" />
            <img className={cssModules.qr} src={qr} alt="" />
            <div>
                <img className={cssModules.pictTransaction1} src={pict} alt="" />
                <img className={cssModules.logoTransaction1} src={logo} alt="" />
                <p className={cssModules.titleTransaction1}>Ice Coffe Palm Sugar</p>
                <p className={cssModules.dateTransaction1}><b>Saturday</b>, 5 March 2020</p>
                <p className={cssModules.topping1}>Topping</p>
                <p className={cssModules.toppingValue1}>: Bill Berry Boba, Bubble Tea Gelatin</p>
                <p className={cssModules.price1}>Price : Rp.33.000</p>
            </div>
            <div>
                <img className={cssModules.pictTransaction2} src={pict} alt="" />
                <img className={cssModules.logoTransaction2} src={logo} alt="" />
                <p className={cssModules.titleTransaction2}>Ice Coffe Palm Sugar</p>
                <p className={cssModules.dateTransaction2}><b>Saturday</b>, 5 March 2020</p>
                <p className={cssModules.topping2}>Topping</p>
                <p className={cssModules.toppingValue2}>: Bill Berry Boba, Manggo</p>
                <p className={cssModules.price2}>Price : Rp.36.000</p>
            </div>
            <div className={cssModules.approve}>
                <p className={cssModules.approveText}>Waiting Approve</p>
            </div>
            <p className={cssModules.sub}>Sub Total : 69.000</p>
        </div>
    )
}

export default Transaction