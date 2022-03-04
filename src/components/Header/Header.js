import React from 'react'
import {NavLink} from "react-router-dom";
import Restaurant from '../Restaurant/Restaurant';


function Header() {
  
  return (

    <div style={{justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20}}>

   <NavLink to="/restaurant" style={isActive => ({color: isActive ? "green" : "blue",paddingRight:30,fontSize:24,color:'blue',textDecorationLine:'none'})}>Restaurant</NavLink>
   
     <NavLink to="/*" style={isActive => ({color: isActive ? "green" : "blue",fontSize:24,color:'blue',textDecorationLine:'none'})}>Not Found</NavLink>

   




</div>
  )
}

export default Header