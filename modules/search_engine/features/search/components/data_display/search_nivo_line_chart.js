import React from 'react';
import { Line } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = ({ data }) => (
  <Line
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
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    curve="cardinal"
    colors={['#28E59C', '#5848F6', '#F6B767', '#ED3B5B']}
    enableGridX={false}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      // legendOffset: -40,
      legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ from: 'color', modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default MyResponsiveLine;
