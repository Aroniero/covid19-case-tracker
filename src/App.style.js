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

export const LeftSection = styled.section`
  width: 100%;
`;
export const RightSection = styled.section`
  width: 100%;
`;
