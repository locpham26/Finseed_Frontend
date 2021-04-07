import React from 'react';
import { Layout } from 'antd';
import { useTheme } from 'styled-components';
import NavigationMenu from './NavigationMenu';

const { Sider } = Layout;

function TheSideBar(props) {
   const theme = useTheme();
   return (
      <Sider
         width="60"
         style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            backgroundColor: `${theme.dark.grayscale[1]}`
         }}
      >
         <NavigationMenu />
      </Sider>
   );
}

export default TheSideBar;
