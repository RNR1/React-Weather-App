import React from 'react'
import weatherLogo from '../../assets/Logo.png'
import classes from './Logo.module.css'

const Logo = props => (
  <div className={classes.Logo}>
    <img src={weatherLogo} alt="Burger" />
  </div>
)

export default Logo