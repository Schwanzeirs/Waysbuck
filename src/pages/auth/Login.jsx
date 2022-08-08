import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import cssModules from '../../assets/css/Button.module.css';
import {useNavigate} from 'react-router-dom'

const styles = {
    emailLogin: {
        position: 'Absolute',
        left: '33px',
        top: '119px'
    },

    passwordLogin: {
        position: 'Absolute',
        left: '33px',
        top: '189px'
    },

    buttonLogin: {
        position: 'Absolute',
        left: '33px',
        top: '268px'
    },

    accAsk: {
        position: 'Absolute',
        top: '338px',
        left: '59px'
    }
}

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
const [ email, setemail ] = useState(null)
const [ password, setpassword ] = useState(null)
let status


const onsubmit =(e) => {
    e.preventDefault();
        console.log("email & password :: ", email, password)
        if ( email === "admin@mail.com") {
            status = "admin"
            navigate('/add-drink')
        } else {
            status = "user"
            navigate('/home')
        }

    const data = { email, status}

    console.log(data);

}

    return (
        <>
            <div>
                <button onClick={handleShow} className={cssModules.login}>
                    <p className={cssModules.loginText}>
                        Login
                    </p>
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className={cssModules.loginPage}>
                        <p className={cssModules.loginPageText}>Login</p>
                            <form>
                                <div style={styles.emailLogin}>
                                    <input className={cssModules.emailLogin} type="text" id="emailLogin" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value) } />
                                </div>
                                <div style={styles.passwordLogin}>
                                    <input className={cssModules.passwordLogin} type="password" id="passwordLogin" name="password" placeholder="Password" onChange={(e) => setpassword(e.target.value) } />
                                </div>
                                <div style={styles.buttonLogin}>
                                    <button onClick={onsubmit} className={cssModules.buttonLogin}>
                                        <p className={cssModules.buttonLoginText}>Login</p>
                                    </button>
                                </div>
                            </form>
                        <p className={cssModules.accAsk}>Don't have account ? Click <b>Here</b></p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;