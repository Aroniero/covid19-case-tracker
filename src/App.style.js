import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media (${({ theme }) => theme.media.sm}) {
    max-width: 800px;
  }
  @media (${({ theme }) => theme.media.lg}) {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
  }
`;
export const Header = styled.div`
  padding: 20px 20px;
  border-radius: 10px;
  margin: 20px 20px;
  box-shadow: 0px 0px 10px -6px #000000;
  background-color: white;

  @media (${({ theme }) => theme.media.md}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* @media (${({ theme }) => theme.media.lg}) {
    margin-top: 0;
  } */
`;

export const Heading = styled.h1`
  text-align: center;
  padding: 10px 0;
`;

export const LeftSection = styled.section`
  width: 100%;
`;
export const RightSection = styled.section`
  width: 100%;
`;
