const timeIndex = 0;
const propertyIndex = 1;
const valueIndex = 2;
const unitIndex = 3;
const sourceIndex = 5;

export const getDataByField = (data, fieldIndex) => {
  const dataObj = {};
  let lastSlice = 0;
  for (let i = 0; i < data.length; i += 1) {
    if ((data[i + 1] && data[i + 1][fieldIndex] !== data[i][fieldIndex]) || i === data.length - 1) {
      dataObj[data[i][fieldIndex]] = data.slice(lastSlice, i + 1);
      lastSlice = i + 1;
    }
  }
  return dataObj;
};

export const getDataSources = (data) => {
  const sources = [];
  for (let i = 0; i < data.length; i += 1) {
    if ((data[i + 1] && data[i + 1][sourceIndex] !== data[i][sourceIndex]) || i === data.length - 1) {
      sources.push(data[i][sourceIndex]);
    }
  }
  return sources;
};

export const getDataBySource = (data) => {
  return getDataByField(data, sourceIndex);
};

export const getDataByProperty = (data) => {
  return getDataByField(data, propertyIndex);
};

export const getDataByTime = (data) => {
  let dataObj = {};
  let pivot = -1;
  for (let k = 1; k < data.length; k += 1) {
    if (data[k][timeIndex] === data[0][timeIndex]) {
      pivot = k;
      break;
    }
  }
  if (pivot > -1) {
    for (let i = 0; i < pivot; i += 1) {
      dataObj[data[i][timeIndex]] = [];
      for (let j = 0; j < data.length; j += 1) {
        if (data[j][timeIndex] === data[i][timeIndex]) {
          dataObj[data[i][timeIndex]].push(data[j]);
        }
      }
    }
  } else {
    dataObj = getDataByField(data, timeIndex);
  }
  return dataObj;
};

export const getLineData = (dataObj) => {
  return Object.entries(dataObj).map(([key, value]) => {
    const id = key;
    const data = value
      .map((row) => ({
        x: row[timeIndex],
        y: parseFloat(row[valueIndex])
      }))
      .reverse();
    return {
      id,
      data
    };
  });
};

export const getColumnData = (dataObj) => {
  console.log(dataObj);
  return Object.entries(dataObj).map(([key, value]) => {
    const temp = {};
    value.forEach((row) => {
      temp[row[propertyIndex]] = parseFloat(row[valueIndex]);
    });
    return {
      time: key,
      ...temp
    };
  });
};

export const getPieData = (dataObj) => {
  return Object.entries(dataObj).map(([key, value]) => ({
    id: key,
    label: key,
    value: parseFloat(value[0][valueIndex])
  }));
};

export const getUnit = (data) => {
  return data[0][unitIndex];
};

export const getMaxValue = (dataObj) => {
  const valueArray = [];
  Object.entries(dataObj).forEach(([_, value]) => {
    value.forEach((row) => {
      valueArray.push(parseFloat(row[valueIndex]));
    });
  });
  return {
    maxValue: Math.max(...valueArray),
    minValue: Math.min(...valueArray)
  };
};

export const getChartData = (data, source, type) => {
  const dataBySource = getDataBySource(data);
  const dataObj = type !== 'column' ? getDataByProperty(dataBySource[source]) : getDataByTime(dataBySource[source]);
  let chartData;
  switch (type) {
    case 'column':
      chartData = getColumnData(dataObj, source);
      break;
    case 'pie':
      chartData = getPieData(dataObj, source);
      break;
    default:
      chartData = getLineData(dataObj, source);
      break;
  }
  return {
    unit: getUnit(data),
    chartData,
    ...getMaxValue(dataObj)
  };
};
