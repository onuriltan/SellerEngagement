import React from 'react';
import { Card, Button } from "react-bootstrap"

const Products = ({ products }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">
      {
        products && products.map(({ imgUrl, title, description }) => {
          return (
            <Card style={{ width: '16rem', margin:'0 10px 10px 10px' }} key={title}>
              <Card.Img variant="top" src={imgUrl} style={{ width: "180px", height: "auto"}} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button variant="primary">Ürüne Git</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  );
};

export default Products;
