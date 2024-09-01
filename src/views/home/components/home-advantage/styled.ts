import styled from 'styled-components';

export const HomeAdvantageWrapper = styled.div`
  width: 1210px;
  margin: auto;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  .item {
    border-color: #d51b15;
    width: 18%;
    border: 3px solid rgb(85, 172, 238);
    margin-right: 1.8%;
    margin-bottom: 15px;
    overflow: hidden !important;
    .top-tit {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(85, 172, 238);
      color: #fff;
      text-align: center;
      height: 50px;
      position: relative;
      position: relative;
      z-index: 3;
      padding: 20px 10px 10px 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .top-tit::after {
      content: '';
      position: absolute;
      bottom: -70%;
      left: 0;
      border: 30px solid rgb(85, 172, 238);
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
      left: 50%;
      margin-left: -30px;
      transform: scale(10, 1);
      -ms-transform: scale(10, 1);
      -webkit-transform: scale(10, 1);
      z-index: -1;
    }
  }
  .bottom_con {
    padding: 30px 10px 10px 10px;
    text-align: center;
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }
`;
