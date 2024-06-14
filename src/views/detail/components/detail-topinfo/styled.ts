import styled from 'styled-components';

export const DetailTopInfoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  font-size: 22px;
  .item {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: 1px;
      bottom: -23px;
      height: 3px;
      background-color: #fb923c;
      width: 100px;
    }
  }
`;
