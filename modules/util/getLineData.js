const timeIndex = 0;
const propertyIndex = 1;
const valueIndex = 2;
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
  console.log(dataObj);
  return dataObj;
};

export const getDataSources = (data) => {
  const sources = [];
  for (let i = 0; i < data.length; i += 1) {
    if ((data[i + 1] && data[i + 1][sourceIndex] !== data[i][sourceIndex]) || i === data.length - 1) {
      sources.push(data[i][sourceIndex]);
    }
  }
  console.log(sources);
  return sources;
};

export const getDataBySource = (data) => {
  return getDataByField(data, sourceIndex);
};

export const getDataByProperty = (data) => {
  return getDataByField(data, propertyIndex);
};

export const getDataByTime = (data) => {
  return getDataByField(data, timeIndex);
};

export const getLineData = (data, source) => {
  const dataBySource = getDataBySource(data);
  const dataObj = getDataByProperty(dataBySource[source]);
  const lineObj = Object.entries(dataObj).map(([key, value]) => {
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
  return lineObj;
};

const getColumnData = (data, source) => {
  const dataBySource = getDataBySource(data);
  const dataObj = getDataByTime(dataBySource[source]);
  const columnObj = Object.entries(dataObj).map(([key, value]) => {
    value.map((row) => {
      const obj = {};
      const prop = row[propertyIndex];
      const value = row[valueIndex];
      obj[prop] = value;
      return obj;
    });
    return {
      time: key
    };
  });
};
