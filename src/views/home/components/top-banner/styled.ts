import styled from 'styled-components';

export const TopBannerWrapper = styled.div`
  .banner {
    height: 415px;
    display: flex;
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  position: relative;
  width: 980px;

  .banner-item {
    overflow: hidden;
    height: 415px;
    .image {
      width: 100%;
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
