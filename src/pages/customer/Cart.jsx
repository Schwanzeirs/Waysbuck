import cssModules from '../../assets/css/Button.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import basket from '../../assets/img/User.png'
import product from '../../assets/img/Drink.png'
import topping from '../../assets/img/Topping.png'
import logout from '../../assets/img/Logout.png'

const styles = {
    dropdown: {
        backgroundColor: "white",
        border: "0px",
    },

    product: {
        position: "Absolute",
        left: "60px",
        top: "20px"
    },

    topping: {
        position: "Absolute",
        left: "60px",
        top: "80px"
    },

    logout: {
        position: "Absolute",
        left: "75px",
        top: "140px"
    },

    basket: {
        width: "60px",
        height: "60px"
    },

}

function Admin() {
    return (
        <div className={cssModules.cart}>
        <Dropdown>
        <Dropdown.Toggle style={styles.dropdown}>
        <img style={styles.basket} src={basket} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/add-drink"> <img src={product} /> <p style={styles.product}>Add Product</p> </Dropdown.Item>
          <Dropdown.Item href="/add-topping"> <img src={topping} /> <p style={styles.topping}>Add Topping</p> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/"> <img src={logout} /> <p style={styles.logout}>Logout</p> </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
    );
}

export default Admin;