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
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 7px;
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  .logo {
    display: flex;
    width: 196px;
    height: 63px;
    background-image: url(${require('../../assets/images/1710834333725175.png')});
    background-size: 100% 100%;
  }
  .title-list {
    display: flex;
    line-height: 70px;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
    .item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #333;
      }

      :last-of-type a {
        position: relative;
      }

      &:hover a,
      .active {
        color: #156240;
        background: #e4feed;
        text-decoration: none;
        border-bottom: 1px solid #156240;
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
export const RightWrapper = styled.div`
  display: flex;
  width: 366px;
  align-items: center;
  color: #787878;
  font-size: 12px;
  justify-content: space-between;

  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .ipone {
    cursor: pointer;
  }
`;
