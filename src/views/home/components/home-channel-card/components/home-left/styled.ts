import styled from 'styled-components';

export const HomeLeftWrapper = styled.div`
  position: relative;
  width: 25%;
  /* height: 650px; */
  background: linear-gradient(#c9dde5, #c9dde5, #015478);
  border-radius: 10px;
  padding: 6px;
  &::before {
    position: absolute;
    display: block;
    content: '';
    background: url(${require('../../../../../../assets/images/home/channel-gjxx-bg1.png')})
      no-repeat bottom right;
    right: 0;
    bottom: 0;
  }
  .channel-time-tit {
    color: #015478;
    font-size: 16px;
    line-height: 20px;
    padding: 5px 0;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  .channel-time-list {
    background: url(${require('../../../../../../assets/images/home/gjxx-dashed.png')}) repeat-y top
      left 6px;
    position: relative;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 18px;
    > b {
      background: url(${require('../../../../../../assets/images/home/channel-gjxx-time2.png')})
        no-repeat left top;
      display: block;
      line-height: 1;
      margin-bottom: 6px;
      padding-left: 20px;
      font-weight: bold;
    }
    > p {
      padding-left: 20px;
      line-height: 24px;
      color: #555;
    }
  }
`;
