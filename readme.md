<p align="center">
    <img height="250px" src="https://github.com/Jannchie/anichart.js/blob/master/public/image/ANI.png?raw=true"><br/>
</p>

<p align="center">
    <img alt="Code Time" src="https://img.shields.io/endpoint?style=flat-square&url=https://codetime-api.datreks.com/badge/2?logoColor=white%26project=anichart%26recentMS=0%26showProject=false" />
    <img src="https://data.jsdelivr.com/v1/package/npm/anichart/badge">
    <img alt="NPM" src="https://img.shields.io/npm/l/anichart?style=flat-square">
    <img alt="npm" src="https://img.shields.io/npm/v/anichart?style=flat-square">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jannchie/anichart.js?style=flat-square">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/Jannchie/anichart.js?style=flat-square">
    <a href="https://lgtm.com/projects/g/Jannchie/anichart.js/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/Jannchie/anichart.js.svg?style=flat-square&logo=lgtm&logoWidth=18"/></a>
</p>

轻松地制作数据可视化动画视频。

## 示例

### 在线编辑

<p align="center">
    <a href="https://codesandbox.io/s/dreamy-microservice-e8em0?fontsize=14&hidenavigation=1&theme=dark&view=preview">
        <img alt="Edit e8em0" src="https://codesandbox.io/static/img/play-codesandbox.svg">
    </a>
</p>

### 效果展示

[点击前往示例项目](https://jannchie.github.io/anichart.io/en/demo-list)

## 写在前面

**开发过程中我认识到架构上的不合理之处，API正在重构中，仅有测试用例，没有项目文档。请谨慎使用。**

本项目开源、自由、免费。

这是一个Web、Node等环境下，利用TypeScript或者JavaScript编程的动画库。可用于数据可视化、视频动画展示、片头片尾等领域。

目前正在开发中，虽然该有的功能已经实现了，但是没有提供友好的接口，想要做出自己的作品需要阅读源代码并了解JavaScript编程。

目前前端、后端导出视频均使用内置的FFmpeg。能够直接导出MP4。如果觉得wasm版本的FFmpeg速度过慢，也支持导出Png序列，调用本地FFmpeg生成视频。

人机交互友好的网站建设已经在搞了（指建好了仓库），还要较长一段时间才能完成。

本项目需要各位技术人员的技术支持。但如果你只是一个普通的使用者，也能通过赞助的方式支持。你可以通过[爱赞助](https://azz.net/jannchie)利用支付宝或者微信进行支持。也能通过GitHub Sponsor功能支持（需要信用卡一张）。

## 重构进度

为了更加便于维护，正在进行一系列重构操作，重构时API会发生变化。

### 架构

- [x] 逐帧动画创建器
- [x] 渲染器、模型解耦
- [x] 导出器、着色器提取
- [ ] 组件模型
  - [x] 通用模型
  - [x] 矩形模型
  - [x] 文字模型
  - [x] 图片模型
  - [ ] 线条模型
  
### 功能

- [ ] 视频导出
  - [x] 浏览器导出视频
  - [ ] 服务端导出视频
- [ ] 渲染器
  - [ ] 基本渲染器
    - [x] 矩形渲染器
    - [x] 文字渲染器
    - [ ] 线条渲染器
- [ ] 动画器
  - [x] 自定义动画器
  - [ ] 链式调用动画器
    - [x] 基础链式调用动画器
    - [ ] 可选插值器的链式调用
  - [ ] 更酷炫的文字效果动画器
- [ ] 调试器
  - [ ] 当前帧信息显示
  - [ ] 播放进度控制

### 图表

- [ ] 图表通用功能
  - [x] 数据导入
  - [x] 自动着色器
  - [x] 导入图片
  - [x] 文字测量
  - [ ] 封装刻度线标尺
  - [ ] 提取通用图表动画
- [ ] 柱状图
  - [x] 基本功能
    - [x] 柱交换动画实时计算
    - [x] 基本数据插值
  - [ ] 进阶特性
    - [ ] 智能数据插值
    - [ ] 自由扩展组件
- [ ] 曲线图
  - [ ] 基本功能
    - [ ] 曲线绘制
  - [ ] 进阶特性
    - [ ] 效率优化
    - [ ] 标签力导
    - [ ] 智能插值

## 简介

这是一个更好的可视化模板。

相较于它的[前身](https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-js)，主要优势在于：

- 双端制作: 整合了前端和后端的优势。前端（浏览器端）可以便利地进行浏览和调试，后端（服务器端）结合FFmpeg， 可以导出高质量的视频。
- 可编程化：开放接口，允许插入自定义的代码，利用框架计算的数据，基于Canvas Api进行绘图。
- 直出视频：可以直接通过每一帧的图像渲染视频，无需借助任何录屏工具。
- 自动边距：不用再自己指定内边距，导致文字超出范围了。
- 任意比例：能够导出任何分辨率而无需后期处理。
- 高效绘图：采用Canvas而不是Svg，更加节能。
- 帧率可控：逐帧绘图，导出视频而不会掉帧。
- 逐帧调试：提供组件进行逐帧调试和播放。
- 自带插值：提供了更加友好的数据预处理。
- 优化着色：提供了更好的颜色随机算法。

此外，对于柱状图：

- 交换算法：现在的交换不必在关键帧之间卡点了。
- 显示效果：画风变了。

## 安装

### 使用Yarn

```bash
yarn add anichart
```

### 使用Npm

```bash
npm i anichart
```

### 标签导入

```html
<script src="https://cdn.jsdelivr.net/npm/anichart@1.1.12/dist/anichart.min.js"></script>
```

## 用法

### 使用Npm或者Yarn导入

如果使用标签导入可以跳过这一步，如果使用npm或者Yarn需要通过以下代码引入包：

``` js
const anichart = require("anichart");
```

或者

``` js
import * as anichart from "anichart";
```

### 准备数据

以CSV文件为例。

``` csv
name,date,value,channel,other
Jannchie,2020-01-01,1,科技,other
Jannchie,2020-01-03,6,科技,other
Jannchie,2020-01-05,3,科技,other
Jannchie,2020-01-07,-,科技,other
Jannchie,2020-01-09,7,科技,other
Jannchie,2020-01-12,12,科技,other
Cake47,2020-01-03,10,生活,other
Cake47,2020-01-02,5,生活,other
Cake47,2020-01-06,2,生活,other
Cake47,2020-01-09,3,生活,other
Cake47,2020-01-11,4,生活,other
```

### 创建对象

```js
let a = new anichart.Bar();
```

### 载入数据

```js
// 回调语法
b.loadCsv("./data.csv").then(() => {
  b.initCanvas();
  b.readyToDraw();
});
```

```js
// 你也可以使用 async 语法
await a.loadCsv(pathData);
a.initCanvas();
a.readyToDraw();

```

### 播放动画

默认情况下，在浏览器内会有一个类似进度条的组件用于控制播放。

你也可以使用代码控制播放。

```js
// 代码控制
a.play();
```

### 导出视频

内置了ffmpeg进行导出。输出信息会在console中打印。

```js
// 配置导出视频
a.output = true;
```

### 测试

#### Browser环境

使用yarn:

```bash
yarn serve
```

或者npn：

```bash
npm run serve
```

#### Node.js环境

```bash
node --experimental-wasm-threads --experimental-wasm-bulk-memory index.js
```
