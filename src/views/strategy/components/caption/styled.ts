import styled from 'styled-components';

export const CaptionWrapper = styled.div`
  width: 100%;
  .start-title {
    color: #333;
    font-size: 28px;
    position: relative;
    margin-top: 23px;
    font-weight: 700;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 53px;
      height: 28px;
      left: 212px;
      top: 8px;
      background: url(${require('../../../../assets/images/arr_l.png')}) 0 0 no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 52px;
      height: 28px;
      right: 223px;
      top: 8px;
      background: url(${require('../../../../assets/images/arr_r.png')}) 0 0 no-repeat;
    }
    > span {
      color: #249ffd;
    }
  }
  .start-subtitle {
    background-image: url(${require('../../../../assets/images/ban1_text1.png')});
    width: 362px;
    height: 41px;
    line-height: 41px;
    margin: 18px 0;
    color: #0090fe;
    font-size: 18px;
    background: #d5f0ff;
    border-radius: 20px;
    font-weight: normal;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
  }
`;
