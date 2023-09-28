import React from 'react';
import { Layout } from 'antd';
import Contenter from './Contenter';
const { Content } = Layout;

// 组件来自 ant-design 组件库
// 该组件为网页中间的主体部分，存放其他组件

const MainContent = () => {

  return (

      <Content
        style={{
          height: '84vh',
          padding: '0',
          background: '#d6e4ff' // ant-design-geekblue-2
        }}
      >
        <Contenter/>

      </Content>

  );
};

export default MainContent;