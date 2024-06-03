import styled from 'styled-components';

export const HomeServiceWrapper = styled.div`
  height: 530px;
  background-image: url(${require('../../../../assets/images/index7.jpg')});
  padding-top: 10px;
  margin-top: 30px;
  .wrap {
    width: 1030px;
    margin: 0 auto;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f3f3f3;
    margin-top: 10px;

    .item {
      width: 23%;
      height: 200px;
      border: solid 1px rgba(255, 255, 255, 0.3);
      margin: 5px 5px;
      position: relative;

      .item-list {
        position: absolute;
        width: 100%;
        .title {
          font-size: 16px;
          height: 50px;
          line-height: 50px;
        }
        .text {
          font-size: 13px;
          height: 50px;
          line-height: 50px;
        }
      }
      .desc {
        display: none;
      }
    }
    .item:hover .desc {
      display: block;
      padding: 20px;
      height: 198px;
      line-height: 20px;
      background-color: #d18925;
      border: 1px solid #f3f3f3;
      transition: all 0.5s;
      /* opacity: 0; */
    }
  }
`;
