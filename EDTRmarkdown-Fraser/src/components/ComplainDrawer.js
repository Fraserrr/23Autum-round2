import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;

// 取自 ant-design 组件库，Drawer抽屉组件
// 点击按钮可展开内容，用作使用说明

const ComplainDrawer = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" 
              ghost
              defaultGhostColor = '#ffadd2'
              size='middle'
              color='#f0f5ff'
              onClick={showDrawer}
      >
        说明
      </Button>
      <Drawer 
      size={size}

      title="简单的使用说明" placement="right" onClose={onClose} open={open}>
        <div>
          <h2>功能介绍</h2>
          <ul>
            <li>在左侧编辑区使用 markdown 语法输入内容，将实时渲染在右侧预览区；</li>
            <li>左侧输入框可调节高度，点击右上角的叉可以清除全部内容；</li>
            <li>点击预览框右上角 “导出HTML” 按钮，可以将输入的内容转换为 html 格式文件下载到本地，可直接用浏览器打开文件。</li>
          </ul>
          <Divider/>
          <h2>支持的语法</h2>
          <ul>
            <li>一级到六级标题</li>
            <li><b>加粗字体</b></li>
            <li><i>倾斜字体</i></li>
            <li><b><i>加粗并倾斜字体</i></b></li>
            <li>无序列表</li>
          </ul>
          <h3>未完全实现的语法</h3>
          <ul>
            <li><code>代码块：使用时必须每行代码单独用一对``符号来包含,且不能使用成对的尖括号</code></li>
            <li>链接：只能支持 [链接名称](链接地址) 的基本格式</li>
            <li>换行：所有换行都以段落的形式实现，所以行间距较宽</li>
          </ul>

        </div>
        <Divider/>
        <div>
          <h2>补充说明</h2>
          <p>项目时间仓促，恰逢投稿前最后时段叠加校运会前备赛周期，
            忙于实验室和田径场，许多功能来不及实现。<br></br>
            这个网页就放个半成品框架吧，以后想起来说不定会继续开发。
          </p>
        </div>
        <Paragraph 
        copyable={{ text: 'https://github.com/Fraserrr/23Autum-round2', 
                    tooltips: ['点击复制链接', '复制成功！']}}>
            点击右侧按钮复制 github 仓库地址</Paragraph>
      </Drawer>
    </>
  );
};
export default ComplainDrawer;