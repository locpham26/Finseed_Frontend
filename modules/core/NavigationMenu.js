import React, { useEffect } from 'react';
import styled from 'styled-components';
import { palette, fonts } from 'styled-theme';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from 'images/f.svg';
import { StyledLogoContainer } from './BaseComponents.styles';
// import { NavLink, useRouteMatch } from 'react-router-dom';

const activeClassName = 'nav-item-active';

const StyledNavigationItem = styled(Link).attrs({ activeClassName })`
   .dp-center-col {
      height: 60px;
      color: white;
      font-size: 9px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      letter-spacing: -0.03em;
      &.${activeClassName} {
         background-color: #28e59c;
         color: black;
      }
      &:hover {
         color: white !important;
      }
   }
`;

const SearchEngineIcon = ({ isActive }) => {
   return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M1.04602 20L6.6327 14.4133C8.2444 15.7558 10.3116 16.4253 12.4044 16.2825C14.4971 16.1396 16.4542 15.1954 17.8685 13.6464C19.2829 12.0973 20.0455 10.0626 19.9979 7.96554C19.9502 5.86847 19.0959 3.87051 17.6127 2.38728C16.1295 0.904053 14.1315 0.0497547 12.0345 0.00210549C9.9374 -0.0455437 7.9027 0.717125 6.35363 2.13146C4.80456 3.54579 3.8604 5.50288 3.71755 7.59562C3.5747 9.68835 4.24416 11.7556 5.58667 13.3673L2.45045e-07 18.954L1.04602 20ZM11.8362 1.50598C13.153 1.50598 14.4402 1.89645 15.5351 2.62803C16.63 3.3596 17.4833 4.39941 17.9872 5.61598C18.4911 6.83254 18.623 8.17121 18.3661 9.46271C18.1092 10.7542 17.4751 11.9405 16.544 12.8716C15.6129 13.8028 14.4266 14.4369 13.1351 14.6937C11.8436 14.9506 10.5049 14.8188 9.28833 14.3149C8.07176 13.811 7.03195 12.9576 6.30038 11.8627C5.5688 10.7678 5.17833 9.48062 5.17833 8.16382C5.18028 6.39865 5.88236 4.70634 7.13053 3.45818C8.37869 2.21001 10.071 1.50793 11.8362 1.50598V1.50598Z"
            fill={isActive ? 'black' : 'white'}
         />
      </svg>
   );
};

const ScanPdfIcon = ({ isActive }) => {
   return (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4929 4.91429L12.651 0.2L12.1343 0H0.738095L0 0.714286V8.57143H1.47619V1.42857H10.3333V6.42857L11.0714 7.14286H16.2381V8.57143H17.7143V5.42857L17.4929 4.91429V4.91429ZM11.8095 5.71429V1.42857L16.2381 5.71429H11.8095ZM0.738095 10L0 10.7143V19.2857L0.738095 20H16.9762L17.7143 19.2857V10.7143L16.9762 10H0.738095ZM16.2381 17.1429V18.5714H1.47619V11.4286H16.2381V17.1429ZM4.42857 15.7143H3.95619V17.1429H2.95238V12.8571H4.51714C5.62429 12.8571 6.18524 13.3714 6.18524 14.2857C6.1881 14.48 6.14734 14.6726 6.06578 14.8502C5.98422 15.0278 5.86381 15.1861 5.71286 15.3143C5.34703 15.5902 4.89205 15.732 4.42857 15.7143V15.7143ZM4.34 13.6429H3.95619V14.9714H4.34C4.87143 14.9714 5.13714 14.7429 5.13714 14.3C5.13714 13.8571 4.87143 13.6429 4.34 13.6429V13.6429ZM10.3333 16.5429C10.5513 16.3351 10.7218 16.0852 10.8337 15.8096C10.9456 15.534 10.9964 15.2387 10.9829 14.9429C10.9829 13.5143 10.2005 12.8571 8.62095 12.8571H7.05619V17.1429H8.62095C8.93321 17.1575 9.24536 17.112 9.5393 17.009C9.83325 16.906 10.1031 16.7476 10.3333 16.5429V16.5429ZM8.04524 16.3571V13.6429H8.53238C8.72066 13.6313 8.90941 13.657 9.08708 13.7184C9.26474 13.7798 9.42761 13.8756 9.56571 14C9.69083 14.1272 9.78804 14.2775 9.85146 14.442C9.91489 14.6065 9.94323 14.7818 9.93476 14.9571C9.95687 15.3337 9.82421 15.7034 9.56571 15.9857C9.43057 16.1109 9.27067 16.2083 9.09563 16.2721C8.92059 16.3359 8.73403 16.3649 8.54714 16.3571H8.04524V16.3571ZM14.6143 15.4857H13.1824V17.1429H12.1786V12.8571H14.7471V13.6429H13.1824V14.7H14.6143V15.4857V15.4857Z"
            fill={isActive ? 'black' : 'white'}
         />
      </svg>
   );
};

function NavigationMenu() {
   const { pathname } = useRouter();
   //  const history = useRouter();
   return (
      <>
         <StyledNavigationItem href="/">
            <StyledLogoContainer>
               <img src={Logo} />
            </StyledLogoContainer>
         </StyledNavigationItem>
         <StyledNavigationItem href="/search-engine">
            <div className="dp-center-col">
               <SearchEngineIcon isActive={pathname.split('/')[1] === 'search-engine'} />
               <div
                  style={{
                     marginTop: '4px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
               >
                  Search Engine
               </div>
            </div>
         </StyledNavigationItem>
         <StyledNavigationItem href="/scan-pdf">
            <div className="dp-center-col">
               <ScanPdfIcon isActive={pathname.split('/')[1] === 'scan-pdf'} />
               <div
                  style={{
                     marginTop: '4px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
               >
                  Scan Pdf
               </div>
            </div>
         </StyledNavigationItem>
      </>
   );
}

export default NavigationMenu;
