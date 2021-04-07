import React from 'react';
import { Layout } from 'antd';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import Logo from 'images/f.svg';
import IndexList from './IndexList';
import { LoginButton, StyledLogoContainer } from './BaseComponents.styles';

const { Header } = Layout;

function TheHeader() {
   const theme = useTheme();
   const history = useRouter();
   return (
      <Header
         className="dp-space-bw"
         style={{
            position: 'fixed',
            top: 0,
            height: '50px',
            width: 'calc(100% - 60px)',
            // borderBottom: "1px solid gray",
            backgroundColor: `${theme.dark.grayscale[1]}`,
            padding: '0px 20px 0px 0px',
            zIndex: 3
         }}
      >
         <div style={{ display: 'flex' }}>
            <StyledLogoContainer onClick={() => history.push('/')}>
               <img src={Logo} />
            </StyledLogoContainer>
            <IndexList />
         </div>

         <LoginButton className="dp-center">Đăng nhập</LoginButton>
      </Header>
   );
}

export default TheHeader;
