import styled from 'styled-components';

export const HomeWrapper = styled.div`
  background-color: #f3f3f3;

  > .content {
    .about {
      display: flex;
      margin-top: 10px;
      > .left {
        width: 65%;
      }

      > .right {
        margin-left: 1px;
        width: 35%;
      }
    }
  }
`;
