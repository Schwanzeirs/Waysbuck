import cssModules from '../../assets/css/Global.module.css'
import logo from '../../assets/img/Logo.png'
import Profile from './Profile'
import pict from '../../assets/img/Joker.png'
import Transaction from '../../components/Transaction'

function CustomerDetail() {
    return (
        <>
        <div className={cssModules.headerContainer}>
        <a href='/home'>
        <img className={cssModules.logo} src={logo} alt="" />
        </a>
        <Profile />
        </div>

        <div>
            <p className={cssModules.profile}>My Profile</p>
            <p className={cssModules.transaction}>My Transaction</p>
            <img className={cssModules.profilePicture} src={pict} alt="" />
            <div className={cssModules.nameContainer}>
                <p className={cssModules.detailTitle}>Full Name</p>
                <p>Kurofuku</p>
            </div>
            <div className={cssModules.emailContainer}>
                <p className={cssModules.detailTitle}>Email</p>
                <p>vanitasvanitatum@mail.com</p>
            </div>
            <Transaction />
        </div>
        </>
    );
}

export default CustomerDetail;