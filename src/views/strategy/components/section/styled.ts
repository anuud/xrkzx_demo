import styled from 'styled-components';

export const SectionText = styled.div`
  color: #333;
  font-size: 28px;
  position: relative;
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 53px;
    height: 28px;
    left: 212px;
    top: 8px;
    background: url(${require('../../../../assets/images/arr_l.png')}) 0 0 no-repeat;
  }
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 52px;
    height: 28px;
    right: 223px;
    top: 8px;
    background: url(${require('../../../../assets/images/arr_r.png')}) 0 0 no-repeat;
  }
`;
export const SubTitle = styled.h4`
  background-image: url(${require('../../../../assets/images/ban1_text1.png')});
  width: 362px;
  height: 30px;
  line-height: 30px;
  margin: 18px 0;
  color: #0090fe;
  font-size: 18px;
  background: #d5f0ff;
  border-radius: 20px;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
`;
export const ZxItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  > div {
    width: 33.33%;
    height: 145px;
    position: relative;
    border-radius: 30px;
  }
  .first1_sec {
    border: 1px solid #329fff;
    box-sizing: border-box;
    > h5 {
      position: absolute;
      width: 324px;
      height: 50px;
      line-height: 51px;
      text-align: left;
      top: -36px;
      left: 0;
      color: #fff;
      font-size: 15px;
      padding-left: 82px;
      background: url(${require('../../../../assets/images/ban1_text1.png')});
      background-size: 100% 100%;
    }
    > ul {
      width: 80%;
      margin: 1px 14%;
      margin-top: 23px;
      li {
        width: 100%;
        height: 35px;
        line-height: 35px;
        position: relative;
        padding-left: 20px;
        box-sizing: border-box;
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 12px;
          left: 0;
          top: 12px;
          background: url(${require('../../../../assets/images/squ1.png')}) 0 0 no-repeat;
        }
      }
    }
  }
  .first2_sec {
    border: 1px solid #329fff;
    box-sizing: border-box;
    > h5 {
      position: absolute;
      width: 324px;
      height: 50px;
      line-height: 51px;
      text-align: left;
      top: -36px;
      left: 0;
      color: #fff;
      font-size: 15px;
      padding-left: 82px;
      background: url(${require('../../../../assets/images/ban1_text2.png')});
      background-size: 100% 100%;
    }
    > ul {
      width: 80%;
      margin: 1px 14%;
      margin-top: 23px;
      li {
        width: 100%;
        height: 35px;
        line-height: 35px;
        position: relative;
        padding-left: 20px;
        box-sizing: border-box;
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 12px;
          left: 0;
          top: 12px;
          background: url(${require('../../../../assets/images/squ1.png')}) 0 0 no-repeat;
        }
      }
    }
  }
  .first3_sec {
    border: 1px solid #329fff;
    box-sizing: border-box;
    > h5 {
      position: absolute;
      width: 324px;
      height: 50px;
      line-height: 51px;
      text-align: left;
      top: -36px;
      left: 0;
      color: #fff;
      font-size: 15px;
      padding-left: 82px;
      background: url(${require('../../../../assets/images/ban1_text3.png')});
      background-size: 100% 100%;
    }
    > ul {
      width: 80%;
      margin: 1px 14%;
      margin-top: 23px;
      li {
        width: 100%;
        height: 35px;
        line-height: 35px;
        position: relative;
        padding-left: 20px;
        box-sizing: border-box;
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 12px;
          left: 0;
          top: 12px;
          background: url(${require('../../../../assets/images/squ1.png')}) 0 0 no-repeat;
        }
      }
    }
  }
`;
export const ZxBtn = styled.div`
  width: 100%;
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
  .zx-btn {
    background: linear-gradient(to right, #24afff, #0e6bff);
    background: -webkit-linear-gradient(to right, #24afff, #0e6bff);
    background: -o-linear-gradient(to right, #24afff, #0e6bff);
    background: -ms-linear-gradient(to right, #24afff, #0e6bff);
    background: -moz-linear-gradient(to right, #24afff, #0e6bff);
    border-radius: 80px;
    box-shadow: 0 5px 5px #1b6ae9;
    animation: ballon7 1s linear infinite;
    color: #fff;
  }
`;
