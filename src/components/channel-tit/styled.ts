import styled from 'styled-components';

export const ChannelTitWrapper = styled.div`
  .channel {
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
    color: #0e6ba5;
    > h2 {
      height: 56px;
      position: relative;
      display: inline-block;
      font-size: 30px;
      line-height: 45px;
      font-weight: bold;
      padding-bottom: 18px;
      margin-right: 15px;
      border-bottom: 2px solid #324f8c;
      &::before {
        position: absolute;
        display: block;
        content: '';
        width: 8px;
        height: 2px;
        background: url(${require('../../assets/images/border-white.png')}) no-repeat center center;
        right: -4px;
        bottom: -2px;
      }
      .channel-zzy {
        float: left;
        width: 40px;
        height: 32px;
        margin-top: 8px;
      }
    }
    .channel-rm {
      height: 56px;
      font-size: 14px;
      font-style: normal;
      line-height: 56px;
    }
  }
`;
