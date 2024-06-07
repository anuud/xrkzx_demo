import styled from 'styled-components';

export const TabbelWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  .new-nav {
    height: 51px;
    border-bottom: 0px;
    margin: 20px 0;
    .twoxx1 {
      height: 51px;
      line-height: 49px;
      color: #349aff;
      font-size: 16px;
      background: #d3e9ff;
      border: 1px solid #0c5fe3;
      box-sizing: border-box;
    }
  }
  .hotnews-icon1 {
    display: block;
    width: 29px;
    height: 25px;
    margin-right: 15px;
    font-size: 12px;
    line-height: 25px;
    color: #b3b3b3;
    text-align: center;
    font-style: normal;
    background: #ededed;
    border-radius: 30px;
  }
  .active {
    border: none !important;
    color: #fff !important;
    background: linear-gradient(#3499ff, #24c1ff) !important;
  }
  .info {
    > span {
      width: 100%;
      display: inline-block;
    }
    &:hover > span {
      cursor: pointer;
      color: #ffbe8b;
    }
  }
`;
