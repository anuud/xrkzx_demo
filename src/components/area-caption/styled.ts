import styled from 'styled-components';

export const AreaCaptionWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  .section-title {
    font-size: 24px;
    padding-left: 35px;
    .area_about {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      .btn {
        font-size: 18px;
        display: block;
        width: 100px;
        text-align: center;
        border-radius: 36px;
        background-color: #156240;
        color: #fff;
        padding: 3px 0;
      }
    }
  }
  .section-title strong::before {
    position: absolute;
    top: 24%;
    right: 97%;
    content: '';
    width: 22px;
    height: 3px;
    background-color: #333;
    margin-top: -2px;
    margin-right: 10px;
  }
`;
