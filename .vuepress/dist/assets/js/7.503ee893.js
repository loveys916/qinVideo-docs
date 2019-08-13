(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(a,v,_){"use strict";_.r(v);var t=_(38),r=Object(t.a)({},function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"模块说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块说明")]),a._v(" "),_("p",[a._v("主要是对各个模块进行详细的讲解说明, 方便快速了解功能;")]),a._v(" "),_("h2",{attrs:{id:"视频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 视频")]),a._v(" "),_("p",[a._v("番剧主要是用来上架一些动画的, 当然后台里叫视频, 理论上可以不限于番剧的;")]),a._v(" "),_("h3",{attrs:{id:"分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类","aria-hidden":"true"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),_("ul",[_("li",[a._v("分类的话目前有地区, 年份以及类型三大块, 地区和年份这个无所谓, 主要是筛选的时候会用到, 一般不用太过留心;")]),a._v(" "),_("li",[a._v("而类型这个就比较重要了, 3.0 版是分成六大类型的, 但是可能无法完全概括, 所以这版可以自由设定, 但还是推荐分成大概六类会好一点;")]),a._v(" "),_("li",[a._v("分类支持多层嵌套, 番剧只能勾选一个分类, 根据分类搜索的话会将子节点下的番剧都搜索出来, 所以层级不复杂的话就不要嵌套了;")])]),a._v(" "),_("h3",{attrs:{id:"批量编辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#批量编辑","aria-hidden":"true"}},[a._v("#")]),a._v(" 批量编辑")]),a._v(" "),_("ul",[_("li",[a._v("分类这些不勾选的话代表不修改, 而状态是一定会修改的, 所以要注意;")]),a._v(" "),_("li",[a._v("批量删除,全部删除都会有弹窗提示, 表格里面的单项删除则不会有提示;")])]),a._v(" "),_("h3",{attrs:{id:"详情编辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#详情编辑","aria-hidden":"true"}},[a._v("#")]),a._v(" 详情编辑")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("标题")]),a._v(": 展示的标题;")]),a._v(" "),_("li",[_("strong",[a._v("别名")]),a._v(": 这个是唯一索引, 所以最好使用特征性强一点的, 数据统计中的评论以及弹幕都是用正则筛选这一名下的, 为了避免文章这些相互冲突, 建议别名形式为:av00001, 最好是纯英文+数字, 中文不保证会出什么问题, 前端也是用这个来展示链接的, 怕被人扫就弄个随机的")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 只有审核通过的才会展示出来")]),a._v(" "),_("li",[_("strong",[a._v("连载")]),a._v(": 前台会展示连载中的番剧, 不用自己手动勾选")]),a._v(" "),_("li",[_("strong",[a._v("评分")]),a._v(": 这个可以参考豆瓣或者啥的, 暂时不支持用户打分, 感觉没啥必要, 评分系统有点难做")]),a._v(" "),_("li",[_("strong",[a._v("更新时间")]),a._v(": 载中的才有必要, 完结的就不用弄了, 默认就行")]),a._v(" "),_("li",[_("strong",[a._v("等级限定")]),a._v(": 有用户等级高于或等于此等级的才会显示播放链接, 但是搜索还是能搜索出来的, 所以想要完全屏蔽是不行的")]),a._v(" "),_("li",[_("strong",[a._v("播放类型")]),a._v(": 直链指的是能够在 dplayer 直接播放的格式, 包括 mp4, 而 flv, m3u8 则不支持, 解析则是第三方的, 目前做了正则匹配")]),a._v(" "),_("li",[_("strong",[a._v("下载")]),a._v(": 主要是在页面上展示一个下载的 button, 这个是所有人都能看的, 没有等级限定, 至于以后会不会做限定, 暂时不知道")]),a._v(" "),_("li",[_("strong",[a._v("链接前缀")]),a._v(": 这个是针对直链的, 用自己的服务器存储视频的话会有很多重复的结构, 所以这个主要是减少反复填写, 格式的话就是 /av00001, 前面带斜杠, 后面不带")]),a._v(" "),_("li",[_("strong",[a._v("横向图")]),a._v(": 一般是用来做一些宣传的, 比如说轮播, 首页置顶推荐, 这些都会展示横向图, 把这些需要展示的勾选到一个分类即可")]),a._v(" "),_("li",[_("strong",[a._v("竖向图")]),a._v(": 正常的显示图片, 基本上必填")]),a._v(" "),_("li",[_("strong",[a._v("标签")]),a._v(": 以英文逗号分割, 然后点击按钮就能批量添加了, 这个主要是方便索引")])]),a._v(" "),_("h3",{attrs:{id:"剧集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#剧集","aria-hidden":"true"}},[a._v("#")]),a._v(" 剧集")]),a._v(" "),_("ul",[_("li",[a._v("为了方便起见, 后台会将每一集生成一个 ID, 比如第一季第一集则是 av00001S01E01, 这样评论以及弹幕都会用此 ID 来定位, ID 只跟剧集的数量排位有关, 删除了这集则会顺位到下一集, 并不惟一")]),a._v(" "),_("li",[a._v("B 站弹幕 ID 这个参考 dplayer 的设定")]),a._v(" "),_("li",[a._v("剧集链接这个我们需要输入季数加剧集的完整路径, 比如说 /S01/01.mp4")]),a._v(" "),_("li",[a._v("里面的顺序就是实际的展示顺序, 不要弄乱了, 至于为啥不能拖拽中间添加等, 暂时没做功能, 太费事了, 以后看能不能弄")])]),a._v(" "),_("h3",{attrs:{id:"数据统计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据统计","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据统计")]),a._v(" "),_("ul",[_("li",[a._v("默认展示最近一个星期的数据")]),a._v(" "),_("li",[a._v("里面的数据仅供参考, 不一定十分的准, 但是大致是没啥问题的")])]),a._v(" "),_("h3",{attrs:{id:"评论弹幕"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#评论弹幕","aria-hidden":"true"}},[a._v("#")]),a._v(" 评论弹幕")]),a._v(" "),_("ul",[_("li",[a._v("这个其实所属的是每一集, 所以这里是根据番剧的别名正则匹配的, 评论弹幕的 ID 里面包含别名则会算到里面")]),a._v(" "),_("li",[a._v("全部删除则是会删除该番剧下面搜索出的所有评论弹幕, 一般不会用到吧")])]),a._v(" "),_("h2",{attrs:{id:"漫画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#漫画","aria-hidden":"true"}},[a._v("#")]),a._v(" 漫画")]),a._v(" "),_("p",[a._v("针对漫画的格式, 跟漫画其实比较类似")]),a._v(" "),_("h3",{attrs:{id:"分类-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),_("ul",[_("li",[a._v("分类的话可以自由设定")]),a._v(" "),_("li",[a._v("分类支持多层嵌套, 只能勾选一个分类, 根据分类搜索的话会将子节点下的漫画都搜索出来, 所以层级不复杂的话就不要嵌套了")])]),a._v(" "),_("h3",{attrs:{id:"批量编辑-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#批量编辑-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 批量编辑")]),a._v(" "),_("ul",[_("li",[a._v("分类这些不勾选的话代表不修改, 而状态是一定会修改的, 所以要注意")]),a._v(" "),_("li",[a._v("批量删除,全部删除都会有弹窗提示, 表格里面的单项删除则不会有提示")])]),a._v(" "),_("h3",{attrs:{id:"详情编辑-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#详情编辑-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 详情编辑")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("标题")]),a._v(": 展示的标题")]),a._v(" "),_("li",[_("strong",[a._v("别名")]),a._v(": 这个是唯一索引, 所以最好使用特征性强一点的, 为了避免文章这些相互冲突, 建议别名形式为:cv00001, 最好是纯英文+数字, 中文不保证会出什么问题, 前端也是用这个来展示链接的, 怕被人扫就弄个随机的")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 只有审核通过的才会展示出来")]),a._v(" "),_("li",[_("strong",[a._v("连载")]),a._v(": 前台会展示连载中的漫画, 不用自己手动勾选")]),a._v(" "),_("li",[_("strong",[a._v("评分")]),a._v(": 这个可以参考豆瓣或者啥的, 暂时不支持用户打分, 感觉没啥必要, 评分系统有点难做")]),a._v(" "),_("li",[_("strong",[a._v("更新时间")]),a._v(": 连载中的才有必要, 完结的就不用弄了, 默认就行")]),a._v(" "),_("li",[_("strong",[a._v("等级限定")]),a._v(": 只有用户等级高于或等于此等级的才会显示播放链接, 但是搜索还是能搜索出来的, 所以想要完全屏蔽是不行的")]),a._v(" "),_("li",[_("strong",[a._v("下载")]),a._v(": 主要是在页面上展示一个下载的 button, 这个是所有人都能看的, 没有等级限定, 至于以后会不会做限定, 暂时不知道")]),a._v(" "),_("li",[_("strong",[a._v("链接前缀")]),a._v(": 这个是针对直链的, 用自己的服务器存储视频的话会有很多重复的结构, 所以这个主要是减少反复填写, 格式的话就是 /av00001, 前面带斜杠, 后面不带")]),a._v(" "),_("li",[_("strong",[a._v("横向图")]),a._v(": 一般是用来做一些宣传的, 比如说轮播, 首页置顶推荐, 这些都会展示横向图, 把这些需要展示的勾选到一个分类即可")]),a._v(" "),_("li",[_("strong",[a._v("竖向图")]),a._v(": 正常的显示图片, 基本上必填")]),a._v(" "),_("li",[_("strong",[a._v("标签")]),a._v(": 以英文逗号分割, 然后点击按钮就能批量添加了, 这个主要是方便索引")])]),a._v(" "),_("h3",{attrs:{id:"剧集-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#剧集-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 剧集")]),a._v(" "),_("ul",[_("li",[a._v("为了方便起见, 后台会将每一集生成一个 ID, 比如第一集则是 cv00001E01, ID 只跟剧集的数量排位有关, 删除了这集则会顺位到下一集, 并不惟一")]),a._v(" "),_("li",[a._v("文件夹名称这个我们需要输入漫画图片存储的文件夹, 里面的图片名是按照顺序排好就行, 不一定非要数字排序")]),a._v(" "),_("li",[a._v("里面的顺序就是实际的展示顺序, 不要弄乱了, 至于为啥不能拖拽中间添加等, 暂时没做功能, 太费事了, 以后看能不能弄")])]),a._v(" "),_("h3",{attrs:{id:"数据统计-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据统计-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据统计")]),a._v(" "),_("ul",[_("li",[a._v("默认展示最近一个星期的数据")]),a._v(" "),_("li",[a._v("里面的数据仅供参考, 不一定十分的准, 但是大致是没啥问题的")])]),a._v(" "),_("h3",{attrs:{id:"评论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#评论","aria-hidden":"true"}},[a._v("#")]),a._v(" 评论")]),a._v(" "),_("ul",[_("li",[a._v("这个其实所属的是每一集, 所以这里是根据漫画的别名正则匹配的, 评论的 ID 里面包含别名则会算到里面")]),a._v(" "),_("li",[a._v("全部删除则是会删除该蛮王下面搜索出的所有评论")])]),a._v(" "),_("h2",{attrs:{id:"文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文章","aria-hidden":"true"}},[a._v("#")]),a._v(" 文章")]),a._v(" "),_("p",[a._v("文章支持 markdown 编辑器, 可上传图片, 所以前后台编辑没啥太大的区别, 一般放点资讯或者公告就行, 想要做成那种登录下载资源的也行, 毕竟有等级限定")]),a._v(" "),_("h3",{attrs:{id:"分类-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),_("ul",[_("li",[a._v("分类的话可以自由设定")]),a._v(" "),_("li",[a._v("分类支持多层嵌套, 只能勾选一个分类, 根据分类搜索的话会将子节点下的文章都搜索出来")])]),a._v(" "),_("h3",{attrs:{id:"批量编辑-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#批量编辑-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 批量编辑")]),a._v(" "),_("ul",[_("li",[a._v("分类这些不勾选的话代表不修改, 而状态是一定会修改的, 所以要注意")]),a._v(" "),_("li",[a._v("批量删除,全部删除都会有弹窗提示, 表格里面的单项删除则不会有提示")])]),a._v(" "),_("h3",{attrs:{id:"详情编辑-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#详情编辑-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 详情编辑")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("等级限定")]),a._v(": 只有用户等级高于或等于此等级的才会显示内容, 普通用户只能看到标题简介")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 只有审核通过的才会展示出来")]),a._v(" "),_("li",[_("strong",[a._v("封面")]),a._v(": 正常的显示图片, 一般都是横向图居多")]),a._v(" "),_("li",[_("strong",[a._v("标签")]),a._v(": 以英文逗号分割, 然后点击按钮就能批量添加了, 这个主要是方便索引")]),a._v(" "),_("li",[_("strong",[a._v("标题")]),a._v(": 展示的标题")]),a._v(" "),_("li",[_("strong",[a._v("别名")]),a._v(": 这个是唯一索引, 所以最好使用特征性强一点的, 建议别名形式为:pv00001, 最好是纯英文+数字, 中文不保证会出什么问题, 前端也是用这个来展示链接的, 怕被人扫就弄个随机的")]),a._v(" "),_("li",[_("strong",[a._v("简介")]),a._v(": 手动填写一下, 主要是外面展示用的一部分信息")]),a._v(" "),_("li",[_("strong",[a._v("内容")]),a._v(": 文章主体部分")])]),a._v(" "),_("h3",{attrs:{id:"数据统计-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据统计-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据统计")]),a._v(" "),_("ul",[_("li",[a._v("默认展示最近一个星期的数据")]),a._v(" "),_("li",[a._v("里面的数据仅供参考, 不一定十分的准, 但是大致是没啥问题的")])]),a._v(" "),_("h3",{attrs:{id:"评论-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#评论-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 评论")]),a._v(" "),_("ul",[_("li",[a._v("搜索的话是搜索评论内容")]),a._v(" "),_("li",[a._v("全部删除则是会删除该文章下面搜索出的所有评论")])]),a._v(" "),_("h2",{attrs:{id:"用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户")]),a._v(" "),_("p",[a._v("用户这块比较复杂, 需要注意一下, 管理员拥有最大的权限, 同时也是唯一能够编辑的角色, 最好不要设定多个管理员, 因为是可以相互删除的")]),a._v(" "),_("h3",{attrs:{id:"基本信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本信息")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("等级")]),a._v(": 用户的实际等级, 0 级为游客, 也就是未注册登录用户,1 级为注册用户, 100 集为管理员, 中间的那些就自由发挥了")]),a._v(" "),_("li",[_("strong",[a._v("积分")]),a._v(": 积分主要是根据用户评论等添加一定的积分, 目前的话暂未完成")]),a._v(" "),_("li",[_("strong",[a._v("金钱")]),a._v(": 充值的")]),a._v(" "),_("li",[_("strong",[a._v("会员剩余")]),a._v(": 这是用来添加会员有效期的, 单位是秒, 表示过了这段时间后会将等级降为 1")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 待验证则是表示需要用邮箱验证, 已删除表示用户提出删除账户的请求")])]),a._v(" "),_("h3",{attrs:{id:"批量编辑-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#批量编辑-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 批量编辑")]),a._v(" "),_("ul",[_("li",[a._v("批量编辑默认会忽略等级 100 的, 也就是管理员, 但是单独编辑的话则不会忽略")]),a._v(" "),_("li",[a._v("分类这些不勾选的话代表不修改, 而状态是一定会修改的, 所以要注意")]),a._v(" "),_("li",[a._v("批量删除,全部删除都会有弹窗提示, 表格里面的单项删除则不会有提示")])]),a._v(" "),_("h3",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),_("ul",[_("li",[a._v("里面罗列了该用户的所有评论等等, 便于直观化")])]),a._v(" "),_("h2",{attrs:{id:"商品"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#商品","aria-hidden":"true"}},[a._v("#")]),a._v(" 商品")]),a._v(" "),_("p",[a._v("商品主要售卖的是等级以及会员剩余时间, 所以想要卖钱的话就先设定一个等级系统, 然后根据等级来发布相应的番剧文章等等")]),a._v(" "),_("h3",{attrs:{id:"商品列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#商品列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 商品列表")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("提升等级")]),a._v(": 用户会提升到该等级, 而不是直接添加, 即使用户 99 级, 购买了一个 1 级套餐依旧会变成 1 级")]),a._v(" "),_("li",[_("strong",[a._v("有效期")]),a._v(": 有效期的话则是直接添加, 积分同理")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 上架的才会展示出来")])]),a._v(" "),_("h3",{attrs:{id:"订单列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#订单列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 订单列表")]),a._v(" "),_("ul",[_("li",[a._v("主要是用来查询订单记录, 每天看看, 有异常的话也好有个记录")]),a._v(" "),_("li",[a._v("用户投诉的话就发个订单号看看有没有添加上去")])]),a._v(" "),_("h3",{attrs:{id:"激活码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#激活码","aria-hidden":"true"}},[a._v("#")]),a._v(" 激活码")]),a._v(" "),_("ul",[_("li",[a._v("激活码这个可用于充值金额, 到时候生成了然后拿去发卡平台卖就是")])]),a._v(" "),_("h2",{attrs:{id:"评论-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#评论-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 评论")]),a._v(" "),_("p",[a._v("此处则集合所有的评论,并不区分层级, 因为考虑到评论深层嵌套的情况并不算多, 没必要单独进行处理")]),a._v(" "),_("h3",{attrs:{id:"列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 列表")]),a._v(" "),_("ul",[_("li",[_("strong",[a._v("标题")]),a._v(": 标题则是根据不同的地方产生的给个分类, 番剧漫画以及文章都会给出标题, 点击即可跳转详情页")]),a._v(" "),_("li",[_("strong",[a._v("分类")]),a._v(": 番剧, 漫画, 文章, 讨论, 评论这几种")]),a._v(" "),_("li",[_("strong",[a._v("图片与视频")]),a._v(": 这两类视具体的前端展示为主, 功能有, 但是用不用则是要考虑考虑")]),a._v(" "),_("li",[_("strong",[a._v("状态")]),a._v(": 评论要审核这个可能不太人性化, 准备在后台给个设置项, 但是这样有点麻烦, 所以考虑做不做")])]),a._v(" "),_("h2",{attrs:{id:"弹幕"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弹幕","aria-hidden":"true"}},[a._v("#")]),a._v(" 弹幕")]),a._v(" "),_("p",[a._v("弹幕用的是 dplayer 的格式, 理论上来说可以兼容的, 这样省去制作弹幕接口了")]),a._v(" "),_("h3",{attrs:{id:"列表-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 列表")]),a._v(" "),_("ul",[_("li",[a._v("目前功能的话则是能够删除, 至于筛选那些无所谓了, 排下序然后批量编辑就行")]),a._v(" "),_("li",[a._v("没有做登录限定, 任何用户都能发送弹幕, 虽然限制登录是趋势, 但是考虑到很多站用户比较少, 所以暂时不弄了")])]),a._v(" "),_("h2",{attrs:{id:"举报"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#举报","aria-hidden":"true"}},[a._v("#")]),a._v(" 举报")]),a._v(" "),_("p",[a._v("这个功能其实主要是可以让用户实时看到自己的举报进度以及回复内容")]),a._v(" "),_("h3",{attrs:{id:"列表-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 列表")]),a._v(" "),_("ul",[_("li",[a._v("举报对象显示已删除则说明没有找到, 可以直接删了")]),a._v(" "),_("li",[a._v("用手也可以发送图片来让你知道详情")]),a._v(" "),_("li",[a._v("状态的话自己调整,回复完不要删了, 这里的东西最好不要删, 留个记录就行")])]),a._v(" "),_("h2",{attrs:{id:"图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 图片")]),a._v(" "),_("p",[a._v("这个功能主要是管理用户上传的图片, 会遍历文件夹内的所有图片然后展示, 删除可减少服务器存储空间")]),a._v(" "),_("h3",{attrs:{id:"列表-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 列表")]),a._v(" "),_("ul",[_("li",[a._v("里面的分类主要是后台设定的, 相应上传的图片都会到这里面来, 而且你也不知道用户会不会正在使用这张图片, 所以一般不要删除, 除非是一些涉黄的或者严重影响观感的")])]),a._v(" "),_("h2",{attrs:{id:"设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置")]),a._v(" "),_("p",[a._v("后台的设置项")]),a._v(" "),_("h3",{attrs:{id:"基本信息-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本信息-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本信息")]),a._v(" "),_("ul",[_("li",[a._v("这些都是基本的一些信息,简单填填就行")])]),a._v(" "),_("h3",{attrs:{id:"图片设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 图片设置")]),a._v(" "),_("ul",[_("li",[a._v("主要是一些默认图片的展示, 需要设置")])]),a._v(" "),_("h3",{attrs:{id:"界面定制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#界面定制","aria-hidden":"true"}},[a._v("#")]),a._v(" 界面定制")]),a._v(" "),_("ul",[_("li",[a._v("暂时功能不多, 预计后续开放更多的功能")])]),a._v(" "),_("h3",{attrs:{id:"播放设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#播放设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 播放设置")]),a._v(" "),_("ul",[_("li",[a._v("等级限定则是表示不同的等级有着不同的播放来源, 功能很实用, 用不到的话则填写 0 级")]),a._v(" "),_("li",[a._v("用户等级大于或等于该等级时才会应用, 密钥和过期时间则是配合 nginx 的 secure link 的, 简单但也比较实用")]),a._v(" "),_("li",[a._v("如果视频端没有设置密钥或者过期时间, 那这些都不会生效")]),a._v(" "),_("li",[a._v("解析的话则是根据正则匹配的, 多个正则命中时,会自动随机匹配一个")])]),a._v(" "),_("h3",{attrs:{id:"邮箱设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#邮箱设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 邮箱设置")]),a._v(" "),_("ul",[_("li",[a._v("smtp 以及 sendgrid, 其他的方式暂不支持")])])])},[],!1,null,null,null);v.default=r.exports}}]);