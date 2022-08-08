import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import cssModules from '../../assets/css/Button.module.css';

const styles = {
    emailRegister: {
        position: 'Absolute',
        left: '33px',
        top: '119px'
    },

    passwordRegister: {
        position: 'Absolute',
        left: '33px',
        top: '189px'
    },

    fullnameRegister: {
        position: 'Absolute',
        left: '33px',
        top: '259px'
    },

    buttonRegister: {
        position: 'Absolute',
        left: '33px',
        top: '340px'
    },

    loginAsk: {
        position: 'Absolute',
        left: '59px',
        top: '410px'
    }
}

const Register = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <button onClick={handleShow} className={cssModules.register}>
                    <p className={cssModules.registerText}>
                        Register
                    </p>
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className={cssModules.registerPage}>
                        <p style={styles.registerPageText} className={cssModules.registerPageText}>Register</p>
                        <form>
                            <div style={styles.emailRegister}>
                                <input className={cssModules.emailRegister} type="text" id="emailRegister" name="email" placeholder="Email" />
                            </div>
                            <div style={styles.passwordRegister}>
                                <input className={cssModules.passwordRegister} type="password" id="passwordRegister" name="password" placeholder="Password" />
                            </div>
                            <div style={styles.fullnameRegister}>
                                <input className={cssModules.fullnameRegister} type="text" id="fullnameRegister" name="fullname" placeholder="Fullname" />
                            </div>
                            <div style={styles.buttonRegister}>
                                <button type="submit" className={cssModules.buttonRegister}>
                                    <p className={cssModules.buttonRegisterText}>
                                        Register
                                    </p>
                                </button>
                            </div>
                        <p className={cssModules.loginAsk}>Already have an account ? click <b>Here</b></p>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Register