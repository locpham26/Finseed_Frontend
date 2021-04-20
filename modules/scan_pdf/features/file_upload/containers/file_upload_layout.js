import { Button, message, notification, Spin, Steps, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
// import ThePageHeader from '../base/ThePageHeader';
// import ScanPdfHistory from './ScanPdfHistory';
// import ScanPdfPreview from './ScanPdfPreview';
// import ScanPdfEdit from './ScanPdfEdit';
import { DOMAIN } from 'constants';
import ThePageHeader from '@core/ThePageHeader';
import { CaretRightOutlined } from '@ant-design/icons';
import { ScanContainerBodyStyles, ScanContainerStyles, StyledDesc } from '../components/file_upload_styles';
import ScanPdfHistory from './file_upload_history';
import ScanPdfPreview from './file_upload_preview';
import ScanPdfEdit from './file_upload_edit';
// import rowToCol from '../../utils/rowToCol';
import { getData } from '../reducer';

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
   const [file, setFile] = useState();
   const [socket, setSocket] = useState();
   const dispatch = useDispatch();

   const next = () => {
      setCurrent(current + 1);
   };

   const prev = () => {
      setCurrent(current - 1);
   };

   const onChange = (cur) => {
      setCurrent(cur);
   };
   const uploadStatus = useSelector((state) => state.scanPdf.postPdf.status);
   const fileId = useSelector((state) => state.scanPdf.postPdf.data?.file_id);

   useEffect(() => {
      if (uploadStatus === 'started') {
         setLoading(true);
      } else {
         setLoading(false);
      }
   }, [uploadStatus]);

   useEffect(() => {
      setSocket(io.connect(`${DOMAIN}`));
   }, []);

   useEffect(() => {
      if (fileId) {
         socket.emit('subscribe', { file_id: fileId });
         setLoading(true);
         socket.on('status', (res) => {
            const { msg } = res;
            if (['CONVERT_ERROR', 'SCAN_ERROR', 'DONE'].includes(msg)) {
               setLoading(false);
            }
            if (msg === 'DONE') {
               dispatch(getData(fileId));
            }
         });
      }
   }, [fileId]);

   return (
      <ScanContainerStyles>
         <ThePageHeader
            title="Search Engine"
            desc={
               <StyledDesc>
                  <p className="desc-title">Search Engine là gì?</p>
                  <p className="desc-text">
                     <CaretRightOutlined />
                     Công cụ tìm kiếm dữ liệu tài chính bao gồm dữ liệu vĩ mô, ngành, doanh nghiệp và thị trường.
                  </p>
                  <p className="desc-text">
                     <CaretRightOutlined />
                     Dữ liệu được tổng hợp đa dạng từ nhiều nguồn thông tin, có độ chính xác cao, cập nhật liên tục,
                     được xử lí thành các dạng trực quan như biểu đồ, chỉ số.
                  </p>
               </StyledDesc>
            }
         />
         <Steps current={current} onChange={onChange}>
            {steps.map((item, i) => (
               <Step key={item.title} title={item.title} disabled={i > current} />
            ))}
         </Steps>
         {current === 0 && <ScanPdfHistory next={() => next()} setFile={setFile} />}
         <ScanContainerBodyStyles>
            {current === 1 && <ScanPdfPreview file={file} />}
            {current === 2 && <ScanPdfEdit file={file} />}
         </ScanContainerBodyStyles>
         <div className="dp-space-bw" style={{ marginTop: 16 }}>
            {current > 0 && (
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
            )}
            {!loading && current < steps.length - 1 && current > 0 && (
               <Button type="primary" onClick={() => next()}>
                  Tiếp
               </Button>
            )}
            {loading && current === 1 && (
               <Button type="primary" size="small" loading>
                  Loading
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
