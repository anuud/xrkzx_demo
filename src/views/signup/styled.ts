import styled from 'styled-components';

export const SignupWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  .image {
    padding-left: 23px;
    background: url(${require('../../assets/images/s-tel.png')}) left center no-repeat;
    -webkit-background-size: auto 18px;
    background-size: auto 18px;
    font-size: 20px;
    font-weight: 700;
    color: #ff6f05;
    line-height: 400%;
  }
  .signup-bg {
    background: url(${require('../../assets/images/baoming/y-bg1.jpg')});
    background-size: 100% 100%;
  }
`;
