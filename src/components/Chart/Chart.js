import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './Chart.style';

const Chart = ({ casesType }) => {
  const [chartDate, setChartDate] = useState([]);
  const [chartValues, setChartValues] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=60')
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
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
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
