import styled from 'styled-components';

export const SchoolStrategyWrapper = styled.div`
  width: 100%;
  background: #e4f7ff;
  padding: 20px 0;
  @keyframes ballon7 {
    0% {
      transform: translateY(-3px);
    }

    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-3px);
    }
  }
  .cread {
    background: url(${require('../../../../assets/images/picture/banner3.jpg')}) top center
      no-repeat;
  }
  .item {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(to right, #ff4800, #f87128);
    color: #fff;
    font-size: 16px;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
  }
  .active::after {
    position: absolute;
    top: 40px;
    left: 48px;
    content: '';
    border-top: 10px solid #f75d29;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  .footer {
    margin-top: 20px;
    > a {
      display: inline-block;
      width: 140px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 16px;
      color: #fff;
      background: linear-gradient(to right, #24afff, #0e6bff);
      border-radius: 80px;
      box-shadow: 0 5px 5px #1b6ae9;
      animation: ballon7 1s linear infinite;
    }
  }
`;
