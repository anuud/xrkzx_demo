import styled from 'styled-components';

export const SerViceWrapper = styled.div`
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
  position: relative;
  background-image: url(${require('../../../../assets/images/banner2.jpg')});
  background-size: 100% 100%;
  height: 640px;
  .cread1 {
    position: absolute;
    left: 7%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag1.png')});
    background-size: 100% 100%;
  }
  .cread2 {
    position: absolute;
    left: 39.5%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag2.png')});
    background-size: 100% 100%;
  }
  .cread3 {
    position: absolute;
    left: 72.5%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag3.png')});
    background-size: 100% 100%;
  }
  .cread4 {
    position: absolute;
    left: 56%;
    top: 125px;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag4.png')});
    background-size: 100% 100%;
  }
  .cread5 {
    position: absolute;
    left: 23%;
    top: 125px;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag5.png')});
    background-size: 100% 100%;
  }
  .item {
    background-image: url(${require('../../../../assets/images/strategy/lingqu_bg.png')});
    background-size: 100% 100%;
    position: relative;
  }
  .f-item {
    position: absolute;
    right: 0;
    top: 40%;
    h1 {
      line-height: 30px;
      font-weight: 700;
    }
    .text {
      font-size: 16px;
      text-align: center;
      color: white;
    }
    .submit {
      display: inline-block;
      width: 100px;
      height: 32px;
      margin: 0 auto;
      position: absolute;
      right: 36%;
      bottom: -39px;
      text-align: center;
      line-height: 32px;
      font-size: 16px;
      color: #fff;
      background: linear-gradient(to right, #ff4800, #f87128);
      border-radius: 80px;
      box-shadow: 0 5px 0 #e4440c;
      cursor: pointer;
      animation: ballon7 1s linear infinite;
    }
  }
`;
