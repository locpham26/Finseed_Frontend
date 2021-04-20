import React, { useRef, useState, useCallback, Suspense } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Col, Pagination, Row, Space, Spin } from 'antd';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import {
   DownloadOutlined,
   FullscreenExitOutlined,
   MinusOutlined,
   PlusOutlined,
   ProfileOutlined,
   UndoOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import ScanPdfExcel from '../components/file_upload_excel';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ScanPdfEdit({ file }) {
   const [loading, setLoading] = useState(true);
   const [numPages, setNumPages] = useState(1);
   const [pageNumber, setPageNumber] = useState(1);
   const { data: scanData } = useSelector((state) => state.scanPdf.getData);

   const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setLoading(false);
   };

   const onChangePagination = (e) => {
      setPageNumber(e);
   };

   return (
      <ScanPdfEditStyles>
         <Row gutter={[8, 8]} justify="space-between">
            <Col>
               <div className="scan-pdf-edit-header">Bản gốc</div>
               <TransformWrapper>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                     <>
                        {!loading && (
                           <div className="toolbox-row">
                              <Button type="primary" onClick={zoomIn}>
                                 <PlusOutlined />
                              </Button>
                              <Button type="primary" onClick={zoomOut}>
                                 <MinusOutlined />
                              </Button>
                              <Button type="primary" onClick={resetTransform}>
                                 <FullscreenExitOutlined />
                              </Button>
                           </div>
                        )}
                        <TransformComponent>
                           <Document
                              file={file}
                              onLoadSuccess={onDocumentLoadSuccess}
                              className="dp-center"
                              style={{ width: '200px', border: '1px solid black' }}
                           >
                              <Page pageNumber={pageNumber} />
                           </Document>
                        </TransformComponent>
                     </>
                  )}
               </TransformWrapper>
               <Pagination
                  defaultCurrent={1}
                  total={numPages}
                  pageSize={1}
                  onChange={(e) => onChangePagination(e)}
                  className="dp-center"
               />
            </Col>
            <ScanPdfExcel scanData={scanData} />
         </Row>
      </ScanPdfEditStyles>
   );
}

export default ScanPdfEdit;

const ScanPdfEditStyles = styled.div`
   .scan-pdf-edit-header {
      margin-bottom: 10px;
      font-weight: 600;
   }

   .ant-pagination {
      margin-top: 10px !important;
   }
   .react-pdf__Page canvas {
      width: 350px !important;
      height: 500px !important;
   }

   .toolbox-row {
      position: absolute;
      bottom: 50px;
      z-index: 3;
      right: 20px;
   }

   .toolbox-row button {
      margin-left: 5px;
   }

   /* .toolbox-row {
        margin-bottom: 10px;
        position: absolute;
        bottom: 35px;
        right: 20px;
    } */

   .toolbox-item {
      margin-top: auto;
      margin-bottom: auto;
      text-align: left;
      cursor: pointer;
   }

   .ant-col-6 {
      cursor: pointer;
   }
`;
