import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

// 组件来自 ant-design 组件库
// 该组件为网页中间的底部页脚，包含了一些开发者信息

const BottomFooter = () => {
 
  return (
    
      <Footer
        style={{
          textAlign: 'center',
          height: '70px',
          background: '#d6e4ff'  //ant-design-geekblue-2
        }}
      >
        Creat by @Fraserrr 
        for QSCTech 2023 Autum-Round-Two<br/>
        Surpported by Ant Design 5.9.2
      </Footer>
    
  );
};

export default BottomFooter;