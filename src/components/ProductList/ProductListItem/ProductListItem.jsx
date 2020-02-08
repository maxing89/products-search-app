import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { ProductImage, NewIcon, Price, Title } from './ProductListItemStyle'

const ProductListItem = (props) => {

  return (
    <Row type="flex">
      <Col sm={6}>
        <Link to={`/items/${props.product.id}`}>
          <ProductImage src={props.product.picture} alt={props.product.title} />
        </Link>
      </Col>
      <Col sm={13}>
        <Row type="flex" style={{ paddingTop: "20px" }}>
          <Col sm={24}>
            <Price>{props.product.price.currency}</Price>
            <Price>{props.product.price.amount}</Price>
            <Price>{' '}<sup>{props.product.price.decimals}</sup></Price>
            <span>
              {props.product.condition && 
                <NewIcon 
                  src="https://cdn2.iconfinder.com/data/icons/flat-master-1/32/point_green-128.png"
                  alt="Nuevo"
                  title="Producto nuevo"
                /> 
              }
            </span>
          </Col>
          <Col sm={24}>
            <Title>
              <Link to={`/items/${props.product.id}`}>{props.product.title}</Link>
            </Title>
          </Col>
        </Row>
      </Col>
      <Col sm={5} style={{ paddingTop: "30px", textAlign: "center" }}>
        {props.product.location}
      </Col>
    </Row>
  )
}

export default ProductListItem;