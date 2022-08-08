import React from 'react'
import { Table } from 'react-bootstrap';
import '../../assets/css/Table.module.css'
import logo from '../../assets/img/Logo.png'
import cssModules from '../../assets/css/Global.module.css'
import Profile from '../customer/Profile';
import styles from '../../assets/css/Table.module.css'
import { useState } from 'react';
import Cart from '../customer/Cart';



function IncomeTransaction() {


    return (
      <>
        <div className={cssModules.headerContainer}>
        <img className={cssModules.logo} src={logo} alt="" />
        <Profile />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className={styles.table}>
          <h2 className={styles.titleProduct}>Income Transaction</h2>
      </div>
      <div className={styles.tableIncomeTransaction}>
        <Table  bordered >
          <thead className={styles.thead}>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td className={styles.income}>69.000</td>
              <td style={{color : '#FF9900'}}>Waiting Approve</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Gams</td>
              <td>Serang</td>
              <td>42111</td>
              <td className={styles.income}>30.000</td>
              <td style={{color : '#78A85A'}}>Success</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ucok</td>
              <td>Bekasi</td>
              <td>13450</td>
              <td className={styles.income}>28.000</td>
              <td style={{color : '#E83939'}}>Cancel</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lae Tanjung balai</td>
              <td>Tanjung Balai</td>
              <td>21331</td>
              <td className={styles.income}>30.000</td>
              <td style={{color : '#00D1FF'}}>On The Way</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </>
    )
  }

  export default IncomeTransaction