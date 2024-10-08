import styled from 'styled-components';

export const SunFlowerWrapper = styled.div`
  margin: 0 auto;
  .crad-left {
    height: 240px;
    background-image: url(${require('../../assets/images/home/515f1c13cdda03c8a29b1031397deadb18787883.png')});
  }
  .crad-right {
    height: 240px;
    background-image: url(${require('../../assets/images/home/553c3ebe2778f98d8be88e3429e396fe62651b87.png')});
  }
  .lay {
    background: linear-gradient(1turn, #93b6ff, #3978ff);
    /* border-radius: 8px; */
    padding: 24px 16px;
    .stop {
      background-color: white;
      border-radius: 8px;
      .onOne {
        background: #f4f4f4;
        border-radius: 4px;
        font-size: 12px;
        margin-bottom: 16px;
        padding: 12px 9px;
      }
    }
    .boottom {
      background: white;
      margin-top: 10px;
      border-radius: 8px;
      padding: 24px 16px;
    }
    .top-avatar {
      background: url(${require('../../assets/images/xiaokui.png')}) no-repeat 50%;
      background-color: #ecf5ff;
      background-size: 100% 100%;
      border: 1px solid #dce7ff;
      height: 58px;
      margin-top: 15px;
      width: 58px;
    }
  }
  .line-l {
    background: #debe93;
    height: 2px;
    width: 11.3%;
    margin: 20px 0;
  }
  .line-text {
    color: #e5c498;
    padding-top: 10pxs;
  }
`;
export const SunFlowerLeft = styled.div`
  position: relative;
  width: 100%;

  .banner-item {
    overflow: hidden;
    height: 405px;
    .image {
      width: 100%;
      height: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`;
