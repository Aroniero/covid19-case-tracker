import styled from 'styled-components';

export const CardListContainer = styled.div`
  margin: 0 auto;
  padding: 5px 20px;

  @media (${({ theme }) => theme.media.md}) {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
`;
