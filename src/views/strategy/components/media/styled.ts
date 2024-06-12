import styled from 'styled-components';

export const MediaStrategyWrapper = styled.div`
  width: 100%;
  height: 150vh;
  margin: 0 auto;
  background: url(${require('../../../../assets/images/picture/last_bg.jpg')}) top center no-repeat;
  background-size: 100% 100%;
  padding-top: 7px;
  box-sizing: border-box;
  @keyframes scale2 {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
  }
  .media_1 {
    width: 65%;
    margin: 0 auto;
    height: 500px;
    padding: 10px 0;
  }
  .item_btn {
    font-size: 16px;
    display: inline-block;
    width: 70px;
    height: 35px;
    border-radius: 20px;
    text-align: center;
    line-height: 35px;
    color: #fff;
    position: absolute;
    bottom: 15%;
    right: 30%;
    background: linear-gradient(to right, #ff4800, #f87128);
    cursor: pointer;
    animation: scale2 3s infinite;
  }
  .media-banner {
    text-align: center;
    > h5 {
      color: #fff;
      font-size: 23px;
      font-weight: 700;
      position: relative;
      margin-top: 35px;
      &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 53px;
        height: 28px;
        left: 15%;
        top: 1%;
        background: url(${require('../../../../assets/images/picture/arr_l1.png')}) 0 0 no-repeat;
      }
      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 53px;
        height: 28px;
        right: 15%;
        top: 1%;
        background: url(${require('../../../../assets/images/picture/arr_r1.png')}) 0 0 no-repeat;
      }
    }
  }
`;
