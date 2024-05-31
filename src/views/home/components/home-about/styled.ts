import styled from 'styled-components';

export const HomeAboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  > .left {
    width: 30%;
    .item {
      width: 100%;
      height: 116px;

      img {
        width: 100%;
        height: 100px;
      }
    }
  }
  > .right {
    width: 70%;
    .right-item {
      width: 100%;
      height: 100%;
      margin-left: 10px;
      img {
        width: 435px;
        height: 449px;
      }
    }
  }
`;
