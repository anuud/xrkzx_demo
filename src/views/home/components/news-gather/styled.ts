import styled from 'styled-components';

export const NewsGatherWrapper = styled.div`
  background-color: #f4f4f4;
  > div {
    .daily-rec-tit {
      border-bottom: 2px solid #efefef;
    }
    .daily-rec-img {
      position: relative;
      width: 124px;
      height: 45px;
      background: url(${require('../../../../assets/images/daily-rec-img.png')}) no-repeat;
      padding-bottom: 15px;
      margin-right: 15px;
    }
    .got-sort-tit {
      height: 29px;
      padding-top: 4px;
      margin-bottom: 17px;
      background: url(${require('../../../../assets/images/hot-sort-tit.png')}) no-repeat left
        bottom;
    }
    .new-nav {
      border-bottom: 0px;
      background: #ffbe8b;
      background: linear-gradient(-90deg, #ffbe8b 80%, #ffefd3);
    }
    .active {
      color: #5e3723;
      font-weight: bold;
      background: linear-gradient(#fff3e9, #fff) !important;
      border: 1px solid #ffbe8b !important;
      border-bottom: none !important;
    }
  }
  .hotnews-icon1 {
    display: block;
    width: 25px;
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
`;
