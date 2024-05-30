import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  height: 89px;
  background-color: #fff;
  font-size: 14px;
  color: #fff;
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 7px;
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  .logo {
    display: flex;
    width: 196px;
    height: 70px;
    background-image: url(${require('../../assets/images/1710834333725175.png')});
    background-size: 100% 100%;
  }
  .title-list {
    display: flex;
    line-height: 70px;
    font-size: 16px;
    font-weight: 500;
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
