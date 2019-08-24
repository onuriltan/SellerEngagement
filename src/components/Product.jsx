import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";
import './product.scss'

const Product = ({ match }) => {
  const productName = match.params.id;

  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/merchant/2543414?merchantId=2748').then(product => {
      setProduct(product.data)
      console.log(product.data)
    })
  }, [])

  return (
    <div className="product">
    {
      product ?
        <div>
        <div className="product-details">
          <div className="img-container">
            <img src={`https://img-trendyol.mncdn.com/mnresize/415/622${product.imageUrl}`} alt="asd"
                 className="imagee"/>
          </div>

          <div className="product-detailss">
            <div className="pname">
              {product.productName}
            </div>
            <div className="pprice">
              {product.merchantCurrentAmount} TL
            </div>
            <div className="price-input">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Yeni fiyatı giriniz"/>
                  <div className="input-group-append">
                    <span className="input-group-text"> TL </span>
                  </div>
              </div>
            </div>
            <button className="btn btn-primary">Fiyat Değiştir</button>
          </div>
        </div>

          <div className="user-desired-prices">
            <h5>Müşteri Fiyat Beklentileri</h5>
            <Table striped bordered hover  size="sm">
              <thead>
              <tr>
                <th>Beklenen Tutar</th>
                <th></th>
                <th>Talep Sayısı</th>
              </tr>
              </thead>
              <tbody>
              {
                product.userDesiredPrices.map(desired => {
                  return <tr>
                    <td>{desired.amount}</td>
                    <td style={{textAlign: 'center'}}><i className="fas fa-arrow-right"></i></td>
                    <td>{desired.count}</td>
                  </tr>
                })
              }
              </tbody>
            </Table>
          </div>
        </div>

        :
        <div className="spinn">
          <Spinner animation="border" />
        </div>
    }
    </div>
  );
};

export default Product;
