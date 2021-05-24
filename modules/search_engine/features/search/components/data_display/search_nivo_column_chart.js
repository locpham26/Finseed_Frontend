import React, { useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { getChartData, getDataSources } from '../../../../../util/getChartData';

const MyResponsiveBar = ({ data, source }) => {
  const sources = getDataSources(data);
  const chosenSource = source || sources[0];
  const { chartData: columnData, unit, maxValue, minValue } = getChartData(data, chosenSource, 'column');
  useEffect(() => {
    console.log(columnData);
  });
  const indexBy = Object.keys(columnData[0])[0];
  const keys = Object.keys(columnData[0]).slice(1, Object.keys(columnData[0]).length);
  return (
    <ResponsiveBar
      data={columnData}
      theme={{
        textColor: '#ffffff',
        axis: {
          domain: {
            line: {
              stroke: '#ffffff',
              strokeWidth: 2
            }
          }
        }
      }}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 30, bottom: 50, left: 80 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#28E59C', '#5848F6', '#F6B767', '#ED3B5B']}
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: '#38bcb2',
      //     size: 4,
      //     padding: 1,
      //     stagger: true
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: '#eed312',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10
      //   }
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'fries'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'sandwich'
      //     },
      //     id: 'lines'
      //   }
      // ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Thời gian',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: unit,
        legendPosition: 'middle',
        legendOffset: -60
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ theme: 'labels.text.fill' }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -30,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          symbolShape: 'diamond',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default MyResponsiveBar;
