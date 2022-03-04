import {React,useState,useEffect} from 'react'
import Meal from '../Meal/Meal';
import { Button } from 'react-bootstrap';

import { Card,Row,Col,Spinner } from 'react-bootstrap';


function Restaurant() {

   const [searchText, setSearchText] = useState('');
   const [meals, setMeals] = useState([]);

    const handleSearch=e=>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
       .then(response => response.json())
       .then(data => setMeals(data.meals));
       
}, [searchText])


  return (
    <div>
      <h2>Restaurant</h2>
      <input onChange={handleSearch} placeholder='Search your fav. dish' type='text'></input>

     
{
        meals.length === 0 ? 
        
        <Spinner animation="grow" /> :
      
        <Row xs={1} md={2} lg={4}className="g-4">
                 {
          meals.map(meal=><Meal
            key={meal.idMeal}
            meal={meal}></Meal>)
      }

              </Row>
      }
     
     



     
 
  
 
    </div>
  )
}

export default Restaurant;
