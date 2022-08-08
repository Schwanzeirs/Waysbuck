import cssModules from '../../assets/css/Global.module.css'
import logo from '../../assets/img/Logo.png'
import Profile from '../customer/Profile';
import pict from '../../assets/img/Transaction.png'
import toping1 from '../../assets/img/toping1.png'
import toping2 from '../../assets/img/toping2.png'
import toping3 from '../../assets/img/toping3.png'
import toping4 from '../../assets/img/toping4.png'
import toping5 from '../../assets/img/toping5.png'
import toping6 from '../../assets/img/toping6.png'
import toping7 from '../../assets/img/toping7.png'
import toping8 from '../../assets/img/toping8.png'
import Topping from '../../assets/dummydata/Topping';
import { useState } from 'react';

function DetailProduct() {

    const [ toppings ] = useState(Topping)

    return (
        <>
        <div className={cssModules.headerContainer}>
        <a href='/home'>
        <img className={cssModules.logo} src={logo} alt="" />
        </a>
        <Profile />
        </div>
        <div>
            <img className={cssModules.detailProductPict} src={pict} alt="" />
            <img className={cssModules.logoDetail} src={logo} alt="" />
        </div>
        <div className={cssModules.detailProductContainer}>
            <p className={cssModules.detailProductTitle}>Ice Coffe Palm Sugar</p>
            <p className={cssModules.detailProductPrice}>Rp. 27.000</p>
            <p className={cssModules.detailProductToping}>Toping</p>
            <div>
            <input className={cssModules.check1} type="checkbox" id="Topping1"/>
                <label For="Topping1">
                    <img className={cssModules.detailTopping1} src={toping1} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle1}>Bubble Tea Gelatin</p>
            </div>
            <div>
            <input className={cssModules.check2} type="checkbox" id="Topping2" />
                <label for="Topping2">
                    <img className={cssModules.detailTopping2} src={toping2} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle2}>Manggo</p>
            </div>
            <div>
            <input className={cssModules.check3} type="checkbox" id="Topping3" />
                <label for="Topping3">
                <img className={cssModules.detailTopping3} src={toping3} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle3}>Green Coconut</p>
            </div>
            <div>
            <input className={cssModules.check4} type="checkbox" id="Topping4" />
                <label for="Topping4">
                <img className={cssModules.detailTopping4} src={toping4} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle4}>Boba Manggo</p>
            </div>
            <div>
            <input className={cssModules.check5}  type="checkbox" id="Topping5" />
                <label for="Topping5">
                <img className={cssModules.detailTopping5} src={toping5} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle5}>Bill Berry Boba</p>
            </div>
            <div>
            <input className={cssModules.check6} type="checkbox" id="Topping6" />
                <label for="Topping6">
                <img className={cssModules.detailTopping6} src={toping6} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle6}>Kiwi Popping Pearl</p>
            </div>
            <div>
            <input className={cssModules.check7} type="checkbox" id="Topping7" />
                <label for="Topping7">
                <img className={cssModules.detailTopping7} src={toping7} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle7}>Matcha Cantaloupe</p>
            </div>
            <div>
            <input className={cssModules.check8} type="checkbox" id="Topping8" />
                <label For="Topping8">
                <img className={cssModules.detailTopping8} src={toping8} alt="" />
                </label>
            <p className={cssModules.detailToppingTitle8}>Strawberry Popping</p>
            </div>
            <p className={cssModules.detailTotal}>Total</p>
            <p className={cssModules.detailTotalValue}>Rp.27.000</p>
        </div>
        <div className={cssModules.addCartContainer}>
            <button className={cssModules.addCartButton}>
                <p className={cssModules.addCartButtonText}>Add Cart</p>
            </button>
        </div>
        </>
    )
}

export default DetailProduct