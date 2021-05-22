import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { getChartData, getDataSources } from '../../../../../util/getChartData';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = ({ data, source }) => {
  const sources = getDataSources(data);
  const chosenSource = source || sources[0];
  const { chartData: lineData, unit, maxValue, minValue } = getChartData(data, chosenSource, 'line');
  return (
    <ResponsiveLine
      data={lineData}
      theme={{
        textColor: '#ffffff',
        axis: {
          domain: {
            line: {
              stroke: '#ffffff',
              strokeWidth: 2
            }
          }
        },
        crosshair: {
          line: {
            stroke: '#ffffff'
          }
        }
      }}
      margin={{ top: 50, right: 30, bottom: 50, left: 80 }}
      curve="cardinal"
      colors={['#28E59C', '#5848F6', '#F6B767', '#ED3B5B']}
      enableGridX={false}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 0, max: 1.2 * maxValue, stacked: false, reverse: false }}
      yFormat=" >-.2f"
      gridXValues={10}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Thời gian',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: unit,
        legendOffset: -60,
        legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      enableSlices="x"
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 20,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 20,
          symbolShape: 'diamond',
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
};

export default MyResponsiveLine;
