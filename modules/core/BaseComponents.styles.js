import { Button } from 'antd';
import styled from 'styled-components';

// TheHeader
export const LoginButton = styled(Button)`
   width: 100px !important;
   height: 35px;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 14px;
   background-color: #28e59c;
   border-radius: 1px;
   border-color: transparent;
   color: black;
   &:hover,
   &:focus {
      border-color: #28e59c;
      background-color: transparent;
      color: white;
   }
`;

export const StyledLogoContainer = styled.div`
   width: 60px;
   height: 50px;
   cursor: pointer;
   display: inline-flex;
   justify-content: center;
   align-items: center;
`;

// IndexListItem
export const StyledIndexItem = styled.div`
   width: 155px;
   height: 40px;
   border-radius: 3px;
   border: 1px solid white;
   background-color: #18191a;
   display: inline-block;
   margin: 0px 2px;
   padding: 5px;
   border: 1px solid transparent;
   > div {
      line-height: 13px;
      &:nth-child(1) {
         margin-bottom: 5px;
      }
   }
   .down {
      color: #ff5858;
   }

   .up {
      color: #28e59c;
   }
   &:hover {
      border: 1px solid ${(props) => (props.status === 'up' ? '#28E59C' : '#ff5858')};
   }

   :hover {
      border-color: #00838d;
      // box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
      // z-index: 500;
      cursor: pointer;
      .indexValue {
         color: red;
      }
   }

   transition: border-color 0.5s ease;

   .indexValue {
      transition: color 0.5s ease;
   }
`;

export const StyledIndexName = styled.span`
   font-size: 14px;
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   color: white;
`;

export const StyledIndexValue = styled.span`
   font-size: 12px;
   font-family: 'Quicksand', sans-serif;
   font-weight: 400;
   color: #ccc;
`;

export const StyledIndexChange = styled.span`
   color: ${(props) => (props.status === 'up' ? '#28E59C' : '#ff5858')};
   font-size: 16px;
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
`;
