import React from 'react'
import {NavLink} from "react-router-dom";
import Restaurant from '../Restaurant/Restaurant';


function Header() {
  
  return (

    <div style={{justifyContent:'center',alignContent:'center',textAlign:'center'}}>

   <NavLink to="/restaurant" style={isActive => ({color: isActive ? "red" : "blue"})}>Restaurant</NavLink>
   
     <NavLink to="/menuDetail" style={isActive => ({color: isActive ? "red" : "blue"})}>Menu Detail</NavLink>

   




</div>
  )
}

export default Header