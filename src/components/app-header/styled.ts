import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    padding: 0;
  }
  .header {
    width: 100%;
    height: 89px;
    background-color: white;
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    z-index: 999;
  }
  .app-left {
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head-tel {
    padding-left: 38px;
    font-weight: 700;
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
    > div p {
      color: #f09f09;
      text-align: center;
      line-height: 7px;
      font-size: 20px;
      padding-top: 22px;
    }
    > div .text {
      font-size: 15px;
      width: 150px;
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
    font-size: 17px;
    font-weight: 700;
    padding: 5px;
    @media (max-width: 768px) {
      display: none;
    }
    .item {
      position: relative;
      padding: 2px;

      a {
        display: block;
        padding: 0 16px;
        color: #333;
        font-size: 17px;
      }

      :last-of-type a {
        position: relative;
      }

      &:hover a,
      .active {
        color: rgb(85, 172, 238);
        /* background: #e4feed; */
        text-decoration: none;
        border-bottom: 2px solid rgb(85, 172, 238);
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
  .title-ipone {
    display: flex;
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    height: 50px;

    @media (min-width: 768px) {
      display: none;
    }
    .item {
      position: relative;
      height: 50px;

      a {
        display: block;
        padding: 0 12px;
        @media (max-width: 768px) {
          padding: 0 9px !important;
        }
        color: #333;
        font-size: 14px;
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
