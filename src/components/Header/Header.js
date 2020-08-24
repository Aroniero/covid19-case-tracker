import React from 'react';
import styled from 'styled-components';

import CovidIcon from '../CovidIcon/CovidIcon';
import CountryDropdown from '../CountryDropdown/CountryDropdown';

const HeaderContainer = styled.div`
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
  @media (${({ theme }) => theme.media.lg}) {
    margin-top: 0;
  }
`;

const Heading = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const Title = styled.h1`
  @media (${({ theme }) => theme.media.lg}) {
    font-size: 1.2rem;
  }
`;

const Header = ({ casesType, countryNames, handleCountryChange }) => {
  return (
    <HeaderContainer>
      <Heading>
        <CovidIcon casesType={casesType} />
        <Title>Covid-19 - Case - Tracker</Title>
      </Heading>
      <CountryDropdown
        countries={countryNames}
        handleCountryChange={handleCountryChange}
      />
    </HeaderContainer>
  );
};

export default Header;
