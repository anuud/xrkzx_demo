import styled from 'styled-components';

export const HomeCrad1Wrapper = styled.div`
  width: 1100px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  .crad-left {
    height: 400px;
    background-image: url(${require('../../../../assets/images/home/515f1c13cdda03c8a29b1031397deadb18787883.png')});
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
      height: 130px;
    }
  }
  .crad-right {
    background-image: url(${require('../../../../assets/images/home/553c3ebe2778f98d8be88e3429e396fe62651b87.png')});
    background-size: cover;
    background-position: center;
    height: 400px;
    @media (max-width: 768px) {
      height: 130px;
    }
  }
  .home-help {
    position: relative;
    /* height: 500px; */
    margin-top: 50px;
    background-image: url(${require('../../../../assets/images/home/school_help.png')});
    background-size: 100% 100%;
    @media (max-width: 768px) {
      height: 300px;
    }
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
