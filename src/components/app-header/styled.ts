import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  /* position: fixed;
  left: 0;
  right: 0; */
  height: 89px;
  background-color: #fff;
  font-size: 14px;
  color: #fff;
  z-index: 999;
  .head-tel {
    padding-left: 35px;
    background: url(${require('../../assets/images/phone.png')}) no-repeat left center;
    > p {
      color: #c69245;
      text-align: center;
      line-height: 7px;
      font-size: 18px;
      padding-top: 22px;
    }
    > .text {
      font-size: 14px;
      width: 140px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 7px;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  .title-list {
    display: flex;
    line-height: 70px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 30px;
    padding: 5pxs;
    .item {
      position: relative;
      padding: 2px;

      a {
        display: block;
        padding: 0 20px;
        color: #333;
        font-size: 19px;
      }

      :last-of-type a {
        position: relative;
      }

      &:hover a,
      .active {
        color: #156240;
        /* background: #e4feed; */
        text-decoration: none;
        border-bottom: 2px solid #156240;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
`;
