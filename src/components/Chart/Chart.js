import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './Chart.style';
import colors from '../../styles/colors';

const Chart = ({ casesType }) => {
  const [chartDate, setChartDate] = useState([]);
  const [chartValues, setChartValues] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
      .then((response) => response.json())
      .then((data) => {
        setChartDate(Object.keys(data[casesType]));
        setChartValues(Object.values(data[casesType]));
      });
  }, [casesType]);

  return (
    <ChartContainer>
      <Line
        data={{
          labels: chartDate,
          datasets: [
            {
              label: `Worldwide - ${casesType.toUpperCase()}`,
              fill: true,
              lineTension: 0.1,
              backgroundColor: colors[casesType],
              borderColor: colors[casesType],
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: colors[casesType],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: colors[casesType],
              pointHoverBorderColor: colors[casesType],
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: chartValues,
            },
          ],
        }}
      />
    </ChartContainer>
  );
};

export default Chart;
