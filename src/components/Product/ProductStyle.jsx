import styled from 'styled-components';
import { Row } from 'antd';

export const ProductSubContainer = styled(Row)`
  background-color: #fff;
  padding: 20px;
`

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
`

export const Price = styled.span`
  font-weight: 600;
  font-size: 32px;
`

export const Title = styled.span`
  font-size: 20px;

  a {
    text-decoration: none !important;
    color: inherit;

    &:hover {
      color: #000000;
    }
  }
`

export const DescriptionContainer = styled(Row)`
  padding: 20px 0 0 40px;
`
