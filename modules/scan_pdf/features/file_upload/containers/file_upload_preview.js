import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Pagination, Space } from 'antd';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ScanPdfPreview({ file }) {
   const [numPages, setNumPages] = useState(1);
   const [pageNumber, setPageNumber] = useState(1);

   const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
   };

   const onChangePagination = (e) => {
      setPageNumber(e);
   };

   return (
      <ScanPdfPreviewStyles>
         <div>Xem trước bản gốc</div>
         <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="dp-center">
            <Page pageNumber={pageNumber} />
         </Document>
         <Space className="dp-center">
            <Pagination defaultCurrent={1} total={numPages} pageSize={1} onChange={(e) => onChangePagination(e)} />
         </Space>
      </ScanPdfPreviewStyles>
   );
}

export default ScanPdfPreview;

const ScanPdfPreviewStyles = styled.div`
   div {
      margin-bottom: 10px;
      /* font-weight: 600; */
      font-size: 16px;
   }

   .ant-space-item:nth-child(2) {
      position: absolute;
      right: 200px;
      margin-bottom: 0;
   }
`;
