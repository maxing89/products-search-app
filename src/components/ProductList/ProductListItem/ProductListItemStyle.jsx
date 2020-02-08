import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`

export const NewIcon = styled.img`
  width: 15px;
  height: 15px
  margin-left: 10px;
  margin-bottom: 7px;
`

export const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
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