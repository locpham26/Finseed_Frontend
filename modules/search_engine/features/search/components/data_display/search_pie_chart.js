import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'styled-components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function SearchPieChart({ data }) {
  const theme = useTheme();
  const series = [34, 65, 12, 78];
  const options = {
    stroke: {
      colors: ['#252529'],
      width: 2
    },
    chart: {
      width: 380,
      type: 'pie'
    },
    // legend: {
    //   show: false,
    // },
    colors: ['#28E59C', '#5848F6', '#F6B767', `#ED3B5B`],
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  return <Chart options={options} series={series} type="pie" width={300} />;
}

export default SearchPieChart;
