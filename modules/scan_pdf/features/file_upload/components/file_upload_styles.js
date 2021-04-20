import styled from 'styled-components';
import { palette } from 'styled-theme';

export const ScanContainerStyles = styled.div`
   height: 100%;

   /* Button */
   .ant-btn {
      background: #18191a !important;
      border: 1px solid white !important;
      color: white;
      margin-bottom: 10px;
   }

   .ant-btn:hover,
   .ant-btn:focus {
      background: #18191a !important;
      border: 1px solid #28e59c !important;
      color: #28e59c !important;
   }

   .ant-btn-primary {
      background: #28e59c !important;
      border: 1px solid #28e59c !important;
      color: #000;
      margin-bottom: 10px;
   }

   .ant-btn-primary:hover,
   .ant-btn-primary:focus {
      background: #28b07c !important;
      border: 1px solid #28b07c !important;
      color: white !important;
   }

   /* Upload */
   .ant-upload {
      margin: auto;
      display: block;
      margin-bottom: 16px;
      border: 3px dashed #28e59c;
      border-radius: 3px;
      background: #18191a;
   }

   .ant-upload-drag-icon svg {
      color: #28e59c;
   }

   .ant-upload:hover {
      background: #3a3b3c;
   }

   .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
      /* background: ${palette('green', 3)}; */
      border-color: ${palette('green', 2)};
   }

   .ant-upload:hover,
   .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover .ant-upload-text,
   .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover .ant-upload-drag-icon svg {
      color: ${palette('green', 2)} !important;
      transition: 0.5s all;
   }

   .ant-upload-text {
      padding: 0 16px;
      color: #28e59c !important;
   }

   .ant-upload.ant-upload-drag .ant-upload-btn {
      border: none;
   }

   /* Step Customization */
   .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: #3a3b3c !important;
   }

   .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: #3a3b3c !important;
   }

   .ant-tooltip {
      max-width: 300px !important;
   }

   .ant-steps-item-finish .ant-steps-item-icon {
      background-color: transparent !important;
      border-color: #28e59c !important;
   }

   .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
      color: #28e59c !important;
   }

   .ant-steps-item-title {
      color: white !important;
   }

   .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: #28e59c !important;
   }

   .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: #28e59c !important;
   }

   .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
      background-color: #28e59c !important;
      border-color: #28e59c !important;
   }

   .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon .ant-steps-icon {
      color: black !important;
   }

   .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: white !important;
   }

   .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: #28e59c !important;
   }

   .ant-steps-item-wait .ant-steps-item-icon {
      background-color: transparent !important;
      border-color: white !important;
   }

   .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
      color: white !important;
   }

   /* Pagination */
   .ant-pagination-item,
   .ant-pagination-item-link {
      background-color: #18191a !important;
      color: white !important;
   }

   .ant-pagination-item-link:hover {
      border-color: #28e59c !important;
      color: #28e59c !important;
   }

   .ant-pagination-item > a {
      color: white !important;
   }

   .ant-pagination-item-active {
      border-color: transparent !important;
      background-color: #28e59c !important;
   }

   .ant-pagination-item-active > a {
      color: white !important;
   }

   .ant-pagination-item:hover {
      border-color: #28e59c !important;
   }

   .ant-pagination-item:hover > a {
      color: #28e59c !important;
   }
`;

export const ScanContainerBodyStyles = styled.div`
   text-align: center;
   color: #fff;

   margin-top: 20px;
   font-size: 18px !important;

   textarea {
      color: #000;
   }
`;

export const ScanPdfHistoryStyles = styled.div`
   text-align: center;
   color: #fff;
   height: 80%;
`;

export const StyledDesc = styled.div`
   .desc-title {
      font-size: 16px;
      color: black;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      box-sizing: border-box;
      margin-bottom: 20px;
   }
   .desc-text {
      font-size: 12px;
      color: black;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
   }
`;
