import React, { useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
// import { postPdf } from './reducers/postPdfReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Upload } from 'antd';
import { ScanPdfHistoryStyles } from '../components/file_upload_styles';

const { Dragger } = Upload;

function ScanPdfHistory({ next }) {
   // const history = useHistory();
   const dispatch = useDispatch();

   const props = {
      name: 'file',
      headers: {
         authorization: 'authorization-text'
      },
      accept: '.pdf',
      showUploadList: false,
      beforeUpload: () => false,
      onChange(info) {
         // dispatch(postPdf(info.file));
         next();
         // history.push({ pathname: '/scan-pdf/preview', file: info.file });
         // if (info.file.status === "done") {
         // message.success(`${info.file.name} file uploaded successfully`);
         // } else if (info.file.status === "error") {
         // message.error(`${info.file.name} file upload failed.`);
         // }
      }
   };

   return (
      <ScanPdfHistoryStyles className="dp-center-col tx-center">
         <Dragger {...props}>
            <p className="ant-upload-drag-icon">
               <InboxOutlined style={{ fontSize: 36 }} />
            </p>
            <p className="ant-upload-text">Chọn hoặc kéo thả file pdf vào đây</p>
         </Dragger>
         <div>
            <div style={{ marginTop: 36 }}>Hãy bắt đầu công việc của bạn ngay hôm nay!</div>
            <div>Chọn file PDF ở thanh công cụ.</div>
         </div>
      </ScanPdfHistoryStyles>
   );
}

export default ScanPdfHistory;
