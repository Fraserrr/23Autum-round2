import React, { useState } from 'react';  
import { Layout, Col, Row } from 'antd';
import LeftTab from './LeftTab';
import RightTab from './RightTab';
const { Content } = Layout;

// 组件来自 ant-design 组件库
// 该组件为网页主体容器，用于布局编辑框、渲染框及下载按钮

function Contenter() {  
  const [inputValue, setInputValue] = useState('');  
  
  const handleInputChange = (value) => {  
    setInputValue(value);  
  };  
  
  return (  
    <Content  
      style={{  
        background: '#f0f5ff',  // ant-design-geekblue-1
        height: '84vh',  
        margin: '0px 16px 0px',  
        justifyContent: 'space-between', // 将子元素水平分布  
      }}  
    >  
      <Row>  
        <Col span={2}></Col>  
        <Col span={11}>  
          <LeftTab onInputChange={handleInputChange} /> {/* 将回调函数传递给子组件 LeftTab */}  
        </Col>  
        <Col span={11}>  
          <RightTab inputValue={inputValue} /> {/* 将 inputValue 作为属性传递给 RightTab */}   
        </Col>  
        <Col span={0}></Col>  
      </Row>  
      {/* Row 来自ant-design组件库，栅格组件，将屏幕横向划分为24个单位 */}

    </Content>  
  );  
}  
  
export default Contenter;  