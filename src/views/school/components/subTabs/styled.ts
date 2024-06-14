import styled from 'styled-components';

export const SubTabsWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 0 0 1px;
  border-bottom: 2px solid #d0d5da;
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
  > h1 {
    margin-top: 10px;
    height: 26px;
    font-size: 22px;
    line-height: 20px;
    font-weight: bold;
    color: #333;
    padding-left: 17px;
    margin-right: 20px;
    background: url(${require('../../../../assets/images/school/tit-bg.png')}) no-repeat center left;
    background-size: contain;
  }
  > span {
    font-size: 16px;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #e39b52;
    }
  }
  > ul {
    height: 32px;
  }
  .item {
    padding: 4px 15px;
    color: #0973a3;
    border: 1px solid #0973a3;
    border-radius: 3px;
    margin: 0 10px;
    &:hover {
      color: #fff;
      background-color: #0973a3;
    }
  }
`;
