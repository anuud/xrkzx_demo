import styled from 'styled-components';

export const HomeTabsWrapper = styled.div`
  width: 100%;
  height: 100%;
  .new-nav {
    height: 50px;
    border-bottom: 0px;
    background: #ffbe8b;
    background: linear-gradient(-90deg, #ffbe8b 80%, #ffefd3);
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
    color: #5e3723;
    font-weight: 900;
    background: linear-gradient(#fff3e9, #fff) !important;
    border: 1px solid #ffbe8b !important;
    border-bottom: none !important;
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
