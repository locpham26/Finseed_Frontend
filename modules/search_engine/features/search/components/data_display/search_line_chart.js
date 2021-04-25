import React from 'react';
import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
import { useTheme } from 'styled-components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function SearchLineChart({ data }) {
  const theme = useTheme();
  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: 'Yo',
      data: [41, 23, 12, 15, 70, 69, 61, 86, 100]
    }
    // {
    //   name: 'Lo',
    //   data: [12, 38, 42, 19, 30, 46, 23, 33, 21]
    // }
  ];
  const options = {
    chart: {
      //   height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ['#28E59C', '#5848F6,', '#F6B767'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true
      //   showForSingleSeries: true
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    tooltip: {
      theme: 'dark'
    },
    markers: {
      size: 5,
      strokeColors: '#32323E',
      hover: {
        sizeOffset: 3
      }
    },
    grid: {
      // row: {
      //   colors: ["#32323E"],
      //   opacity: 1,
      // },
      show: true,
      borderColor: 'rgba(255, 255, 255, 0.1)'
    },
    yaxis: {
      labels: {
        style: {
          colors: '#818189'
        }
      },
      tickAmount: 9
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: '#818189'
        }
      }
    }
  };
  return <Chart height="100%" series={series} options={options} />;
}

export default SearchLineChart;
