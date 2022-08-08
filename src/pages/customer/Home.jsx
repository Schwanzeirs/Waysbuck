import cssModules from '../../assets/css/Global.module.css'
import pict from '../../assets/img/Fab.png'
import logo from '../../assets/img/Logo.png'
import picture1 from '../../assets/img/Card1.png'
import picture2 from '../../assets/img/Card2.png'
import picture3 from '../../assets/img/Card3.png'
import picture4 from '../../assets/img/Card4.png'
import Bg from '../../components/Bg'
import Profile from './Profile'

function Home() {
    return (
        <>
        <div className={cssModules.headerContainer}>
        <img className={cssModules.logo} src={logo} alt="" />
        <Profile />
        </div>
        <div className={cssModules.container}>
            <div className={cssModules.rectangle}>
            <Bg />
            <img className={cssModules.sash} src={pict} alt="" />
                <p className={cssModules.title}>WAYSBUCK</p>
                <p className={cssModules.preview}>Things are changing, but we’re still here for you</p>
                <p className={cssModules.content}>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. 
                    Waysbucks Drivers is also available
                    <br></br><br></br> 
                    Let’s Order...
                    </p>
            </div>
        </div>

        <div>
            <p className={cssModules.lets}>Let's Order</p>
            <div className={cssModules.card1}>
                <img src={picture1} alt="" />
                <img className={cssModules.cardLogo1} src={logo} alt="" />
                <a href="/detail-product">
                <p className={cssModules.cardTitle1}>Ice Coffe Palm Sugar</p>
                </a>
                <p className={cssModules.cardPrice1}>Rp.27.000</p>
            </div>
            <div className={cssModules.card2}>
                <img src={picture2} alt="" />
                <img className={cssModules.cardLogo2} src={logo} alt="" />
                <p className={cssModules.cardTitle2}>Ice Coffe Green Tea</p>
                <p className={cssModules.cardPrice2}>Rp.31.000</p>
            </div>
            <div className={cssModules.card3}>
                <img src={picture3} alt="" />
                <img className={cssModules.cardLogo3} src={logo} alt="" />
                <p className={cssModules.cardTitle3}>Hanami Latte</p>
                <p className={cssModules.cardPrice3}>Rp.29.000</p>
            </div>
            <div className={cssModules.card4}>
                <img src={picture4} alt="" />
                <img className={cssModules.cardLogo4} src={logo} alt="" />
                <p className={cssModules.cardTitle4}>Clepon Coffe</p>
                <p className={cssModules.cardPrice4}>Rp.28.000</p>
            </div>
        </div>
        </>
    );
}

export default Home;