import React from 'react';
import { Bar } from '@nivo/bar';

// const data = [
//   {
//     country: 'AD',
//     sandwich: 8,
//     kebab: 129,
//     fries: 113,
//     donut: 23
//   },
//   {
//     country: 'AE',
//     sandwich: 10,
//     kebab: 193,
//     fries: 54,
//     donut: 120
//   },
//   {
//     country: 'AF',
//     sandwich: 130,
//     kebab: 44,
//     fries: 93,
//     donut: 150
//   }
// ];

const MyResponsiveBar = ({ data }) => (
  <Bar
    data={data}
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
    height={300}
    width={600}
    keys={['sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ theme: 'labels.text.fill' }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
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

export default MyResponsiveBar;
