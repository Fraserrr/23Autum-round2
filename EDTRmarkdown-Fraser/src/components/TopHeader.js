import React from 'react';
import { Layout } from 'antd';
import logo from './images/Icon.svg'
import ComplainDrawer from './ComplainDrawer';
const { Header } = Layout;

// 组件来自 ant-design 组件库
// 该组件为网页中间的顶部栏，包含logo及标题

const TopHeader = () => {

  return (
    
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '48px',
          background: '#91caff', 
          margin: '0px 16px 0px',  
          justifyContent: 'space-between', // 将子元素水平分布
        }}
      >
       <div style={{ display: 'flex', alignItems: 'center' }}>   
        <span>&nbsp;</span>
          <img src={logo} alt="Logo" />
          <h1 style={{ lineHeight: '48px', margin: 0, color: '#001529' }}>
            &nbsp;&nbsp;&nbsp;markdown 简易编辑器</h1>  
        </div>
          <ComplainDrawer/>
      </Header>

  );
};

export default TopHeader;