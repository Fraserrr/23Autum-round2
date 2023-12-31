# 简单的项目说明
## 功能介绍
* 在左侧编辑区使用 markdown 语法输入内容，将实时渲染在右侧预览区；
* 左侧输入框可调节高度，点击右上角的叉可以清除全部内容；
* 点击预览框右上角 “导出HTML” 按钮，可以将输入的内容转换为 html 格式文件下载到本地，可直接用浏览器打开文件。
## 支持的语法
* 一级到六级标题
* **加粗字体**
* *倾斜字体*
* ***加粗并倾斜字体***
* 无序列表
### 未完全实现的语法
* `代码块：使用时必须每行代码单独用一对``符号来包含，且不能使用成对的尖括号`
* 链接：只能支持\[链接名称](链接地址)的基本形式
* 换行：所有换行都以段落的形式实现，所以行间距较宽
## 补充说明
* 网页框架基于 React，使用 creat-react-app 创建；
* 构成页面的大部分组件来自 ant-design 组件库；
* 项目已通过 yarn build，在 EDTR 文件夹下用浏览器打开 index 即可运行网页；
* 全部组件源代码位于 src/components 文件夹，核心功能在 RightTab.js 文件中实现；
* 仓库中不包含 node_modules，如果想重新通过 React 框架运行，则需重新 install；但由于整个项目全程使用 yarn 构建，所以推荐使用 yarn 替代 npm；
* 另：figma 画的图已导出为 pdf 放在目录下。
