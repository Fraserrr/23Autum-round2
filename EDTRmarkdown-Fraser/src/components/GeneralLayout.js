import React from 'react';
import { Layout } from 'antd';
import BottomFooter from './BottomFooter';
import TopHeader from './TopHeader';
import MainContent from './MainContent';

// 组件来自 ant-design 组件库，Layout布局-上中下布局
// 该组件为网页主体，分为上中下三部分
// 顶部为顶栏，有logo及标题
// 中间为主体部分，容纳其他组件
// 底部为页脚，包含了一些开发者信息

const GeneralLayout = () => {

  return (
    <Layout className="layout"
      style={{background: '#d6e4ff' // ant-design-geekblue-2
      }}>
      
      <TopHeader/>

      <MainContent/>

      <BottomFooter/>

    </Layout>
  );
};

export default GeneralLayout;