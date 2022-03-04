import React from 'react';
import { useState,useEffect } from 'react';
import { useParams, } from 'react-router-dom';

function MenuDetail() {
  const {menuId}= useParams();

    const [menu, setMenu] = useState([])

    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${menuId}`;

   

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setMenu(data.meals[0]))
      
    }, [])
    
  return (
    <div style={{border:'2px solid gray',padding:20,margin:15,borderRadius:10}}>
       <h2>Food name:{menu.strMeal} <span style={{color:'goldenrod',fontSize:19}}>[food type is :{menu.strTags}]</span></h2>
       <h4>Food origin:{menu.strArea}</h4>
        <p style={{color:'magenta',fontSize:22}}>How to prepare:<br></br><span style={{color:'black',fontSize:17}}>{menu.strInstructions}</span></p>
        <h6>For more info: <span style={{color:'blue'}}>{menu.strSource}</span></h6>
        <img src={menu.strMealThumb} style={{width:300,height:300,resizeMode:'contain',paddingTop:30}}/>
   
    </div>
  )
}


export default MenuDetail;
