import React from 'react';
import { Card,Button,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Meal(props) {
   const {strMeal,strCategory,strInstructions,strMealThumb,idMeal} = props.meal;
  return (
    <div>
      
      
      <Col style={{marginRight:7,marginLeft:7,}}>
      <Card style={{height:550,borderRadius:7}}>
        <Card.Img variant='top' src={strMealThumb} style={{height:300}}/>
        <Card.Body  style={{overflow:'scroll',paddingBottom:6}}>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions}
          </Card.Text>
        
        </Card.Body>
        <Link to={`/menuDetail/${idMeal}`}>
        <Button  style={{margin:5}}variant="primary">Know More</Button>{' '}
        </Link>
      </Card>
    </Col>
</div>

  )
}

export default Meal