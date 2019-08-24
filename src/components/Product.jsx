import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import {Table, Spinner, Button} from "react-bootstrap";
import './product.scss'
import Chart from './Chart'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import {css} from 'glamor';

const Product = ({match}) => {

  const makeToast = (text) =>
    toast(text, {
      className: css({
        borderRadius: '3px'
      }),
      bodyClassName: css({
        fontSize: '16px',
        color: 'black',
        padding: '10px'
      }),
      progressClassName: css({
        background: "#f27a1a"
      }),
      autoClose: 5000
    });


  const [product, setProduct] = useState(null)
  const [chartData, setChartData] = useState([])
  const [newPrice, setNewPrice] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [msg, setMsg] = useState('')

  const setPrice = price => {
    setNewPrice(price)
    let count = 0
    let userCount = 0
    product.userDesiredPrices.forEach(desire => {
      if (desire.amount < newPrice) {
        count++
      } else {
        userCount += desire.count
      }
    })
    console.log(userCount)
    if (userCount !== 0) {
      setMsg("Ürününüzün güncelleneceği bilgisi " + userCount + " müşteriye gönderildi!")
    } else {
      setMsg(null)
    }
  }

  const sendNewPriceToApi = () => {
    setIsFetching(true)
    axios.post('http://localhost:8080/merchant/changePrice/1248295', {
      "merchantId": 67,
      "amount": newPrice
    }).then(() => {
        let count = 0
        let userCount = 0
        product.userDesiredPrices.forEach(desire => {
          if (desire.amount < newPrice) {
            count++
          } else {
            userCount += desire.count
          }
        })
        if (userCount === 0) {
          makeToast("Ürünün fiyatı güncellendi")
        } else {
          makeToast("Ürününüzün güncellendiği bilgisi " + userCount + " müşteriye gönderildi!")
        }
        getProduct()
        setIsFetching(false)
        this.forceUpdate();
      }
    ).catch(() => {
      setIsFetching(false)
    })
  }

  const getProduct = () => {
    axios.get('http://localhost:8080/merchant/1248295?merchantId=67').then(product => {
      setProduct(product.data)
      setChartData(product.data.currentPrices);
    })
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="product">
      {
        product ?
          <div className="data-came">
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
                    <input type="text" className="form-control" placeholder="Yeni fiyatı giriniz"
                           value={newPrice} onChange={e => setPrice(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text"> TL </span>
                    </div>
                  </div>
                </div>
                {
                  isFetching ?
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        style={{marginRight: "5px"}}
                      />
                      Lütfen Bekleyin...
                    </Button>
                    :
                    <button className="btn btn-primary" onClick={sendNewPriceToApi}>
                      Fiyat Değiştir
                    </button>
                }


                {
                  newPrice ?
                    <div className="animateee" style={{marginTop: "20px"}}> {msg} </div>
                    :
                    null
                }

              </div>
            </div>
            <Chart data={chartData} currentPrice={product.merchantCurrentAmount}/>
            {product.userDesiredPrices.length > 0 ?
              <div className="user-desired-prices">
                <h5>Müşteri Fiyat Beklentileri</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                  <tr>
                    <th>Beklenen Tutar</th>
                    <th></th>
                    <th>Talep Sayısı</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    product.userDesiredPrices.map((desired, index) => {
                      return <tr key={index}>
                        <td>{desired.amount}</td>
                        <td style={{textAlign: 'center'}}><i className="fas fa-arrow-right"></i></td>
                        <td>{desired.count}</td>
                      </tr>
                    })
                  }
                  </tbody>
                </Table>

              </div>
              :
              null
            }
          </div>
          :
          <div className="spinn">
            <Spinner animation="grow" variant="primary"/>
          </div>
      }
      <ToastContainer/>
    </div>
  );
};

export default Product;
