import styled from 'styled-components';

export const HomeCrad1Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  .crad-left {
    height: 300px;
    background-image: url(${require('../../../../assets/images/home/515f1c13cdda03c8a29b1031397deadb18787883.png')});
  }
  .crad-right {
    height: 300px;
    background-image: url(${require('../../../../assets/images/home/553c3ebe2778f98d8be88e3429e396fe62651b87.png')});
  }
  .home-help {
    position: relative;
    /* height: 500px; */
    margin-top: 50px;
    background-image: url(${require('../../../../assets/images/home/school_help.png')});
    background-size: 100% 100%;
  }
  .crad1-right-item {
    border: 1px solid #1989fa;
    color: #1989fa;
  }
  .crad1-main,
  .crad1-right,
  .cread-footer {
    padding-bottom: 15px;
    border-bottom: 1px solid #f5f5f5;
  }
`;
