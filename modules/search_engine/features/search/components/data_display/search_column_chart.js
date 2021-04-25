import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'styled-components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function SearchColumnChart({ data }) {
  const theme = useTheme();
  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ];
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    colors: ['#28E59C', '#5848F6', '#F6B767', '#ED3B5B'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    grid: {
      show: true,
      borderColor: '#90A4AE'
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: '#818189'
        }
      }
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      },
      labels: {
        style: {
          colors: '#818189'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        }
      }
    }
  };
  return <Chart options={options} series={series} type="bar" height="100%" />;
}

export default SearchColumnChart;
