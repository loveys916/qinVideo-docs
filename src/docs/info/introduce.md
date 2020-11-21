## 系统简介

本系统是一套基于 nodejs + mongodb 的前后端分离 CMS 管理系统, 主要的技术栈为:egg.js + mongoose + redis;

功能模块主要包括番剧, 漫画, 文章, 博客四大类,
同时带有评论, 用户, 商品, 激活码, 弹幕等功能, 此外对苹果 CMS 的接口做了兼容, 可以批量导入资源站的内容,实现快速建站;

额外的项目有安卓 APP 客户端, 目前只支持视频以及博客文章三类, 暂不支持漫画功能;

### 依赖

- **nodejs**: 8.0 以上版本
- **mongodb**: 3.0 以上的版本
- **redis**:随意
- **nginx**: 随意

### 版本

目前的版本为 **2.0**

## 整体设计

**后台**: 基础为 egg.js, 数据库是 mongodb, 缓存使用的是 redis, 基本上能够满足大部分的需求, 优化了数据库结构, 索引的速度基本上在 200ms 以内, 对于首页列表等高频 api 均作了缓存处理, 具体的性能需要网站上线再详细的测试;

**web 端**: 为了最大程度的满足不同的需求, 前端的变动较大, 主要分为以下几个模块, 可以单独更新, 避免耦合在一起, 想要新增某个模块可以自己开发然后放上去即可,定制化能力比较高;

```js
|---default // 默认的首页
|---web     // 服务端渲染的首页, 可以直出html页面
|---animate // web端视频
|---comic   // web端漫画
|---post    // web端文章
|---search  // web端搜索
|---user    // web端用户中心
|---mobile  // 移动web端
|---backend // 后台管理面板
```

**服务端渲染**: 服务端渲染采用的是 next.js, 只制作了首页, 服务端渲染与现有的开发趋势相违背, 后续也不会继续开发其他页面, 不过对于初次展现的效果比较好;

**web PC 端**: PC 端分了五个模块, 可以减少整体的更新影响, 而且可以单独更新定制, 后续会逐渐推出定制化主题, 可以有更多的选择, 缺点就是首次进入的时候需要加载, 体验上差一点;

**web 移动端**: 移动端依旧是一体性的, 但是由于移动 web 端的限制太大, 体验上不会很好, 后续将不会花太多精力在这上面;

**安卓客户端**: React Native 的开发实际上与 web 端十分类似, 但是体验上会好很多, 会持续迭代, 同时也会评估是否有必要迁移到 flutter;

## 使用交流

对于 BUG 一类的问题, 请在直接在 github 上面提 issue, 看到了就会处理, 不要私聊;<br/>
使用上的问题请加 QQ 群:**1007111688**, 不保证一定解答, 仅仅提供一个交流的地方

## 更新记录

- **2020.06.05** &nbsp;&nbsp;&nbsp;&nbsp; v2.2.0 采用中间表结构, 评论数等统计在夜间使用定时任务的形式运行;
- **2020.05.05** &nbsp;&nbsp;&nbsp;&nbsp; v2.1.0 对缓存进行优化, 减少资源占用, 新增弹幕审核等功能;
- **2020.04.05** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.8 采集的番剧在保存时会自动创建分类, 提高某些耗时接口的缓存为 1 天;
- **2020.03.08** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.7 一些使用 BUG 的修复;
- **2020.02.28** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.6 批量新增剧集, 支持苹果 CMS 的格式;
- **2020.02.20** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.5 字幕以及清晰度的切换;
- **2020.02.04** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.4 用户删除之后的处理;
- **2020.02.04** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.3 首页渲染等 BUG 修复;
- **2020.02.02** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.2 关于我们, 播放等 BUG 修复;
- **2020.01.29** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.1 新增前端用户评分的功能;
- **2020.01.21** &nbsp;&nbsp;&nbsp;&nbsp; v2.0.0 正式版发布;
- **2019.10.01** &nbsp;&nbsp;&nbsp;&nbsp; v1.0.0 正式版发布;