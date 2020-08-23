import { useEffect, useState } from 'react';

export const useChartData = (casesType) => {
  const [chartDates, setChartDates] = useState([]);
  const [chartValues, setChartValues] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
      .then((response) => response.json())
      .then((data) => {
        setChartDates(Object.keys(data[casesType]));
        setChartValues(Object.values(data[casesType]));
      });
  }, [casesType]);

  return [chartDates, chartValues];
};
