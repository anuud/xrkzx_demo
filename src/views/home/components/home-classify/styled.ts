import styled from 'styled-components';

export const HomeClassWrapper = styled.div`
  width: 1100px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  > .item {
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(245, 245, 245);
  }
  .crad1-right {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
