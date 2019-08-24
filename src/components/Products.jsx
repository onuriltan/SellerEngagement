import React from 'react';
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import data from '../data/products'

const Products = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap mt-5">
      {
        data.products && data.products.map(({ imgUrl, title, description }) => {
          return (
            <Card style={{ width: '16rem', margin:'0 10px 10px 10px' }} key={title}>
              <Card.Img variant="top" src={imgUrl} style={{ width: "180px", height: "auto"}} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Link to={`product/${title}`}>
                  <Button variant="primary">Ürüne Git</Button>
                </Link>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  );
};

export default Products;
