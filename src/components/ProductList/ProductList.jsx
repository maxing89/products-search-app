import React, { useEffect } from 'react';
import useDebounce from './../../hooks/useDebounce';
import { Row, Col, Spin, Divider, Empty, Pagination } from 'antd';
import { ProductListSubContainer } from './ProductListStyle';
import ProductListItem from './ProductListItem/ProductListItem';
import qs from 'query-string';
import { withRouter } from 'react-router-dom'; 

const ProductList = (props) => {
  const searchParam = qs.parse(props.location.search, { ignoreQueryPrefix: true }).search;

  const debouncedSearchInput = useDebounce(searchParam, 1000);

  useEffect(
    () => {
      if (debouncedSearchInput) { 
        props.onSearch(`http://localhost:4000/api/v1/search?q=${debouncedSearchInput}`, 'GET')
      } else {
        props.onSearch(`http://localhost:4000/api/v1/products`, 'GET');
      }
    },
    [debouncedSearchInput]
  );

  if (props.isSearching) {
    return (
      <Row type="flex" justify="center" style={{ marginTop: '200px' }}>
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    )
  }

  return (
    props.noResults ? (
      <Empty style={{ marginTop: '150px' }} description="Sorry, we couldn't find your product" />
    ) : (
      props.products.map((prod, index) => {
        return (            
          <ProductListSubContainer type="flex" key={index}>
            <Col sm={24}>
              <ProductListItem product={prod} />
              {index !== props.products.length - 1 && <Divider />}
            </Col>
          </ProductListSubContainer>
        )
      })
    )
  )
}

export default withRouter(ProductList);