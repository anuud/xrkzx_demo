import styled from 'styled-components';

export const SerViceWrapper = styled.div`
  position: relative;
  background-image: url(${require('../../../../assets/images/banner2.jpg')});
  background-size: 100% 100%;
  height: 640px;
  .cread1 {
    position: absolute;
    left: 7%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag1.png')});
    background-size: 100% 100%;
  }
  .cread2 {
    position: absolute;
    left: 39.5%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag2.png')});
    background-size: 100% 100%;
  }
  .cread3 {
    position: absolute;
    left: 72.5%;
    top: 0;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag3.png')});
    background-size: 100% 100%;
  }
  .cread4 {
    position: absolute;
    left: 56%;
    top: 125px;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag4.png')});
    background-size: 100% 100%;
  }
  .cread5 {
    position: absolute;
    left: 23%;
    top: 125px;
    background-image: url(${require('../../../../assets/images/strategy/sec_tag5.png')});
    background-size: 100% 100%;
  }
  .item {
    background-image: url(${require('../../../../assets/images/strategy/lingqu_bg.png')});
    background-size: 100% 100%;
  }
`;
