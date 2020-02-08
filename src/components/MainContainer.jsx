import React, { useState, useEffect } from 'react'
import { Row, Col, Pagination } from 'antd';
import ProductList from './ProductList/ProductList';
import Product from './Product/Product'
import {
  Switch,
  Route
} from 'react-router-dom';
import { fetchAPI } from './../helpers/fetch';
import { ProductListContainer } from './MainContainerStyle';

const MainContainer = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [products, setProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [noResults, setNoResults] = useState(false); // If no products are found is true, otherwise is false
  const [page, setPage] = useState(1);

  // pageSize constant
  const pageSize = 4;

  // fetch function that returns products from database
  const handleSearch = async (url, method) => {
    setIsSearching(true);
    await fetchAPI(url, method).then(products => {
      setProducts(products);
      setNoResults(!products.length ? true : false);
    });
    setIsSearching(false);
  }

  // paginate function returns the products paginated
  const paginate = (page, pageSize) => {
    return products.slice((page - 1) * pageSize, page * pageSize);
  }

  // pagination callback is called every time the page is changed from UI
  const handlePagination = (page, pageSize) => {
    setPage(page); // keeps page state updated
    setPaginatedProducts(paginate(page, pageSize)); // paginated products are updated
  }

  // paginated products state updated everytime new products are requested from database
  useEffect(() => {
    setPaginatedProducts(paginate(page, pageSize));
  }, [products])

  return (
    <ProductListContainer type="flex" justify="center">
      <Col sm={16} style={{ marginBottom: '40px' }} >
        <Switch>
          <Route exact path="/items">
            {!isSearching && (
              <Row type="flex" justify="end" style={{ marginBottom: '5px' }}>
                <Col>
                  <Pagination
                    onChange={handlePagination}
                    total={products.length}
                    defaultPageSize={4}
                    pageSize={4} 
                  />
                </Col>
              </Row>
            )}
            <ProductList
              onSearch={handleSearch}
              isSearching={isSearching} 
              products={paginatedProducts}
              noResults={noResults}
            />
          </Route>
          <Route path="/items/:id" component={Product} />
        </Switch>
      </Col>
    </ProductListContainer>
  )
}

export default MainContainer;