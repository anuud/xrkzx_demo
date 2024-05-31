import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  width: 100%;
  height: 235px;
  background-color: #333;
  .content {
    display: flex;
    .footer-info {
      width: 40%;
      color: #888;
      margin: 35px 0 0;
      border-right: 1px solid #999;
      .logo {
        height: 58px;
        img {
          height: 38px;
        }
      }
      .text {
        margin-right: 30px;
        line-height: 25px;
      }
      .icon {
        margin-top: 20px;
      }
    }
    .footer-contact {
      color: #888;
      margin: 35px 0 0;
      border-right: 1px solid #999;
      padding-right: 15px;
      h4 {
        font-size: 14px;
        margin-left: 18px;
        color: #f1f1f1;
        font-weight: 700;
      }
      .address {
        display: flex;
        padding: 15px 0;
      }
    }
    .footer-ewm {
      color: #888;
      margin: 35px 0 0;
      display: flex;
      > .image {
        width: 80px;
        height: 80px;
        margin: 20px 10px 0;
      }
    }
  }
`;
