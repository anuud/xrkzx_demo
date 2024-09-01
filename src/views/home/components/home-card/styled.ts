import styled from 'styled-components';

export const HomeCardWrapper = styled.div`
  width: 1210px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  background-color: white;
  padding: 10px;
  margin-top: 5px;
  .clearfix {
    > li {
      position: relative;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      background-color: rgb(85, 172, 238);
      /* padding: 20px 0; */
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      float: left;
      width: 18%;
      margin: 0 1%;
      z-index: 3;
    }
    > li::before {
      position: absolute;
      top: -10px;
      left: 10px;
      content: '';
      display: block;
      opacity: 0.5;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      background-color: rgb(85, 172, 238);
      z-index: -1;
    }
    > li ::after {
      position: absolute;
      content: '';
      display: block;
      width: 2px;
      height: 22px;
      background-color: #fff;
      top: -10px;
      right: 15px;
      z-index: 1;
    }
  }
  .content {
    > ul {
      > li {
        border-radius: 20px;
        background: #fff;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        width: 24%;
        float: left;
        margin: 0 10px;
        > .item1 {
          background: url(${require('../../../../assets/images/home/back-0301.png')}) no-repeat top;
          background-size: 100%;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          line-height: 120px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        > .item2 {
          background: url(${require('../../../../assets/images/home/back-0302.png')}) no-repeat top;
          background-size: 100%;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          line-height: 120px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        > .item3 {
          background: url(${require('../../../../assets/images/home/back-0303.png')}) no-repeat top;
          background-size: 100%;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          line-height: 120px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        > .item4 {
          background: url(${require('../../../../assets/images/home/back-0304.png')}) no-repeat top;
          background-size: 100%;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 20px;
          line-height: 120px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        > .hp {
          height: 18em;
          > p {
            margin: 15px 5px;
            padding: 0;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          > p:before {
            content: '·';
            font-weight: bold;
            margin-right: 5px;
            color: #ea5404;
            font-size: 22px;
          }
        }
        > a {
          display: block;
          width: 200px;
          line-height: 40px;
          margin: 25px auto;
          text-align: center;
          border-radius: 40px;
          border: 2px solid #fff;
          background: linear-gradient(to right, rgb(85, 172, 238), rgb(59 130 246 / 0.5));
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
          font-size: 16px;
        }
        > a:hover {
          color: black;
        }
      }
    }
  }
  .home-help {
    position: relative;
    /* height: 500px; */
    margin-top: 20px;
    background-image: url(${require('../../../../assets/images/home/school_help.png')});
    background-size: 100% 100%;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;
