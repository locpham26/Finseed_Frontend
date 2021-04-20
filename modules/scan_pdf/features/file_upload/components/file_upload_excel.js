/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Button, Col, Divider, Pagination, Row, Space, Spin } from 'antd';
import Grid, {
   IChildrenProps,
   Cell as DefaultCell,
   useSelection,
   useEditable,
   useSizer as useAutoSizer,
   useTooltip,
   Direction,
   SelectionProps,
   Selection
} from '@rowsncolumns/grid';
import { Rect, Text, Group, RegularPolygon } from 'react-konva';
import { UndoOutlined } from '@ant-design/icons';
// import downloadExcel from './downloadExcel';

const ScanPdfExcel = ({ scanData }) => {
   // const width = 500;
   const [data, setData] = useState(scanData[0]);
   const [page, setPage] = useState(1);
   const [width, setWidth] = useState(window.innerWidth - 500);
   // const [height, setHeight] = useState(500)
   // const width = window.innerWidth - 690;
   // const height = document
   //   .getElementsByTagName("canvas")[0]
   //   ?.getBoundingClientRect().height;
   const height = 500;

   const updateWidthAndHeight = () => {
      setWidth(window.innerWidth - 500);
   };

   useEffect(() => {
      window.addEventListener('resize', updateWidthAndHeight);
      return () => window.removeEventListener('resize', updateWidthAndHeight);
   }, []);

   const onChangePagination = (e) => {
      setPage(e);
      setData(scanData[e - 1]);
   };

   const SelectEditor = (props) => {
      const { position, onSubmit, value, cell, nextFocusableCell, onBlur } = props;
      return (
         <div
            style={{
               position: 'absolute',
               left: position.x,
               top: position.y,
               width: position.width,
               height: position.height
            }}
         >
            <select
               style={{ width: '100%' }}
               // eslint-disable-next-line jsx-a11y/no-autofocus
               autoFocus
               value={value}
               onBlur={onBlur}
               onChange={(e) => {
                  onSubmit(e.target.value, cell, nextFocusableCell(cell, Direction.Down));
               }}
            >
               {/* <option>Yay Select</option>
          <option>This can be any React Component</option> */}
            </select>
         </div>
      );
   };
   const App = () => {
      const originalData = {};
      Object.keys(scanData).forEach((key) => (originalData[key] = JSON.parse(JSON.stringify(scanData[key]))));

      const rowCount = 200;
      const columnCount = 200;
      const gridRef = useRef(null);
      const getCellValue = useCallback(
         ({ rowIndex, columnIndex }) => {
            if (data[rowIndex]) return data[rowIndex][columnIndex];
            return '';
         },
         [data]
      );
      const { activeCell, selections, setActiveCell, ...selectionProps } = useSelection({
         gridRef,
         rowCount,
         columnCount,
         onFill: (activeCell, fillSelection) => {
            if (!fillSelection) return;
            const { bounds } = fillSelection;
            const changes = {};
            const value = getCellValue(activeCell);
            for (let i = bounds.top; i <= bounds.bottom; i++) {
               for (let j = bounds.left; j <= bounds.right; j++) {
                  changes[i][j] = value;
               }
            }
            setData((prev) => ({ ...prev, ...changes }));
         }
      });
      const { getTextMetrics, ...autoSizerProps } = useAutoSizer({
         gridRef,
         getValue: getCellValue,
         resizeStrategy: 'lazy',
         rowCount,
         autoResize: false
      });
      const { editorComponent, isEditInProgress, ...editableProps } = useEditable({
         rowCount,
         columnCount,
         gridRef,
         getValue: getCellValue,
         selections,
         // getEditor: ({ rowIndex, columnIndex }) => {
         //   if (rowIndex == 1 && columnIndex === 1) {
         //     return SelectEditor;
         //   }
         //   return undefined;
         // },
         activeCell,
         onDelete: (activeCell, selections) => {
            if (selections.length) {
               const newValues = selections.reduce((acc, { bounds: sel }) => {
                  for (let i = sel.top; i <= sel.bottom; i++) {
                     for (let j = sel.left; j <= sel.right; j++) {
                        acc[i][j] = '';
                     }
                  }
                  return acc;
               }, {});
               setData((prev) => ({ ...prev, ...newValues }));
               const selectionBounds = selections[0].bounds;

               gridRef.current.resetAfterIndices(
                  {
                     columnIndex: selectionBounds.left,
                     rowIndex: selectionBounds.top
                  },
                  true
               );
            } else if (activeCell) {
               setData((prev) => {
                  const newVal = data[activeCell.rowIndex];
                  newVal[activeCell.columnIndex] = '';
                  return {
                     ...prev,
                     [activeCell.rowIndex]: newVal
                  };
               });
               gridRef.current.resetAfterIndices(activeCell);
            }
         },
         canEdit: ({ rowIndex, columnIndex }) => {
            // if (rowIndex === 2 && columnIndex === 3) return false;
            return true;
         },
         onSubmit: (value, { rowIndex, columnIndex }, nextActiveCell) => {
            setData((prev) => {
               let newVal;
               if (data[rowIndex]) newVal = data[rowIndex];
               else newVal = [];
               newVal[columnIndex] = value;
               return {
                  ...prev,
                  [rowIndex]: newVal
               };
            });
            gridRef.current.resizeColumns([columnIndex]);

            /* Select the next cell */
            if (nextActiveCell) {
               setActiveCell(nextActiveCell);
            }
         }
      });
      return (
         <Col>
            <div className="scan-pdf-edit-header">Bản trích xuất</div>
            <div style={{ position: 'relative' }}>
               <Grid
                  width={width}
                  height={height}
                  columnCount={200}
                  rowCount={200}
                  ref={gridRef}
                  activeCell={activeCell}
                  selections={selections}
                  columnWidth={(index) => {
                     return 100;
                  }}
                  showFillHandle={!isEditInProgress}
                  itemRenderer={(props) => (
                     <DefaultCell
                        value={data && data[props.rowIndex] ? data[props.rowIndex][props.columnIndex] : ''}
                        align="left"
                        {...props}
                     />
                  )}
                  rowHeight={(index) => {
                     return 20;
                  }}
                  {...selectionProps}
                  {...editableProps}
                  {...autoSizerProps}
                  onKeyDown={(...args) => {
                     selectionProps.onKeyDown(...args);
                     editableProps.onKeyDown(...args);
                  }}
                  onMouseDown={(...args) => {
                     selectionProps.onMouseDown(...args);
                     editableProps.onMouseDown(...args);
                  }}
               />
               {editorComponent}
            </div>
            <Pagination
               defaultCurrent={page}
               total={Object.keys(scanData).length}
               pageSize={1}
               onChange={(e) => onChangePagination(e)}
               className="dp-center"
            />
            <div className="toolbox-row">
               <Button type="primary" onClick={() => setData(originalData[page - 1])}>
                  <UndoOutlined />
               </Button>
            </div>
         </Col>
      );
   };

   return <App />;
};

export default ScanPdfExcel;
