import styled from 'styled-components';

export const SchoolWrapper = styled.div`
  width: 100%;
  .school-top {
    height: 400px;
    background-image: url(${require('../../assets/images/1653034916455318.jpg')});
    .school_search {
      width: 70%;
      margin: 0 auto;
      text-align: center;
      color: white;
      > h5 {
        font-size: 38px;
        font-weight: 700;
        padding-top: 5%;
      }
      > h4 {
        font-size: 30px;
        padding-top: 30px;
      }
    }
  }
`;
