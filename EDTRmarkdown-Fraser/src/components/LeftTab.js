import React from 'react';
import { Tabs } from 'antd';
import InputArea from './InputArea';

const { TabPane } = Tabs;  

// 取自 ant-design 组件库，Tabs标签页组件
// 该组件作为左侧输入框的容器

const LeftTab = ({ onInputChange }) => {  
  
  return (  
    <Tabs defaultActiveKey="1" size="middle"  style={{ width: '70vh' }}>  
      <TabPane tab="编辑区" key="1">  
        <InputArea onInputChange={onInputChange} /> {/* 将回调函数传递给子组件 InputArea */}  
      </TabPane>  
    </Tabs>  
  );  
};  
  
export default LeftTab;  