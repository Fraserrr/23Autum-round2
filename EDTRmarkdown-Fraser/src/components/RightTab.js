import React, { useEffect, useState } from 'react';  
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { Card } from 'antd';

const { TabPane } = Tabs;

// 取自 ant-design 组件库，Tabs标签页组件
// 该组件作为右侧 markdown 格式渲染区的容器

const RightTab = ({ inputValue }) => {  

  // useState 创建变量，并可调用 preOutput 更新
  const [outputString, preOutput] = useState('');  
  
  // 使用 useEffect，在 inputValue 发生变化时即可重新渲染组件
  useEffect(() => {  
    const htmlString = changeHtml(inputValue);  
    preOutput(htmlString);  
  }, [inputValue]);  
  
  // 字符串处理脚本，将用户输入的 inputValue 处理为 html 格式
  // 正则表达式从 runoob 上现学现用
  function changeHtml(value){  
    let html = value;
    // 标题 
    html = html.replace(/######\s+(.*)/g, '<h6>$1</h6>');
    html = html.replace(/#####\s+(.*)/g, '<h5>$1</h5>'); 
    html = html.replace(/####\s+(.*)/g, '<h4>$1</h4>');
    html = html.replace(/###\s+(.*)/g, '<h3>$1</h3>');  
    html = html.replace(/##\s+(.*)/g, '<h2>$1</h2>');  
    html = html.replace(/#\s+(.*)/g, '<h1>$1</h1>');  
    // 字体加粗并倾斜
    html = html.replace(/\*\*\*(.*)\*\*\*/g, '<b><i>$1</i></b>');
    // 字体加粗
    html = html.replace(/\*\*(.*)\*\*/g, '<b>$1</b>');
    // 字体倾斜
    html = html.replace(/\*(.*)\*/g, '<i>$1</i>');
    // 无序列表  
    html = html.replace(/\*\s+(.*)/g, '<ul><li>$1</li></ul>');  
    // 代码
    html = html.replace(/`(.*)`/g, '<code>$1</code>');
    // 链接
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');  
    // 段落  
    html = html.replace(/(.*)(?:\r\n|\r|\n)/g, '<p>$1</p>');

    return html;  
  };  
  
  // 设置下载按钮
  const operations = (  
    <Button type="primary" icon={<DownloadOutlined />} size="middle"
     onClick={downloadString}>  
      导出HTML  
    </Button>  
  );  

  function downloadString(){
    const loadString = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>markdown 示例-EDTR</title>
    </head>
    <body>
        ${outputString}
    </body>
    </html>
    `;
    
    // 保存文档到本地的操作来自 chatGPT，文件名引入时间的部分为自己添加
    const element = document.createElement('a');  // 创建一个 `<a>` 元素
    const file = new Blob([loadString], { type: 'text/html' });  // 使用 `Blob` 对象将字符串 `loadString` 转换为文件
    element.href = URL.createObjectURL(file);  // 设置 `<a>` 元素的 `href` 属性为文件的 URL
    let downTime = Date();
    downTime = downTime.replace(/\s/g, '-');
    downTime = downTime.slice(4,23);
    element.download = `markdown_${downTime}.html`;  //保存文件名，引入时间避免重复
    element.style.display = 'none'; // 隐藏该元素
    document.body.appendChild(element);  // 将 `<a>` 元素添加到页面之前，先将其添加到 `<body>` 元素中
    element.click();  //模拟用户点击该元素，触发文件下载
    document.body.removeChild(element);  
  }
  
  return (  
    <Tabs  
      defaultActiveKey="1"  
      size="middle"  
      tabBarExtraContent={operations}  
      style={{ width: '65vh' }}  
    >  
      <TabPane tab="markdown预览" key="1">  
        <Card  
          style={{  
            height: '70vh',  
            width: '70vh',
            textAlign: 'left',  
          }}  
        >  

          <div dangerouslySetInnerHTML={{ __html: outputString }}></div> 
          {/* 以上函数调用方法来自chatGPT: React默认会将文本内容进行转义，以防止XSS（跨站脚本攻击）等安全问题。
          这意味着HTML标记会被当作普通文本进行显示，而不会被解析为实际的HTML元素。
          为了正常渲染包含HTML标记的文本，您需要使用`dangerouslySetInnerHTML`或手动解析为React元素的方法。
          这些方法允许您显式地告诉React将文本内容作为HTML进行解析和渲染。 */}
        </Card>  
      </TabPane>  
    </Tabs>  
  );  
};  

export default RightTab;