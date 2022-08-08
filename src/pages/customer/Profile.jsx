import cssModules from '../../assets/css/Button.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import user from '../../assets/img/Profile.png'
import logout from '../../assets/img/Logout.png'
import profile from '../../assets/img/User.png'
import basket from '../../assets/img/Basket.png'

const styles = {
    dropdown: {
        backgroundColor: "white",
        border: "0px",
    },

    pict: {
        width: "60px",
        height: "60px"
    },

    profile: {
        position: "Absolute",
        left: "75px",
        top: "20px"
    },

    logout: {
        position: "Absolute",
        left: "75px",
        top: "80px"
    },
}

function Profile() {

    return (
        <>
        <div className={cssModules.dropdown}>
        <Dropdown>
        <Dropdown.Toggle style={styles.dropdown}>
        <img style={styles.pict} src={profile} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/customer-detail"> <img src={user} /> <p style={styles.profile}>Profile</p> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/"> <img src={logout} /> <p style={styles.logout}>Logout</p> </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <div className={cssModules.basket}>
            <a href='/my-cart'>
            <img className={cssModules.basketPict} src={basket} alt="" />
            </a>
        </div>
        </>
    );
}

export default Profile;