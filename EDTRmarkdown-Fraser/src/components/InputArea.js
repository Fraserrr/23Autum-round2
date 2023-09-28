import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

// 取自 ant-design 组件库，Input输入框-文本域
// 组件自带文本框高度可调节属性

const InputArea = ({ onInputChange }) => {  
    const handleInputChange = (event) => {  
      const value = event.target.value;  
      onInputChange(value); // 将输入的值传递给父组件的回调函数  
    };  
    
    return (  
      <TextArea  
        rows={4}  
        placeholder="尝试输入你的 markdown 吧！"  
        style={{  
          height: '70vh',  
          width: '70vh'  
        }}  
        allowClear  
        onChange={handleInputChange} // 添加 onChange 属性  
      />  
    );  
  };  

export default InputArea;