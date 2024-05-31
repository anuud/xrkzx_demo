import styled from 'styled-components';

export const HomeAboutRightWrapper = styled.div`
  margin-left: 10px;
  .name {
    padding-left: 10px;
    font-weight: 500;
  }
  .text {
    margin-top: 20px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #666;
    p {
      text-indent: 2em;
    }
  }
  .btn {
    height: 50px;
    margin-top: 50px;
    > a {
      display: block;
      width: 150px;
      height: 35px;
      line-height: 35px;
      background-color: #d18925;
      text-align: center;
      color: white;
      margin: 0 auto;
    }
  }
`;
