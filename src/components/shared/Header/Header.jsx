import React from 'react';
import { Row, Col } from 'antd';
import { HeaderStyled, SearchInput, Logo } from './HeaderStyle';
import logo from './../../../assets/images/logo.png'
import { withRouter, Link } from "react-router-dom";

const Header = (props) => {
  const search = (e) => {
    props.history.push(`/items?search=${e.target.value}`);
  }

  return (
    <HeaderStyled type="flex">
      <Col span={24}>
        <Row type="flex" justify="center" gutter={16}>
          <Col sm={4}>
            <Link to="/items">
              <Logo src={logo} alt="Mercado Libre" />
            </Link>
          </Col>
          <Col span={12}>
            <SearchInput 
              size="large"
              placeholder="Nunca dejes de buscar"
              onChange={search}
              autoFocus
              enterButton
            />
          </Col>
        </Row>    
      </Col>
    </HeaderStyled>
  )
}

export default withRouter(Header);