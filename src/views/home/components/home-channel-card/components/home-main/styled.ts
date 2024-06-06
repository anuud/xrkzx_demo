import styled from 'styled-components';

export const HomeMainWrapper = styled.div`
  flex: 1;
  margin: 5px;
  overflow: hidden;
  .main-nav {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 17px;
  }
  .active {
    font-weight: 500;
    color: #fff;
    background: #10718e;
    border: 1px solid #10718e;
    border-bottom: none;
  }
`;
