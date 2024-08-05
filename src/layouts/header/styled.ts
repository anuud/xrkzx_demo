import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .Mobi {
    @media (max-width: 750px) {
      display: none !important;
    }
  }
  .ipone {
    @media (min-width: 750px) {
      display: none !important;
    }
  }
`;
