import styled from 'styled-components';

export const SubChoolWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 22px;
  .cread {
    &:hover {
      box-shadow: 0px 0px 0px 1px #999;
    }
  }

  .item {
    > span {
      display: block;
      text-align: center;
    }
  }
`;
