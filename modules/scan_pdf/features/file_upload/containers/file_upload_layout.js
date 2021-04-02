import { Button, message, notification, Spin, Steps, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
// import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
// import ThePageHeader from '../base/ThePageHeader';
// import ScanPdfHistory from './ScanPdfHistory';
// import ScanPdfPreview from './ScanPdfPreview';
// import ScanPdfEdit from './ScanPdfEdit';
import { DOMAIN } from 'constants';
import { ScanContainerBodyStyles, ScanContainerStyles } from '../components/file_upload_styles';
// import rowToCol from '../../utils/rowToCol';
// import sampleData from './sample.json';

const { Step } = Steps;

const steps = [
   {
      title: 'Tải lên'
   },
   {
      title: 'Xem trước'
   },
   {
      title: 'Xử lí'
   },
   {
      title: 'Tải xuống'
   }
];

function ScanPdfLayout() {
   const [current, setCurrent] = useState(0);
   const [loading, setLoading] = useState(false);
   const [scanData, setScanData] = useState('');

   const next = () => {
      setCurrent(current + 1);
   };

   const prev = () => {
      setCurrent(current - 1);
   };

   const onChange = (cur) => {
      setCurrent(cur);
   };

   // const { status: uploadStatus, data } = useSelector((state) => state.scanPdfReducers.postPdfReducer);

   // useEffect(() => {
   //    if (uploadStatus === 'started') {
   //       setLoading(true);
   //    } else if (uploadStatus === 'success') {
   //       const socket = io.connect(`${DOMAIN}?file_id=${data.file_id}`);
   //       socket.on('status-update', (data) => {
   //          if (['DONE', 'CONVERT_ERROR', 'SCAN_ERROR', 'CONVERT_JSON_ERROR'].includes(data.msg)) {
   //             setLoading(false);
   //          }
   //          if (['CONVERT_ERROR', 'SCAN_ERROR', 'CONVERT_JSON_ERROR'].includes(data.msg)) {
   //             notification.error({ message: 'Lỗi', description: data.msg });
   //             socket.disconnect();
   //          }
   //       });
   //       socket.on('data', (data) => {
   //          setScanData(data.data);
   //          socket.disconnect();
   //       });
   //    }
   // }, [uploadStatus]);

   return (
      <ScanContainerStyles>
         <Steps current={current} onChange={onChange}>
            {steps.map((item, i) => (
               <Step key={item.title} title={item.title} disabled={i > current} />
            ))}
         </Steps>
         {/* {current === 0 && <ScanPdfHistory next={() => next()} />}
         <ScanContainerBodyStyles>
            {current === 1 && <ScanPdfPreview />}
            {current === 2 && (loading ? <Spin /> : <ScanPdfEdit scanData={scanData} />)}
         </ScanContainerBodyStyles> */}
         <div className="dp-space-bw" style={{ marginTop: 16 }}>
            {/* {current > 0 && ( */}
            <Button
               style={{
                  margin: '0 8px',
                  opacity: current > 0 ? '1' : '0',
                  cursor: current > 0 ? 'all' : 'default'
               }}
               onClick={() => prev()}
            >
               Quay lại
            </Button>
            {/* )} */}
            {current < steps.length - 1 && current > 0 && (
               <Button type="primary" onClick={() => next()}>
                  Tiếp
               </Button>
            )}
            {/* {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
            )} */}
         </div>
      </ScanContainerStyles>
   );
}

export default ScanPdfLayout;
