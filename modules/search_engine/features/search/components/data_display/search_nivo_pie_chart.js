import React from 'react';
import { Pie } from '@nivo/pie';
import { getPieData, getDataSources } from '../../../../../util/getChartData';
// const data = [
//   {
//     id: 'make',
//     label: 'make',
//     value: 326
//   },
//   {
//     id: 'python',
//     label: 'python',
//     value: 168
//   },
//   {
//     id: 'erlang',
//     label: 'erlang',
//     value: 209
//   },
//   {
//     id: 'rust',
//     label: 'rust',
//     value: 241
//   }
// ];

const MyResponsivePie = ({ data, source }) => {
  const sources = getDataSources(data);
  const chosenSource = source || sources[0];
  const pieData = getPieData(data, chosenSource);
  return (
    <Pie
      data={pieData}
      width={400}
      height={400}
      theme={{ textColor: '#ffffff' }}
      colors={['#28E59C', '#5848F6', '#F6B767', '#ED3B5B']}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-127}
      endAngle={298}
      innerRadius={0.35}
      padAngle={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={9}
      arcLinkLabelsTextColor={{ theme: 'labels.text.fill' }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={13}
      arcLabelsTextColor={{ theme: 'labels.text.fill' }}
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: 'rgba(255, 255, 255, 0.3)',
      //     size: 4,
      //     padding: 1,
      //     stagger: true
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: 'rgba(255, 255, 255, 0.3)',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10
      //   }
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'ruby'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'c'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'go'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'python'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'scala'
      //     },
      //     id: 'lines'
      //   },
      //   {
      //     match: {
      //       id: 'lisp'
      //     },
      //     id: 'lines'
      //   },
      //   {
      //     match: {
      //       id: 'elixir'
      //     },
      //     id: 'lines'
      //   },
      //   {
      //     match: {
      //       id: 'javascript'
      //     },
      //     id: 'lines'
      //   }
      // ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  );
};

export default MyResponsivePie;
