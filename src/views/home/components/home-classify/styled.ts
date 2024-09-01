import styled from 'styled-components';

export const HomeClassWrapper = styled.div`
  width: 1210px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  > .title {
    background-color: #bdb76b;
    height: 54px;
    border-bottom: 2px solid #eee;
    zoom: 1;
  }
  .crad1-right {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
