import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Empty, Spin, Button } from 'antd';
import {
  ProductSubContainer,
  ProductImage,
  Title,
  Price,
  DescriptionContainer
} from './ProductStyle'
import { fetchAPI } from './../../helpers/fetch';

const Product = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getItem = async () => {
    const itemId = props.match.params.id;
    const url = `http://localhost:4000/api/v1/products/${itemId}`;
    const method = 'GET';
    setLoading(true);
    await fetchAPI(url, method).then(product => {
      setProduct(product);
    });
    setLoading(false);
  }

  useEffect(() => {
    getItem();
  }, [])

  if (loading) {
    return (
      <Row type="flex" justify="center" style={{ marginTop: '200px' }}>
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    )
  }

  if (!product) {
    return (
      <Empty style={{ marginTop: '150px' }} description="Lo sentimos, el producto solicitado no existe" />
    )
  }

  return (
    <ProductSubContainer type="flex" justify="center">
      <Col sm={24}>
        <Row type="flex">
          <Col sm={15}>
            <ProductImage src={product.picture} alt={product.title} title={product.title} />
          </Col>
          <Col sm={9}>
            <Row type="flex" gutter={[0, 16]}>
              <Col sm={24}>
                <strong>
                  <span>{product.condition ? 'Nuevo' : 'Usado'}{' - '}</span>
                  <span>{`${product.sold_quantity} vendidos`}</span>
                </strong>
              </Col>
              <Col sm={24}>
                <Title>
                  <strong>{product.title}</strong>
                </Title>
              </Col>
              <Col sm={24}>
                <Price>{product.price.currency}</Price>
                <Price>{product.price.amount}</Price>
                <Price>{' '}<sup>{product.price.decimals}</sup></Price>
              </Col>
              <Col sm={24}>
                <Row type-="flex">
                  <Col sm={16}>
                    <Button style={{ marginTop: '15px' }} block type="primary" size="large">Comprar</Button>
                  </Col>
                </Row> 
              </Col>
            </Row>
          </Col>
        </Row>
        <DescriptionContainer type="flex">
          <Col sm={15}>
            <Row type="flex" gutter={[0, 8]}>
              <Col sm={24}>
                <h1>Descripción del producto</h1>
              </Col>
              <Col sm={24}>
                <p>{product.description}</p>
              </Col>
            </Row>
          </Col>
        </DescriptionContainer>
      </Col>
    </ProductSubContainer>
  )
}

export default withRouter(Product);