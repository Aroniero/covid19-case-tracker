import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './Chart.style';
import theme from '../../styles/theme';
import { useChartData } from './Chart.hook';

const Chart = ({ casesType }) => {
  const [chartDates, chartValues] = useChartData(casesType);

  return (
    <ChartContainer>
      <Line
        data={{
          labels: chartDates,
          datasets: [
            {
              label: `Worldwide - ${casesType.toUpperCase()}`,
              fill: true,
              lineTension: 0.1,
              backgroundColor: theme.bgColors[casesType],
              borderColor: theme.colors[casesType],
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: theme.colors[casesType],
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: theme.colors[casesType],
              pointHoverBorderColor: theme.colors[casesType],
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
