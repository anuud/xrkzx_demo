import styled from 'styled-components';

export const TheCherWrapper = styled.div`
  width: 70%;
  margin: 15px auto;
  position: relative;
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
  .banner-item {
    display: flex;
    height: 310px;
    background: #e4f7ff;
    position: relative;
    .left {
      width: 30%;
      > img {
        width: 220px;
        height: 312px;
      }
    }
    .right {
      margin-top: 10px;
      flex: 1;
      .btn {
        width: 100px;
        height: 37px;
        line-height: 37px;
        font-size: 16px;
        display: block;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, #24afff, #0e6bff);
        border-radius: 80px;
        box-shadow: 0 5px 5px #1b6ae9;
        animation: ballon7 1s linear infinite;
        margin-right: 20px;
      }
      .item {
        display: flex;
        > h5 {
          width: 100px;
          height: 30px;
          float: left;
          font-size: 16px;
          font-weight: normal;
          color: #fff;
          text-align: center;
          line-height: 30px;
          background: url(${require('../../../../assets/images/picture/jybj_text_bg.png')})
            no-repeat;
          background-size: 100% 100%;
        }
        > p {
          flex: 1;
          margin-left: 20px;
          font-size: 14px;
          color: #333;
          line-height: 30px;
        }
      }
      .item2 {
        display: flex;
        margin-top: 10px;
        > h5 {
          width: 100px;
          height: 30px;
          float: left;
          font-size: 16px;
          font-weight: normal;
          color: #fff;
          text-align: center;
          line-height: 30px;
          background: url(${require('../../../../assets/images/picture/jybj_text_bg.png')})
            no-repeat;
          background-size: 100% 100%;
        }
        > p {
          flex: 1;
          margin-left: 20px;
          font-size: 14px;
          color: #333;
          line-height: 30px;
        }
      }
    }
  }
  .bottom {
    height: 40px;
    background-color: blue;
  }
  .bottom-left {
    border-radius: 4px;
    z-index: 5;
    cursor: pointer;
    background: url(${require('../../../../assets/images/picture/js_left.png')}) center no-repeat;
  }
  .bottom-right {
    border-radius: 4px;
    z-index: 5;
    cursor: pointer;
    background: url(${require('../../../../assets/images/picture/js_right.png')}) center no-repeat;
  }
  .bootm-banner {
    transform: translate(-50%, -50%);
    bottom: -28px;
    z-index: 66;
    .image {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      border: 5px solid #0c5fe3;
      margin: 0 5px;
    }
  }
`;
