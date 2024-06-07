import styled from 'styled-components';

export const BannerStrategyWrapper = styled.div`
  width: 100%;
  height: 330px;
  background-image: url(${require('../../../../assets/images/banner1w.jpg')});
  background-size: 100% 100%;
  .wrapper1 {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .wrapper1list {
      position: absolute;
      top: 156px;
      left: 260px;
      width: 111px;
      height: 56px;
      border: 1px solid #fff;
      border-radius: 10px;
      background: rgba(19, 96, 237, 0.2);
      box-sizing: border-box;
      padding-top: 9px;
      text-align: center;
      color: #fff;
    }
    .wrapper2list {
      position: absolute;
      top: 156px;
      left: 448px;
      width: 111px;
      height: 56px;
      border: 1px solid #fff;
      border-radius: 10px;
      background: rgba(19, 96, 237, 0.2);
      box-sizing: border-box;
      padding-top: 9px;
      text-align: center;
      color: #fff;
    }
    .wrapper3list {
      position: absolute;
      top: 156px;
      left: 615px;
      width: 111px;
      height: 56px;
      border: 1px solid #fff;
      border-radius: 10px;
      background: rgba(19, 96, 237, 0.2);
      box-sizing: border-box;
      padding-top: 9px;
      text-align: center;
      color: #fff;
    }
  }
`;
