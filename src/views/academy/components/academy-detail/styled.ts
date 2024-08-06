import styled from 'styled-components';

export const AcademyDetailWrapper = styled.div`
  background-color: #fff;
  .text {
    border-bottom: 2px solid #eee;
  }
  .item {
    border-bottom: 1px solid #eee;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  .btn {
    @media (max-width: 750px) {
      display: none !important;
    }
  }
`;
