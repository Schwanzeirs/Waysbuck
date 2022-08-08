import React from 'react'
import logo from '../../assets/img/Logo.png'
import Admin from '../customer/Cart'
import product from '../../assets/img/Topping1.png'
import ikonupload from '../../assets/img/ikon-upload.png'
import cssModules from '../../assets/css/Global.module.css'

function AddTopping() {
    return (
      <>
        <div className={cssModules.headerContainer}>
        <img className={cssModules.logo} src={logo} alt="" />
        <Admin />
        </div>
        <div className={cssModules.productContainer}>
          <p className={cssModules.product}>Product</p>
          <form>
            <div>
              <input className={cssModules.productName} placeholder='Name Topping' />
            </div>
            <div>
              <input className={cssModules.productPrice} placeholder='Price' />
            </div>
            <div className={cssModules.productPhotoContainer}>
              <input hidden id="upload" type="file" />
              <label for="upload">
              <img className={cssModules.productPhotoIcon} src={ikonupload} alt="" />
              </label>
              <input className={cssModules.productPhotoText} placeholder='Photo Product' />
            </div>
            <div>
              <button className={cssModules.productAdd}>
                <p className={cssModules.productAddText}>Add Product</p>
              </button>
            </div>
          </form>
        </div>
        <img className={cssModules.productPhotoIllustration} src={product} alt="" />
      </>
    )
  }

export default AddTopping;