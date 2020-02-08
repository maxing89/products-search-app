import styled from 'styled-components';
import { Row, Input } from 'antd';

const { Search } = Input;

export const HeaderStyled = styled(Row)`
  background-color: #fff159;
  padding: 20px;
`

export const Logo = styled.img`
  width: 170px;
  height: 40px;
`

export const SearchInput = styled(Search)`
  && {
    .ant-btn-primary {
      background-color: #d9d9d9;
      border-color: #d9d9d9;
  
      :hover {
        background-color: #d9d9d9;
        border-color: #d9d9d9;
      }

      .anticon-search {
        color: #000000;
      }
    }

    .ant-input {
      &:hover {4
        border-color: #d9d9d9;
      } 
      &:focus {
        border-color: #d9d9d9;
        box-shadow: none;
      } 
    }
  }
`