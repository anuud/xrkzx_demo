import styled from 'styled-components';

export const AcdemySelectWrapper = styled.div`
  margin: 20px 0;
  background-color: #fff;
  .fiter-type {
    border-bottom: 1px dashed #eee;
  }
  .active {
    color: #fff;
    background-color: #0973a3;
  }
  .btn {
    > span {
      > span {
        > button {
          background-color: #0973a3;
        }
      }
    }
  }
`;
