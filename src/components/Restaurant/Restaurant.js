import {React,useState,useEffect} from 'react'
import Meal from '../Meal/Meal';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
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
      <Header></Header>

      <div style={{marginTop:30,marginBottom:30}}>
     
        <input style={{width:500}} onChange={handleSearch} placeholder='Search your favorite  dish here' type='text'></input>
      </div>
      <div >
     
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
  
    </div>
  )
}

export default Restaurant;
