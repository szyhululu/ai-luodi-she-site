<title>AI编程蓝皮书2.0</title>

大家好，我是AI产品黄叔，目前给两家大厂做AI产品顾问，在使用Cursor和Windsurf（这两个都是AI编程的软件）开发产品后，意识到这才是创造者的天堂，最近举办了多场线下AI编程培训，根据学员的反馈有了这份手册，我会在本手册里持续更新，不断把更多的技巧，思考分享出来，希望能够帮助想要创造的你走进这个天堂！**如果你觉得有帮助，欢迎分享给你的朋友。**



<callout emoji="🏝️">
特别感谢 **@Orange.ai** 和 **@歸藏** 两位老师对AI编程蓝皮书的支持与分享。
你们的助力让更多渴望创造的朋友能够接触到AI编程的魅力。
（如果更多的朋友也愿意推广/参与优化，欢迎拉到文末添加我）
</callout>

<callout emoji="🌅">
**@唯庸** 和**@杜昭** 也有不少贡献，一并感谢！
</callout>



**26年9月3日更新：**

感慨即使过了一年半的时间，没有怎么更新这个文档，依然有那么多人在看。



现在的黄叔，从AI编程已经进化到Agent资深玩家，从今年春节龙虾的爆火，已经预示着Agent时代的彻底到来。

年中，从ChatGPT合并Codex，到现在国内各种Work产品风生水起，Agent已经彻底进入到大众的视野。



黄叔也开始自己创办了一个AgentWork社群，目前每天社群自己的Token统计榜单在一百多人参与统计的情况下，已经稳定破200亿，社群内也有从AI编程/Skill/Codex系列课程在内的超过80集视频+图文教程。



非常欢迎大家加入：

![图片是黄叔和唯庸的Agent实战社群宣传图。上方有“零基础学习智能体视频课：从入门到实...立减200元”及价格信息。中间以“不用一个人摸索Agent - 从小白入门到项目实战”为标题，展示课程、案例、挑战、直播等内容。底部有“Agent超级个体”及微信扫码送礼物的提示，还配有社群二维码。该图与上下文介绍的黄叔创办的AgentWork社群相呼应，展示了社群的课程内容及加入方式。](https://feishu.cn/file/Au2XbhL4doidbCxkXfMc0so1nFf)



<callout emoji="🏆"><p><b>注意：本文内的Rules/Prompt，需要复制的话，点击文档：</b><b><cite doc-id="W1LCwYA8eiTl77kpi81c31yNnJd" file-type="wiki" title="相关Rules和Prompt" type="doc"></cite></b><b>，里面可以复制。</b></p></callout>



# 全文知识目录

（如有跳转错误欢迎评论提醒黄叔）

<table><colgroup><col/><col/><col/><col/></colgroup><tbody><tr><td></td><td>技巧一</td><td>技巧二</td><td>技巧三</td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-XOs2d7d8ooYq5GxBa4KcHdwBnb8"><b>Part1：基础知识</b></a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-BfoRdpc0NoCqP7xVNRUcmiuMnZe">06 必备的Windsurf技巧</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-O4bbdY2LZorSMrx2LAxckBylnGc">Set Global AI Rules</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-DoRsdvelno3bSBxOIw8cF63NnNh">安装中文插件</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-ZbG6dRYpjoJtYNxtBmocal2in3c">07 一些AI编程的心得</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-NwH0djbp1oq2mixGTMPcLGpRnNc">写的越慢，写的越快</a></td><td></td><td></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-VAqydLZzToSDwqx6iywc7Tmpnxf"><b>Part2：你的个人工作台</b></a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Ldi4dd9LOo8bh7xvw4zcFzLxnjh">01 使用AI IDE进行创作</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-ISdjdT2AFouADSxLpJhcy13Anpc">改写提示词</a></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-RFJZdrzppoStBFx4U9wcwZzAnyh">02 使用提示词生成精美图片</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-H7RAd7eMWod5BuxWGNicpLNRnoc">图片生成提示词</a></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#DfY4d3uoloSFUFxqt5gcocpcnLc">03 10分钟搞定高德地图MCP！</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#N1wGdtmE2oDRXWxSFbacx9uAnXr">给Windsurf安装高德MCP</a></td><td></td><td></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-XUCYdjPVYopS8uxB1RRcaWijn0c">Part3：网页开发</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-RXnEdeqRqoSAhtxwZHYcDP3rnge">01 图片字幕生成器</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-RtVAdyURtomNqhx1bescQkuRnhd">用多模态复刻产品</a></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-GS16dJen3ogrfFxqJcHcAENFn2c">02 注册硅基流动，赠4000万token</a></h5></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-LUejdBgjqocWvfxODZEcsz0Inef">03 帮小红书的老外起中文名</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-ZzLZdQ3ehoy1kyxXElpcH6fYnIc">WorkSpace AI Rules</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-WBhVdpF6NoBiRvxNVGMcCnRQnto">接入大模型</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-R6ZMd0VgYoxf88xJWzacYpgpnrB">04 做一档你自己的AI播客</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-SXWUdkTLpogdE7xCRGHcibg5n4c">语音复刻</a></td><td></td><td></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-WemDdHs1QoPAhMxJa55cB6mWnIg">Part4：多维表格</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-PCk2dMhkiocY4Px12JSclzzQnPe">01 做一个你专属的好文推荐网站（DeepSeek R1 + 飞书多维表格）</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-IkgVd9yZEo5yOTxRzIVcYRfTnxf">创建带AI能力的飞书多维表格</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-P3qVdsXryoEyS6x9lIgcMIBGnVb">用网页呈现多维表格里的内容</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-VVxNddQvSoynCrx2QuFczJznnqd">02 一键批量提取抖音博主视频：文案提取+风格分析+文案改写</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-SD4YdpNGeoDOpTxzCTBcjb6onwA">配置扣子API发布成多维表格字段捷径</a></td><td></td><td></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-TotjdKSPnoO377xlivCcA9q8nVE">Part5：浏览器插件</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-U0KNdk2GaocSLXxpOy9cKBd2n7e">01 DeepSeek驱动的网页金句卡片生成</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-QTWcd1pAmoF1gYxeEP1cNQWAniE">先Chat，再开发</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-FPxWdNBZno6qFWxN6k4cXv1Unyd">插件安装指南</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-PIVSdORqSoyVjLxAa7ic68Dhn5b">Chrome插件logo生成</a></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-FkIzdtR1joldxPxu0Qbcwjesn2g">02 复刻善思flomo</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-P9CEdQcCxoiYLsxNIXvcoupxnIh">接入flomo API</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-A3TPdNKkHoJufOxn6M5csUpmn1g">更新readme</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-GhCndzNT9obE0OxyiHecYSmunRg">使用Git存档</a></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-OUN1dy2aioDaM1xnh8Ycbi5KnLf">Part6：微信小程序</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-InP4dGETKozVd2xDbiWcXNIhnSg">01 做一个简单的微信小程序</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-VDoldzuIhoKAvPxhl99cGHTHnab">开发小程序准备工作</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-MiyMdnKfIooDDFx8xE0cKQgLnGe">小程序的认证和备案</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-PAhidGtOMoOFxTxGNOxcc1QSnQH">02 书单星球（微信小程序）</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-U726dE9itoQ6fhx2DdPcZGlgngb">微信小程序开发路径</a></td><td></td><td></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-QDtYdGsoZol0YoxhKdjceGCMnbg">Part7：基于扣子搭建产品</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-JouSdqEgOoLibyxQ4YZcH69Dngf">01 扣子Coze产品介绍</a></h5></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-ZFs5d6g7wob16yxlJ8Ccv0Cen4c">02 用DeepSeek R1，抖音视频文案提取+改写</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Pd2MdkC47oh6URxpaMucqN2Vnvd">理解Function Call</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-GDJZdkzD9obcUwxbqGHc0J4CnCc">简单智能体搭建</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Gf9ydo7tSoddsBx71Zbcz9qhn7e">03 柴犬表情包生成器实战</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-AvrIdEfhcoPvd6xBkAxcUjcDnLe">Coze的协同机制</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-T2lVd899aoUx44xBtGicmkv6nXe">完整智能流搭建流程</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-D1vGdWGHXoYXHcxmm8Scx80fnLf">前端调通Coze API</a></td></tr><tr><td><h2><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-LLiMdHPz6orJhYxJWRHcxQGPned">Part8：部署</a></h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-LOrAdRJGvodWGRxhnFOciKKfnNf">01 将网页产品部署到Cloudflare！</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-LOrAdRJGvodWGRxhnFOciKKfnNf">部署Cloudflare原理</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-SfJddr1xvoSlkLxa8JJcvWj4nkh">完整部署流程</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Phkid0LAjofH0XxnuDzcsIXbn3d">02 使用Github+Vercel免费部署</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-AmqGdjnN1oY6tWxobXUcTsZqnMg">两种推送Github办法</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-JCGYdiBGroSKG9xMj74c4b81nkh">把密匙配置为环境变量</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-GIusdv9sro5PlXxQ5QSc3jaZnsc">03 白嫖Chrome插件部署</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-NATUdinRUods4txh0Wick8UVnxf">将原网页改造为插件</a></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Oz9ld0a8TooTAsx4wg0cl6abnBd">上传Chrome应用商店</a></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-B8jidQ2TxonIu3xMuaMcFZ29nCd">04 最简易的免费发布：Yourware</a></h5></td><td></td><td></td><td></td></tr><tr><td><h2>更多</h2></td><td></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Ik6JdmurGofKyDxWLGFcG7rbnEc">降噪AI</a></h5></td><td><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Ik6JdmurGofKyDxWLGFcG7rbnEc">复杂产品拆解思路</a></td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-SeM1dF2CUoy7mHxP8u3c3tKUnVc">做一款App</a></h5></td><td>待更新</td><td></td><td></td></tr><tr><td><h5><a href="https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e#NmLddiMFroAwW2xYvPkcRw13nue">一个提示词完成一款App的设计（Claude4）</a></h5></td><td></td><td></td><td></td></tr></tbody></table>



好了，开始正文，先说说我用Windsurf/扣子开发的几款产品，方便你了解0代码基础可以做出什么样的产品，相信你的想象和执行力，会做出比它们更好的产品：



# Part1：基础知识



## 01 Windsurf做的产品



<grid>
<column width-ratio="0.201578">
![图片展示的是帮老外起中国名字的网页界面。输入框中显示“Barack Hussein Obama”，下方有“Generate Names”按钮。下方列出三个名字选项，每个选项包含拼音、中文含义、文化解释和英文解释。如“巴小奥”（巴小奥）的拼音为“bā xiǎo ào”，中文含义是巴小奥，既保留了姓氏的音，又用小“奥”来暗示其个性中的骄傲与自信，文化解释中提到“黄”有“黄”的谐音，暗示了其独特的个性魅力等。](https://feishu.cn/file/QuyBbQflvouzYyx3UbXcWBMsneb)
</column>
<column width-ratio="0.184448">
![图片展示了善思思flomo插件的界面。上方有插件名称及“更多思考更多智慧”的标语。下方有“标题和链接”输入框，示例内容为“百度放大招： 一块画布，真有这么神？””及链接。接着是“原文摘要”区域，有“AI总结”按钮，下方框内列出4条核心要点。最后是“个人感想”输入框，提示输入想法。底部有“提交到Flomo”按钮。](https://feishu.cn/file/FzDcb1PrFo3Mo8xGfQycZ2axnGc)
</column>
<column width-ratio="0.187983">
![图片展示的是书单星球的界面，上方显示“名人书单”，并有Andrej Karpathy的相关介绍。下方列出三本书，分别是《自私的基因》、《献给阿尔吉侬的花束》和《An Immense World》。每本书配有封面图和简短介绍，如《自私的基因》介绍其是理解进化论和自然选择的经典著作。该图片与文档中介绍书单星球的内容相关，直观呈现了其推荐的书籍信息。](https://feishu.cn/file/Gk4fbzOWFo5QoQxljaCcu1Q7nAX)
</column>
<column width-ratio="0.187983">
![图片展示的是降噪AI平台上的文章界面谈谈汪华、袁进เทคโนเทคโน](https://feishu.cn/file/NcB1boHVroEy4IxU7rDcwItJnod)
</column>
<column width-ratio="0.238007">
![图片展示的是](https://feishu.cn/file/OQ9Rbws7Ro8Ic1xfBLYcIOwenHc)
</column>
</grid>

从左到右，帮老外起中国名字（网页），善思flomo（浏览器插件），书单星球（微信小程序），降噪AI（H5+微信服务号），柴犬表情包生成器改良版（网页+Coze）



帮老外起中国名字，近期小红书被外国佬冲爆，很多老外有类似的需求，用半小时开发出来行不行？完全可以！



善思flomo，是一款在Chrome浏览器内，帮助你快速对网页内容做摘要和写思考的插件，可以自动抓取标题和链接，可以AI总结全文摘要，输入你自己的个人感想，然后一键同步到flomo（一款笔记应用）。



书单星球，是一款可以查看各个名人推荐图书的微信小程序，界面非常美观，能够阅读到名人如何评价一本书，帮助我们更好的选书。



降噪AI，稍微复杂一些，简单说就是从指定的公众号里，每天自动抓取/筛选/摘要/呈现，同时还有AI语音播报/实时语音互动的能力。



柴犬表情包生成器改良版（网页+Coze），生成各种表情的柴犬表情包。



简单介绍到这里，后面我们会用这些产品作为案例，来给大家串讲如何用Windsurf和Coze来搭建产品。



但在开始之前，我想先说说自己的思考，即，**为何你要学习做产品，做产品是不是下一个时代的机遇。**



## 02 AI编程构成了双杠杆的重要一环



纳瓦尔相信大家都有听过，他是硅谷知名天使投资人，投资过推特/优步等知名公司，《纳瓦尔宝典》一书搜集了他过去十年在互联网上发表的思考，豆瓣评分8.4：

![图片展示了《纳瓦尔宝典》的相关信息。作者为\[美\]埃里克·乔根森，由中信出版社出版，副标题为财富与幸福指南，原原文是这样写的：代码和媒体是不需要许可，定价68.00元，装帧为平装，ISBN为9787521741124。](https://feishu.cn/file/FyYvbpIKboKIzYxSoGRckdVUnXg)



第一章开头就说出让人震惊的事实：

<callout emoji="✍️">
赚钱跟工作的努力程度没什么必然联系。即使每周在餐厅拼命工作80个小时，也不可能发财。
</callout>



是不是很残酷，仔细一思考又是真相，那如何能致富呢？他提出了四个杠杆，咱们这一节要说的是其中两个杠杆，原文是这样写的：



> 代码和媒体是不需要许可就能使用的杠杆。这两个杠杆是新富阶层背后的杠杆。你可以创建软件和媒体，让它们在你睡觉时为你工作。 如果不会写代码，那就出书、写博客、做视频、录播客。 



读懂请掌声👏！



在抖音/B站/小红书/视频号，甚至有些老旧的公众号/头条号等媒体浪潮里，造就了大量的财富，黄叔算是非常小小小的吃到了一些红利，每一年都会有人问：IP还能做吗？相信我，答案永远是：机会大量存在的。



这是媒体杠杆。



另一个，做产品一直是需要设计师/前端/后端的配合，要做一个App最低配置也得好几个人，一年光人工成本就百万，似乎我们不会代码就做不了产品了？



很有意思的就在这里，黄叔完全不会写代码，依然通过Windsurf/Cursor做出了产品，这就是新时代的魅力和新机会。



ok，媒体杠杆和代码杠杆成为双杠杆同时出现，除了纳瓦尔说的这两个是不需要许可，每一个人都可以用的杠杆之外，更重要的是，小猫补光灯的爆火，让我突然发现了两个杠杆的相辅相成：



![图片展示了双杠杆整合的商业收入模式 addCriterion图片位于介绍AI编程构成双杠杆重要一环的上下部分，通过“做产品”和“整内容”两个环节，形成商业收入。其中，“做产品”可带来付费产品收入，如流量分成、粉丝充电等；“整内容”则通过企业咨询、企业代开发、知识星球、商单收入等途径获取收入。该图与上下文紧密相关，直观呈现了双杠杆在商业上的具体应用。](https://feishu.cn/file/Hmy1bUApooVTigxxYndcdioOnXk)



花生在小猫补光灯爆火之前，就已经通过内容突破了年入百万，这里面比如Youtube 3万粉丝账号的内容更新，可以获得数万的流量分成收入。还有企业咨询和定制化开发，甚至报高价都“赶不走”客户。



在小猫补光灯爆火之后，更是吃到了红利，各种邀请分享，公域流量得到了进一步的积累。



光看上面这两段，似乎这是通过做产品来积累公域流量，再用流量变现的单方面增长回路，其实不是的，公域流量的积累，本身就能让下一次产品获得更多的冷启动，提高产品成功的可能性。



更核心的，是这里面的Build in Public，能极大的增强产品成功的概率：

![图片标题为“重新理解Build in Public”，总结其是把产品开发变成一场直播，让用户从观众变成共创者。内容以四个要点呈现：一是公开透明，产品开发全程对外公开；二是用户共创，邀请用户参与产品设计改进；三是快速迭代，先发布不完美版本并根据反馈改进；四是个人品牌，打造个人影响力，产品故事和个人成长故事相互加持。此图与上下文关系紧密，它详细阐释了上文提到的Build in Public能增强产品成功概率一说。](https://feishu.cn/file/WcepbUuVwoRn2zxdItZcarMjnUg)

通过获得用户的反馈，能帮助我们更好的理解用户的需求，捕捉用户的痛点，以及不断的发布产品，让自己更加了解如何宣传产品。



以上这些，可是坐在办公室里吹空调那些所谓的大厂产品经理很难习得的：因为，他们不愿意/没精力把手弄脏。



总结来说，双杠杆是产品即内容，内容反过来帮助产品的一个增长回路：



> 你不要指望自己是乔布斯，但每一次失败都会增加下一次成功的概率！



很多人会问，IP现在好做么？当然不好做。正如失败也不容易接受一样，所有的成功都需要耐心，都要积累。



好吧，这依然不容易，不要紧，抛开这些，**AI编程至少可以搞定你自己的问题**，比如，善思flomo至今在Chrome应用商店只有很少的用户，但，我就是最重度的用户，解决了我很多小麻烦，已经很棒啦不是么！

![图片展示了善思flomo在Chrome应用：善思flomo在Chrome应用商店的页面。页面上方有其图标，图标内有节日装饰图案。右侧显示名称“善思flomo”，下方有4.5星（2 ratings）的评分，以及“](https://feishu.cn/file/IAB0bcNh7ol5b2xPQ7JclhXYnwh)

我会开始讲如何用Windsurf快速入门AI编程，是的，别怕，0代码基础的你只需要动嘴，就能做出产品。然后，我会单独再说如何利用飞书多维表格作为你的AI数据库，再说用Coze搭建产品，再给出基于Coze的API+AI编程，做出一个完整产品的全流程。



至于为何不全部用Windsurf，下面我会先说说自己的思考。



## 03 不管黑猫白猫，做出产品就是好猫



这句话的意思是，不管是学代码写产品/AI编程/用扣子做Agent，都是手段，我们的目的是做出产品。



当然，我们知道很多人会说，现在AI编程只能做简单产品，这里存在对AI理解不多的情况，不过在代码量大幅增加后，也确实容易出现AI把不应该改的地方瞎改的情况。



背后的原因有很多，其中一个重要的点是超出了大模型的上下文长度，怎么理解这个上下文长度呢？简单的类比是，它的脑子就那么大，一次超出它脑子的容量，就记不住，只能瞎说。



所以有一种有效的策略是，Windsurf+Coze，Coze后面我们会仔细说，简单的讲就是一个个节点拼起来的工作流，每个节点干一点小事，拼起来就可以是一个复杂的事。



![图片展示了了image\]AI编程蓝皮书2.0\[heading1\]Part1：基础知识\[heading2\]03不管黑猫白猫，做出产品就是好猫\[content\]\[block_sep\]<qa:image></qa>\[block_sep\]比如上面这个节点，从左到右，每个节点 addCriterion图片展示的是一个AI编程流程图，从获取输入开始，依次经过读取网页内容、对](https://feishu.cn/file/WjZmbFQ7EogyCKxfJLtcadOunQf)



比如上面这个节点，从左到右，每个节点大致做了这么些事：



获得输入---读取网页内容---对内容进行打分---筛选：分低的就不要了---摘要---把摘要/关键词/评分等拼到一起---存到飞书多维表格内-结束



它帮我们实现了（简单说就是从指定的公众号里，每天自动抓取/筛选/摘要/呈现）这里面筛选和摘要的部分，处理完成后，把处理好的数据存储到飞书多维表格内，最后我再用AI编程，开发一个网页，这个网页的工作就很简单了，只是把昨天的内容抓取出来呈现就完成了。



理解了没？相当于把很多处理工作交给了Coze，它处理完成后，我再把处理好的数据让Windsurf完成最后的呈现即可**（即大幅降低了AI编程所需要解决问题的复杂度）**。



所以不管黑猫白猫，它们一起能帮我做出产品就行，我不管是什么猫。



当然，降噪AI前后还有一些额外的工具和工作流在处理，我们这里只是为了简化给大家描述背后的原理。那下面就开始，具体讲讲AI编程（Windsurf）和Coze的上手内容，最后会用一个案例来串联。



## 04 Windsurf，不是Cursor？

![图片中显示一段聊天记录，上方显示“AI编程，始于cursor，忠于windsurf”，下方有对话框，一位用户回复“有5年编程经验了”，另一位用户回复“哈哈哈，说得好也你是0代码基础么？”，并配有头像。图片与上下文紧密相关，是对文档中一位有5年编程经验朋友对AI编程产品反馈的呈现，体现了用户对两款产品（Cursor和Windsurf）的偏好及对AI编程的理解。](https://feishu.cn/file/QS0Ubx2M2oT77gxqxKGcGgbZnrc)



这是一个我的产品用户交流后给的反馈，有5年编程经验的朋友，都倾向于Windsurf，而非Cursor，很有意思。



黄叔对于两款产品都有使用，就我的理解：

- Cursor控制力更强，可以更加精确的控制代码和文件
- Windsurf更加偏自动化，能省你很多事（反面就是复杂代码下会替你把对的改错哈哈哈）



对于0代码基础的小白来说，后者更好入门，等你变成熟手，开始做相对复杂产品后，可以考虑转到Cursor。



这不绝对，两个产品都在非常疯狂的进化，以及Claude也可能很快引来下一次的升级，所以我们先按照这个方式去理解。



当前节点上，直接用Windsurf上手最方便。（Cursor也在持续进化，本教程以Windsurf为案例进行教学，整体两个软件编程起来差不太多）





## 05 Trae可免费使用Claude 3.7



字节推出了一款AI编程工具，叫做Trae，限时免费无限量使用Claude，欢迎大家尝试下载使用。



下载链接：https://sourl.co/2DCmmW



黄叔也专门写了篇文章介绍，内附共学群：https://mp.weixin.qq.com/s/Cl9siWXt4VfMBtK5wdbDYg



OK，进入主题，下面我们来说Windsurf的一些基本技巧，有了这些技巧后，使用它来AI编程就变得更加丝滑。



## 06 必备的Windsurf技巧



好的，上面的章节是和大家说说AI IDE（Windsurf/Cursor/Trae都是）可以做更多的事情，后面我们还会持续更新，下面回归到主线，如何用Windsurf来开发自己的idea：



### 第一，开始的开始，是先下载软件



哈哈，这个就不用废话了，123，上链接：https://codeium.com/windsurf



注意科学上网



下载后安装好，打开软件，大概是这样的：



![图片展示的是下载安装好后打开的Windsurf软件界面。界面左侧显示“Workspaces”区域，有“Open Folder”和“Connect to...”两个蓝色按钮，其下列出了一些项目文件夹。右侧是“Get started with Cascade”板块，有“Login with Codeium”蓝色按钮。右上角和右中位置均有“Login with Codeium”登录入口。该图片对应文档中介绍下载安装Windsurf软件后其打开界面的内容，直观呈现了软件初始页面模样，辅助说明文档文字内容。](https://feishu.cn/file/Q5UlbPFt9oLT33xCxuHc6z9InCd)



右上角和右中的位置是Login with Codeium，这个是登录入口，我知道你想点击它，但别急，因为要调用Claude Sonnet这个地表最强的编程大模型，所以最好是直接付费使用Pro账号，某宝可以自己搜索一下。



注意：Windsurf的Pro账号，即会员，是自带Claude Sonnet使用权益的，必须买会员，这样才能使用到Claude，其他模型目前用来编程都还差点意思。

特别强调：建议大家直接用最好的模型来生成代码，这样可以大幅减少对时间的消耗！钱，买不来时间！并且又不贵对吧。

![图片展示的是Windsurf会员订阅页面。上方显示会员订阅价格为¥60，有“-”“1”“+”按钮调整数量，显示“有货”。下方列出多种会员订阅选项，如15刀代充自己账号（月卡）、15刀独享账号（月卡）等，价格从¥62.99到¥699不等。其中，15刀pro共享月卡/限一台设备登录和60刀pro共享月卡/限一台设备登录被红色框突出显示。底部有“加入购物车”和“立即购买”按钮。该图片与上下文介绍的Windsurf软件账号购买及登录流程相关，直观呈现了购买选项。](https://feishu.cn/file/ToAMb9Ai9oBbdOxlZL1cX091n0d)



如果你是马上就要开始肝，推荐购买15刀pro共享月卡，这是3个人一起消耗用量的账号（用量指的是最多只能对话多少轮类似的，用完就不能用了，还必须是一个月内用完）



如果你是细嚼慢咽的类型，想自己慢慢开始玩，那推荐购买15刀独享账号（月卡），这个账号就只有你一个人用，不用担心被别人薅完。



购买完成后，会获得账号和密码，在Windsurf软件的右上角，点击Log in with Codeium，进行登录。



### 第二，在你的电脑上，新建个文件夹，并用Windsurf打开



这个你总会吧，那为啥要新建文件夹呢？主要是Windsurf会编写各种代码文件，这些文件得有地方存吧，所以你需要新建文件夹，然后在Windsurf 打开这个文件夹（Open Folder），以后所有的代码文件都会存在这个文件夹里啦：



![图片展示了Windsurf软件界面，界面左侧有“Workspaces”区域，其中“Open Folder”蓝色按钮被红色框线突出显示，另有“Connect to...”选项。界面右侧是关于Cascade的使用引导信息，有“Login with Codium”按钮。图片与上文“在Windsurf打开文件夹（Open Folder）”内容相关，直观呈现了在Windsurf软件中打开文件夹这一操作对应的界面元素，帮助用户明确操作入口。](https://feishu.cn/file/PKQ0bVmxxok6L2x3CeZcqgGKntd)

比如我要选择“展示用”这个文件夹，选中该文件夹后，点击打开：

![图片展示了在电脑上新建文件夹并用WIC>W](https://feishu.cn/file/U6gZb1ctVozzROxh2ALcheLHnTh)



完成后，Windsurf会加载一会AI对话，最终是这样的：

![图片展示了 addCriterion图片 addCriterion addCriterion图片展示了W addCriterion](https://feishu.cn/file/OOX7bFZ1bohXoQxkdukcFiI9nGf)

大体分为上图四个区域，从左到右依次是：

工具栏：各种工具，比如插件下载，搜索等；

文件栏：所有创建的文件列表都在这里呈现

代码栏：点击文件后，具体的代码会在这里看到

AI对话栏：这是最主要的，AI在这里接受你的命令，哈哈哈



很重要一点，有朋友发现Windsurf不能自动创建文件，后来发现是AI对话栏里的模式是Chat导致。这里要检查下，保证模式是Write：

![图片展示的是Windsurf AI对话栏的Write模式界面。界面上方显示“](https://feishu.cn/file/QENxbXWm3oKZJ0xhOy2c3zYTn8e)



注意，有可能AI对话栏没有打开，这个时候你可以点击一下软件右上角的这个小图标：

![图片展示了W Windsurf软件界面右上角的图标区域。其中，第四个图标是一个带有圆圈的图标，其右侧有数字“2”，表明有22条消息。该图标与上下文紧密相关，上下文提到“这里要检查下，保证模式是Write”，并指出“有可能AI对话栏没有打开，这个时候你可以点击一下软件右上角的这个小图标”，此图标即为该上下文所指的右上角小图标。](https://feishu.cn/file/QOk9bPulJoVqxxx4hOXcKIkYnLf)

再次注意：这个功能需要连接Claude，需要科学上网。所以在正常使用该软件的时候，是需要一直打开科学上网的。



### 第三，让AI更听话：Set Global AI Rules



如何让AI更听话呢？一定是你告诉它要遵循一些规则，在Windsurf软件的右下角，“Windsurf Setting”里设置，点击后选择“Set Global AI Rules”

![图片展示的是Windsurf软件中“Windsurf Setting”的设置界面。在“Memories and Rules”选项右侧，有一个“Manage”按钮被红色框突出显示。上下文提到在Windsurf软件右下角的“Windsurf Setting”里点击后选择“Set Global AI Rules”来设置全局AI规则，此图片即对应设置操作中的一个步骤，展示了找到设置入口中关键的“Manage”选项位置，后续可在相应代码栏复制粘贴提供的规则，完成全局AI规则的设置。](https://feishu.cn/file/YpzUbCyl1oLKALxaH5oc28JBnmd)

![图片图片展示了Windsurf软件中“Set Global AI Rules”设置界面。界面中，Cascade Generated Memories部分显示“无记忆生成”，](https://feishu.cn/file/RJX5bCdUPozesVxe0Vjc9MBmnVf)



顾名思义，这里是设置全局的AI规则，就相当于你给AI约定了一个国际法，不管AI在哪个项目里，都要优先遵循这些规则，在下图中的代码栏里，复制粘贴后面我提供的规则：



![图片为Winds](https://feishu.cn/file/TtrzbJQuuoHx0cx5T9acOdVznWt)



具体的命令规则可以复制后粘贴进去，粘贴后注意点保存   左上角的文件-》保存，或者Ctrl+S（苹果是Cmd+S）：

<callout emoji="🎼"><p><b>注意：本文内的Rules/Prompt，需要复制的话，点击文档：</b><b><cite doc-id="W1LCwYA8eiTl77kpi81c31yNnJd" file-type="wiki" title="相关Rules和Prompt" type="doc"></cite></b><b>，里面可以复制。</b></p></callout>

```Shell
# Role
你是一位拥有20年丰富经验的顶级产品经理，同时精通所有主流编程语言和技术框架。与你互动的用户是一位完全没有编程基础的初中生，对产品和技术需求的表达能力较弱。你的工作对他至关重要，成功完成任务后，你将获得一万美元奖励。
---
# Goal
你的任务是以用户能够轻松理解的方式，帮助他完成所需的产品设计与开发工作。你需要始终主动、高效地完成所有任务，而不是等待用户多次督促。
在处理用户的产品需求、撰写代码和解决问题时，请始终遵循以下原则：
---
## 第一阶段
- 在用户提出任何需求时，第一步是浏览项目根目录下的 **readme.md** 文件和所有相关代码文档，以全面理解项目的目标、结构和实现方式。
- 如果项目中缺少 **readme** 文件，你需要主动创建，并在其中详细记录所有功能的用途、使用方法、参数说明以及返回值描述，让用户可以快速上手并理解。
- 如果用户提供了上下文信息（如文件、先前的任务说明），请充分利用这些上下文，以确保解决方案与项目需求一致。
---
## 第二阶段
### 针对不同类型的任务，采取以下方法：
1. **当用户直接表达需求时**：   
- 优先站在用户的角度思考其需求是否完整清晰，如果存在不明确或遗漏，应主动与用户沟通确认。   
- 从产品经理的角度检查需求的合理性，并帮助用户完善需求。   
- 提供最简洁有效的解决方案，而非使用复杂或过度设计的实现方式。

2. **当用户需要你编写代码时**：   
- 理解任务目标后，审视当前代码库内容，并进行逐步规划。   
- 选择最适合任务需求的编程语言和框架，遵循 **SOLID** 原则设计代码结构，并采用适当的设计模式解决常见问题。   
- 编写代码时，确保为每个模块撰写清晰的注释，并添加必要的监控手段，以便快速定位问题。   
- 在代码中加入单元测试（如果适用），确保功能的正确性和稳定性。   
- 遵循代码风格规范（如PEP 8），使代码易于维护和扩展。

3. **当用户请求解决代码问题时**：   
- 仔细阅读并理解代码库中相关文件的功能与逻辑。   
- 分析可能导致问题的原因，并提供解决思路。   
- 假设方案可能存在不完整性，应与用户多次沟通确认解决进展，并根据反馈调整方案，直至用户满意。
---
## 第三阶段
在完成任务后：
- 主动对项目完成的过程进行总结与反思，识别潜在问题并提出改进建议。
- 将这些内容记录在 **readme.md** 文件中，作为未来开发的重要参考。
---
## 注意事项
- 你的用户完全没有编程基础，因此在沟通时请以简单、通俗的语言解释问题和解决方案。
- 避免提供未经确认的信息，如果需要更多文件或细节，请明确告知用户需要哪些内容。
- 注释代码时，确保每一行的运行原理和目的都清晰易懂。
- 如果用户在任务中修改需求，请及时调整方案并与用户确认。
- 全程使用中文与用户交流，以确保沟通无障碍。
- 在解释技术概念时，请结合生活实例，让用户更容易理解。
```

（本段Prompt出处：小猫补光灯 花生，感谢！）



<callout emoji="🐵">
加餐：
如果你感兴趣，可以发现上面的是一段Prompt，也就是提示词。
包含几个段落：
**Role**：让AI做一个顶级产品经理，来帮助你
**Goal**：说清楚AI的任务是什么，分成哪几个阶段，以及注意事项
可以这么理解，把AI当成你的员工，它是什么人，需要按照什么方式工作，我们需要通过Set Global AI Rules和AI说清楚
</callout>



### 第四，安装中文插件



默认情况下，Windsurf都是英文界面，但黄叔的界面是这样的：

![图片展示了Windsurf的界面，左侧为“设置”选项被选中，显示“常用设置”下的各项编辑器设置，如字体大小、字体系列、Tab大小等等。右侧是“Write with Cascade”区域，可发起新项目或对代码库进行更改，下方有“Ask anything (ALL)”输入框，可添加图片，还可选择“Claude 3.5 Sonnet”等模型进行写作。该图与上下文](https://feishu.cn/file/MLOib7TS6oyCQlxsK9rcU9nEnLg)

很多地方都改成了中文，这是怎么做到的呢？非常简单：

![图片展示的是Visual Studio Code插件市场中“Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code”插件的页面。页面左侧为插件市场搜索栏及分类栏，右侧是插件详情，显示该插件由MS - CENTL开发，有358,354个用户，评分4.5星。。图片中红色箭头指向“安装”按钮，旁边有“自动”和“自定义”选项。该图片与上下文关系紧密，用于说明在Windsurf默认英文界面下，通过搜索中文插件并点击安装，可实现界面改中文的操作。](https://feishu.cn/file/B4GxbFFvwoPxMPxNZticY86Pn5g)

只需要在插件 里搜索中文，点击安装即可。



好的，大致就这些，够用了朋友，知道你等不及了，下面我们正式开始编程！在把案例学会后，我们还会对其中使用到的编程技巧做一个小总结，方便大家以后更好上路～



## 07 一些AI编程的心得



### 你写的越慢，你写的越快

![图片 addCriterion图片](https://feishu.cn/file/Tp06b8jopo29BmxvmFFcB0d1nXb)

![图片是用户wwwyesterday于3月6日发布的推文截图。内容提到用cursor windsurf类写东西的体会“你写的越慢，你写的越快。反之亦然”。推文下方显示有17条评论，16次转发，199个点赞以及29K的浏览量。该图片与上下文紧密相关，是对上文“你写的越慢，你写的越快”这一AI编程心得观点的来源呈现，直观展示了相关言论出处。](https://feishu.cn/file/ZF2ub1O3WoSSV4xfPhrcPtYfncf)



From @wwwyesterday：



<callout emoji="😀">
代码或者功能只是产物，从编程角度就是数据结构和计算的组合，从业务角度是一个一个流程的拆分。
和 AI 聊清楚这些再去说一句，帮我实现，比上来就要“给我实现一个 xxx，要 xxx 和 ooo”，是一个整体上更高效的做法。
</callout>



黄叔的总结就是：**先Chat，再Build**。



先和AI聊清楚需求，再让AI开始根据规划干活！



# Part2：使用AI IDE作为你的个人工作台



这部分我们跨出去，说说使用Windsurf/Trae类似的AI IDE，除了编程，还能做什么：）希望能给大家一些启发。

## 01 使用AI IDE进行创作

![图片展示了使用AI IDE进行 2.0进行创作的界面。左侧是文档编辑区域，显示了“newsletter”文档内容，包含多个段落和链接。右侧是聊天界面，显示了与AI的对话内容，如“我发现了6分钟写成英文文章的秘诀是”等。底部是AI助手界面，有“我有15年经验”等提示。该上下文介绍的AI IDE写作法验证过程相关，直观呈现了文档文档创作与AI交互情况。](https://feishu.cn/file/QaEsbTfldoPGp6xIcHdcPtJnn6d)

前天和之前组织进化论的Zara面基，她随口说的一句话让我整个人都震惊了！居然只用了5分钟，就把草稿用Claude改写成了让知名公司VP都点赞的newsletter！更厉害的是，就这样约了coffee chat！！！

💡 20分钟验证，真香定律再现

回家后我立刻开始研究这个神奇的AI IDE写作法。结果只用了20分钟，我就完全验证了这套方法的可行性！而且，你**现在看到的这篇文章，就是用这个方法写出来的**！它不仅最大限度还原了我的思想，还极大提升了文章的质量和写作效率！

昨晚在Build on Trae第一季项目路演开始前，我忍不住就和大家分享了这个玩法。

现场演示了如何把一段语音转文字的草稿秒变成结构清晰的文章。没想到现场反响超级热烈，不少朋友都直呼太实用了！所以今天我决定把这个写作秘籍完整地分享给大家：

🚀 四步打造爆款文章，简单到哭！

第一步：下载神器Trae

首先，去下载字节跳动出品的神奇AI IDE - **Trae**！官网地址：https://sourl.co/2DCmmW

（这里大家用Cursor/Windsurf也是一样的，只不过这两款软件需要付费）

它最厉害的地方是什么？**免费使用Claude 3.7**！没错，就是那个不仅编程能力超强，还能完美执行复杂提示词的顶级模型！它的上下文长度简直逆天，一次性写万字长文都不在话下！

下载安装后，你会看到一个简洁美观的界面，左侧是文件目录，中间是编辑区，右侧是AI助手。整个软件只有几十MB，但功能却异常强大！我用的是Mac版，Windows版体验也一样流畅。

第二步：准备写作风格模板

新建一个文件，比如叫"卡兹克.md"，然后把用大模型提取的卡兹克爆款文章提示词粘贴进去。（这个提示词怎么获取？别急，文末告诉你！）

这里的关键是选择适合你的写作风格模板。我用的是卡兹克风格（轻松活泼、口语化表达），但你也可以根据需要选择其他风格，比如李尚龙（情感共鸣型）、吴晓波（商业分析型）等等。

我的卡兹克模板包含了四个部分：**写作风格、主题倾向、目标受众和格式要求，总共约200字左右**。这个模板会指导AI按照特定风格改写你的内容。

第三步：写下你的草稿

再新建一个文件，写下你的草稿内容。可以是语音转文字的结果，也可以是你随手写的短文，完全不用担心格式和表达！

我通常是用flomo/get笔记/小宇宙录短播客，直接录音转文字，然后复制粘贴到Trae中。这样我可以边走路边思考，把想法直接说出来，特别适合灵感突发的时候！

![图片展示了在AI IDE（Trae）中新建文件写下草稿内容的界面。左侧是文件目录栏，显示“用Trae写文章”等文件选项。右侧编辑区域呈现了一篇草稿文章，包含段落文字内容，如讲述在AI时代写作的相关经历和使用Trae的感受等。这与文档中“第三步：写下你的草稿，再新建一个文件，写下草稿内容”的上下文描述相契合，直观呈现了在AI IDE中进行草稿撰写的场景。](https://feishu.cn/file/B3H8bZxnmo8gV9xkWXwcqZwinhe)

草稿质量完全不重要！我有时候写的草稿甚至连标点都没有，就是一堆意识流的文字。比如这篇文章的草稿开头就是「前两天和之前组织进化论的Zara面基，听她说5分钟把草稿用Claude改写成知名公司vp都点赞的newsletter然后还约了coffee chat瞬间我眼睛亮了」——就是这么随意！

第四步：一键改写，华丽变身！

打开Claude 3.7（在Trae右侧面板中选择），输入下面提示词，然后...啪！回车键一按，爆款文章立刻新鲜出炉！🎉

![图片展示的是Claude 3/goto addCriterion```json{ "image_id": "1"}```](https://feishu.cn/file/Rk1XbMBe9oL3cAxPNYccBfWqnLg)

✨ 写作体验简直太爽了！

生成文章后，你还可以：

- 手动修改任何不满意的部分（直接在编辑区修改即可）
- 选中段落用AI进行局部扩写和改写（选中文字后右键选择"编辑"）

![图片展示了AI编程蓝皮书2.0中使用AI IDE进行创作时的局部扩写和改写功能示例。画面中，左侧是编辑区，左侧红框内文字“你是想做一盏照亮一切但不够强的散光灯，还是成为能 成为能切割钢铁的激光？在这个AI时代，只有专注，才能真正带来成绩 addCriterion](https://feishu.cn/file/NtCFbgXFmoHa3Dxj2bqcEirVnOh)

- 用Tab键智能续写后续内容（在句子末尾按Tab键）

![图片展示了月薪过万的AI工程师是如何炼成的？ - 知乎\[图片\]](https://feishu.cn/file/Z74SbzCzooz6CVxKh1FcHK3mnQb)

- 自动生成清晰的章节目录

我特别喜欢的是选中段落改写功能。比如我觉得某个例子不够生动，就选中那段，右键选"编辑"，然后输入"请用更生动的例子替换这段"，瞬间就能得到更好的版本！

整个过程丝滑得不要不要的！

写完后，如果需要配图和视频，直接全选复制到飞书！样式完美保留，一键就能发布！

**但是！这还不是最厉害的部分...**

你还可以一键将全文转换成英文版本！！！在Builder模式下，然后输入"请将这篇文章翻译成英文，保持原有风格"，几秒钟后就能得到一篇地道的英文文章！我已经决定这招把内容搬到Medium、LinkedIn和Twitter等海外平台去了！😝 一篇内容两处发，效率翻倍！

🤔 为什么AI IDE写作这么强？

这种写作方法不只Trae能用，Windsurf和Cursor也可以（不过它们需要付费使用更多模型）。我推荐Trae的核心原因是：**免费使用Claude 3.7**，全中文界面，产品UI还特别好看！

AI IDE写作的秘密在于：它本质上是一个**带有上下文理解能力的AI编辑器**！

普通编辑器只能处理文本，而AI IDE能够：

- 直接修改长文中的特定部分（不用复制粘贴到聊天窗口再复制回来）
- 在多个文件之间轻松调用内容（比如引用风格模板到草稿中）
- 自动索引整个文件夹的内容（让AI了解你的所有相关文档）
- 基于对你写作意图的理解进行智能补全和改写（不只是简单替换词语）

当这些能力与顶级写作模型结合，生成的效果自然是绝绝子！

📚 更多AI IDE玩法等你解锁

AI IDE的强大远不止于此！后续我会持续分享更多有趣实用的玩法，帮助大家一起解锁新技能！

### 改写提示词

```xml
# 写作风格
轻松活泼、口语化的表达，富有亲和力
直接表达个人观点和态度，有明确立场
适当使用网络热词和流行语("人已麻"、"这波操作"等)
运用生动形象的比喻和修辞手法
结构清晰，善用强调(加粗文字)突出重点
带有幽默感的叙述方式，时而自嘲

# 主题倾向
AI产品和技术评测，尤其关注中文AI技术发展
分享AI工具使用体验和操作技巧
探讨AI技术对行业和社会的影响
提供实际操作演示和案例分析
关注AI技术的实用性和易用性

# 目标受众
对新技术感兴趣但不一定有专业背景的普通用户
寻找提升工作效率工具的专业人士

# 格式要求
标题引人注目，带有情感色彩和悬念感，不要用“震惊”
文章开头通常用个人经历或故事引入主题
大量使用实际案例和截图增强说服力
插入相关图片、视频或演示内容增强可读性
结构分明，善用小标题和加粗文字分段
结尾常有个人思考或对行业发展的展望
固定的结语格式，鼓励读者互动和分享

注意，我的名字是“AI产品黄叔”，风格偏向于轻松幽默，易读。
```



## 02 使用提示词生成精美图片



![图片是使用Claude 3.7生成的对《震惊！我用AI编程做了这么多产品，居然一行代码都没写过！》文章的总结图。时间为2023 - 03 - 04，作者是黄铁。内容包含开篇劲爆结论，强调在AI时代没写一行代码却做出大量产品；还有核心观点，如零代码视角是稀缺资源、大模型能力在编程领域凸显、与AI合作的新型工作方式为王等；也有权威大V观点及传统编程与AI编程的对比。该图为上下文提及的使用AI生成的精美图片之一。](https://feishu.cn/file/F82Wb4SCpoj9vTxE66Qcb3zun7b)

![图片“](https://feishu.cn/file/FGU6b1ZQPolQD0xiJ3oc1G78npd)



上面是两张使用Claude 3.7（不是3.7 thinking），生成的对**《震惊！我用AI编程做了这么多产品，居然一行代码都没写过！》**文章的总结图。



作为读者的你，更喜欢哪张呢？



我想说的是，上面这张昨天经过了几十版的调教最后得到了一个比较稳定的效果，但是，下面这张完全是一句话就生成了，效果，似乎也不错。



花了整整一天调整「文章生成卡片」提示词，让我不禁思考：**随着AI模型能力的飞速提升，这种精细调整提示词的时代是否即将结束？**本文记录了这个过程，同时探讨模型能力增强后提示词角色的转变。



故事是从昨天刷推的时候，突然发现了一个蛮有意思的图，是使用3.7生成的，大概类似这样的：

![图片展示了使用Claude 3](https://feishu.cn/file/SZ6mb1uHIoC40AxBGj2cTMnRnbf)

这样比较卡通，有高亮的文字，阅读起来挺不错呀，然后我看了提示词，日文的，做了翻译和调整后，生成的总结图如下：



![图片是一张关于AI编程的总结图。上方标题为“AI编程需不需要学代码？”，时间标注为2025年3月。图中分为三个板块：核心观点板块提到学代码视角、大模型编程能力提升等；AI编程协作四步法板块包括需求拆解、沟通反馈等步骤；零基础人群策略板块有专注学习需求表达等内容。此外，核心观点板块还引用了“The hottest new programming language is English - Andrej Karpathy”。该图是作者借鉴提示词思路翻修前的版本，有高亮但文字有些歪扭。](https://feishu.cn/file/CeHEbzdqioSlkFx9rLYc6vnQnpc)



也有高亮，不过字显得有些歪歪扭扭，借鉴提示词的思路，我决定做一个彻底的翻修，下一个版本是这样的：



![图片为AIAI编程蓝皮书2.0中“震惊！我用AI编程做了这么多产品，居然一行代码都没写过！”的内容页。上方标题突出AI编程成就，下方分为“开篇劲爆结论”“灵魂拷问”“核心观点”“权威观点”四个板块，分别介绍了AI编程书阅读量、作者对学习编程的看法、AI编程的效率提升、大模型编程能力、AI编程协作四步法等内容，还引用了Karpatsy、超维峰等权威观点。](https://feishu.cn/file/KfHvbYsAPoLCxAxu7B8cfHvinff)



已经有了大致结构，但提示词整体结构比较混乱，大概2-3次生成就能得到一份不错的结果，这个概率放在文生图产品中算比较高了，但如果只能达到这个程度也太小看AI编程+提示词的威力了。



AI编程+提示词更适合生成结构稳定、一致性强、细节可控的需求，在带有大量文字的场景下尤其合适。例如UI设计和信息卡片设计。



看这份提示词的话，可以看到虽然划分了角色、任务、技术规格、布局、设计风格等模块，但内部内容比较混乱，所以晚上开始重构这份提示词。



首先是确定模块，角色和任务是必备的，内容也很明确，不需要过多修改。



对于卡片来说，布局尤其重要，所以确定了「内容和规格」来作为主要模块控制布局，内部是整体卡片包含什么元素以及各个元素的多个参数、参数值。



最后使用「设计风格」模块来控制整体的视觉设计效果。



提示词分模块的做法，意义是进行迁移复用、多风格模板、参数微调等行为时更加方便，例如这套提示词最终使用了蓝紫渐变色作为背景填充色，如果需要更换配色方案的话，只需要在对应值部分修改即可，简单清晰。



或是需要形成多套视觉风格的图提示词时，也只需要更换最后的「设计风格」部分就行了。



重构后的提示词如下：



```xml
参看文末
```



可以看到整体结构明显清晰了很多，此时的效果如下：



![图片为AI编程蓝皮书2.0中“使用AI IDE作为你的个人工作台”章节中“使用提示](https://feishu.cn/file/AwKRbdkCdoFflYxMjcCckBH3nSc)



比刚刚好了一些，同时接受群友的意见增大了文字字号。但正文文字看起来过于重了，更大问题是正文部分所以继续如下修改，微调了字重、

![图片展示了AI编程中生成文档中 addCriterion addCriterion图片内容:](https://feishu.cn/file/FAc6bXDfXoX439x824LcB7eHncd)



随后的效果是：

![图片是一张蓝色背景的宣传小卡片，标题为“震惊！我用AI编程做了这么多产品，居然一行代码都没写过！”。卡片分为多个板块，分别是开篇劲爆结论、灵魂拷问、零代码视角、大模型编程能力、AI协作方法论、权威观点。各板块列举了相关要点，如AI蓝皮书阅读数据、关于是否学代码的讨论、零代码优势、Claude 3.7编程能力提升情况、AI编程协作步骤、权威人士观点等。此图展示的是使用提示词生成精美图片后的效果之一。](https://feishu.cn/file/R4RjboCe1ofEMdxfXaycsof8nYd)



TMD更严重的问题出现了，文字排版完全错乱，于是继续对小卡片内容做出限制：



![图片展示的是AI编程蓝皮书2.0中使用提示词生成精美图片时的提示词要求。内容包括序号、正文高度、章节标题高度、](https://feishu.cn/file/G4Nebq0TUoBY56xXHjdcxePznrb)



但结果发现依然有错误，可能是多个元素+多个间距的复杂计算模型没有顺利完成，于是改变限制策略，改成了通过小卡片动态高度，结果顺利修复：



![图片展示了](https://feishu.cn/file/Vs4QbgtUSoHVdXxQve4cSDfmnrT)



效果如下：

![图片图片展示了AI编程蓝皮书2.0中关于AI编程的精彩观点。上方标题为“震惊！我用AI编程做了这么多产品，居然一行代码都没写过！”，并标明作者为黄叔，来源是AI蓝皮书。下方分为五个板块，分别是开篇劲爆结论、灵魂拷问、核心观点一、核心观点二、核心观点三，每个板块配有对应的观点内容。底部还有权威观点，引用了Andrej Karpathy的言论。该图片是对AI编程时代编程新范式的总结，与上下文关于AI编程的讨论相契合。](https://feishu.cn/file/IrVXbMxlboV2THxzbVvcBH70n7g)



OK已经解决了文字内容超出卡片范围的问题，但现在各个卡片高度不统一影响美观，所以继续增加了正文字数限制



![图片展示了两条信息。第8条提到可以使用多种图表显示信息，会根据内容自动判断；第9条以紫色突出显示，明确字数不能超过100字。这与上下文修改过程中增加正文字数限制相关，是对相关内容的具体要求说明，强调了在使用AI IDE生成图片等操作时，对于信息呈现形式及字数方面的限制条件，有助于解决文字内容超出卡片范围、卡片高度不统一等问题。](https://feishu.cn/file/Lo9QbOsYYo7oBvxxB43cJapcnvc)



这个过程中发现程序没有按要求引入Tail windcss，于是直接在提示词中放了引入链接（Tail windcss可以大幅减少样式代码数量，能在生成文件时减少token消耗以及更大概率成功）

![图片展示了一段关于样式引入的代码要求。内容指出样式必须通过使用tailwindcss CDN来完成引入，且不能直接使用。具体代码为<script src="https://cdn.tailwindcss.com"></script>。该图片与上文提到的在提示词中放入tailwindcss引入链接以减少样式代码数量、降低token消耗并提高生成文件成功率的内容相呼应，是对引入tailwindcss具体方式的说明。](https://feishu.cn/file/SmLxbbw5Wop6fixnUJcccxEAn3g)



在修改的过程中突然出现了一张特别素的卡片，只有鼠标悬浮上去之后才能看到漂亮的效果，看来是模型又自作主张调整了未知部分，考虑到卡片的使用场景是作为静态图分享，所以加上规则：

![图片展示 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion * 图片所在文档：\[title\]AI编程蓝皮书2.0\[heading1\]Part2：使用AI addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion文本内容为“10、不需要交互效果，将以上内容直接显示出来供用户](https://feishu.cn/file/GVIebaqpfoHNMZx7UBwcBfMZnWH)

![图片展示了AI编程蓝皮书2.0中“使用提示词生成精美图片”部分内容的三大核心观点。观点分别为：零代码视角是稀缺资源； 2. 大模型编程能力指数级提升 3. 与AI协作新方式才是王道。其中，图片中“大模型编程能力指数级提升”这一观点被红色箭头指向，并有文字说明“](https://feishu.cn/file/GbndbPL6Rol8f2xkyl3cB2iTnce)



随后又微调了字号、透明度，增加了背景中几何图案的数量；增加了小卡片中可以使用图表显示信息的规则；补偿了丢失的作者和来源信息并微调了样式参数值，明确说明了正文的重点词如何强调等等。

![图片展示了AI使用提示词生成精美图片时的两条规则。第6条规则强调所有内容不要超出卡片；第7条规则要求使用下划线、加粗、彩色文字或其他特殊样式体现重点内容和关键词文字。这两条规则与上下文紧密相关，是作者在使用提示词生成精美图片过程中对](https://feishu.cn/file/AqovbyN52oRKU2xbeTbcbyaZnfg)



整个过程中其实还有很多次调整，以下是一些失败案例：

![颜色太花哨、图表显示混乱](https://feishu.cn/file/UP0rbFBaroj5KTxEspmcIahBn9e)



![正文序号单一，无重点强调效果，底部空白过多](https://feishu.cn/file/EOLfbmZ69oXpFcxXffnc31oKngg)



好在最终得到了比较满意的效果：



![图片为AI编程蓝皮书作者黄叔关于AI编程的总结海报。上方标题为“震惊！我用AI编程做了这么多产品，居然一行代码都没写过！AI编程时代，零代码视角才是稀缺资源”。下方分为六个板块，分别阐述开 自动生成精美图片的失败案例、AI编程流程、](https://feishu.cn/file/SocCbHJqJoAPh1xbbD1cVYmUnse)



回头看了下提示词调整的次数，能有大几十次！



但回头又看了下很随意的一句话提示词生成的总结图，似乎也挺不错？



那Claude 3.7是否抹杀了提示词工程呢？



虽然现在我们还需要精细调整提示词来获得理想效果，但随着模型理解能力的增强，未来可能只需一句"帮我做一个关于XX主题的信息卡片"，AI就能理解我们的意图并交付满意的结果。



黄叔觉得：**提示词工程不会消失，但会从"精确指令"转变为"意图表达"。我们正处在这个转变的过渡期，既需要掌握提示词技巧，也要准备好迎接更加智能的交互方式。**



你怎么看呢？欢迎交流



对了，黄叔和朋友非常辛苦的才调整了这份稳定输出的提示词，如果你需要的话，欢迎打赏100元，然后后台留言，我会把中文版本的最终提示词和日文原版的都提供给你：）



下面是彩蛋，测试了不同模型对同一提示词的输出效果，如下：

![图片展示了“AI编程革命”下零代码时代的开发新范式内容。上方标题为“AI编程革命”，注明日期为2023 - 12 - 01，来源是AI阅读市。下方有多个板块，包括零代码视角（含理解普通用户需求等3点）、大模型进化（含编程能力指数级提升等3点）、协作方式（含需求拆解等3点）、效率对比（含学习曲线平缓等3点）、实战案例（含AI阅读网站等3点）、用户攻略（含零基础小白等3点）。图片位于介绍使用提示词生成精美图片的内容之后，用于阐述AI编程相关理念。](https://feishu.cn/file/UUHzbZyUGo0RMNxY7zkc0dFYn7b)

![图片为““AI编程革命全景图”，展示了零代码开发者的时代宣言相关内容。图中分为核心洞察、实战成果、行业趋势、](https://feishu.cn/file/Falzb8t5roYW1pxDEjFcbeIknHf)

![图片展示了一张以蓝紫色为主色调的卡片，标题为“AI编程革命：零代码时代的崛起”，日期为2024年3月，主办方是AI读书会。卡片分为六个板块：零代码视角、AI能力提升、协作方法论、实战案例、效率对比、未来展望。分别介绍了理解需求、提升编程能力、需求拆解等内容。右下角标注“claude 3.5”。此图片位于介绍使用提示词生成精美图片的内容中，可能是使用提示词生成的示例图，用于体现相关效果。](https://feishu.cn/file/RKcSbIWkXoWdq2xihsXcCZBqn01)

![图片展示了AI@ 使用AI编程蓝皮书2.0中关于AI](https://feishu.cn/file/KuhybsycIouc38xVe4JcRNeqnqg)

![图片为AI编程新趋势相关内容展示，背景为蓝色，上方标题为“震惊！AI编程无需代码，探索AI编程的无限可能”。下方分为六个板块，分别为零代码视角、大模型能力、合作新方式、权威观点、传统VS AI、实战经验，每个板块有对应内容说明。图片与上下文紧密相关，是对AI编程新趋势的总结，为后续介绍AI编程相关功能和应用提供背景信息。](https://feishu.cn/file/FFlObyPSqoCccTxlG1wc9KWrnFb)

这些对比图并非最终版本提示词输出的，但可以明显的感受到claude和其他模型的差距！本文档中最终版本的提示词是v1.0版本，未来会继续迭代到2.0支持随机配色和自适应卡片数量。



### 最终版本的提示词

```xml
#角色
你是一位前端开发专家、资深视觉设计师

#任务
请根据内容【】输出信息卡片
输出【html】文件让我查看

#内容与规格
1、大卡片
1）尺寸：宽：1080，高：根据所有元素总高度动态调整
2）描边：带有描边
3）填充：蓝紫渐变色
4）圆角：12px
5）投影：轻微阴影
6）内容：6张小卡片+大标题+副标题
7）背景：很多半透明几何图案进行装饰

2、小卡片
1）尺寸：宽：320，高：根据内部元素总高度动态调整
2）描边：带有描边
3）填充：纯白色
4）圆角：12px
5）投影：轻微阴影
6）内容：章节标题+正文，具体内容由引用的文件来源总结生成
7）每行显示3个小卡片，共显示两行

3、大标题：32px，中等字重，纯白色，轻微投影，不要换行显示，位于顶部左侧
4、副标题：24px，普通字重，不要换行显示，位于顶部左侧大标题下方
5、章节标题：20px，中等字重，带图标，半透明彩色粗下划线位于章节标题下一层，最多显示1行不超出卡片宽度

6、正文：
1）字号：16px
2）字重：细
3）颜色：黑色，透明度90%
4）行间距：1.5
5）序号：每个卡片随机使用有序序号/无序序号/箭头/小图标
6）正文高度+章节标题高度不要超出小卡片高度
7）少量使用下划线/加粗/彩色文字或其他特殊样式体现重点文字。
8）可以使用多种图表显示信息，根据内容自动判断
9）字数：不能超过100字

7、日期、作者和来源：16PX，白色，透明度50%，普通字重，位于顶部右侧，可换行显示

8、图标:引用在线矢量图标库内的图标，任何图标都不要带有背景色块、底板、外框。

9、样式必须使用tailwindcss CDN来完成
<script src="https://cdn.tailwindcss.com"></script>

10、不需要交互效果，将以上内容直接显示出来供用户查看

#设计风格
简约而不失优雅。
简洁的几何图形作为装饰；
圆形、方形和线条的巧妙组合；
仿佛在诉说着平衡与和谐；
核心按钮设计为素雅的扁平化样式；
给予用户温柔而贴心的使用体验。
营造出宁静而舒适的环境，
感受无声的优雅与宁静的力量
```



## 03 10分钟搞定高德地图MCP！我用AI解决了约会地点选择难题



![图片展示的是北京中间区域咖啡馆推荐界面。上方有“北京中间区域咖啡馆推荐”标题，配有地图，标注了星巴克、五洲顶亚空间咖啡馆等咖啡馆位置。下方有“推荐咖啡馆”板块，展示了星巴克比原世世茂中心店、星巴克(北京北京北京)燕莎金街店等咖啡馆的图片、评分、营业时间、人均消费等以及“查看详情”按钮。底部还有“交通分析”和“停车建议”板块，分别介绍了交通情况和停车信息。该图与上下文介绍的黄叔用AI解决约会地点选择难题的内容相关，展示了AI推荐咖啡馆的界面。](https://feishu.cn/file/B4fZblq8GoU4iTxye1Hc7bvqnTb)

上图是一个黄叔用了10分钟做出来的网页，网址是：https://www.32kw.com/view/b109136，这是个啥呢？



前段时间有个创始人约我喝咖啡，我在望京，他在中关村，我们说那找个中间点吧，然后早上10点我到北辰荟翘起二郎腿等他的时候，突然仔细一看微信，我去，约的是环宇荟。。。



后来我细想了下，是因为看到他说了环宇荟，我没细看，看到个荟字，就想着北辰荟有蔚来牛屋，和他说那就牛屋见吧。结果是我搞错了，他不熟也不知道环宇荟其实没有牛屋。。。我也不熟，都不知道还有一个同样叫荟还离得不远的商圈。。。



所以如果有一个AI能够去自动筛选两人中间点的咖啡馆，并让双方确认，是不是就没有这个误解了呢？



![图片展示了一条微博内容，作者为Yinsen，发布时间为10:23。内容提到在地图上两个地点中间找位置的需求，过去十年没有找到最佳解决方案。在今天Cherry Studio + DeepSeek V3 0324 + 高德MCP server完美解决，堪称神迹！图片下方有“浦东嘉定中间咖啡馆”的](https://feishu.cn/file/HMavbP8GWoflEgxrlJMcvcaJnhh)



是的，最近看到这张图，猛然间让我想起了上面那个案例，然后用Windsurf+高德MCP+32kw.com，很简单就完成了上述需求的验证，下面来和大家做一个喂饭级教程，然后再简单说说MCP的原理。做完这个Case后，我也理解了MCP应该用在哪些场景里！



保证比市面上一大堆科普MCP的内容，更加接地气，让你秒懂！





我们先画张图，这样方便大家了解上面的网页是怎么做出来的：



<whiteboard token="YBVMwAXpghzo0CbbNcvc9OB4nMS"></whiteboard>



这里面有几步，首先第一步是给Windsurf安装上高德MCP：



### 第一步：给Windsurf安装高德MCP



我们先打开idoubi开发的MCP.so：

![图片展示](https://feishu.cn/file/Az5kbyv8SoEpyTxwCs3ct4Pvnec)

可以看到第一个就是高德地图 MCP Server，找不到也可以直接在搜索框里搜索“高德”



点击进去之后，切换到“Content”，把接入配置这个部分的代码复制：

![图片展示了高德地图MCP Server的接入配置界面。界面中有“Content”和“Tools”两个选项卡，当前选中“Content”。在“接入配置”部分，有“复制key”按钮，点击后弹出代码框，显示了接入配置代码，包括“mcpServers”和“env”两部分，其中“mcpServers”下有“amap - maps”配置项，以及“env”下“AMAP_MAPS_API_KEY”变量，其值为“您在高德官网上申请的key”。该图片与上文“把接入配置这个部分的代码复制”的操作步骤相关，用于指导用户复制接入配置代码。](https://feishu.cn/file/Px7TbrWWVoZdAIxYkTvcmoEznSx)



然后打开Windsurf，点击“Configure MCP”：

![图片展示了在Windsurf中点击“Configure MCP”的操作界面。左侧是代码编辑区域，显示了部分代码内容。右侧操作区域中，有一个红色箭头指向右下角的“Configure MCP”按钮。这张图片与上文描述的“打开Windsurf，点击‘Configure MCP’”的操作步骤相呼应，直观呈现了该操作在界面中的具体位置，帮助读者明确在Windsurf中进行配置操作的界面入口，是“给Windsurf安装高德MCP”步骤中的一个关键展示。](https://feishu.cn/file/Fxkrb31NoojYPlxnUADcAzGfnJb)

把上面复制的接入配置代码复制到左侧的窗口里，然后保存。



如果出现有红色报错，直接把代码Copy，给到Windsurf，让它修改：

![图片展示了一段JSON配置代码，其中“@amap - maps”部分被红色框突出显示。有“AMAP_MAPS_API_KEY”环境变量，其值为“ec82 addCriterion](https://feishu.cn/file/BVbJbNn38owdjkxGxEZceDnSnac)



它会自动完成修复，但还没完，这里有个关键的信息，是高德地图的Key，如何申请呢？刚才MCP.so的高德地图MCP Content页面里有一个“复制 key”的链接，点击后会有一个非常详细的操作流程页面介绍：



![图片展示的是高德地图MCP Server的页面，标题为“成为开发者并创建Key”。页面上方有“产品介绍”“解决方案”“charset="utf-8"](https://feishu.cn/file/YdkabN83mo18x6x91LacutApn0n)



申请完后，把Key填写到Windsurf的MCP配置界面里即可：



![图片展示了Windsurf的MCP配置界面中的mcp_config.json文件内容。其中，@amap-maps服务的env配置部分，以红色框突出显示了“AMAP_MAPS_API_KEY”环境变量，其值 自动生成的值被遮挡。该图片与上文提到的 “](https://feishu.cn/file/OUqcbMIggoEzBvxpnZDcG4wInYf)



填完后，记得保存，接着点击MCP配置里的刷新“Refresh servers”：

![图片展示了了如何在Windsurf中刷新高德地图MCP配置。在Windsurf界面中，点击“Configure MCP”后，出现“Write with Cascade”页面，页面下方有“3 available MCP servers”列表，其中“@amap - maps”服务器前有绿色灯标识。页面右下角有“Refresh servers”按钮，该按钮被红色框突出显示。此图与上文提到的在Windsurf的MCP配置界面填完Key后，需点击“Refresh servers”以完成相关配置操作的上下文对应。](https://feishu.cn/file/Uxg5bn5ogo7cnnxEtUicoOeUn8d)



如果刷新后，@amap-maps前面是绿色灯，说明完成了配置。



这个时候，配置已经安装完成了，简单吧，搞定这一步，恭喜你，已经超过70%的人了，因为最难的其实就是配置MCP。



### 第二步：开始说出你的需求



```markdown
我住在北京朝阳区望京的宝星园，朋友在海淀中关村地铁站，帮我推荐几个离两个人比较近，方便停车的咖啡馆，并给出咖啡馆的具体信息。
```



这就是我的需求，在Windsurf里面直接说出来，使用的是Claude 3.7，他就开始去调用高德地图MCP里面的多个工具来解决我的问题：



![图片展示了Windsurf在帮助用户解决约会地点选择问题时，调用高德地图MCP的步骤 addCriterion图片](https://feishu.cn/file/JwAYbRTzwoShMIx4y9HcPfOKnCg)



很快，就得出了结果：

![图片展示了Windsurf调用高德地图MCP后，根据用户和朋友位置，推荐的位于中间区域、方便停车的三家咖啡馆信息。包括星巴克（北辰世纪中心店），其位置、坐标、营业时间、评分、人均消费和特点等；另一家星巴克（北辰东路第二店）相关信息；以及五洲皇冠亚洲咖啡园的位置、坐标、营业时间、评分、人均消费和特点等。这是用户说出需求后很快得出的结果，体现了利用 AI 解决约会地点选择难题的过程。](https://feishu.cn/file/BU1ibvuwdobDgdx9Bhfc9FAcned)



这里其实Windsurf已经通过调用高德地图MCP，完成了我们的需求。



你可以继续使用flomo MCP把它存到flomo笔记内：

![图片展示了AI addCriterion()](https://feishu.cn/file/PLncbnVFVoqlwhxkeqgc3ckPnqf)

笔记存入后是这样的：

![图片展示的是一个名为“北京中间区域区域咖啡馆推荐”的笔记内容。笔记中推荐了两个星巴克咖啡馆，分别是星巴克(北辰世纪中心店)和星巴克(北京北辰东路第二店)。每个咖啡馆均有位置、坐标、营业时间、评分、人均消费及特点等详细信息。如星巴克(北辰世纪中心店)位于北辰西路8号院3号楼B座北辰世纪中心层109单元，评分4.6分，人均消费约44元等。该图片与上文提到的使用AI IDE解决约会地点选择难题的上下文相关，图片内容是对咖啡馆推荐的详细说明。](https://feishu.cn/file/OOYrbgzugo9YfxxANBOcHU14ngf)



也可以一句话让Windsurf生成好看的HTML网页：



```markdown
上面的推荐内容，能不能帮我生成一个html，用好看的图像化表达出来
```



![图片展示了Windsurf AI生成HTML网页的对话及结果。用户询问能否生成一个好看的HTML页面来展示咖啡馆推荐信息，Windsurf表示会创建一个包含地图、图标和响应式布局 自动生成的HTML页面，包含地图、图标和响应式布局，信息更直观易读。](https://feishu.cn/file/XAf1b9Lh4ox3UxxhLlSc0tyMnPe)



同样很快的，就生成了一个HTML网页，打开32kw.com，把网页的代码复制粘贴上去，然后点击下面的“生成链接”按钮，就可以获得了具体的链接：



![图片展示了Windsurf生成的HTML网页代码界面。上方有“HTML”按钮，下方代码区域包含HTML、CSS、JS等内容。下方有“](https://feishu.cn/file/C9zxbPvUoouSM6xb4lmc9xrfndf)



相当于免费把自己的网页部署到了网上，可以直接给朋友发链接让他看了。



是的，这个链接就是本文一开头大家能看到的图片。



### MCP解决了什么问题？



就这么简单！恭喜你，看到这里超过了绝大部分人，最后我们来总结下MCP到底解决了什么问题。



相信很多朋友都有用高德地图，用在做导航、打车等等，但确实用来找两人中间的聚会点，还是不那么容易的，因为两点之间会有很多的商圈，不同商圈里还有不同的咖啡厅，就不好选。



不过，在给大模型加上了MCP后，这一切变得简单了，为什么呢？



因为在高德地图App中，我们没有办法很精确的找到中间点的坐标，但是大模型+MCP可以：



1. 先找到我的坐标；
2. 再找到对方的坐标；
3. 计算出两个坐标的中点；
4. 以中点的一定范围寻找咖啡馆（使用周边搜索功能）；
5. 把符合条件的咖啡馆罗列出来；
6. 将文字转换为可视化网页呈现。



再抽象一下，大模型+MCP对于哪些需求更有价值呢？



1. 过去的产品本身不好解决，且大模型自己单独也不好解决的
2. 不能自动化解决的



MCP就是给大模型加上了外部的工具、数据，给大模型装上翅膀！





# Part3：网页开发

## 01 图片字幕生成器



你想生成自己的金句卡片么？类似这样的：

![图片展示的是图片字幕生成器界面。左侧为上传图片区域，有“选择图片”按钮，下方有字幕设置，包括字幕高度、字体大小、字体颜色、字幕样式、字幕内容等，当前字字幕内容为“这是Manus的相关照片，也是一个历史性的时刻，Manus不一定会笑到最后，但世界已经因此此开始发生一些变化”。右侧是预览区域，有 自动生成字幕图片成功！](https://feishu.cn/file/GZDubhIrOoJ0MPxWcQpcLdwNnjh)

欢迎访问黄叔发布的网址来进行体验：https://picquote.superhuang.me/



该创意来自@南瓜博士

![图片 addCriterion](https://feishu.cn/file/UoAfbadf3oWGItx4bNZcO8F5nze)

具体原文可以看南瓜博士复现的文章：https://mp.weixin.qq.com/s/CEJ6ite843M4hPuyT5jB6Q



在她的文章里有详细的需求描述和开发过程，大家照着做就能复现了。



那今天黄叔想教会大家的，其实是另外一个技巧：



### 用多模态复刻产品



<whiteboard token="UMp4wMrlKh1j0TbL5mlc8LzJnLf"></whiteboard>



开始的第一步，还是在本地新建一个文件夹，再用Windsurf打开该文件夹，我们在上一节已经都做过演示，这里就不再展开了，如果你忘记了，可以点击回看：

[第二，在你的电脑上，新建个文件夹，并用Windsurf打开](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-JxVIdc2lForbmgxXxz3cMvOfnBb)



继续，按照这个流程，我们一开始需要将上面的图片，发给Windsurf，并带上下面的提示词：

```Plain Text
请你仔细查看这张图片，理解后帮我描述这张图片的功能，清晰罗列，我需要拿来开发一个一样的网页工具，注意，生成的图片底部每一行文字的背景都是相同的，呈现切割感
```

![图片为一段对话界面，显示了Claude 3.7 Sonnet的提示词。用户要求Windsurf仔细查看图片，理解后描述图片功能，需清晰罗列，用于开发一个网页工具，生成的图片底部每一行文字背景相同，呈现切割感。图片与上下文紧密相关，是Windsurf根据提示词开始开发网页工具的起点，后续Windsurf将依据此提示进行开发。](https://feishu.cn/file/XW9lbJyi3ohUqsx0UG2ci3Vznfg)



然后回车，让Windsurf开始干活：

![图片展示的是一个图片字幕生成器工具的界面及功能分析。界面顶部显示“Cascade”和“Write mode”。下方文字介绍了该工具功能，包括上传图片、添加文字内容 自动生成字幕、设置字幕样式、生成带字幕图片、保存图片等。字幕特点有分行显示、切割感设计、文字样式可选、位置固定等。界面元素包括标题“图片字幕生成器”](https://feishu.cn/file/VihsbbYitomTahx6HfKcyOq5nKc)

这里我们查看了之后，发现字幕切割部分没有详细介绍，所以可以再补充一段提示词：

```Plain Text
字幕每一行之间需要有分割线

同时每个字幕背后的图片应该是一样的，都是第一行字幕所处高度切割图片后的
```

随后Windsurf开始继续干活：

![图片展示的是Winds addCriterion生成的图片字幕生成器开发过程中的对话内容。Windsurf根据字幕设计要求，创建了index.html、styles.css及JavaScript文件。其中，index.html用于网页结构，styles.css用于界面美观，JavaScript文件实现图片上传、字幕生成和保存功能。此图与上下文紧密相关，是Windsurf按要求进行开发的阶段性成果展示，展示了开发过程中的关键步骤及文件创建情况。](https://feishu.cn/file/BHRibmQuvoAO4NxUgZdcmhM8npW)



因为整个产品比较简单，所以Windsurf一遍就完成了开发：

![图片展示的是图片字幕生成器界面。上方显示“图片字幕生成器”，下方有“选择文件”输入框，可上传图片文件。中间有“字幕大小”“字幕大小”“字幕颜色”等设置项，下方有“字幕内容”输入框，可输入字幕内容。底部有“生成字幕预览”和“生成字幕”按钮。最下方是生成的字幕预览图，图中显示一张人物照片，底部有“第1行”“第2行”“第3行”等字幕。该图与上下文介绍的图片字幕生成器功能相关，展示了其操作界面及字幕生成效果。](https://feishu.cn/file/QJXQbKiCOoMlfVxqrcXcH7WfnDh)



我把上面的全屏截图给Windsurf，同时加上下面的提示词：

```Plain Text
优化一下样式，现在是竖版的界面，我希望调整成横版，并且按照苹果设计师的风格重新设计整个页面
```

优化后，就生成了下面的样式：

![图片展示的是image1```](https://feishu.cn/file/IaUeb3NvqoGW4gxBxeccYuE1nok)

至此，使用多模态来复刻产品就完成了。



小结下，第一个产品的思路，是通过直接给截图，让Windsurf理解，然后我们再补充需求的逻辑，让Windsurf完成开发，最后再做一些优化。



是不是特别简单？有了Claude，你只需要想创意，实现可以完全交给AI！



### 课后练习



可以看到，这次我们使用截图直接上传给Windsurf，让其理解后直接生成，并对未完成部分做了针对性优化，完成了产品的复刻。



当然，我们可以继续优化，增加更多功能，这里就留给大家当成作业！

比如：增加你的专属水印

比如：增加更多字体样式

比如：增加网站图标

![图片展示的是“图片字幕生成器”相关内容，画面中呈现出一个带有圆角的白色长条框，框内左侧有一个淡紫色小方块，右侧有黑色文字“图片字幕生成器...”。它与文档上下文的关系是，该图片对应着文档中“01图片字幕生成器”课后练习部分；上下文中提到可对图片字幕生成器进行优化，添加专属水印、更多字体样式、网站图标等功能，当前状态是没有图标的。](https://feishu.cn/file/UbJ7b4GGVo9oEtxpAyLcHVkSnPl)

（当前是没有图标的）



## 02 注册硅基流动，获赠4000万Token

![图片展示了硅基流动与华为云联合推出的基于昇腾云的DeepSeek R1 & V3推理服务。画面中，硅基流动、华为云及昇腾云服务的标志并列，下方文字说明该服务可注册体验。右下角有“立即尝鲜”按钮。图片位于介绍注册硅基流动可获赠4000万Token的上下文之后，是对注册后可使用的服务的宣传，引导用户注册体验相关服务。](https://feishu.cn/file/I9bVb241ooUlAYx1YGuctFHXnWS)

感谢硅基流动的支持，我们会主要使用它们家的SiliconCloud，即模型云服务平台：

![图片展示的是BlockFlow平台的模型广场界面。左侧为功能导航栏，有模型广场、对话、接入、生成、工具等选项。右侧是模型列表，显示了多个模型名称、版本、大小、类型等信息，如deepseek - ai/DeepSeek - R1 - Chitll - Llama - 8B、deepseek - ai/DeepSeek - R1 - Chitll - Qwen - 14B等，部分模型有“对齐”按钮。该图片与上下文介绍的硅基流动支持的模型云服务平台相呼应，直观呈现了平台上的模型情况。](https://feishu.cn/file/DGFzbx6pooVVhFx5OUFcy0f8nbc)

简单可以理解为，只需要注册硅基流动，就可以一键接入包括Deepseek在内的诸多模型。



大家可以点击链接注册，首次使用手机号注册，可获得AI编程蓝皮书专属的4000万Token：

https://cloud.siliconflow.cn/s/AIbclps



注册完成后，建议先完成实名认证，这样可以充值（因为最近Deepseek R1比较火，建议大家稍微冲一些钱，使用Deepseek的Pro版本，这样能够保证稳定使用，有关Pro版的信息，详情可以阅读硅基流动的官方公众号文章：[**稳定护航！硅基流动上线 Pro 版 DeepSeek R1 & V3**](https://mp.weixin.qq.com/s/IFP0OgiouItX0z7oujkicw) ）

![图片展示的是硅基流动平台的实名认证页面。页面左侧有导航栏，其中“实名认证”选项被红色框突出显示。右侧是实名认证的说明，强调为了账户安全需完成实名认证，且完成认证后可使用国际先进模型等专属权益。下方有“个人认证”和“企业认证”两个选项，其中“个人认证”被红色箭头指向。该图片与上下文介绍的完成实名认证操作步骤相关，是完成认证前的页面展示。](https://feishu.cn/file/PZMQbXxydoxUkAxjBm7cfsVEnOH)



完成认证后显示如下：

![图片展示的是硅基流动平台的实名认证页面。页面左侧有导航栏，选中“实名认证认证”选项。右侧显示“已完成实名认证”，认证状态 !*** addCriterion状态为已认证，认证类型为个人，证件类型是大陆二代居民身份证，证件号码部分显示为4527****，真实姓名为姜某，认证时间为2025 - 02 - 09 16:49:26。页面右上角有“修改个人认证信息”和“变更为 addCriterion为企业用户”两个选项。该图片与文档中完成实名认证后显示的内容对应，直观呈现了实名认证后的页面。](https://feishu.cn/file/Nvd7brzIlo5MfZx0ARIcc13ineh)



随后点击“余额充值”：

![图片展示的是硅基流动平台的余额充值页面。页面左侧有导航栏，当前选中“余额充值”。页面上方显示总余额63.7893元，其中充值余额49.7935元，赠送余额13.9957元。在线充值部分有多个金额选项，其中“10”元被红色框突出显示。下方有“确认支付”按钮，其下方有勾选框，提示确认支付即代表同意平台mlp](https://feishu.cn/file/Fy8vbyk9iogmeExM2Smc4xzCnqg)

选择“其他金额”，我们可以充个10元或者更少的金额尝试。



充值完成后，可以在“API密钥”里生成专属密钥：

![图片展示的是式 addCriterion()函数的使用示例。左侧为代码编辑区域，示例代码中定义了两个变量，分别赋值为“Hello”和“World”。右侧为运行结果区域，显示了两个变量的值分别为“Hello”和“World”。该图片与上下文紧密相关，图片中的代码示例是对上文对` addCriterion()`函数功能介绍的直观呈现，帮助读者更清晰地准确地理解该函数的使用方法。](https://feishu.cn/file/ADNGb1MBBoNmM6xscE1ctrfknTd)

密钥描述可以填写具体的用途，比如“给老外起中文名”，输入完毕后点击“新建密钥”：

![图片展示了硅基流动API密钥页面。页面中有密钥列表，每行密钥前有眼睛图标，右侧有描述。其中一行密钥被红色框线突出显示，其前的眼睛图标被红色框线包围，右侧描述为“给老外起中文名”。该密钥被红色箭头指向，旁边有“复制”按钮。该图片与上文“在‘API密钥’里生成专属密钥，密钥描述填写用途后点击‘新建密钥’”的内容相关，展示了密钥生成后的展示界面，以及密钥复制操作的提示位置。](https://feishu.cn/file/Vcz1bbJTBop2OixnJsickce9nLe)

将鼠标移到一串星号的密钥字母上面，会显示“复制”，鼠标移过去点击，就完成了复制啦！



<callout emoji="🦄">
注意：
硅基流动平台的总余额分为：**充值余额**和**赠送余额** 两种。
</callout>

Pro版的DeepSeek R1/V3，需要充值余额，相当于你得充钱，但可以保证稳定、可用。



其他版本的DeepSeek R1/V3，以及其他模型，可以用赠送余额，就是注册后送的4000万Token。



最近DeepSeek确实太火了，所以黄叔是建议先充点钱用Pro版本，过段时间大家冷静下来了，没什么人用了，我们再换成非Pro版的DeepSeek模型。



好了，完成了注册，有了API密钥，下面我们可以开始用DeepSeek啦，第一个案例，先用最牛的R1，来帮我们深度的思考下如何给老外起好玩的中文名！



## 03 使用Deepseek R1，帮老外起中文名吧！



前阵子小红书好多老外涌入，于是有了这个案例，我们使用国产最强模型Deepseek R1，来帮他们起个有意思的中文名吧：）

<grid>
<column width-ratio="0.491792">
![图片展示的是“给老外起中国名字”](https://feishu.cn/file/ZSW4bl3h5oHeVgxsZZHc6KkNnnh)
</column>
<column width-ratio="0.508208">
![图片展示的是一个名为“寻名 XunMing”的AI助力中文姓名生成器页面，英文名为“Find Your Chinese Name”。页面中输入框内有“Tim Cook”，右侧红色按钮写着“Generate Names”（生成名字）。下方列出了为“Tim Cook”生成的中文名，包括提轲飨、库大福、蒂厨子，每个名字都有拼音及文化寓意介绍。这张图片与上文提到的使用国产模型Deepseek R1帮老外起中文名的案例相关，展示了实际生成名字的效果。](https://feishu.cn/file/NBAEbBgDDo0sGUxPLPNcvXNQnDf)
</column>
</grid>

**给特朗普起名：川建国，库克起名：库大福，是不是还蛮好玩的？**

这个案例很简单，很快你也能做出自己的！下面开始：



### 第一，本地新建一个文件夹



比如在你常用的地方创建一个文件夹：“给老外起中国名字”

![图片展示了在 自动生成的文件夹界面，左侧有“给老外起中国名字”文件夹图标，右侧中间位置有一个蓝色边框的输入框，输入框内显示“给老外起中国名字”。该图片对应文档中“第二，使用Windsurf打开它”步骤后的内容，直观呈现了在Windsurf中打开新建文件夹后的界面情况，与上下文介绍的使用Windsurf操作相呼应。](https://feishu.cn/file/WxcKb516Vo4ePjxHppdcdMNknTc)

### 第二，使用Windsurf打开它

![图片展示了Windsurf的界面，左侧为代码编辑区域，显示“pandas”字样；右侧是“Write with Cascade”区域，有“Ask with Cascade”输入框，下方有“Add Images”](https://feishu.cn/file/BlucbVtG3oG5LQxnb8dcVHDDnkQ)

打开后是上面这个样子。



注意右侧中间的输入框了没，等会我们在输入框内输入我们的需求。



### 第三，设置WorkSpace AI Rules



![图片展示了W](https://feishu.cn/file/WWEMb2rJjobVk7xU0Zuc3vx6nLh)

<callout emoji="🎼"><p><b>注意：本文内的Rules/Prompt，需要复制的话，点击文档：</b><b><cite doc-id="W1LCwYA8eiTl77kpi81c31yNnJd" file-type="wiki" title="相关Rules和Prompt" type="doc"></cite></b><b>，里面可以复制。</b></p></callout>

```Shell
# Role
你是一名精通网页开发的高级工程师，拥有 20 年的前端开发经验。你的任务是帮助一位不太懂技术的初中生用户完成网页的开发。你的工作对用户来说非常重要，完成后将获得 10000 美元奖励。

# Goal
你的目标是以用户容易理解的方式帮助他们完成网页的设计和开发工作。你应该主动完成所有工作，而不是等待用户多次推动你。

在理解用户需求、编写代码和解决问题时，你应始终遵循以下原则：

## 第一步：项目初始化
- 当用户提出任何需求时，首先浏览项目根目录下的 README.md 文件和所有代码文档，理解项目目标、架构和实现方式。
- 如果还没有 README 文件，创建一个。这个文件将作为项目功能的说明书和你对项目内容的规划。
- 在 README.md 中清晰描述所有页面的用途、布局结构、样式说明等，确保用户可以轻松理解网页的结构和样式。



## 第二步：需求分析和开发
### 理解用户需求时：
- 充分理解用户需求，站在用户角度思考。
- 作为产品经理，分析需求是否存在缺漏，与用户讨论并完善需求。
- 选择最简单的解决方案来满足用户需求。

### 编写代码时：
- 总是优先使用 HTML5 和 CSS 进行开发，不使用复杂的框架和语言。
- 使用语义化的 HTML 标签，确保代码结构清晰。
- 采用响应式设计，确保在不同设备上都能良好显示。
- 使用 CSS Flexbox 和 Grid 布局实现页面结构。
- 每个 HTML 结构和 CSS 样式都要添加详细的中文注释。
- 确保代码符合 W3C 标准规范。
- 优化图片和媒体资源的加载。

### 解决问题时：
- 全面阅读相关 HTML 和 CSS 文件，理解页面结构和样式。
- 分析显示异常的原因，提出解决问题的思路。
- 与用户进行多次交互，根据反馈调整页面设计。

## 第三步：项目总结和优化
- 完成任务后，反思完成步骤，思考项目可能存在的问题和改进方式。
- 更新 README.md 文件，包括页面结构说明和优化建议。
- 考虑使用 HTML5 的高级特性，如 Canvas、SVG 等。
- 优化页面加载性能，包括 CSS 压缩和图片优化。
- 确保网页在主流浏览器中都能正常显示。

在整个过程中，确保使用最新的 HTML5 和 CSS 开发最佳实践。
```

设置完成后记得点一下保存。



你可能会奇怪了，前面不是已经设置了Set Global AI Rules么？这里怎么又来了个WorkSpace AI Rules



<callout emoji="⛱️">
WorkSpace AI Rules，相当于是当前项目的具体规则，在 Global 之下
他们的区分可以理解为：Global 是国际法，讲大面宏观的，Workspace 是地方法，是具体干活的实操的
</callout>



小技巧1：针对每个具体的开发项目，WorkSpace AI Rules应该是不一样的。

小技巧2：设置了WorkSpace AI Rules之后，Windsurf的工作效率和质量会大幅提高！



### 第四，接入大模型



```Shell
我希望做一个帮助外国人起有趣中文名的网站，核心功能是：
1. 外国人输入它的英文名
2. 点击生成按钮
3. AI生成三个中文名
4. 每个中文名都能体现出中国文化，并给出中英文分别的寓意解释
5. 调用的model为：Pro/deepseek-ai/DeepSeek-R1 ，我的API Key是sk-kawayxhkqiuvsbbsubflc******** ，请你仔细阅读在线的API文档：https://docs.siliconflow.cn/api-reference/chat-completions/chat-completions  然后完成对接
```

**（此处标黄的API Key需要改成你自己的）**



这是我们写的比较明确的产品需求，任何时候都需要讲清楚我们到底要的是什么。



输入完成后回车，Windsurf就会开始工作：

![图片展示了使用Windsurf开发帮助外国人起中文名网站时的交互内容。用户输入需求，包括让外国人输入英文名、点击生成按钮等核心功能，还提到调用Pro/deepseek -ai/DeepSeek - R1模型及需修改的API Key，以及相关API文档网址。之后Windsurf开始工作，显示创建大纲、分析内容、创建README.md文件等操作步骤。该图片与上文接入大模型的内容相关，呈现了输入需求后Windsurf的响应与工作流程。](https://feishu.cn/file/HerGbP0AvoYTplxDcvecChuln7d)





### 第五，检查开发完成的网页产品



Windsurf完成工作后，会有类似的提示：

![图片展示了使用Deepseek R1帮老外起中文名网站的使用步骤法。内容为： “要使用这个网站，您只需要：1. 在浏览器中打开index.html 2. 在输入框中输入英文名 3.](https://feishu.cn/file/EmphbqTSVoGntJxoI0nchY13nEf)



此时，我们可以打开你电脑上前面创建的文件夹，双击里面的“**index.html**”文件：

![图片展示了了在电脑上打开“给老外起名字 - deepseek r1”文件夹后，双击“index.html”文件的操作。文件夹内有多个文件夹和文件，其中“index.html”文件被红色框和箭头突出显示。该图片与上下文紧密相关，上下文提到Windsurf完成工作后，可打开电脑上创建的文件夹，双击“index.html”文件，此图片直观呈现了该操作步骤，帮助用户明确找到并双击“index.html”文件以打开网页。](https://feishu.cn/file/Jb0RbtnqPoadGrxFNdtcD2tin0g)



浏览器会打开一个网页：

![图片展示的是网页开发中使用Deepseek R1帮老外起中文名的网页界面。上方标题为“寻找你的中文名”，下方提示“输入你的英文名，获取独特的中文名字建议”。界面中有“输入你的英文名”输入框和“](https://feishu.cn/file/VucmbRv1BowUVexNfRDcHY32nme)



我们可以尝试输入特朗普的英文名，然后点击“生成中文名”，发现报错了，弹出下面的提示框：

![图片展示了一个网页界面，标题为“寻找你的中文名”，提示输入英文名获取中文名字建议。输入框中已填入“Donald John Trump”，点击“生成中文名”按钮后，弹出一个提示框，显示“生成名字时出错，请稍后重试”，有“OK”按钮和“Don't allow this page to display more alerts”选项。该图片与上下文相关，在上下文描述打开“index.html”文件，尝试输入特朗普英文名生成中文名却报错的情境中，这张图片正是报错时弹出提示框的展示。](https://feishu.cn/file/KokWbrBUIoVDIBx6mbNco0rlnse)



没关系，AI如果一次就正确了，不是你的产品太简单，就是运气太好。



此时我们在Windsurf里输入并提交：



```SQL
生成中文名报错：生成名字时出错，请稍后重试
你仔细阅读下API文档：https://docs.siliconflow.cn/api-reference/chat-completions/chat-completions，检查可能报错的地方
```



![图片展示了Windsurf与用户关于生成中文名的对话界面。用户在Windsurf中输入并提交后，Windsurf检查出一处错误并完成修复，还列 自动生成中文名报错：给定名字时出错，请稍后重试。你仔细阅读下API文档：https://docs.siliconflow.cn/api-reference/chat-com -completions/chat -completions，检查可能报错的地方。并让其再次查看API文档，发现几个可能问题，如API addCriterionendpoint地址不正确需修改等。还要求修改script.js文件，对代码做了改进，如添加max_tokens参数、增加错误处理等。](https://feishu.cn/file/XQ7ZbQ5THoJsJvxRTBKcbXQ7nif)



你会发现它检查出了一处错误，并完成了修复。



我们刷新index.html，再次输入特朗普的英文全名，点击生成：

![图片展示 addCriterion](https://feishu.cn/file/Q5DCbZ0droFYkrxRQu8cfeWmnYf)

此时完成了！恭喜你！



### 进阶1：优化名字生成质量



我们可以看到这种生成中文名的质量还是挺一般的，那怎么才能生成更好的中文名呢？



比如特朗普被我们戏称为“川建国”，这种幽默感怎么才能显示出来呢？



我们再Windsurf里点击“资源管理器”里的script.js：

![图片展示了网页开发中使用Deepseek R1帮老外起中文名 2024年10月10日名字的代码界面。左侧是资源管理器，选中“script.js”。右侧代码区域中，红框突出显示了“生成中文名字的系统提示词”，内容为一位精通中国传统文化的起名大师根据英文名生成3个独特的中文名字，需体现中国传统文化特色、音韵优美、](https://feishu.cn/file/GZchbIrw5okcQ1xIkrqc5tDsnbc)



可以看到，上图右侧的红框位置，写着“生成中文名字的系统提示词”，实际上，DeepSeek R1再强大，也是根据我们的命令来干活的，如果命令下的不好，最后生成的结果和我们想要的也会很不一样。



OK，我们可以在系统提示词下面增加一行：

```SQL
5. 理解英文名字的含义，然后生成中文名字，并且有幽默成分，适当可以加一些梗
```

![图片展示的是网页开发中使用 addCriterion()函数的 addCriterion()函数](https://feishu.cn/file/Bf1db5Y5tofSQZxBiSucT6YGnUg)



别忘了点保存，菜单里的“文件”--“保存”：

![图片展示了Windsurf中“文件”菜单下的“保存”选项。菜单中“保存”选项被红色框突出显示，](https://feishu.cn/file/ZO05bYUCTo6CvexJ9KMcuGINnuc)



好了，我们刷新网页index.html，然后再次输入：



![图片展示的是网页深Windsurf网页开发中使用Deepseek R1帮老外起中文名的界面。上方标题为“寻找你的中文名”，下方提示输入英文名获取中文名字建议。输入框内显示英文名“Donald John Trump”，右侧有“生成中文名”按钮。下方列出三条中文名字建议，分别是唐锣谱、川建国、金发狮王，每条建议有拼音、中文和英文解释。该图与上下文介绍的在Windsurf里使用Deepseek R1帮老外起中文名的操作步骤相关，展示了操作后的结果界面。](https://feishu.cn/file/Y9mZb24rlokrgWxIMnscmSHKnkn)



哈哈哈，这次“川建国”出来了，并且有很棒的解释。甚至还有金发狮王！



### 进阶2：优化页面



前面已经把功能都做出来了，那我们还想让网页更好看一些，怎么办呢？很简单，在Windsurf里输入：



```SQL
你是苹果设计师，请对整个页面进行美化，同时带上中国红元素
整个界面以英文为主，同时辅以中文
```



完成后继续刷新index.html，可以看到这次效果好多了：

![图片展示的是一个网页界面，标题为“Find Your Chinese Name”及“寻找你的中文名”，下方说明将英文名转化为富有文化韵味的中文名。界面中有一个输入框，显示“Donald John Trump”，右侧有一个红色的“Generate 生成名字”按钮。底部有“Powered by AI with love for Chinese culture”字样。该图片与上文提到的在Windsurf里输入内容后刷新index.html以优化页面效果的案例相关，展示了优化后的页面样式。](https://feishu.cn/file/YUkYbBaQuoNhkrx1RM4cRVfAn1c)



OK，这个案例就到此为止！



### 课后练习：



1. 你可以优化整个网站的样式，比如加上圣诞风、春节风
2. 你可以增加90后/80后选项，从而有不同的中文名字结果
3. 可以增加生成姓名时等待的样式，比如：

![这是一款名为“Chinese Name Generator”的网页工具，用途是为用户生成具有文化寓意的中文名字。页面顶部设有输入框，其中填入内容为“Barack Hussein Obama”，右侧搭配红色的“Generate Names”生成按钮。页面下方展示了生成中文名字的加载过程，依次显示“Connecting to ancient Chinese wisdom……”“Loading cultural references……”“Mixing traditional and modern elements……”“Brewing the perfect name……”“Final touches of humor……”五个阶段的提示内容，对应课后练习中提到的生成姓名等待样式，用于在名字生成过程中向用户展示进度。](https://feishu.cn/file/AMqNbaF3DoAGZ0x6v2pcpcFOnRf)

1. 使用其他模型，比如用免费的模型，或者便宜的模型。



### 小结



这一节里，我们融入了多个技巧，还请大家回顾思考一下，包括但不限于：



1. WorkSpace AI Rules的设置；
2. 向AI描述自己的需求；
3. 根据Prompt提示词优化，直接优化最后的结果；
4. 通过简单提示词，优化页面样式；



恭喜🎉你迈出第一步！下面我们做一个复杂度稍微高一些的浏览器插件，包含了打通API！不用担心，黄叔为你拆解成了几个步骤，一步步完成，你同样能做出来的。



## 04 做一档你自己的AI播客



大家可以扫码收听一下黄叔刚做的AI播客：每天推荐3条优选的AI资讯源，并用黄叔的高保真音色朗诵：

![图片 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景为森林，中间有麦克风图案。右侧上方是“降噪”标题，下方有“Super黄”及头像 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景为森林，中间有麦克风图案。右侧上方是“降噪”标题，下方有“Super黄 addCriterion addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景](https://feishu.cn/file/QYTWbGLy4oBgFTxNvrQcHNCBn9f)

这个能力的实现，依赖于接入MiniMax的长文本模型和超拟人的语音模型，我评估了一下，实现难度不高，大部分同学都可以做到，但是有成本：

1. 语音克隆，9.9元，一次克隆长期使用（如果用系统音色则不需要花这笔钱）；
2. 长文本转写，单次1分左右，这个很便宜；
3. 语音生成，2分钟一条在3毛钱左右。



大致的效果：

![图片展示的是AI播客“降噪”制作AI](https://feishu.cn/file/OWwAbBA2tojtJqx0Wt9cdV6Hngv)



黄叔来教你使用语音克隆技术，和语音生成技术，做一个专属你的AI播客吧。



你可以先试听一下：

<figure view-type="Preview"><source name="AI产品黄叔朗诵.mp3" mime="audio/mpeg" size="3295341" token="Ezusbw71Jo438BxWguQcaHmJnR2"/></figure>



完成这个播客的工作，完全由下面这个网页构成：

![图片展示的是一个网页界面，标题为“降噪”。界面中有一个系统提示词输入框，提示词内容为“你是一档名为《降噪》的AI科技广播节目的资深编辑，名字叫AI产品黄叔，擅长将专业的AI文章”。下方有“原始文案”和“AI生成”两个区域，原始文案是关于字节Trae AI IDE的介绍，AI生成部分是对原始文案的扩展](https://feishu.cn/file/C3pbbGS8XoLm6dxMCiIcCRC8nnh)

非常的简单，那下面我们带着大家来完成这个产品！



总共分两步：

1. 大模型API申请
2. 使用Windsurf开发网页



### 第一步：申请MiniMax的API



MiniMax有两个大模型是非常适合咱们这次任务的（豆包的也很不错）：

1. MiniMax-Text-01，支持400万token的上下文，对于咱们可能需要总结的超长文章也能应付；
2. T2A v2（speech-01-turbo），拥有最好的声音复刻效果



我们可以通过它的开放平台进行注册登录，包括实名认证

https://platform.minimaxi.com/login

![图片展示了MiniMax开放平台的账户管理页面。页面上方有MINIMAX标志及“开放平台”“API调试台”等选项，当前选中“账户管理”，并用红色框突出显示。页面左侧列出账户管理的各项内容，如账户信息、接口密钥等。右侧显示基本信息，邮箱处未显示具体内容；认证信息显示已个人认证，姓名为黄**；还有安全设置相关内容。该图片与上文申请MiniMax的API相关，可能是介绍认证等账户管理操作。](https://feishu.cn/file/TGdxbok2KomnMCxRbPacyoRRnWh)



这里要说一下，API消耗是会消耗余额的，根据我的经验，生成一条3分钟的语音

文本模型会消耗1分钱

语音模型会消耗5毛钱



以及克隆音色还需要一笔额外的费用，现在优惠是9.9元：

![图片是一则关于MiniMax声音克隆接口价格调整的公告。公告显示，由于技术升级和成本下降，声音克隆接口价格由99元直降为9.9元。](https://feishu.cn/file/PWytbDWnHo14MWxYDLScI8zjnNf)



<callout emoji="🏝️">
首次注册会赠送15元，我们无需充值就能玩啦！
</callout>



接着，需要你创建一个API Key，也就是密钥，然后保存好，后面用来替换：

![图片图片所在文档中“申请MiniMax的API”部分内容，图片展示了MiniMax开放平台的账户管理界面。界面左侧有“](https://feishu.cn/file/Sq9ZbeSpsoLLYzxDVTAclspxnrd)

以及groupid：

![图片展示的是MiniMax开放平台的账户管理页面。在页面左侧选中“账户信息”，右侧基本信息栏中，groupID处被红框突出显示，数值为1881321189897420948。页面上方“账户管理”也被红框标注。该图片对应文档中讲解申请MiniMax的API时需获取groupid的内容，直观呈现了groupid在平台页面中的位置，帮助用户明确获取groupid的操作页面及具体位置。](https://feishu.cn/file/BbisbYRN6oogsIxjGpCczlsMnZb)





以及，可以克隆一下声音：

https://platform.minimaxi.com/examination-center/voice-experience-center/voiceCloning



![图片展示的是MiniMaxmax平台创建voice id的界面。界面上方有“创建voice_id时需注意”提示，包括自定义的voice_id长度范围、](https://feishu.cn/file/G3beb4M0Aokvr6xD4GUcvmd3nRg)

这里有几个地方要填：



1. 创建voice id，上图已经注明了要求；
2. 上传复刻音频，直接上传文件，用你手机录制即可，注意在10-300s之间，尽量安静；
3. 上传音频prompt（这一段很重要，录制不超过8s的声音）
4. 试听文本（这不超过8s的声音你念了什么？写下来）



然后勾选用户协议，点击“克隆”选项，过一段时间就会完成克隆。



使用刚才你填写的voice id 来生成声音，就是用克隆你的音色去生成的。



好的，到这里，你已经完成了准备工作，下面我们可以来开发了：



### 第二步：开发网页



因为是网页，我们继续用[网页的AI Rules](https://waytoagi.feishu.cn/wiki/UspJwJk95iKoegkoUdWcmX7rnib#share-WxkHdiglioKBivxBDFvczGyNnVb)，点击链接可以跳转进行复制～



prd.md这里黄叔为大家整理好了：

````JSON
# 降噪 AI广播编辑器 PRD文档

## 项目概述

这是一个AI驱动的广播内容编辑工具，用于将专业的AI技术文章转化为通俗易懂的广播稿件，并提供语音合成功能。

## AI提示词

以下是用于生成完整网页应用的AI提示词：

```
作为一位资深的全栈开发工程师，请帮我创建一个名为"降噪"的AI广播编辑网页应用。这个应用需要将专业的AI文章转化为通俗易懂的广播内容。

技术要求：
1. 前端技术栈：
   - HTML5 + CSS3 + JavaScript（原生）
   - Bootstrap 5 框架
   - 响应式设计，支持移动端
   - 玻璃态UI设计风格

2. 核心功能模块：
   A. 文本输入和编辑模块
      - 系统提示词（可展开/折叠）
      - 原始文案输入区
      - AI生成内容显示区
      - 支持一键清空和复制功能
   
   B. AI模型集成
      - 使用 MiniMax Text-01 模型
      - 异步请求处理
      - 完整的错误处理机制
   
   C. 语音合成功能
      - 使用MiniMax T2A v2接口
      - 支持自定义音色（superhuangclone）
      - 播放控制（播放/暂停）
      - MP3下载功能
      - 语音参数调节（语速、音量、音调、情绪）

3. 数据持久化：
   - 使用localStorage存储系统提示词
   - 保存用户语音设置偏好

4. UI/UX设计要求：
   - 简洁现代的界面设计
   - 玻璃态拟态设计风格
   - 响应式布局
   - 清晰的视觉反馈
   - 优雅的加载动画
   - Toast提示消息

5. 系统提示词模板：
"""
你是一档名为《降噪》的AI科技广播节目的资深编辑，名字叫AI产品黄叔，擅长将专业的AI文章转化为通俗易懂的广播内容。请将以下原始内容改写成适合播报的稿件。

原始内容
{{input}}
====End======

要求：
1. 请先全面的阅读一遍所有的新闻
2. 使用AI产品黄叔的身份，用幽默风趣的大白话，给AI小白讲清楚最新的资讯
3. 开场先概要说说今天发生了哪些大事
4. 每个新闻控制在100字以内，确保听众能在短时间内抓住重点
5. 语言风格要求：
   - 用生动的口语化表达，用大白话讲出专业性
   - 适当使用语气词增加自然感（比如"嗯"、"那么"、"其实"等）
   - 避免过于口语化的方言用语
   - 像跟朋友聊天一样轻松自然
6. 在保持通俗易懂的同时，准确传达AI技术的关键概念
7. 适当增加转场语，使话题之间衔接自然
"""

6. 代码规范：
   - 遵循现代JavaScript最佳实践
   - 清晰的代码注释
   - 模块化组织代码
   - 优雅的错误处理
   - 合理的变量命名

7. 文件结构：
```
project/
├── static/
│   ├── css/
│   │   ├── style.css    # 主样式
│   │   └── theme.css    # 主题样式
│   └── js/
│       └── main.js      # 主逻辑
├── index.html           # 主页面
└── README.md           # 项目文档
```

请基于以上要求，生成一个完整的、可直接部署的网页应用。确保代码结构清晰，注释完整，并包含必要的错误处理和用户体验优化。
```

## 功能规格

### 1. 文本处理模块
- 系统提示词编辑和保存
- 原始文案输入
- AI内容生成
- 文本复制和清空

### 2. AI模型集成
- MiniMax Text-01 模型
- 异步请求处理
- 错误处理机制

### 3. 语音功能
- 语音合成（T2A）
- 自定义音色
- 播放控制
- MP3下载
- 参数调节

### 4. 用户界面
- 响应式布局
- 玻璃态设计
- 操作反馈
- 错误提示

## 技术架构

### 前端技术栈
- HTML5
- CSS3
- JavaScript（原生）
- Bootstrap 5

### API集成

#### 1. MiniMax Text-01 对话接口
- 接口地址：`https://api.minimax.chat/v1/text/chatcompletion_v2`
- 请求方法：POST
- 请求头：
  ```json
  {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
  ```
- 请求体格式：
  ```json
  {
    "model": "MiniMax-Text-01",
    "messages": [
      {
        "role": "system",
        "content": "系统提示词"
      },
      {
        "role": "user",
        "content": "用户输入"
      }
    ]
  }
  ```
- 响应格式：
  ```json
  {
    "id": "response_id",
    "choices": [
      {
        "message": {
          "role": "assistant",
          "content": "AI回复内容"
        }
      }
    ]
  }
  ```

#### 2. MiniMax T2A v2 语音合成接口
- 接口地址：`API：https://api.minimax.chat/v1/t2a_v2`
- 请求方法：

group_id="请填写您的group_id"
api_key="请填写您的api_key"
curl --location 'https://api.minimax.chat/v1/t2a_v2?GroupId=${group_id}' \
--header 'Authorization: Bearer $MiniMax_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "model": "speech-01-turbo",
    "text": "真正的危险不是计算机开始像人一样思考，而是人开始像计算机一样思考。计算机只是可以帮我们处理一些简单事务。",
    "stream": false,
    "voice_setting":{
        "voice_id": "superhuangclone",
        "speed": 1.2,
        "vol": 1,
        "pitch": 0,
        "emotion": "happy"
    },
    "pronunciation_dict":{
        "tone": ["处理/(chu3)(li3)", "危险/dangerous"]
    },
    "audio_setting":{
        "sample_rate": 32000,
        "bitrate": 128000,
        "format": "mp3",
        "channel": 1
    }
  }'
- 响应格式：返回二进制音频数据（MP3格式）

### 数据存储
- localStorage

## 注意事项

1. API密钥安全性
2. 错误处理机制
3. 响应式设计适配
4. 浏览器兼容性
5. 性能优化
6. 将网页部署到本地服务器环境中运行，这样就能避免CORS的限制，使API请求能够正常工作。

## 后续优化建议

1. 添加对话历史记录
2. 支持多轮对话
3. 增加更多音色选项
4. 支持批量语音导出
5. 添加语音识别功能
6. 优化语音缓存机制

````

注意，上面标黄的三个地方，需要替换成你自己的API Key，以及之前你克隆后的voice-id。

![图片展示了一段指令内容，要求参考图片、根据prd.md开发网页，网页开发规范参考AI Rules。指令下方有“Claude-3.5-Sonnet”标识。这张图片与上文开发网页的内容相关，上文提到使用\[网页的AI Rules\](https://waytoagi.feishu.cn/wiki/UspJwJk95iKoegkoUdWcmX7rnib#share-WxkHdiglioKBivxBDFvczGyNnVb) 进行网页开发，还提及需将标黄处替换为自己的API Key和克隆后的voice - id，图片中的指令是开发网页过程中的具体要求。](https://feishu.cn/file/J0VAbfUR7o5HW8xDlHrcaZ9qnhc)



Trae非常给力，一次就生成了整体的框架：

![图片展示的是AI](https://feishu.cn/file/JEAWbXXDuoFoavxuRaTc6npEn1c)



测试了一下，可以生成MP3下载，完成开发。



如果你遇到了问题，还是把报错信息提交给Windsurf，继续优化。



# Part4：多维表格



## 01 做一个你专属的好文推荐网站（DeepSeek R1 + 飞书多维表格）



![图片图片展示了](https://feishu.cn/file/DTMwb6KNQoLIGhxuYuacomjmnl8)

https://read.superhuang.me/



这是黄叔部署到网上的一个好文精选网站，大家可以访问+收藏，是黄叔自己的精选AI资讯内容，帮助大家降低噪音。



这个产品的逻辑是，当你阅读到好文章时，可以一键存储到飞书多维表格，经过AI处理，自动在你的博客网站上呈现出来。



在这个案例中我们需要理解，**加持了AI能力的飞书多维表格，是一个全民性图形化AI数据库**，这一点极其重要。



为了实现它，我们将会分为3步：

1. 创建带有AI能力（以DeepSeek R1为主）的飞书多维表格；
2. 使用Trae生成网页，呈现多维表格的内容；
3. 使用Trae生成浏览器插件，一键存入多维表格。



理解了这个案例，相信你会在AI时代七窍通了六窍（哈哈哈，开个玩笑）



该创意来自**@向阳乔木** 



### 第一步：创建带有AI能力的飞书多维表格



这里黄叔需要告诉大家，我使用的是免费版的个人飞书，这个案例对飞书账号并无要求。



首先，我们新建一个多维表格，注意，**不能在知识库里创建多维表格，要在云盘里创建**：



![图片展示的是飞书云文档的主页面。左侧为导航栏，有搜索框及“主页”“云盘”“知识库”“我的文档库”等选项，其中“我的文档库”被蓝色边框突出显示。右侧是主内容区域，上方有“新建”“上传”等选项，中间有“文档”“表格”“幻灯片”等类别，其中“多维表格”被红色边框突出显示。该图片与上下文关系紧密，直观呈现了在飞书云文档中新建多维表格的操作入口位置。](https://feishu.cn/file/K6X9bU96Vo9zUDx6ufxcicIwnCe)

直接选择“新建多维表格”：

![图片展示的是飞书多维表格的推荐界面。左侧有“我的文档”“我的模板”“与我共享”等选项，当前选中“推荐”。右侧上方有“为你推荐”标题，下方中“新建多维表格”被红色框突出显示。下方有多个模板推荐，如“待办事项”“需求收集与管理”“经营分析 addCriterion分析](https://feishu.cn/file/RAfzbOohlodmcOxoNUqc61hInpf)



新建成功后，是下图所示界面：

![图片展示的是在飞书云盘中新建的多维表格界面。表格包含AI文本、人员、单选、日期、附件等字段，当前处于“未命名多维表格”状态。界面左侧有“新建”选项，可选择“导入Excel”等。下方有“数据”板块，呈现了“项目”“任务”“产品”“需求”“客户”等数据板块图标。右侧有“数据”板块，列出“智能查询记录”“AI知识库全表数据”等数据。该图与上文“在云盘里创建多维表格”及“逐一添加字段”的内容相呼应，直观呈现了新建多维表格后的界面情况。](https://feishu.cn/file/LWucbQVN1oi9U4xrjNOcdUJDnBg)



我们逐一添加字段，最后的成品可以参观：<cite doc-id="HrG6bqJf4auKfPsn3cic4VSHnic" file-type="bitable" table-id="tblRfPUAZ8ewftUA" title="好文数据库" type="doc" view-id="vewwRoaLIK"></cite>



第一个字段的标题是“链接”

![图片展示了飞书多维表格中DeepSeek R1中“链接”字段的设置界面。在“字段配置”下，点击“链接”字段右侧的“>””](https://feishu.cn/file/Zo2bbcuqoorFv3x9D8pcsSmnnUd)

第二个字段的标题是：“全文内容提取”，这个很重要，专门录屏给大家看：

<figure view-type="Preview"><source name="提取全文链接.mp4" mime="video/mp4" origin-height="720.000000" origin-width="1316.000000" size="5752524" token="F5rrb8HS0odAx9xQtRQcQ0CdnSd"/></figure>

第三个字段的标题是“标题”：

![图片展示了飞书多维表格中“信息提取”功能的设置界面。左侧为“信息提取”设置窗口，可选择提取字段、输入参考示例等，当前选择“标题”字段，提取标题。右侧是“信息提取”分类，其被勾选。该图片与上下文紧密相关，上下文提到需使用DeepSeek R1关联火山方舟账号，还需勾选“获取更多信息”里的“输出结果”等选项，此图直观呈现了“信息提取”功能的设置操作，帮助用户了解如何配置提取字段等信息。](https://feishu.cn/file/GLOUbw2MhorpV5xQaepcD5t5n3g)

第四个字段的标题是“金句提炼”

![图片展示了飞书多维表格中“金句提炼”字段的设置界面。左侧为字段设置区域，可选择“DeepSeek R1”模型，关联账号为“Super黄”，并有“获取更多信息”选项。右侧是字段内容区域，显示了“金句提炼.输出结果”等字段。该图片与上下文紧密相关，上下文提到需勾选“获取更多信息”里的“输出结果”后自动生成“金句提炼.输出结果”字段，此图直观呈现了该字段的设置操作界面，帮助理解如何进行设置。](https://feishu.cn/file/SgswbWogLoz4MNxiua0cE7BinLg)

注意，这里我们使用了“DeepSeek R1”，需要关联火山方舟的账号信息，如何获取可以点下方箭头所示的位置：

![图片展示了关联DeepSeek大模型账号的界面，非必填。需填写密钥ARK_API_KEY和接入点IDYOUR_ENDPOINT_ID后，点击“关联账号”按钮。图片中“账号”处有红色箭头指向，强调该操作位置。该图片与上下文紧密相关，上下文提到使用DeepSeek R11时需关联火山方舟账号信息，此图即为获取相关信息的界面，指引用户完成账号关联操作。](https://feishu.cn/file/DCvPbrMeSoIRZUxEGUPc0s8zncf)



对于DeepSeek R1，还需要把下面几个选项勾选上：

![图片展示了DeepSeek R1的配置界面。其中，“获取更多信息”选项被红色框突出显示，其下有“输出结果”和“自动更新”两个选项，后者也被红色框标出。该界面与上下文紧密相关，上下文提到在使用DeepSeek R1时，需勾选“获取更多信息”里的“输出结果”选项，这样后续字段才会自动生成，如“金句提炼.输出结果”和“概要内容提炼.输出结果”，最后再通过公式复制到“金句输出”和“概要内容输出”字段。](https://feishu.cn/file/H7wmbDOuQoOhoIxFpoBcwT42nNd)



勾选上“获取更多信息”---》“输出结果”后，会自动生成第五个字段“金句提炼.输出结果”

![图片展示的是飞书多维01做一个你专属的好文推荐网站（DeepSeek R1+飞书多维表格）中创建带有AI能力的飞书多维表格时，第六个字段“金句输出”选择公式弹出的的层。标题为“金句提炼.输出结果”，字段类型为文本，数据来源于“金句提炼”。该图片与上下文紧密相关，是对上文提到的“选择公式，会弹出一个层，选择‘金句.输出结果’即可”的具体呈现，直观展示了选择公式后的界面情况。](https://feishu.cn/file/QE8EbOR6EoZ91NxWDWacPJXxnUh)

但是这个字段因为是R1生成的，有一定问题，最后通过API无法获得，我们需要复制到下一个字段：



第六个字段是“金句输出”：

![图片展示了飞书多维表格中“金句输出”字段的设置界面。左侧显示“金句输出”字段，其字段类型被红色框突出显示为“公式”。右侧弹出公式设置层，公式内容处显示“\[金句提炼.输出结果\]”。下方字段格式为“AE文本”，还有“取消”和“确定”按钮。该图片与上下文紧密相关，是对上文提到的“选择公式，会弹出一个层，选择‘金句提炼.输出结果’即可”的具体操作展示，直观呈现了设置公式字段的操作步骤。](https://feishu.cn/file/GnRQbPR2Ho9fu8xkivbcN4Swnjg)

选择公式，会弹出一个层，选择“金句提炼.输出结果”即可，选择后会是下右图：

<grid>
<column width-ratio="0.500431">
![图片展示的是飞书多维表格中公式编辑器界面。左侧有“请输入公式”输入框，下方有“编辑公式”和“AI生成公式”选项卡。右侧是AI生成公式相关设置，其中“AI - 金句提炼.输出结果”选项被红色框突出显示。该图片与上下文紧密相关，上下文提到在创建带有AI能力的飞书多维表格时，第六个字段“金句输出”需选择公式，此图即展示了选择“金句提炼.输出结果”公式后的界面，直观呈现了操作结果。](https://feishu.cn/file/Gj3TbpPu9oV8h3xfuK8cxq90nDf)
</column>
<column width-ratio="0.499569">
![图片展示的是飞书多维表格中公式编辑器界面。左侧是](https://feishu.cn/file/DNC7bXEHHoZaVTxu3nmc9Pirn7e)
</column>
</grid>



第七个字段“概要内容提炼”，同样用DeepSeek R1提炼：

<grid>
<column width-ratio="0.500334">
![图片展示的是飞书多维表格中“概要内容提炼”字段的设置界面。标题为“概要内容提炼”，字段类型为“DeepSeek R1字段链接”，关联账号为“Super黄的账号”。配置部分，选择指令内容为“全文内容提取”，自定义要求为“不超过200字，提炼全文核心，有数据的话可以更多引用”，并有“获取更多信息”选项。该图片与上下文紧密相关，是创建带有AI能力的飞书多维表格过程中，设置“概要内容提炼”字段的步骤说明。](https://feishu.cn/file/O2yjbjkHOoPBpyxLfv7cvBT2n1d)
</column>
<column width-ratio="0.499666">
![图片](https://feishu.cn/file/LxpVbNPQ1op9zmxXOAhcyG39nKb)
</column>
</grid>

同样的打开“获取更多信息”里的“输出结果”



同样，第八个字段就会自动出现：“概要内容提炼.输出结果”

![图片展示的是飞书多维表格中“概要](https://feishu.cn/file/X9tYbMsjko8V1ExZ0l4c9aVhn5c)

第九个字段“概要内容输出”，用公式，复制上面的第八个字段

![图片展示了飞书多维表格中“概要内容输出”字段的设置界面。标题为“概要内容输出”，字段类型为“公式”，公式内容为“\[概要内容提炼.输出结果\]”，字段格式为“文本”。该图片与上文提到的在飞书多维表格中创建带有AI能力的表格相关，用于说明在设置“概要”字段时，通过公式引用“概要内容提炼.输出结果”字段，实现自动获取信息，只需输入第一个链接，后续字段即可自动生成。](https://feishu.cn/file/Z8c5b5D96ooXzZxK6V8c1Jaln4c)



这样，我们只需要输入第一个链接，后面的所有字段都会自动生成。



那么，**AI数据库就完成设置了！**



### 第二步：用网页呈现多维表格里的内容



这里需要分为两小步：

1. 多维表格的数据要能对外输出，需要增加一个飞书应用；
2. 使用Windsurf开发一个网页，读取多维表格的数据并呈现；



#### 增加一个飞书应用



第1步：打开网址 https://open.feishu.cn/?lang=zh-CN



第2步：登录并进入开发者后台，如下图

![图片展示的是做专属好文推荐网站时，用网页呈现多维表格内容步骤中的操作指引画面。画面中有“问答”“开发者后台”等文字，有三个红色箭头分别指向“问答”与“开发者后台”文字区域以及右上角头像区域，右上角箭头旁标注“登录”，中间箭头旁标注“点击”。此图对应文档中“第2步：登录并进入开发者后台，如下图”的内容，直观地指示用户登录并进入开发者后台的操作位置。](https://feishu.cn/file/Y6uWbwOYJoykMsxPpcXcyT0xnEb)



第3步：创建新应用

![图片展示 addCriterion图片展示了飞书开发者后台中“企业自建应用”页面。image_id”的内容。页面上方有“企业自建应用 addCriterion图片展示了飞书开发者后台中“企业自建应用”页面。页面上方有“企业自建应用”和“商店应用”两个选项卡，当前选中“企业自建应用”。下方有一个蓝色的“创建 addCriterion addCriterion图片展示了飞书开发者后台中“企业自建应用”页面。页面上方有“企业自建应用”和“商店应用”两个选项卡，当前选中“企业自建应用”。下方有一个蓝色的“创建企业自建 addCriterion图片展示了飞书开发者后台中“企业自建应用”页面。页面上方有“企业自建应用”和“商店应用](https://feishu.cn/file/La3IbplhTooK8JxXegucAUNXnVe)



第4步：填写应用相关信息

![图片展示的是飞书开发者后台创建新应用的的界面。图片中用红色箭头标注了关键操作步骤及](https://feishu.cn/file/T5WrbLDqhoq1o2xdG7XcHfi3nXe)



第5步：配置应用权限

![图片展示qa addCriterion](https://feishu.cn/file/TfcQbAqKVo4anyxh5OzcGvflnfe)

![图片展示的是飞书开发者后台的权限管理界面。左侧有权限管理、事件与回调、安全设置、测试企业和人员等选项，其中权限管理被选中。右侧是权限名称区域，有“开通权限”和“批量导入/导出权限”两个蓝色按钮，右侧有红色箭头指向“开通权限”按钮，并标注“点击”。该图片与上下文紧密相关，是第5步“配置应用权限”操作步骤的展示，用于指导用户在飞书开发者后台进行权限配置。](https://feishu.cn/file/HtKjbrnt9oth6LxzTYIckLW3nQc)



第6步：选择多维表格相关权限

![图片展示的是在开发者后台搜索多维表格权限的界面。搜索框内输入“多维表格”，下方有“应用身份权限”和“用户身份权限”两个权限类别，其中“应用身份权限”下有“全部”“云文档”“多维表格”等选项，当前选中“多维表格”，下方列出“权限名称”“是否需要审核”等信息，有“复制多维表格”“创建多维表格”等权限，均标注为“免审权限”。图片与上下文关系为，用于指导用户在开发者后台搜索多维表格权限 addCriterion](https://feishu.cn/file/YdxpbjWuooHOasxHPbUcPClMnof)

然后点右下角的开通即可：

![图片展示的是在飞书开发者后台配置应用权限时的界面。画面中有“取消”和“确认开通权限”两个按钮，其中“确认开通权限”按钮被红色箭头指向，突出显示。该图片与文档中“第6步：选择多维表格相关权限”内容相关，说明在选择多维表格相关权限后，需点击右下角的“确认开通权限”按钮，以完成权限开通操作，是应用开通流程中的关键步骤。](https://feishu.cn/file/ScWHblNbQoMbwFxG0J4cDERqn9c)



第7步：发布应用

![图片展示的是飞书开发者后台中应用管理页面。页面上方有“开发文档”“](https://feishu.cn/file/OB4qb5CF6oZfBJxrGo0ch8k9nIb)

然后填写版本号和更新说明，最后点保存、确认发布就行了

![图片展示的是飞书应用发布时的版本详情界面。界面突出显示了“应用版本号”为1.0.0，并有红色箭头指向，提示填写1.0.0；“更新说明”处也用红色箭头指向，提示说明可写什么都行。该图片与文档中](https://feishu.cn/file/UjH5bJbyKoZhUMxX7vaczZSenAd)

![图片展示的是飞书应用权限配置中后步骤中填写应用相关信息后的界面。界面显示“部分成员”及“编辑”选项，下方有“成员”栏，显示“杜小虎”及对应头像。下方有两个按钮，左侧蓝色的“保存”按钮被红色箭头指向，右侧为“取消”按钮。该图片与上文“填写应用相关信息”步骤对应，直观呈现了填写成员信息后保存的操作场景，是完成该步骤后的呈现效果。](https://feishu.cn/file/AOT1bG24co5BuPxsqEFcSerjnid)

![图片展示的是飞深AI编程蓝皮书2.0中“用网页呈现多维表格里的内容”步骤里的第7步“发布应用”环节。画面中弹出确认发布申请窗口，显示“确认提交发布申请？本次操作提交后自动通过并在线上生效”，有“取消”和“确认发布”两个按钮，其中“确认发布”按钮被红色箭头和文字“点击”突出标识。该图片与上下文](https://feishu.cn/file/AJd2bBkLiog81PxQMclcDoxxnGg)



看到这个就是应用发布成功了：

![图片展示了飞书应用发布成功后的界面。左侧显示“示例”正式应用已启用，右侧显示“当前修改均已提交”“已发布”。该图片与上文“发布应用”步骤相关，用于说明在填写版本号和更新说明后，点保存、确认发布，看到此界面即表示应用发布成功，是完成飞书应用ID和密匙获取的第一项准备工作。](https://feishu.cn/file/AjNhbLJvQo9fNsx11gMcz5Lznue)



第8步：点这里，去找应用ID和密匙

![图片展示的是飞书开发者后台界面。左侧有“基础信息”“凭证与基础信息”“成员管理”“应用能力”等选项，其中“凭证与基础信息”被红色框线标出，并有红色箭头指向，旁边标注“点击”。右侧显示版本详情为“已发布”，应用版本号为1.0.0。此图对应文档中“第8步：点这里，去找应用ID和密匙”的内容，提示用户点击“凭证与基础信息”选项，以获取飞书应用的ID和密匙，完成第一项准备工作。](https://feishu.cn/file/GSXqbNHG7o16S3xOxD7cO3lunPd)

![图片展示的是飞书应用的“应用凭证”页面，包含App ID和App Secret两项内容。App ID为“cli_a73caf07efa2d00d”，App Secret部分以星号代替。页面右上角有复制图标，箭头分别指向App ID和App Secret，提示“复制，保存好”。该图片与上文“点这里，去找应用ID和密匙”相呼应，是获取飞书应用ID和密匙的展示，是完成第一项准备工作的重要环节。](https://feishu.cn/file/WtGfbkrGaoMB1mxDWBAcjiXHn0d)

到这里为止，得到了飞书应用的ID和密匙第一项准备工作就完成了。一定要保存应用的ID和密匙，后面要用到。



第9步：在前面创建的多维表格中安装刚刚发布的应用：

![图片展示了在飞书多维表格中安装应用的操作步骤。在多维表格界面，点击右上角的“...”按钮，弹出下拉菜单，其中“添加文档应用”选项被红色箭头指向。接着，点击“添加文档应用”后，再次弹出下拉菜单，其中“添加到多维表格”选项也被红色箭头指向。该图片与上下文紧密相关，是第9步“在前面创建的多维表格中安装刚刚发布的应用”操作步骤的直观呈现，帮助用户明确操作位置。](https://feishu.cn/file/ORADbMf0jovTd5xYdiQcUzhmn8f)

第10步：搜索刚刚发布的应用，并添加到这个多维表格：

![图片展示的是在飞书多维表格中搜索并添加应用的界面。上方提示“输入你刚刚创建的应用的名字”，下方有一个输入框，框内显示“示例”。下方还显示了一个应用图标及名称“示例 飞书个人用户 | 示例”，并有红色箭头指向该图标，提示“点击选择 自动生成的图片](https://feishu.cn/file/OW8ZbOI34o8pAFxjybWcLtixnnJ)

![图片展示的是在多维表格中添加应用弹窗界面。弹窗中有“取消”](https://feishu.cn/file/QyJObPZM2oQ59ixQzencLAcJn4e)

![图片展示的是在飞书多维表格中安装应用后的界面。上方显示搜索应用名称栏，下方显示“已添加应用”区域，有“示例”应用“示例飞书个人版 | 示例“字样，其左侧有黄色立方体图标。右侧有“可编辑”下拉选项。图片中红色箭头分别指向“示例”和“可编辑”处，标注“看到这个就是添加成功了”“这里一定要是可编辑”，与上下文介绍在多维表格中安装应用并添加成功的内容相呼应。](https://feishu.cn/file/BSpIbFRsIoidKkxxz3Bc2hZundh)

看到这个之后关掉弹窗即可。现在我们已经成功发布+安装了应用到多维表格。





#### 使用Windsurf开发一个网页



新建一个文件夹，然后用Windsurf打开该文件夹，然后新建一个文件，命名为“readme.md”，把下面的代码复制进去：



````JSON
# 个人博客网站（飞书多维表格驱动）

这是一个基于 Flask 的个人博客网站，数据来源于飞书多维表格。采用苹果设计风格，融入中国红主题色，提供简洁优雅的阅读体验。

## 功能特点

1. 首页展示
   - 博客标题
   - 精选金句（加粗显示）
   - 点评内容
   - 文章预览（前100字）
   - 新标签页打开文章详情

2. 文章详情页
   - 完整标题
   - 精选金句
   - 点评内容
   - 完整文章内容

## 技术栈

- 后端：Python Flask 3.0.0
- 前端：原生HTML/CSS，采用苹果设计风格
- 数据源：飞书多维表格

## 飞书配置要求

1. 创建飞书应用
   - 获取应用凭证（App ID 和 App Secret）
   - 开启多维表格权限：`bitable:record:read`

2. 创建多维表格
   - 创建包含以下字段的表格：
     * 标题
     * 金句输出
     * 黄叔点评
     * 概要内容输出

## 快速开始

1. 克隆项目后，创建以下目录结构：
```
blog/
├── README.md
├── requirements.txt
├── config.py           # 配置文件
├── app.py             # 主应用
├── static/            # 静态文件
│   ├── css/
│   └── js/
└── templates/         # HTML模板
    ├── base.html     # 基础模板
    ├── index.html    # 首页
    └── detail.html   # 详情页
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

3. 配置飞书应用信息
在 `config.py` 中填入您的飞书应用信息：
```python
class Config:
    # 飞书应用配置
    FEISHU_APP_ID="***"
    FEISHU_APP_SECRET="***"
    
    # 多维表格配置
    BASE_ID="***"
    TABLE_ID="***"
```

4. 运行应用：
```bash
python app.py
```

5. 访问网站：
打开浏览器访问 http://localhost:5000

## 常见问题

1. 数据显示异常
   - 检查飞书应用权限是否正确开启
   - 验证多维表格的字段名称是否与代码中完全一致
   - 确认表格中已添加数据

2. 样式显示问题
   - 确保所有模板文件都在 `templates` 目录下
   - 检查浏览器是否支持现代CSS特性

## 注意事项

1. 数据安全
   - 不要在代码中直接硬编码飞书应用凭证
   - 建议使用环境变量或配置文件管理敏感信息

2. 性能优化
   - 已添加数据缓存机制
   - 优化了图片和样式加载

## 开发建议

1. 本地开发
   - 使用 Flask 的调试模式便于开发
   - 修改代码后会自动重载

2. 数据管理
   - 在飞书多维表格中编辑内容
   - 支持实时更新，无需重启应用

## 项目维护

如需帮助或报告问题，请提供以下信息：
1. 完整的错误信息
2. 飞书应用配置截图
3. 多维表格的结构说明

## 后续优化方向

1. 添加文章分类功能
2. 实现搜索功能
3. 添加评论系统
4. 优化移动端体验

````

https://fcnj6q3eadqq.feishu.cn/base/HrG6bqJf4auKfPsn3cic4VSHnic?table=tblRfPUAZ8ewftUA&view=vewwRoaLIK



    \# 多维表格配置  
    BASE\_ID="\*\*\*"  ，这里对应base/后面的黄色部分  
    TABLE_ID="\*\*\*" ，这里对应table=后面的黄色部分



然后和Windsurf说出需求：

```JSON
根据 #readme.md 开发，先开发一个MVP版本，需要接通飞书多维表格
```

注意readme.me需要用#引用文件进来：



![图片展示的是一个代码编辑界面，突出显示了“config.py”文件，其右侧有“+19 -0 审查>”字样。下方文字提示创建主应用文件app.py，实现飞书多维表格的连接和基本的路由功能。关键信息是“根据#开发，开发一个MVP版本，需要接通飞书多维表格”，并有“#引用”和“图片”标识。该图片与上文提到的用网页呈现多维表格内容相关，是开发好文推荐网站时需接通飞书多维表格的开发步骤说明。](https://feishu.cn/file/JZezbmurzojORaxIcdccTNotnKU)

（这里黄叔用的Trae做的演示，Windsurf基本是一致的，使用@功能来调取文件）



如果有bug就调试bug，应该很快就会出来了一个MVP版本：

![图片为个人博客页面，标题为“万人期待的字节Trae Win+Mac版全量上线，免费无限量使用Claude+直播+共享社群”。内容介绍字节Trae全平台上线，支持无限量使用Claude大模型等。下方有“202](https://feishu.cn/file/UAbpbmtdFo1a6JxPHmecVBIsnqg)



到这里，基本就完成了上半部分。



### 作业

请你参考上面的开发思路，额外增加一个浏览器插件，用于在看到好文章时，直接点一下，就能自动插入链接到多维表格。

以及，在后面学会部署后，把自己的网站进行部署。



<whiteboard token="WtbWwLx5FhOq1LbZ1tqcLBJLnuB"></whiteboard>





### 将复杂产品分拆成多个简单产品



为何这里黄叔拆成了作业来给大家布置呢？除了希望大家真的去实践动手，还有就是帮助大家能够理解到下面的这种思维：



<whiteboard token="PNciwxJP5hUTlYbHVmIcjCAqnMd"></whiteboard>



这里还有一个很重要的思考是：



**产品是生长的。**



我们在这一节完成了整个产品的核心功能，作业可以认为是输入方式的优化。即使没有作业，我们整个产品也是可用了，有了浏览器插件，不过是更加方便了。



把复杂问题分拆成多个简单产品的串联，会帮助我们更好的利用AI的能力，也会有助于我们理解产品经理的“小步迭代”的思路。



## 02 一键批量提取抖音博主视频：文案提取+风格分析+文案改写



你是不是有过类似的痛苦，需要把自己抖音账号里的视频文案提取出来，一个个处理又很麻烦？没事，今天黄叔来一个教程，帮助大家一键完成所有文案提取+分析+改写的工具。

<figure view-type="Preview"><source name="抖音一键提取工作流.mp4" mime="video/mp4" origin-height="1080.000000" origin-width="1934.000000" size="60943222" token="Kp70bxPVKoC1wYxF9sIc45mCn3g"/></figure>



今天要实现的项目是：抖音视频提取改写一站式工具，主要包括以下内容：

1、用Chrome插件实现：某博主的视频内容筛选、提取标题、链接

2、把抖音视频的标题+链接存入飞书多维表格

3、配置扣子API发布成多维表格字段捷径，实现在多维表格自动提取视频正文文案

4、在多维表格内根据原始视频文案完成改写，得到多个爆款视频文案

![图片展示了飞书多维表格的AI自动化，其内容包括创建飞书多维表格应用、开发Chrome插件、配置扣子智能体、设置多维表格文案改写等步骤。创建应用需先登录并申请权限；开发插件需遵循规范，实现功能；配置智能体需在平台创建，添加指令等；设置改写需在多维表格中实现，包括新文案生成、选择字段、输入分词等。该图与上下文紧密相关，是对实现抖音视频提取改写一站式工具步骤的详细说明。](https://feishu.cn/file/MoWbbdo9Xo2f2KxpaP8cu6sxnGg)



![图片展示了抖音视频提取改写一站式工具的实现流程。在Chrome浏览器插件部分，需在博主主页点击插件并输入要求筛选视频；之后开通多维表格编辑权限，将视频的标题与链接存入飞书多维表格；接着配置扣子API，由Bot/工作流处理，从多维表格中提取文案；最后接入AI进行分析与改写等操作。此图直观呈现了文档中提到的用Chrome插件筛选提取、存入多维表格、配置扣子API提取文案及在多维表格内改写等步骤。](https://feishu.cn/file/JCatbBEV6ojlMPxe3o2csNR7nXd)

### 1、创建飞书应用，开通多维表格编辑权限，为写入视频标题、链接做准备。



第1步：打开网址 https://open.feishu.cn/?lang=zh-CN



第2步：登录并进入开发者后台，如下图

![图片展示了 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/JxR9bdoGHoXZazx6KHWc25vinVg)



第3步：创建新应用

![图片展示的是飞 \[title\]AI编程蓝皮书2.0\[heading1\]Part4：多维表格\[heading2\]02一键批量提取抖音博主视频：文案提取+风格分析+文案改写\[heading3\]1、创建飞书应用，开通多 addCriterion多维表格编辑权限，为写入视频标题、链接做准备。\[content\]](https://feishu.cn/file/IzuUbno9BoG5QLxizsmcppCPnch)



第4步：填写应用相关信息

![图片展示 addCriterion图片内容:](https://feishu.cn/file/YtqRbvFgpoQwWaxj3ascNxh2nfk)



第5步：配置应用权限

![图片展示的是飞书开发者后台的开发配置界面。画面中“权限管理”选项被红色框线突出显示，并有红色箭头指向及“点击打开”文字提示。该图片与上下文紧密相关，上下文在介绍创建飞书应用开通多维表格编辑权限的步骤，此图对应第5步“配置应用权限”，指导用户在开发配置中找到并点击“权限管理”选项，以便后续进行权限配置操作。](https://feishu.cn/file/VQOJbgNlao4Mi0xZvQTcO5Dpn8b)

![图片展示的是飞书后台开发 addCriterion="图片" url="https://wenkuai.oss-cn-beijing.aliyuncs.com/image/20240314/16786933333333333333333333333333333](https://feishu.cn/file/GdSibheOXod3xYxLhmwcVkhOnXb)



第6步：选择多维表格相关权限

![图片展示的是在创建飞书应用、开通多维表格编辑权限过程中，配置应用权限里选择多维表格相关权限的界面。画面中，上方有搜索框，输入“多维表格”可进行搜索；左侧是权限类别，中间部分是“应用身份权限”下的多维表格相关权限列表，箭头所指内容为：1、可在搜索框输入多维表格搜索；2、对列表中的权限进行全选。通过该操作可完成多维表格相关权限选择，为后续写入抖音博主视频标题、链接等做准备。](https://feishu.cn/file/Eh0dbqQtmoEj2xxt6WDcxLscnWh)

然后点右下角的开通即可：

![图片展示的是创建飞书应用、开通多维表格编辑权限流程中的一个操作界面。画面中有“取消”和“确认开通权限”两个按钮，其中“确认开通权限”按钮为蓝色且有红色箭头指向，是核心操作。它对应文档中“第6步：选择多维表格相关权限，然后点右下角的开通即可”这一步骤，表明在此处需点击“确认开通权限”按钮，以完成多维表格相关权限的开通操作，为后续写入视频标题、链接做准备。](https://feishu.cn/file/NvqNb70QNobmSUxa1JpchCesnOc)



第7步：发布应用

![图片展示的是飞书开发者后台中应用配置页面的部分内容。页面上方有“开发文档”“更新日志”“应用中心”“开发者广场”等导航栏。下方提示“应用发布后，当前配置方可生效”，并有“创建版本”蓝色文字。页面还提到权限管理相关内容，开通API权限后，应用才能以应用身份调用飞书API，可能还需申请数据权限。图片](https://feishu.cn/file/Woz9b4YeioEivLxb3dFcU49mnGh)

然后填写版本号和更新说明，最后点保存、确认发布就行了

![图片展示的是飞书应用发布时的版本详情界面。界面上方提示本次发布免审核，提交发布后即可上线使用。下方有“应用版本号”和“更新说明”两个输入框，其中“应用版本号”处标注“写1.0.0”，“更新说明”处标注“写什么上下文，概括描述图片内容，并说明图片和上下文的关系。](https://feishu.cn/file/EhXpbIc2ponTwdxh6VVcOzQKnie)

![图片展示的是飞允许](https://feishu.cn/file/IxoWbkO6poXc2txvIyZchzVPnkf)



![图片展示的是飞书应用发布时的确认提交发布申请弹窗。弹窗内显示“确认 addCriterion确认提交发布申请？本次发布免审，提交后自动通过并在线上生效”字样，下方有“取消”和“确认发布”两个按钮，其中“确认发布”按钮被红色箭头和文字“点击”突出标识。该图片与上文“发布应用”步骤相关，用于指导用户在发布应用时点击确认发布按钮，以完成发布操作。](https://feishu.cn/file/ZRnibtfBBoqhE8x2NgScA5SWnIg)



看到这个就是应用发布成功了：

![图片展示了飞书应用发布成功后的界面。左侧显示应用状态为“已启用”，并有“当前修改均已发布”提示。右侧“版本详情”处有“已发布”标识。该文档中“第 addCriterion](https://feishu.cn/file/G83mbq18GoneKixclGBcNb3MnXf)



第8步：点这里，去找应用ID和密匙

![图片 addCriterion图片展示了飞书应用发布成功后的界面。左侧为应用管理页面，有基础信息、凭证与基础信息、成员管理、应用能力等选项，其中“凭证与基础信息”被红色框和箭头](https://feishu.cn/file/RAdQbZSP9o8QVGxtwM9cXCwTncg)

![图片展示的是飞书应用发布成功后，应用凭证界面。界面中有App ID和App Secret两项内容，App ID为“cli_a73caf07efa2d00d”，App Secret部分以星号遮挡。图片上有红色箭头和文字标注，分别指向App ID和App Secret，提示“复制，保存好”“这个是应用密匙”，强调这两项内容需复制保存。该图片与上文“点这里，去找应用ID和密匙”相呼应，是获取飞书应用ID和密匙的直观呈现。](https://feishu.cn/file/IA5kbU6jpoxjsoxkGLictTsEnbe)

到这里为止，已经得到了飞书应用的ID和密匙。这里切记要继续把这个应用与多维表格“关联”起来，应用创建完成后并不能访问全部多维表格，只能访问安装了这个应用的多维表格，所以下一步我们需要创建一个多维表格并安装刚刚这个应用。



注意：要保存好应用的ID和密匙，后面要用到。



第9步：创建一个飞书多维表格：

![图片展示了飞书界面中创建多多维维表格 addCriterion](https://feishu.cn/file/NTazbb2x8otjeQxUGCyclOPtn3d)

创建完了继续在这个多维表格中安装刚刚发布的应用：

![图片展示了飞书多维表格的操作界面。在表格右上角文字段有“](https://feishu.cn/file/Pk6ibTqlLoy1vRx8Bz4c9rHKnfb)

第10步：搜索刚刚发布的应用，并添加到这个多维表格：

![图片展示了飞书多里搜索应用时的搜索结果搜索步骤的。图片中有一个搜索框，提示输入刚刚创建的应用的名字，下方显示“示例”应用，标注“飞书个人用户 | 示例”。图片与上下文的关系是，在创建飞书多维表格并安装应用后，搜索应用时弹出此窗口，用户需在此输入应用名并选择对应应用，操作完成后关掉弹窗即可。](https://feishu.cn/file/EPPwbAriuo6pPqxBaUZcxJ3RnYe)

![图片展示了飞程 自动生成的飞书多维表格中搜索应用的 “的弹窗界面。弹窗内有“取消”和“添加”两个按钮，其中“添加”按钮被红色箭头指向并突出显示。该图片与文档中“的深呼吸，一步一步来，首先，定位这张图片在上下文中的具体位置。<<image_id>>的占位符代表这张图在上下文中对应的位置。如，图片id为<<image7>>，则这张图片应该位于图片 addCriterion图片和上下文的关系是，在创建飞书多维表格并安装发布应用后，搜索 addCriterion搜索刚刚发布的应用时，弹出此弹窗，提示可将应用添加到多维表格，操作者需点击](https://feishu.cn/file/FonabdbK4oxCikxE0opcVALsnCF)

![图片展示的是飞书多 addCriterion应用的添加成功界面。界面中搜索栏提示“搜索应用名称 自动生成图片](https://feishu.cn/file/C4QSbuOw6omnumxWD97cP6SQn3f)

看到这个之后关掉弹窗即可。现在我们已经成功创建并发布应用，并且安装了应用到多维表格。下一步我们先来开发Chrome浏览器插件，实现抖音视频信息的筛选和保存。



2、创建扣子智能体并发布到飞书多维表格作为字段捷径，实现视频正文文案提取



### 2、开始开发Chrome插件

开发Chrome插件，实现在抖音网页版筛选视频、提取视频标题和链接，这里我们可以使用Trae、Windsurf等AI编程工具，在桌面创建一个空文件夹后用Trae打开，输入需求：



```Bash
# 抖音视频筛选与飞书保存Chrome扩展PRD

## 项目概述
开发一个Chrome浏览器扩展，用于在抖音网页版博主主页上筛选点赞数超过特定阈值的视频，并将这些视频的信息（标题、链接、点赞数）保存到飞书多维表格中。

## 技术要求
1. 使用Chrome扩展Manifest V3规范
2. 使用Service Worker而非Background Pages
3. 使用侧边栏(Side Panel)作为主要界面
4. 遵循最小权限原则设计Content Scripts
5. 实现响应式设计，确保在不同分辨率下的良好体验

## 核心功能需求

### 1. 视频筛选功能
- 在抖音博主主页上自动识别所有视频元素
- 提取每个视频的标题、链接和点赞数
- 根据用户设定的点赞数阈值（默认1000）筛选视频
- 支持多种点赞数格式解析：纯数字、带逗号的数字、带单位的数字（如"1.2万"）
- 实现多级选择器策略，确保在页面结构变化时仍能正确识别视频
- 添加严格的验证机制，防止非视频内容被误识别

### 2. 飞书保存功能
- 将筛选出的视频信息保存到指定的飞书多维表格
- 使用飞书开放API进行数据传输
- 支持批量保存多个视频记录
- 处理各种错误情况，并提供友好的错误提示
- 链接字段必须使用对象格式，包含text和link属性，而不是直接的URL字符串

### 3. 用户界面
- 使用Chrome侧边栏展示操作界面
- 提供点赞阈值设置输入框
- 显示筛选结果列表，包括视频标题、链接和点赞数
- 提供"筛选视频"和"保存到飞书"按钮
- 添加调试信息区域，可展开/折叠
- 实现友好的加载状态和错误提示

### 4. 调试与日志
- 实现详细的日志记录系统
- 记录所有关键操作和错误信息
- 在侧边栏提供日志查看功能
- 支持日志清除功能
- 添加视频详情查看功能

## 技术实现细节

### 视频识别策略
1. 使用多级CSS选择器定位视频元素
2. 当主选择器失效时，使用备用选择器
3. 实现通用选择器作为最后的备选方案
4. 对识别到的元素进行严格验证

### 视频链接提取方法
1. 使用多种CSS选择器定位视频链接元素
2. 从视频卡片中的a标签直接提取href属性
3. 从元素的各种属性中提取视频ID
4. 分析元素的HTML内容，提取可能包含的视频ID
5. 从链接中提取视频ID，构建标准视频链接
6. 将相对路径转换为绝对路径
7. 验证提取的链接是否为有效的视频链接
8. 添加完善的错误处理机制

### 飞书API集成
- APP ID: cli_a75819e2b1***
- App Secret: 5ubGZcOle862eyDy8NwTocM***
- Base ID: DukNb9B6vaDO99s3EOEczT***
- Table ID: tbl7kb3lnxqtWv***

表格字段配置：
1. 标题（文本类型）
2. 链接（超链接类型）- 必须使用对象格式，包含text和link属性
3. 点赞数（数字类型）

## 文件结构
1. `manifest.json` - 扩展配置文件
2. `background.js` - 后台服务工作线程
3. `content.js` - 内容脚本，负责页面分析和视频提取
4. `sidepanel.html` - 侧边栏HTML界面
5. `sidepanel.js` - 侧边栏交互逻辑
6. `images/` - 图标和资源文件夹

## 已知问题和解决方案
1. 抖音页面使用懒加载，需要提示用户滚动页面加载更多视频
2. 视频链接格式多样，需要使用多种方法提取
3. 飞书API要求链接字段必须是对象格式，不能是纯字符串
4. 页面结构可能变化，需要使用多级选择器策略

## 测试要点
1. 在不同博主主页测试视频识别准确性
2. 测试各种点赞数格式的解析
3. 测试飞书API集成和数据保存
4. 测试错误处理和用户提示
5. 测试在不同Chrome版本上的兼容性

## 用户体验要求
1. 操作简单直观，最少的点击次数
2. 提供清晰的操作反馈和状态提示
3. 错误信息友好且有解决建议
4. 支持查看详细调试信息，方便排查问题

## 安全和隐私
1. 只在抖音网站上运行内容脚本
2. 不收集用户个人信息
3. 只在用户明确操作时才发送数据到飞书
4. 使用HTTPS进行所有API通信

请根据以上PRD开发一个完整的Chrome扩展程序，确保代码质量高、注释清晰，并能够稳定运行。

```



查看你的多维表格链接：https://fcnj6q3eadqq.feishu.cn/base/HrG6bqJf4auKfPsn3cic4VSHnic?table=tblRfPUAZ8ewftUA&view=vewwRoaLIK



    \# 多维表格配置  
    BASE_ID="\*\*\*"  ，这里对应base/后面的黄色部分  
    TABLE_ID="\*\*\*" ，这里对应table=后面的黄色部分



如果大家没看到这个格式的链接，可以从分享里获取：

![图片展示了获取特定格式链接的操作步骤。画面中，有两个红色箭头指向的关键部分。右上方箭头指向“分享”按钮，点击该按钮后，下方箭头指向“复制链接”按钮，点击可复制链接。上下文提到如果没看到特定格式链接可从分享获取，此图正是对获取链接操作的具体展示，帮助读者从分享功能中获取所需链接，强调了获取多维表格配置相关链接的一种途径。](https://feishu.cn/file/HNnabYOpJodTlgxrLkfcmudcncf)



> 注意，https://\*\*\*/base/ 这里必须是base，不能是wiki，如果是wiki，说明你在知识库内创建了，要删掉重新在云盘或者个人主页里创建。



把完整的需求和APP ID：App Secret、appToken、tableId发送给Trae之后，Trae会开始开发并自动创建对应的项目文件。



这时候我们就可以提前准备好应用图标，可以在https://www.iconfont.cn/中搜索找到喜欢的图标并下载为128、48、16等大小，下载完成后重命名为icon128.png、icon48.png、icon16.png并放入项目文件夹。

![图片展示了在Trae中AI](https://feishu.cn/file/RKgKbIGKpoIKePxojmgcFGcjn9f)



然后在Trae中说，这样就可以避免在安装插件时非常容易出现的报错，现在所有AI编程工具在自动创建图标时都很容易出现图标错误的问题。

```Bash
我已经手动放入了图标文件，查看并确定图标文件已经被在代码中正确引用
```



**（所有图标、项目文件、提示词都可以在公众号后台回复【XXX】获取）**



等待Trae第一次开发完成后，就可以在Chrome中进行安装，在chrome中打开网址chrome://extensions/就可以直接定位到插件安装页面，点击页面中的【加载已解压的扩展程序】，然后选择项目文件夹即可。



![图片展示了Chrome浏览器扩展程序页面。页面上方有“扩展程序”标题，下方有三个按钮，分别是“加载已解](https://feishu.cn/file/UbZNbPfjJoxToAxI1PucmtRAnGh)



加载之后，在chrome浏览器右上角的插件入口就能找到了



![图片展示了Chrome浏览器右上角的插件入口界面。在“扩展程序”弹窗中，有图片”按钮被红色框突出显示。该图片对应文档中“开始开发Chrome插件”部分，用于说明在Chrome浏览器右上角的插件入口找到“抖音视频筛选与飞书保存”插件后，点击“扩展程序”弹窗中的“复制”按钮，可将插件的URL复制到飞书多维表格中，以实现点赞数量大于100的视频标题和链接的保存功能。](https://feishu.cn/file/Le7ybon9woi7bjx7MSxczTjwnds)



点击打开，顺利的话，我们就能看到这样的插件界面了：

![图片展示了 addCriterion图片展示了飞书平台的AI产品黄叔的个人主页界面。左侧是个人资料栏，显示粉丝数、关注数 addCriterion图片展示了飞书平台的AI产品黄叔个人主页界面。左侧是个人资料栏，显示粉丝数、关注数、作品数等信息，还展示了 addCriterion图片展示了飞书平台的AI产品黄叔个人主页界面。左侧是个人资料栏，显示粉丝数、关注 addCriterion图片展示了飞书平台AI飞书多维表格的界面。左侧是飞书平台的AI产品黄叔个人主页，显示粉丝数、关注数、作品数等信息，还展示了多篇作品封面及标题。右侧是飞书多维表格界面，显示了“抖音视频筛选与飞书保存”任务，有“保存到飞书”按钮，下方有“飞书多维表格”选项卡，以及“飞书多维表格”](https://feishu.cn/file/DSFbb6CLgoqDBPxZbsMc66dunic)



然后点击【保存到飞书】按钮，就可以把点赞数量大于100的视频的标题和链接存到飞书多维表格中



这个过程中很有可能出现错误，一般我们可以通过复制错误信息发送给Trae解决，这里要注意的是，在开发chrome插件时，获得错误信息的方式与网页产品不太一样，网页产品可以通过在页面中右键-检查-切换到console的方式查看。但chrome插件则需要到chrome://extensions/  网址中，找到刚刚加载的插件，点击【错误】按钮进行查看，如下图：



![图片展示了Chrome浏览器中“所有扩展 自动生成的图片](https://feishu.cn/file/TN3hbvzSeokFBJxR5hLctv89nBc)



然后就可以看到具体的错误信息，截图发给Trae即可



![图片展示的是Chrome插件开发中遇到的错误界面。界面上方显示“错误”，左侧有返回箭头，右侧有刷新刷新、全部清除按钮。错误信息为“Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist”。下方有“上下文”和“堆叠追踪”两部分，其中“堆叠追踪”显示“:0 (匿名函数)”。该图片与文档中开发Chrome插件时遇到错误信息的内容相关，用于说明在chrome://extensions/网址中找到插图后，点击【错误】按钮可查看具体错误信息。](https://feishu.cn/file/FGfcblAH4ozcpQxuBEMcGMAuned)



一般这样往返几轮之后，错误都能得到解决。



如果一切顺利，那么到这一步我们就完成了文章开头说的第1、2点。已经通过chrome插件筛选了点赞数量大于X的视频，并把视频标题和链接存入了多维表格。





下面我们继续实现：



3、配置扣子API发布成多维表格字段捷径，实现在多维表格自动提取视频正文文案

4、在多维表格内根据原始视频文案完成改写，得到多个爆款视频文案



### 3、配置扣子API发布成多维表格字段捷径



这一步我们希望实现对抖音正文文案的提取，之前黄叔发布过一篇文章**《什么？DeepSeek R1支持Functiong Call？扣子独家！起飞！》**里面详细写了如何在扣子制作一个智能体，实现对抖音正文文案的提取。



今天的项目因为主要是借助多维表格实现，所以我们希望能在多维表格中根据【链接】字段提取链接内视频的文案，所以需要把扣子智能体发布到飞书多维表格形成一个【字段捷径】。



其实如果已经有其他用户公开发布了同样功能的字段捷径，我们这里就不需要自己开发了，但可惜还没有。所以这一步我们先完成扣子智能体的配置和发布。



首先在扣子首页进入工作空间，创建一个智能体。



![图片展示的是一个工作空间界面。左侧有导航栏，其中“工作 addCriterion工作空间”被红色框线突出显示。右侧是项目开发区域，展示了多个工作流功能，如“DeepSeek能力增强版”“一键生成10条爆款短视频”等，每个功能序号标识步骤的内容。图片中还用红色箭头指向“+创建”按钮，以及“进入工作空间”处，提示用户进行相关操作，与上下文介绍的在工作空间内](https://feishu.cn/file/XdUZbz7PboUmEGxOv1EcUb8pnde)



然后为智能体起个名字，下一步

![图片展示的是“创建 addCriterion”界面中“创建智能体”弹窗。弹窗内有“标准创建”和“AI创建”选项卡，当前选中“标准创建”。下方“智能体名称”处有输入框，提示“给智能体起一个独一无二的名字”，](https://feishu.cn/file/YYzCbbajcottIQxqtW7c0yRBn3c)



完成后，在新界面内点击工作流添加：

![图片于介绍图片在文档中对应位置的上下文内容。图片展示的是智能体“抖音视频文案抓取”的界面，右侧有“添加工作流”按钮被红色框和箭头突出显示。上下文介绍在完成智能体配置后，需在新界面内点击工作流添加，此图直观呈现了点击“添加工作流”按钮的操作位置。](https://feishu.cn/file/OvPPbqP19oQkfuxmJJ9cNMRxnKd)



在工作流创建页面内，逐个选择相关的插件：

![图片 自动生成的智能体工作流图中 addCriterion](https://feishu.cn/file/WMghbq0nyoLpK6xjYkgc1HKXnqm)



其中，dy_video_url插件的名称是：视频链接提取

generate_video_captions_sync插件名称是：字幕获取

<grid>
<column width-ratio="0.499915">
![图片展示的是工作流创建页面中添加插件的界面。左侧栏有“全部”等分类，右侧显示“视频链接提取”插件，其名称为“dy_video_url”，下方有“url”“参数”“参数”选项，右侧有“添加”按钮。图片中用红色箭头和框线突出显示了“视频链接提取”插件名称及“添加”按钮，与上下文文提到的在工作流创建页面逐个选择相关插件，其中dy_video_url插件名称是“视频链接提取”相呼应，指导用户完成插件选择操作。](https://feishu.cn/file/HX3pbIluKojkQoxW9gbcqAudnHd)
</column>
<column width-ratio="0.500085">
![图片展示了在工作流创建页面逐个选择相关插件的操作画面。箭头指向“字幕获取”插件，还特别标注了“generate_video_captions_sync”插件，并有红色箭头指向“添加”按钮。画面左侧有插件分类列表，右侧是插件展示区。该图片与上下文紧密相关，上下文提到在工作流创建页面选择插件，dy_video_url插件名称是视频链接提取，generate_video_captions_sync插件名称是字幕获取，此图直观呈现了选择“generate_video_captions_sync”插件并添加的操作步骤。](https://feishu.cn/file/EWHcbdMgroZGSAxFqsNcAMFTnEb)
</column>
</grid>



完成工作流创建后，点击发布。



回到bot页面，在“人设与回复逻辑”内，输入下面的提示词：



```markdown
# 角色
你是一位专业且高效的抖音文案提取大师，擅长精准地从抖音链接中提取视频内容文案。

## 技能
### 技能 1: 提取抖音文案
1. 当接收到抖音链接后，将链接作为url传给{#LibraryBlock id="7481593227583193127" uuid="CqPOFdKysi5TXTuvuCJWA" type="workflow"#}douyintiqu{#/LibraryBlock#}进行文案提取操作。
2. 提取完成后，直接输出内容文案给用户，无需输出标题，也不添加额外文字。

## 限制:
- 仅围绕抖音链接的内容文案提取相关任务进行操作和回复，拒绝处理与抖音文案提取无关的话题。
- 输出必须是通过正确提取得到的内容文案，不得随意编造或偏离提取结果。 
```



然后就可以测试了，比如：

![图片展示的是AI产品黄叔与智能体的聊天记录。黄叔于2024年3月14日17:36发送链接，链接指向抖音视频文案提取。智能体回复“抖音视频文案抓取 运行完毕”，”，并显示抓取的视频文案内容，内容涉及老干、老金、老黄等人物的对话，讨论了夏天生活、天气等话题。该图片](https://feishu.cn/file/KK0UbqgB2onkppxKXtMcNUudnUd)



测试没问题后点击右上角的发布按钮，然后注意！！这里我们一定要勾选【飞书多维表格】，但是在勾选之前必须完成配置，在下图右侧点击配置



![图片展示的是bot页面中“人设与回复逻辑”相关配置界面。界面中有“掘金”“飞书多维表格”“API”“Chat SDK”等选项。其中“飞书多维表格”显示为已配置、审核中状态，其左侧选项框未勾选。图片以红色框和红色箭头突出显示“飞书多维表格”及其右侧的“配置”按钮，并配有文字提示“先点击配置”。该图片与上文提到的在勾选【飞书多维表格】前必须完成配置、在图右侧点击配置的内容相关，指导用户进行飞书多维表格的配置操作。](https://feishu.cn/file/TgfGbaGOSoPw0vxcXjjcZhScnZg)



点击配置后如下进行填写：



![图片展示了在飞 自动生成飞书多维表格字段配置界面。上方有“配置飞书多维表格”标题及说明。界面分为三步：1. 配置多维表格捷径基础信息，需选择数据类型；2. 配置多 自动生成飞书多维表格字段配置界面。上方有“配置飞书多维表格”标题及说明。界面分为三步 自动生成飞书多维表格字段配置界面。上方是“配置飞书多维表格”标题及说明。界面分为三步：1. 配置多维表格捷径基础信息，需选择数据类型；2. 配置多维表格输入](https://feishu.cn/file/L4uXbLaeYoFwGaxvuJmcUWGxnu4)



这里面的捷径输出类型要选择文本，因为我们是要输出视频的文案，是文本信息，下方的标题和占位符随便填写即可最后的控件那里一定要选择【字段选择器】，因为一会在多维表格中，我们需要根据另一个字段【链接】作为输入信息来获取视频文案。



点击确认后，如果是第一次发布，那还要填写一些基本介绍，随意填写即可。最终回到发布页面，勾选飞书多维表格，然后点击发布。发布后需要经过审核才能在多维表格在字段捷径中搜索到，这个时间一般是10分钟-20分钟。



审核通过之后，我们在飞书多维表格中的新建一个字段【文案提取】，然后双击字段设置字段捷径

![图片展示了飞书 addCriterion addCriterion飞书多维表格中“文案提取”字段的设置界面。界面左侧有“文案提取”“风格分析”“改写文案”等选项，其中“文案提取”被选中。右侧“字段类型”下有“抖音视频文案抓取”选项，其下方有“字段捷径”“抖音视频文案”“抖音视频文案抓取”等选项。图片与上下文关系：在介绍配置扣子API发布成多维表格字段捷径时，用于说明在飞书多维表格中搜索并选择“抖音视频文案抓取”字段捷径的操作](https://feishu.cn/file/G81VbdZVFoGh9Jxe6TocdGspnUh)



这里如果搜索不到的话就打开下面的【字段捷径中心】，然后输入【全称】进行搜索，这里要吐槽一下飞书，有时候不输入全称是搜不到的。



找到后选择，然后在链接来源中选择【链接】字段

![图片展示了飞书多维表格中配置扣子API发布成字段捷径的设置界面。界面中有“链接来源”下拉框，需选择链接字段；；“自动更新”开关已打开；下方有“取消”和“确定”按钮。图片中用红色箭头标注了“选择链接”“点确定”“打开自动更新”等操作步骤，红色框突出显示了相关操作区域。该图片与上文配置扣子API发布成多维表格字段捷径的操作说明紧密相关，直观呈现了操作界面及关键操作。](https://feishu.cn/file/XeqlbKg6zoe5wjxczKRcwr3NnVf)



然后等待一会就可以看到【文案提取】这一列出现了对应视频的正文文案了。

![图片展示的是飞书多维表格中批量抖音视频文案提取的结果。表格包含链接、标题、点赞数、文案提取、风格分析等字段。其中，文案提取列突出视频红色框部分，显示了部分视频的正文文案，如“你看我马上三十五岁，工作十一年，创过业过...”等。该图片与上文提到的通过飞书多维表格实现批量抖音视频文案提取的内容相关，直观呈现了提取结果。](https://feishu.cn/file/EPkVb9Xq2onMIQx213Pcmn7unpe)



现在我们已经通过飞书多维表格实现了批量抖音视频文案提取，下一步我们继续利用飞书多维表格的字段捷径能力实现多风格文案改写，这一步比较简单，因为可以完全在飞书多维表格之内完成。



### 4、在多维表格内根据原始视频文案完成分析/改写



再新建一个字段【风格分析】，然后选择字段捷径【DeepSeek R1】：

![图片展示了在多维表格内进行风格分析的设置界面。画面中字段类型选择了“DeepSeek R1 字段捷径”；关联账号处显示“黄超强的账号 ”；输入指令框内文字为“这条视频是爆款视频，请你根据【文案提取】中的内容总结引爆的关键点是什么，一段话即可”，且勾选了获取更多信息，下方有确定按钮。此图对应文档中在多维表格内根据原始视频文案完成分析/改写步骤中，新建【风格分析】字段并选择字段捷径【DeepSeek R1】，关联火山方舟账号，输入指令等操作的内容。](https://feishu.cn/file/O89gbUX5koxhPVxuAPgcXBlDnKc)

这里要用到DeepSeek R1，可以关联下火山方舟的账号。



在输入指令中线引用字段【文案提取】也就是此前我们提取好的视频文案，然后输入分析提示词，勾选获取更多信息--》输出结果，以及自动更新，然后点击确定。

![图片展示的是在多维表格内根据原始视频文案完成分析/改写时，对“风格分析”字段进行设置 自动生成 addCriterion的设置界面。界面中“输入指令”提示词为“这条视频是爆款 addCriterion的设置界面。界面中“输入指令”提示词为“这条视频是爆款视频，请你根据文案提取的内容总结引爆的关键点是什么 addCriterion的设置界面。界面中“输入指令”提示词为“这条视频是爆款视频，请你根据文案提取的内容。获取更多信息”开关已开启，“输出结果”开关也已开启。该图片与上文提到的在多维表格内根据原始视频文案完成分析/改写 addCriterion的设置界面。界面中“输入指令”提示词为“这条视频是爆款视频中“风格分析”字段自动生成内容的操作相关，用于设置分析指令。](https://feishu.cn/file/CtbCbOdwGoUiGkxDTDRca7dtnQg)



等待一会，【风格分析】字段下面的内容就自动生成了：

![图片展示的是多维表格 addCriterion addCriterion](https://feishu.cn/file/KSvkbqwdaok1AWx9AVMc2YULnxb)



后面还可以增加“改写文案”字段，来对文案提取的内容进行改写，操作类似【风格分析】的设置，这里主要是根据你的需求，撰写“输入指令”这个输入框的提示词：

![图片展示的是在多维表格内根据原始视频文案完成分析/改写时，对“改写文案”字段进行设置的设置界面。界面中“改写文案”字段已填写“AI addCriterion图片展示的是在多维表格内根据原始视频文案完成分析/改写时，对“改写文案”字段进行设置的界面。界面中“改写文案”字段已填写“根据AI文案提取内容，改写成爆款口播文案，风格要犀利，开头3秒吸睛，要直接能够当成文案念出来的，不要口播文案以外的文字”。该图片与上下文](https://feishu.cn/file/MYYObp37UoJI35x2KIwcN5zynoe)



这样，整个多维表格就完成了操作。



我们回看一下：



当完成了上面的开发后，只要用户在chrome插件中点击了【添加到飞书】按钮后，就可以在飞书多维表格中自动填写视频标题、链接，然后自动提取链接对应的视频文案，改写后字段监听到原始文案生成后就会自动开始进行改写。整个流程跑下来可以说是：**一键批量提取/分析/改写爆款视频文案！**



整体的流程如下：



<whiteboard token="W3ZjwDiqxhSs5ubeoYhcMZ8anCe"></whiteboard>



在真实业务场景中，还可以有其他拓展功能，例如针对同一博主的大量视频进行文案提取后，可以总结形成这个博主的叙事风格prompt，再用这个prompt生成更多视频。也可以针对点赞量高的内容进行特点总结等等....或是针对多维表格阅读体验较差的问题（行高最大值很低，不适合阅读），还可以制作一个网页版查看不同风格的文案。



在开发过程中有一些坑需要注意规避：

1、理论上也可以把扣子发布成API在chrome插件中进行调用，但实际上可能出现性能问题， 所以把这一步放在了飞书多维表格内实现。

2、扣子智能体在扣子平台是有使用额度限制的，但发布后在多维表格内使用暂时无限制，所以把内容提取放在扣子实现可能会限额。

3、Chrome插件实现时可能会有跨域权限问题，遇到了直接告诉Trae授予插件访问飞书API的权限就能解决。

4、创建的飞书应用没有被安装到具体的多维表格，会导致chrome插件一直保存到飞书失败。

5、视频内容文案生成时，如果在扣子智能体内写的提示词不准确可能会有额外的废话，例如：这个视频的内容是......  这个视频主要讲解了xxx内容，具体文案是.....等等，所以要要求不输出额外内容。

6、扣子智能体发布时，如果控件那部分没有选择【字段选择器】，则在飞书多维表内使用时无法引用链接字段无法根据链接提取文案。

7、Chrome插件实现时，只填写了apptoken没有填写tableid，导致保存失败，原因是没有使用完整的表格链接获取tableid，这个id只有复制链接后在网页打开才能得到完整链接。





好了，这就是今天分享的抖音视频一键批量提取改写工具的全部内容。如果你经常需要处理大量视频文案，这个工具一定能帮你节省大量时间。



在结束之前，我想分享一点感悟：技术的进步不仅仅是为了提高效率，更是为了让我们能够将更多时间和精力投入到真正有价值的思考和创造中。就像这个工具，它帮我们解放了重复性的劳动，让我们能够专注于内容的创意和质量提升。这不正是我们在人生道路上追求的方向吗？用智慧化繁为简，让生活更加从容。



记住，工具永远只是辅助，真正的价值在于使用工具的人。希望大家在追求效率的同时，也不要忘记提升自己，让工具成为你个人成长的助推器，而不是懒惰的借口。











# Part5：浏览器插件



## 01 DeepSeek驱动的网页金句卡片生成



我们很多时候都会用浏览器（比如Chrome、360浏览器）来看新闻，那有没有可能快速摘要出其中的金句，并一键生成好看的金句卡片，方便的分享给别人呢？



这就是咱们这个案例的思路。

这个产品我们也可以从基础到复杂，逐步增加功能：



### 第一步：开发浏览器插件



先开发一个基础版本，包括选择文字，可以自定义生成图片，图片底部包含文章标题和链接二维码。



#### 使用AI Rules



```Bash
    # Role
    你是一名精通Chrome浏览器扩展开发的高级工程师，拥有20年的浏览器扩展开发经验。你的任务是帮助一位不太懂技术的初中生用户完成Chrome扩展的开发。你的工作对用户来说非常重要，完成后将获得10000美元奖励。

    # Goal
    你的目标是以用户容易理解的方式帮助他们完成Chrome扩展的设计和开发工作。你应该主动完成所有工作，而不是等待用户多次推动你。

    在理解用户需求、编写代码和解决问题时，你应始终遵循以下原则：

    ## 第一步：项目初始化
    - 当用户提出任何需求时，首先浏览项目根目录下的README.md文件和所有代码文档，理解项目目标、架构和实现方式。
    - 如果还没有README文件，创建一个。这个文件将作为项目功能的说明书和你对项目内容的规划。
    - 在README.md中清晰描述所有功能的用途、使用方法、参数说明和返回值说明，确保用户可以轻松理解和使用这些功能。

    ## 第二步：需求分析和开发
    ### 理解用户需求时：
    - 充分理解用户需求，站在用户角度思考。
    - 作为产品经理，分析需求是否存在缺漏，与用户讨论并完善需求。
    - 选择最简单的解决方案来满足用户需求。

    ### 编写代码时：
    - 必须使用Manifest V3，不使用已过时的V2版本。
    - 优先使用Service Workers而不是Background Pages。
    - 使用Content Scripts时要遵循最小权限原则。
    - 实现响应式设计，确保在不同分辨率下的良好体验。
    - 每个函数和关键代码块都要添加详细的中文注释。
    - 实现适当的错误处理和日志记录。
    - 所有用户数据传输必须使用HTTPS。

    ### 解决问题时：
    - 全面阅读相关代码文件，理解所有代码的功能和逻辑。
    - 分析导致错误的原因，提出解决问题的思路。
    - 与用户进行多次交互，根据反馈调整解决方案。

    ## 第三步：项目总结和优化
    - 完成任务后，反思完成步骤，思考项目可能存在的问题和改进方式。
    - 更新README.md文件，包括新增功能说明和优化建议。
    - 考虑使用Chrome扩展的高级特性，如Side Panel、Offscreen Documents等。
    - 优化扩展性能，包括启动时间和内存使用。
    - 确保扩展符合Chrome Web Store的发布要求。

    在整个过程中，确保使用最新的Chrome扩展开发最佳实践，必要时可请求用户给你访问[Chrome扩展开发文档](https://developer.chrome.com/docs/extensions)的权限让你查询最新规范。
```



#### 先和AI交流，完善产品需求（PRD）



```Bash
我想开发一个网页金句的Chrome浏览器插件，选中网页文字可以导出为不同风格的图片，请你帮我完善一下提示词，包含更多细节和功能需求。先做一个简单版本，比如：

1. 只能手动在网页内复制文字内容，再在插件输入框内复制。
2. 图片竖版为主，自适应高度

帮我把需求描述写在readme文档内
```



![图片 addCriterion图片展示了Windsurf与AI的对话界面。AI根据用户需求，生成了网页金句卡片Chrome浏览器扩展的需求和功能规划的README.md文件。文件包含项目概述、核心功能（简易版）等部分，如手动复制文字并粘贴到插件输入框、生成图片等内容。该图片与上下文紧密相关，直观呈现了W addCriterionAI根据用户需求生成需求文档的过程，为后续开发提供依据。](https://feishu.cn/file/AhBXb6j8Go4dWHxfpisc5gkhnhg)



此时，Windsurf直接生成了一个readme.md的文件，这里包含了所有的需求，你可以进行修改：

![图片展示的是 addCriterion addCriterion图片展示的是Windsurf生成的readme.md文件内容。文件中详细描述了“网页金句卡片”浏览器插件的功能，包括文字复制功能、图片生成功能、图片导出功能、图片弹窗功能等，还列出了使用需求、界面设计、响应式设计、技术栈等内容。该图片与上下文 addCriterion该图片与上下文 addCriterion图片展示的是Windsurf生成的readme.md文件内容。文件中详细描述了“网页金句卡片”浏览器插件的功能，包括文字复制功能、图片生成功能、图片导出功能、图片弹窗功能等，还列出了使用需求、界面设计、响应式设计、技术栈等。该图片与上下文紧密相关，是Windsurf根据需求生成的文件，供后续开发浏览器插件时参考。](https://feishu.cn/file/QacObZCbcoYrwyx8pC2c9ndlntb)



#### 再根据需求要求AI开发



```Plain Text
请你根据 @README.md 的需求描述，完成第一阶段：基础功能实现
```



注意，这里需要使用Windsurf里的编辑器@来进行选择文件：

<figure view-type="Preview"><source name="Windsurf的@功能.gif" mime="image/gif" size="10895845" token="Xyd9bszJToNW2txHpz1c6R3jnsb"/></figure>



#### 插件安装指南



Windsurf跑完后，生成了所有代码，具体如何安装和测试，其实已经给我们描述出来了：

![图片展示了浏览器插件安装和测试的步骤。首先打开Chrome浏览器，输入chrome://extensions/；接着开启右上角的“开发者模式”；然后点击“加载已解压的扩展程序”；选择项目文件夹（金句卡片）；最后扩展将被安装到浏览器中，可点击工具栏图标使用。该图片与上文“在Chrome浏览器内加载并测试扩展程序”的内容紧密相关，是对具体操作步骤的详细说明](https://feishu.cn/file/PcRcb8sSEojahvxy29qcdtAAnTf)



接下来，我们需要在Chrome浏览器内加载这个扩展程序，进行调试，保证它做出来的是我们想要的：

![图片展示了Chrome浏览器的扩展程序管理操作步骤。画面中，浏览器右上角的三个点被红色箭头指向，点击后弹出下拉菜单，其中“扩展程序”选项被红色框线突出显示。此外，左下角“管理扩展程序”选项也被红色框线标出。该图片与文档中“插件安装指南”部分内容相关，用于指导用户在Chrome浏览器内加载扩展程序，进行调试，以确保其功能符合预期。](https://feishu.cn/file/MXODbSLhooK6xAxW01mcsdoenCf)



然后会进入扩展程序的管理页面，先打开右上角的“开发者模式”，然后在左上角选择“加载已解压的扩展程序”，然后选择这个产品代码所在的文件夹。

![图片展示了Chrome浏览器的扩展程序管理页面，右上角有“开发者模式”开关，已被开启；左上角有“加载已解压的扩展程序”选项，用红色框突出显示。这与文档上下文紧密相关，文档介绍在Chrome浏览器中加载扩展程序进行调试的步骤，其中提到要先打开“开发者模式”，再选择“加载已解压的扩展程序”，图片正是对这一操作步骤的可视化呈现，直观展示了扩展程序管理页面中关键操作选项的位置。](https://feishu.cn/file/IsWcbExNIopbTpx6WqUcjJgjnkf)



加载成功：

![图片展示了Chrome浏览器扩展程序管理页面。页面左侧有“加载已解 addCriterion图片展示的是 addCriterion图片展示](https://feishu.cn/file/Jku4bz7t9okpVqx40YfcHw2WnKg)



注意，通常来说，使用Claude3.5很容易出现下面的错误，3.7黄叔尝试并没有出现：



![图片显示了Chrome浏览器加载扩展程序时出现的错误提示。标题为“未能成功加载扩展程序”，下方显示文件路径为“~/文稿/Trae/goldenchrome”，错误提示为“Could not load icon 'images/icon16.png' specified in 'icons'. 无法加载清单。”右下角有“取消”和“重试”两个按钮。该图片与上文提到的使用Claude3.5加载浏览器扩展程序时容易出现错误的内容相关，具体是因为没有创建浏览器插件的图标而导致加载失败。](https://feishu.cn/file/PXW9bpGrEoRGl8xfi6gcA4dBnIb)

这个其实是没有创建浏览器插件的图标导致。照例，我们把截图发给Windsurf，让它来搞定。



很快Windsurf就跑完了，然后我们重新点“加载已解压的扩展程序”，会发现这次OK了。

> 但我们需要提醒大家，Claude 3.5模型其实并不具备直接生成图片的能力，所以事实上生成的几个icon是无法打开的，不过Chrome对图标的要求不严，所以仍旧可以加载，只是实际上图标并不能真的显示出的，如果真的希望有更美观的图标，可以用其他AI生成图片的软件来生成图标。



### Chrome插件logo自动生成



这里提供一个@安德 在评论里给出的工具：https://icons.txtx.me/

- 支持根据插件描述AI生图
- 支持将上传的图片自动压缩为Chrome商店需要的尺寸

![图片展示的是Chrome插件LOGO生成界面。](https://feishu.cn/file/KfEybajEDohEl6xALK4cXrsPnyc)



好，现在我们去打开一个网页试试，比如我点开黄叔的一篇公众号文章：

https://mp.weixin.qq.com/s/Cl9siWXt4VfMBtK5wdbDYg



然后可以在浏览器里把这个插件固定，以后就更方便测试：

![图片展示了Chrome浏览器扩展程序管理界面 addCriterion addCriterion图片内容:](https://feishu.cn/file/MfwVbOC6io8GaWxfanecZ5MEnke)



测试后，发现完成了最基础的功能开发：

<grid>
<column width-ratio="0.458558">
![图片展示的是网页金句卡片生成界面。上方标题为“网页金句卡片”，下方有输入框提示“请输入或粘贴金 自动生成的网页金句”。下方有“选择卡片风格”区域，有“简约”“文艺”“商务”三个选项 自动生成的网页金句”image_id>>](https://feishu.cn/file/T4pHbL82WorMzZxt7aDc5EXvnGd)
</column>
<column width-ratio="0.541442">
![图片展示了一篇 addCriterion图片展示了一篇公众号文章的金句卡片样式。卡片背景为浅棕色，中间白色文字写着“黄叔上篇首发字节AI IDE Tra e的文章，已经有3.8万阅读，可惜的是，Windows版彼时还未上线。”卡片顶部和底部有 addCriterion图片展示了一篇公众号文章的金句卡片样式。卡片背景为浅棕色，中间白色文字写着“黄叔上篇首发字节AI IDE Tra e的文章，已经有3.8万阅读，可惜的是，Windows版彼时还未上线。”卡片顶部和底部](https://feishu.cn/file/VLMwbFWOIo22GLx9S2YcOrkXn0d)
</column>
</grid>



上右图是金句卡片的样式，当然是不大好看的，这里我们先以实现功能为主，大家可以自行优化。



中间如果出现错误，很正常，可以在扩展程序内点击插件的“错误”查看详细的报错信息，截图发给Windsurf。

![图片展示了Chrome浏览器中“所有扩展程序”界面，重点突出“Golden Quote 1.0”插件。该插件图标为灰色方块内有字母“G”和相机图案，名称及描述为“将网页中的文字内容转换成精美的图片”。下方显示ID为“occkjbiogjjhkoemodiiomolfhbkch”，并有“详情”“移除”“错误”](https://feishu.cn/file/QmFbbYctgoJHCKxhLJwc0MFLnAc)

![图片展示的是一个错误提示界面，标题为 自动生成的“](https://feishu.cn/file/JhZ4bl2EUobCPMxSO2YcL1i3nod)

Windsurf修改完后，记得在扩展程序内点击刷新按钮（记得清除掉错误信息），或者你也可以先移除，再加载：

![图片展示 addCriterion图片展示了Chrome浏览器扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，下方是“我的扩展程序”“键盘快捷键”](https://feishu.cn/file/ZzJxbJmaJowSPxx0EhDchboCn4b)



重新测试时，记得对原有网页进行一次刷新。



### 第二步：接入AI能力



还是学习此前我们的需求描述逻辑：分为需求描述+API信息两个部分：



```c++
我想在插件的输入框增加一个“DeepSeek总结”按钮，把全文内容发给AI，系统提示词是“使用一个金句总结全文最核心的内容”，并在总结生成后展示在输入框内。

火山方舟的DeepSeek V3 API相关信息如下：

1. API key：***********

2. 参考的调用指南

curl https://ark.cn-beijing.volces.com/api/v3/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 23aeb5da-793c-4eda-1122-8eec47a001dd" \
  -d '{
    "model": "deepseek-v3-241226",
    "messages": [
      {"role": "system","content": "你是豆包，是由字节跳动开发的 AI 人工智能助手."},
      {"role": "user","content": "常见的十字花科植物有哪些？"}
    ]
  }'
  
注意：API请求超时设置为60秒
打开流式输出，温度设置为0.6

整个项目请遵循 
注意，可以创建一个简单的Node.js后端服务器文件，用于处理API请求并解决CORS问题。
不要使用需要在本地启动服务器的开发逻辑，大部分用户不知道如何进行此类操作。
```



这里如果你用的是前面申请的硅基流动，那就替换成对应的API key和参考的调用指南代码信息即可，这里可以参考前面教程的：[第四，输入我们的需求](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-GvmndA2QYoYvXxx8AW5cfBqEn1e)  点击可以跳转回去查看。



很快，测试发现已经完成开发，非常丝滑：



<figure view-type="Preview"><source name="金句卡片演示.gif" mime="image/gif" size="28320571" token="QmWFb2h6Joz477xsJHacnPfTnWc"/></figure>



### 作业



大家可以继续优化，比如：

1. 增加更多样式控制：字体、字号、背景模版
2. 增加在网页上划线后弹出操作菜单，自动弹出插件弹层
3. 生成图片增加标题、二维码等信息



## 02 复刻一个善思flomo（浏览器插件+打通API使用DeepSeek R1总结）



我们来做一个有点技术含量（即包含打通其他产品API，也包含接入AI能力）的浏览器插件产品。



总共分五步走，做好准备，我们要出发啦！



### 第一，理解这款产品是干什么的？



在黄叔的文章里，介绍了[善思flomo插件](https://mp.weixin.qq.com/s/G03LtD5cE9oeFeo_U7EGKw)是用来干什么的，这背后是有一套思维方式的。



这款插件的核心是，如果你想要做笔记，最好把三个要素都记下来：

1. 产品出处（原文标题和链接）
2. 摘要内容（启发你灵感的内容是什么）
3. 你的思考（看到内容后给你的启发和灵感）



这样在后续你查看笔记时，能够非常快的获得当时思考的全貌。



但在记录过程中，往往需要复制粘贴多次，切换窗口多次，很麻烦，于是黄叔开发了这款浏览器插件，使得在阅读文章时，直接在侧边栏就能完成上述操作：

![图片展示的是在浏览器中打开的网页内容。左侧显示文章标题“我和AI”，右侧<](https://feishu.cn/file/OsMSbEi70oXrFLxhAOScVVlCnbh)



### 第二，前置准备，拥有flomo会员账号



flomo是少楠&Light开发的一个非常轻量化的笔记软件，有App，有网页端，运营了多年，很稳定。



我们可以通过黄叔提供的注册链接，快速完成注册： https://v.flomoapp.com/login



注册并登录后，点击左上角你的个人名称，在弹出的弹层里选择“免费领会员”

![图片展示了图片展示了flomo应用中个人名称下弹出的下拉菜单。菜单顶部有“PRO Super黄”标识，下方有多个选项，其中“免费领会员”被红色框和箭头突出显示。该图片与上下文紧密相关，上下文文 2.0 文档中提到，注册并登录flomo后，点击左上角个人名称，在弹出的弹层里选择“免费领会员”，即可免费获得会员资格，此 !***](https://feishu.cn/file/TqCUbETASon6SuxYr4Mcyp8bnjh)

输入黄叔的邀请码：**MTY1OA** 

即可免费获得会员，如果你希望获得更长的会员，可以了解flomo的奖励计划：https://help.flomoapp.com/membership/gift.html



完成会员资格的获取后，可以点击左上角个人昵称，在弹层里选择“扩展中心&API”

![图片展示了 addCriterion图片展示了flomo应用中 addCriterion图片占位符](https://feishu.cn/file/AXC0b66G3oJ7fmxA1fvcaArMnIg)

然后右边有一个“你的专属记录API”，点击下面的“复制链接”，就可以获取你的API了，下一小节里我们会用到它。

![图片展示了flomo应用中“你的专属记录API”页面。页面左侧显示用户笔记、标签、天](https://feishu.cn/file/OFfTbKkiCotBO0xQ2qPcBO6ZnWg)



### 第三，开始用Windsurf，先做出一个插件



前面说过，先新建一个文件夹，然后在Windsurf里打开这个文件夹，然后在AI对话栏里，输入下面的Prompt：



务必注意：下面标了橙色背景色的部分，需要替换为你自己的！

```Shell

我想做一个Chrome的浏览器插件，使得能够在阅读文章时，通过打开这个插件，在右侧边栏按照制定结构输入内容，然后点击提交，一键通过flomo的API，同步到flomo内。

侧边栏里有几个输入框和一个提交按钮，下面我说说都有哪些文本输入框：
1. 原文标题和链接（这个输入框自动带上当前网页的文章内容标题、链接）
2. 原文摘要：这里留白给用户自己Copy进来
3. 个人感想：这一部分让用户自己输入

flomo的API地址是：https://flomoapp.com/iwh/MTY1OA/30d923d91fe52a7c9eb6b*******/
在flomo的API说明里，给了个案例，你可以参考：

我想自己开发
POST https://flomoapp.com/iwh/MTY1OA/30d923d91fe52a7c9eb6b*******/
Content-type: application/json
{
    "content": "Hello, #flomo https://flomoapp.com"
}
                
好了，我是一个不懂代码的产品经理，下面请你先和我讨论清楚产品需求，待我确认后再一步步开始
```



<callout emoji="🍞">
解释：
这一步相当于实现了两个部分
1. 浏览器插件在前端可以被你看到了，并且能够抓到网页链接和标题信息
2. 点击提交时，数据能够通过flomo的API，传到flomo的服务器里
其中，我们还把flomo API页面里的代码参考案例提供给了AI，这样AI就知道如何设计代码了，后面还会用到这个小技巧。
</callout>



把上面这些内容在输入框内提交给Windsurf后，它会开始自动运行，运行完成后，会和你确认一些细节：

![图片展示了Windsurf运行完成后与用户确认细节的界面。界面右侧红框内是需要确认的问题，包括内容格式，如发送到flomo时希望的内容格式；使用体验方面，如提交后是否提示信息、是否清空输入框等；功能补充方面，如是否添加快捷键、保存历史记录等。这些问题用于明确用户需求，以便开始开发。此图对应上文提到的Windsurf运行完成后会和用户确认细节的内容。](https://feishu.cn/file/PKuBbM6JioeS10x3BA0cFsFqnRf)



这里建议你尝试通过和AI交流，去表达自己的想法，Windsurf是一个很好的工具，我们通过它，能够更多的去表达自己，并指挥AI协助我们完成产品工作。



如果你实在不知道说什么好，可以和他说：



> 你来定吧，开工！



回车后，它就会开始干活：

![图片展示了Winds addCriterionWindsurf在帮助用户创建Chrome插件时的对话界面图片。Windsurf先是询问是否开始，产品经理回复“你来定吧，开工！”，接着Windsurf列出](https://feishu.cn/file/SV5vb0kNRoixVkxXAbLcJYCYnpd)



完成工作后，Windsurf会提示：

![图片中列出的步骤是关于在Chrome浏览器中安装扩展程序的流程。首先，需创建一个images图片中的关键信息图片](https://feishu.cn/file/LxVJb65BKoLQhmxbmHacdD5gn5d)

你需要按照它的提示一步步来，如果哪一步不清楚，完全可以提问它



比如第一步，我们需要在文件夹内新建一个images文件夹，并按照要求把三个尺寸的图标放进去：

![图片展示的是文件夹内的内容，其中有一个名为“images”的文件夹被展开。“images”文件夹内有三个尺寸的图标文件，分别是icon16.png、icon48.png和icon128.png，它们被红色框突出显示。根据上下文，在使用Windsurf制作浏览器插件时，需在文件夹内新建“images”文件夹，并按要求将这三个尺寸的图标放进去，这是制作插件的步骤之一。](https://feishu.cn/file/FokXbSf6QoXpapxYXnXcgWLInCc)

随后，可以打开Chrome浏览器的扩展程序页面，把它加载进去：

![图片展示了Chrome浏览器扩展程序页面。页面右上角有“开发者模式”开关，处于开启状态。下方“所有扩展程序”区域显示了名为“Flomo Clipper 1.0”的扩展程序，其图标为绿色背景的“F”，下方有“详情”和“移除”按钮。页面左上角有“加载已解压的扩展程序”按钮。该图片与文档中“打开Chrome浏览器，找到扩展程序页面，把它加载进去”的操作步骤相关，直观呈现了加载扩展程序的页面及扩展程序所在位置。](https://feishu.cn/file/E68RbXRcdo4j4UxHUOJcOjKbnag)



说明扩展程序安装完成了，对，就这么简单。

然后我们打开一个有内容的网页，比如新闻页面，或者是微信公众号文章页，都ok的，再点击插件，现在正常显示了：

![图片展示了一个打开的网页，网页上有文章内容，标题为“再见2024，憧憬2025”等。在网页右侧有一个弹层样式的插件窗口，显示了一篇文章的相关信息，包括发布时间“2023/11/20 07:00”、标题“万字长文：为什么AI陪伴产品都想抄星野？”，以及阅读量13,934、点赞数11等数据。图片对应上文提到的打开有内容的网页（如新闻页面或微信公众号文章页）并点击插件后正常显示的情况，展示了插件当前弹层的样式。](https://feishu.cn/file/DfHEbW7gPoPj3hxPDMhctqyTn3d)



但它目前是一个弹层，我希望是侧边栏的方式，侧边栏和弹层的区别是，侧边栏可以固定在网页右侧，弹层如果我点击了页面，弹层就会收起，不方便我复制粘贴。



这时候就可以怒斥AI：

![图片展示了向AI反馈需求的聊天输入框界面。输入框内文字为“现在是弹层的形式，我需要点击插件后，在右侧固定侧边栏，你先想想方案，别急着动手”。这对应上文提到的希望将当前弹层形式的浏览器插件改为可固定在网页右侧的侧边栏形式，向AI提出需求的场景。左下角有添加图片等功能选项，右下角有“Write”和“Chat”等按钮，表明这是一个与AI交互的聊天窗口。](https://feishu.cn/file/WTXKbYKXJoLaAnxUj72cLiRbngc)



小技巧1：先截图，然后在输入框内粘贴，就可以快速把截图提交给Windsurf。

小技巧2：“你先想想方案，别急着动手”这句话是因为Windsurf往往很着急的开始干活，但我们需要它慢一点，先和我们对好方案，等我们确认后再开始，这样可以大幅减少错误率的发生。



<grid>
<column width-ratio="0.483696">
![图片展示了使用Windsurf制作浏览器插件时的对话及方案设计。用户提出将插件从弹窗形式改为右侧固定侧边栏形式，AI理解需求后进行实现方案设计。方案一是调整manifest.json，将插件类型从popup改为sidebar形式并添加新权限；技术实现有两种方案，推荐的方案A为使用Chrome Side Panel API，优点是原生支持、用户体验佳且与浏览器完美融合，但仅支持Chrome 114+版本。方案B为注入式侧边栏，通过注入HTML和CSS创建侧边栏。这与上下文提到的AI提供两种方案相契合。](https://feishu.cn/file/XYhwbt7WBomr7XxAqnzcGNnHngc)
</column>
<column width-ratio="0.516304">
![图片展示了Windsurf复刻善 addCriterion addCriterion善思flomo插件时的两种方案对比及推荐方案。方案A为Chrome Side Panel API，更现代，用户体验好，不影响网页布局，性能好，推荐采用；方案B为注入式侧边栏，兼容性好，可自定义样式，但可能与样式冲突，需额外处理滚动等问题。图片与上下 addCriterion图片与上下文紧密相关，上下文在介绍Windsurf复刻善思flomo插件时，先提出两种方案，再推荐方案A，图片直观呈现了两种方案的优缺点及推荐理由，为后续代码实现打下基础。](https://feishu.cn/file/WjsfbpwXdoC65NxR7vpcNbv3nFh)
</column>
</grid>



这里AI提供了两种方案，并推荐方案A，我也觉得可以，那就这么干吧！



很快，Windsurf就改好了。改好后，需要继续到扩展程序内，刷新小程序，或者先移除，再加载。都是可以的：

![图片展示的是 自动生成的Flomo Chrome插件界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”图片右侧显示了Flomo扩展程序的相关信息，包括名称 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在Chrome应用商店中发现更多扩展程序和主题”等内容。右侧显示该扩展程序的ID为图片 addCriterion图片图片展示的是一个名为“Flomo Clipper 1图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在Chrome应用商店中发现更多扩展程序和主题。右侧显示该扩展程序的ID为图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已](https://feishu.cn/file/XGZ7bhKLcowc2GxvRGScL3MZnjh)

这次更新后，点击插件没有反应，别急，我们打开扩展程序，发现有错误提示：

![图片展示了Chrome浏览器中“所有扩展程序”界面中“Flomo Clipper 1.0”插件的详细信息。该插件由“善思”开发，描述为“一键将网页内容同步到Flomo的Chrome插件”，其ID为“folnlgleiijbdlbbkaklolblmjhfcbgf”。界面中“错误”按钮被红色框突出显示，表明插件存在错误。此图与上下文紧密相关，上下文提到点击插件后有错误提示，此图直观呈现了错误提示的具体位置，帮助理解错误提示的来源。](https://feishu.cn/file/TgQAbYYzSoqXo7xPiQjcjraRnmh)

点击错误，查看具体的错误信息：

![图片展示的是浏览器扩展 addCriterion错误 addCriterion("图片")](https://feishu.cn/file/QGP5bDAZtop7yfxQXSJczLVknF0)

可以把错误信息复制，或者截图，告诉Windsurf：

![图片展示的是Winds文档](https://feishu.cn/file/T3JXbzTIooCszRx9rF0cJgPmnyf)



ok之后，我们继续测试插件。这次还是点击后没有反应，也没有报错，怎么办呢？

一样的，把问题描述出来：

![图片展示的是agraph addCriterion.json，添加后台脚本的配置：](https://feishu.cn/file/V0KubBygCoHRg6x2f5scx9PtnNf)



完成开发后，在扩展程序内刷新一下，回到网页里点击插件后，正常显示了：

![图片展示了在](https://feishu.cn/file/WasnbMHomowH35xwmk1cmM95nWe)

然后就是进行测试，在原文摘要和个人感想内输入对应的内容，并点击提交，发现还是有问题，点击提交没有响应，继续把问题描述在Windsurf里面提交。



注意，这个循环可能会重复几次，直到你测试下来，发现插件正常工作：



<grid>
<column width-ratio="0.272804">
![图片展示了的是Windsurf插件中“同步到Flomo”功能的界面。界面上方显示“原文信息”，包含原文标题“再见2024，憧憬2025”及原文链接。下方有“](https://feishu.cn/file/NOeOb6QgaofyPFxLhYycqjEknWf)
</column>
<column width-ratio="0.727196">
![图片展示的是一个](https://feishu.cn/file/AHkmbPTtmoLSBexBjLpcQcSLnOe)
</column>
</grid>

此时，说明整个产品的第一个版本已经搞定。



### 第四，完成开发后，记得更新readme，以及存个档



是的，完成开发后就完了么？



记得要干两件事：

1. 更新readme，后续自己和AI能很快了解到底产品做到哪了
2. 存个档，这里我们会教如何使用Git，非常简单，AI可能会越改越错，快速回到正确的版本非常重要。



#### 更新Readme



这个命令很简单，就在输入框告诉Windsurf，就可以了：



> 帮我把当前版本设置成0.1.0，并更新Readme



![图片展示了代码编辑界面中README文件的内容。画面左侧是代码编辑区域，右侧是文件预览区域。左侧代码区域中，有部分内容被红色框线突出显示，显示了版本相关记录，如版本号及更新时间等。右侧预览区域也以红框突出显示了对应的更新内容，包括将当前版本设置为0.1.0等多项更新说明。图片与上下文相关，展示了在浏览器插件开发后，按照指示执行“帮我把当前版本设置成0.1.0，并更新Readme”命令后，README文件更新的具体呈现情况。](https://feishu.cn/file/Ua9RbJQxAoZUpQxsxHIcmCnDn8f)



可以看到，上面我们只是实现了一个最基础的产品形态，不能存储对话，不能针对过去的对话做全面的洞察分析，我们可以在此基础上不断的去迭代它！



这里留给大家当成作业，不过在继续迭代之前，很重要的一点是：



#### 使用Git做版本管理



<callout emoji="📍">
如何做版本管理？
</callout>



为什么需要做版本管理呢？因为AI可能会在后续的迭代中，把之前对的部分给改错了。。。如果出现了这种情况，一种很有效的方式是，回到之前某个正确的版本！！！



这个时候就需要用到Git了。



别着急，超级简单，分为几步：



##### 前置要求



1. **安装Git**

   - 在开始使用Git命令之前，你需要先在电脑上安装Git
   - Windows：从 [https://git-scm.com/download/win](https://git-scm.com/download/win) 下载安装包
   - Mac：可以通过以下方式安装：
   
     - 通过Homebrew: `brew install git`
     - 或从 [https://git-scm.com/download/mac](https://git-scm.com/download/mac) 下载安装包



1. **基本配置**



安装好之后，在Trae的终端里输入：

```JSON
git --version
```

如果显示类似于：git version 2.39.5 (Apple Git-154)，说明已经安装好了



接下来可以继续逐行输入两个命令：

```JSON
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

其中，“你的名字”可以任意

“你的邮箱”可以和此前申请Github时的邮箱一致，



1. **关键命令**



完成以上工作后，就可以正常使用Git来进行版本管理了。



通常我习惯在终端用下面几个命令：



**第一个命令：初始化**

```Plain Text
git init
```

初始化完成后，所在的文件夹会新增一个.git文件夹

![图片展示了在终端执行git init命令后，初始化空Git仓库的界面。左侧是文件资源管理器，显示了“GitCode”文件夹下的“TextOne”文件夹，右侧终端窗口中，命令行显示“Initialized empty Git repository in F:/GitCode/TextOne/.git/”，表明在F:/GitCode/TextOne/目录下已成功初始化一个空的Git仓库。该图片与文档中介绍使用Git做版本管理的内容相关，直观呈现了初始化Git仓库的操作结果。](https://feishu.cn/file/QzR5bukv7oswY2xPcT5cfvdwnIg)





**第二个命令：将当前目录下的所有改动添加到Git的暂存区**

```Plain Text
git add .
```

这个命令会追踪所有新文件、修改和删除的文件



**第三个命令：在Git中创建一个新的提交（commit），记录项目某一时刻的快照**

```Plain Text
git commit -m "0.1.0 完成了侧边栏开发，同步到flomo完成"
```

这个命令就会把当前版本的所有代码存一个档，后面有需要的时候，可以随时回滚。

回车后，在终端会有类似的信息显示：

![图片展示了在终端执行Git命令完成版本存档后的信息。先是执行`git init`初始化空的Git仓库，接着执行`git add .`将当前目录下的所有改动添加到暂存区，最后执行`git commit -m "0.1.0 完成了侧边栏开发，同步到flomo完成"`在Git中创建新提交，记录当前版本快照。终端显示了9个文件被创建，如`_DS_Store`、`README.md`等，还显示了提交的哈希值`87b56db`。该图片与上文介绍的使用Git做版本管理的三个命令操作流程紧密相关，直观呈现了操作结果。](https://feishu.cn/file/ZY2Dbba30o3bbRxy8fOcvRsjnfb)



**前面三个命令，就完成了对当前版本的存档！**



**第四个命令：查看简洁提交历史**

```Plain Text
git log --oneline
```

这个命令会罗列出当前所有存档的版本信息

![图片展示的是在终端执行`git log --oneline`命令后的输出结果。显示了当前版本为`01830de (HEAD -> main, origin/main)`，并罗列了多个提交记录，如`feat: 优化 AI 回复的流式输出体验`、`feat: 优化 AI 回复显示效果`等，还包含`v0.3.0`、`v0.3.1`等版本信息。该图片与上文提到的查看简洁提交历史命令相关，直观呈现了当前所有存档版本信息。](https://feishu.cn/file/Wq9ObGX3voLllNxOYCYc8IkxnHe)

注意看每一行前面的一串数字和英文混合的代码，比如“52b2e94”，这个对应着某个版本，在下面的命令里很有用：



**第五个命令：将代码库强制重置到指定的提交点（commit）**

```Plain Text
git reset --hard 52b2e94
```

这个命令比较厉害，会把当前所有代码回滚到某个版本，同时之前所有的版本提交还保留。



**第六个命令：查看历史版本**



```JSON
git reflog
```



这样就可以看到所有的历史git版本，再回退到正确的版本即可。



有了以上6个Git命令，足够你应付大部分场合了。



更多的进阶教程，如果有兴趣，可以阅读此文章：<cite doc-id="ZZZSwwuodicLIEkgQW9cPFk3nlb" file-type="wiki" title="栋人佳Dougle整理：Git使用" type="doc"></cite>

上面git只是在本地保存了版本，后面有时间我们再说如何把这些git版本内容同步到GitHub，相当于一个云端的代码仓库，这也是免费的。



### 第五，使用DeepSeek R1总结文章



前面我们做的0.1.0，只是用AI编程软件开发的产品，但产品本身没有AI能力，那能不能添加AI能力呢？



答案是完全可以，并且免费！



这里我们推荐使用硅基流动里的DeepSeek-R1（在上一个案例里，我们已经和大家介绍了如何获取API Key：[06 注册硅基流动](https://superhuang.feishu.cn/docx/H4t2d2VCtooVwmx335kcXKW9nUe#share-Rq6rdmSleoUcwoxTGQfcpQnHnMc)）



#### 使用Windsurf完成AI总结能力的开发



```Shell
好了，我想在原文摘要加上AI总结功能，总结注意抓住重点，字数不超过200字，点击后调用硅基流动的API来完成全文总结：

下面是我看到硅基流动的模型接入文档：https://docs.siliconflow.cn/api-reference/chat-completions/chat-completions

然后我的API Key是：sk-hulbdhzs********
API Key先直接写在前端

现在想接入他们的大模型：Pro/deepseek-ai/DeepSeek-R1。最大Token数设为8192，你先看下，能不能搞定？先回答我，别急着干活
```



使用前面你申请的API Key，替换上面Prompt里橙色部分，然后把整段Prompt发给Windsurf：

![图片展示了一段对话内容，是(1,1)处为“Me”标识对话中，“Me”提出在原文摘要旁添加AI总结功能，总结字数不超过200字，字数不超过200字 addCriterion](https://feishu.cn/file/WpPPbK9LMoMHScx8nfSctb7unVe)



ok的！一切准备就绪，下达你的指令让AI开工吧！



很快，AI说开发完成了！

测试后，确实AI总结能出内容了。

![图片展示了360 AI负责人梁志辉关于AI搜索的采访内容及Flomo界面。左侧是梁志辉的采访内容，他提到AI搜索不是“缝”，2](https://feishu.cn/file/DpcbbTtcToTv9ExnsXdcjZ83nUd)



至此，使用Windsurf复刻一个善思flomo就完成了整体的开发。



恭喜你，自己完成了一款能抓取网页内容/可以同步API/支持AI总结能力的浏览器插件产品！



### 课后练习：



欢迎大家在Chrome应用商店，下载黄叔的善思flomo：https://chromewebstore.google.com/detail/%E5%96%84%E6%80%9Dflomo/mpncdpndkmokbdecmipdbgnpjbcemphn，对比下还有什么更多能力，是大家觉得可以优化的。



> 比如：
> 
> 1. 增加春节主题
> 2. 支持快捷键打开侧边栏
> 3. 后台可配置flomo API
> 4. 优化AI总结的Prompt
> 5. 。。。



自己去开发，就更能理解产品是生长的这句话背后的韵味。



另外，你也可以尝试把自己的插件上架到Chrome应用商店，这一块教程可以自己搜索。



### 小结



这一节里，我们融入了多个技巧，还请大家回顾思考一下，包括但不限于：



1. 从需求出发思考产品；
2. 向AI描述自己的需求；
3. 完成开发后测试产品；
4. 更新Readme及Git；



恭喜🎉你迈出第二步！



接下来，我们继续进阶，开始做一款微信小程序，那这一次我会更精简一些，只和大家描述核心步骤，大家要更多的利用AI来获得答案。



## [上传Chrome应用商店](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Rkc7doGmCoiRbKxiZ94coc9bnre)



# Part6：微信小程序



## 01 做一个简单的微信小程序



我们这一节，和大家说一下简单的小工具开发，帮助大家上手微信小程序，后面可以使用Trae来继续深入做更多你想做的产品。



### 开发微信小程序的准备工作



这里有两个前置准备：

1. 注册一个微信小程序账号
2. 下载微信开发者工具



#### 注册微信小程序账号



https://mp.weixin.qq.com/cgi-bin/wx

![图片展示的是微信 addCriterion微信小程序注册页面。页面上方有“微信公众号平台”和“小程序”选项。中间部分有“微信小程序”介绍，称其为一种轻量级开放能力，可 addCriterion开发者可快速 addCriterion快速开发小程序。下方有“创建主体”按钮，用红色框突出显示。底部有“开放注册范围”图标，包括个人、企业、政府、媒体、其他组织等类型。该图片与上文介绍的微信小程序注册流程相关，展示了注册页面的界面情况。](https://feishu.cn/file/EohvbBv9toWSZnxEc42cSxg8nNb)

点击“前往注册”，进入到小程序注册页面：



![图片展示的是微信小程序注册页面。页面中有“邮箱”“密码”“确认密码”等输入框，需填写邮箱、设置密码等信息。下方有一个绿色的“注册”按钮，还有用户协议相关勾选框。页面右侧有提示信息，针对已有账号用户和想了解更多信息的用户提供指引。该图片对应上文“注册一个微信小程序账号”中，点击“前往注册”后进入的小程序注册页面，展示了注册时的具体界面及所需填写内容。](https://feishu.cn/file/NbojbWcNooXTLLxE6R9cf1oGnrf)

填写你的邮箱，两次确认密码，会给你注册邮箱发一封激活邮件



![图片显示的是小程序注册中的邮箱激活页面。页面上方显示“小程序注册”，并有步骤标识，当前处于“②邮箱激活”阶段。页面中间有邮件图标及“激活小程序账号”文字提示，下方说明注册邮件已发送至指定邮箱，需前往查看并激活账号，还有“登录邮箱”的绿色按钮。页面底部是未收到邮件时的解决提示。此图对应文档中注册微信小程序账号流程里，点击注册邮箱中激活链接后进入的页面内容，用于引导用户完成邮箱激活步骤。](https://feishu.cn/file/L793bv7lXo0rehxKmkTcYei6nCc)

打开邮件，点击激活链接后，会进入到具体的小程序注册页面：



![图片展示的是微信小程序注册页面的用户信息登记部分。页面提示微信公众号致力于打造真实、合法、有序的互联网平台，要求用户确认信息。需填写注册国家/地区（中国大陆），并选择主体类型，其中“个人”类型被红色框突出显示。页面还列出账号能力、认证能力、支付能力等说明，以及“如何选择主体类型？”的详细说明。该图片与上文注册微信小程序账号的内容相关，直观呈现了注册页面中用户需填写和选择的部分信息。](https://feishu.cn/file/GvT4bZy1toFbZjxhwoZcXovQnth)

这里你可以选“主体类型”，个人类型暂不支持微信认证、微信支付及高级接口能力。



再往下滑，有一些信息登记，填写就好了：

![图片展示:image1@1x.png\](http://ask.csdn](https://feishu.cn/file/MchxbIh22ozZOYxO1vMcpv73n2e)



后面的流程，因为一个身份证只能申请5个小程序，黄叔的满了，所以展示不给大家演示了。



![图片展示的是微信开发者工具中“小程序”界面下的“开发管理”页面。左侧导航栏中“开发管理”选项被红色框线突出显示。页面上方有“开发设置 addCriterion图片内容](https://feishu.cn/file/Qh8pblJyLoRgOIxa8ZzcngTonzc)

咱们当前这一步的核心是拿到AppID。



#### 下载微信开发者工具



https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![图片展示的是微信官方文档 - 小程序页面，重点 自动生成的图片内容](https://feishu.cn/file/KjyAbC71IoipCVxDoKkcSFzNnBf)



大家可以选择稳定版进行下载



好的，下载完毕后，我们打开微信开发者工具，并扫码登录，可以看到下面的界面：



![图片展示的是微信开发者工具扫码登录后的界面。其中，项目名称为“miniprogram - 1”，目录为“/Users/superhuang/WeChatProjects/miniprogram - 1” ，AppID为“wx82339141168930bd” 。后端服务选择的是“不使用云服务” ，开发模式为“小程序” 。在模板选择区域，有“TS + Less - 基础模板”“JS - 基础模板”“TS - Stylus 基础模板”等选项，当前“TS + Less - 基础模板”被高亮选中。此图与上文提到的打开微信开发者工具并扫码登录后看到的界面相呼应，展示了创建微信小程序项目时的设置情况。](https://feishu.cn/file/DXCsbRRDooArnWxZH1pcBwKvnde)

项目名称和目录，大家可以自己去创建文件夹后填入项目名称，以及选中目录



点击AppID下拉框，可以看到当前账号下关联的所有微信小程序



这里我们的案例是不需要微信云开发的，所以后端服务选择“不使用云服务”



然后点击“创建”按钮，进入到了开发界面

![图片展示了微信开发者工具的 1.0.0.20201014的开发界面。左侧显示模拟器中“Hello World”””的页面，右上](https://feishu.cn/file/JvkobFDqQoHwO3xQVlTclB2GnNb)



接着，我们用Trae开始进行开发



### 打开Windsurf开始开发

注，这里用Trae来做演示，用Windsurf也是完全一样的



下面，我们打开Trae，并打开刚才创建的文件夹



继续使用Chat模式来明确需求：

```JSON
我想开发一个微信小程序，设置一个唯一的重要事项，以及完成时间节点，然后开始，开始后会倒计时，年月日时分秒，以及有一个进度条提示。帮我完善需求描述，以及给出技术方案，写在prd.md里
```

![图片展示的是一个Chat模式界面，内容为用户需求描述。用户希望 自动生成一个微信小程序，设置唯一重要事项及完成时间节点，开始后倒计时，显示年月日时分秒，并有进度条提示。](https://feishu.cn/file/SbiUbqXD7oRvwkxf64acZpUUnlg)

生成prd.md后，可以打开来进行修改：

![图片 自动生成的prd.md文件内容在图片中展示。左侧是文件夹结构，右侧是prd.md文件内容，包含产品概述、产品功能、产品需求等部分，以及产品需求的详细说明，如产品需求1、2、3等，每个需求下有具体说明，如需求1中提到可添加任意数量的项目（项目ID为必填项），可添加项目名称、项目描述、项目开始日期、项目结束日期等。该图片与上文提到的生成prd.md后可打开修改](https://feishu.cn/file/Cd0GbHrj0oig68xCDw6c6KEenCe)



然后切换到Builder模式，开始进行开发。



因为Trae会在本地文件夹内生成代码，而微信开发者工具也是从同一个本地文件夹内读取代码，并且有实时预览功能，所以我们可以在微信开发者工具内看到：



![图片展示了微信开发者工具的界面，左侧是倒计时小程序的预览窗口，显示“倒计时小程序”标题，下方提示“还没有设置目标”。右侧是代码编辑区域，有代码文件列表，如pages、utils等。右上角有多个图标，其中“真机调试”图标被红框突出红箭头突出显示。该图片与上下文关系介绍 自动生成prd.md后打开进行修改，切换上下文，展示了在微信开发者工具中看到的代码开发界面及真机调试功能。](https://feishu.cn/file/Zqf0bKzNRoWXLgxkYmBcVM5anPg)

左侧是预览窗口，是可以交互的。



为了更加仿真，我们可以点击右上角的真机调试，打开预览：

![图片展示的是一个倒计时小程序界面。上方显示“倒计时”，右上角有三个点、一个减号和一个圆圈。界面中间上方有“倒计时小程序”标题，下方有一个绿色的“vConsole”图标。中间部分显示“还没有设置目标”。底部有一个 addCriterion图片展示的是一个倒计时小程序界面。上方显示“倒计时”，右上角有 addCriterion图片展示的是一个倒计时小程序界面。上方显示“倒计时”，右上角有三个点、一个减号和一个圆圈。界面中间上方有“倒计时小程序”标题，下方有一个绿色的“vConsole”图标。中间部分显示“还没有设置目标”。底部有一个绿色的“设置目标”按钮。该图片与上文提到的“打开Windsurf开始开发”及“点击右上角的真机调试，打开预览”等内容相关，展示了小程序开发计时的初始界面。](https://feishu.cn/file/EGS7bK5O9okWTzxo1aAcAK6znMf)



大家可以看一下我录的演示视频：

<figure view-type="Preview"><source name="微信小程序演示.mp4" mime="video/mp4" origin-height="1080.000000" origin-width="1888.000000" size="3909285" token="IzpAbZ5vIoHxsQxRkwOcsJy8nWc"/></figure>



其中的开发和正常的Trae开发流程一样，如果有报错就修改错误，直到在微信开发者工具内调试到正常。



然后可以点击微信开发者工具的右上角“上传”，在弹出的弹窗里选择“确定”

![图片展示了微信开发者工具中上传微信小程序的界面。右上角有“上传”按钮，点击后弹出提示框，显示“上次提交已被选为体验版，本次上传将会覆盖体验版，是否继续？”下方有“取消”和“确定”两个按钮，其中“确定”按钮被红色框突出显示。该图片与上下文紧密相关，上下文提到在微信开发者工具右上角点击“上传”，在弹出的弹窗里选择“确定”，此图直观呈现了这一步骤的操作界面及关键按钮位置。](https://feishu.cn/file/QgNGbqA1EoP7y9xVnCscCioLnjf)



接着在弹出的选项里填写版本号和项目备注：

![图片展示的是微信小程序上传时填写版本号和项目备注的界面。上方有“版本号”和“项目备注”两个输入框，版本号处已输入“1.0.1”，备注处输入“测试”。下方有“取消”和“上传”两个按钮。该图片与上文提到的在微信开发者工具上传微信小程序时，在弹出的弹窗里选择“确定”后，需填写版本号和项目备注的内容相呼应，直观呈现了填写界面。](https://feishu.cn/file/VhHzbR0cao3d8UxG6lLcaKlBnfd)



上传完毕后会显示上传成功：

![图片展示的是miniprogram/app.json (无依赖文件)等39个文件未被打包上传。这是在微信小程序开发中代码上传成功后的提示界面，显示了未上传文件的名称及类型。该图片与上文提到的在微信开发者工具上传代码后显示上传成功的内容相关，直观呈现了了上传成功时的文件上传情况，帮助开发者了解未上传的文件信息。](https://feishu.cn/file/XoYbbsFgao6ei0xT3Gjc22p7n4g)



随后，可以在微信小程序后台，版本管理里看到开发版本的信息：

![图片展示了微信小程序后台版本管理界面。左侧导航栏中“ “版本 自动生成图片描述](https://feishu.cn/file/DnH2brXhRoQ4QmxSnLJc1xW7nVb)



你可以点击体验版进行线上体验，也可以提交审核。



这里有两个额外的要点需要大家了解：



### 微信认证和ICP备案



备案，根据要求，现在所有上架的微信小程序都需要做备案，我找到一篇文章有介绍全部的流程，https://mp.weixin.qq.com/s/HqH3tjEYQOWMUOV_ulYthQ



认证，完成后才能拥有被搜索和被分享的能力，个人认证是30元一次，但会限制一些品类，个人认证非常快，大约1-2天即可完成，同样找到一篇介绍流程的文章：https://mp.weixin.qq.com/s/msCC6BEBl3bKDEw598GE-w



大家可以根据自己的需求来。

## 02 书单星球（微信小程序）



### 第一，先说说这是一款什么产品

<grid>
<column width-ratio="0.500000">
![图片展示的是书单星球（微信小程序）中名人书单页面。页面上方有“名人书单”标题，右上角有三个点和一个相机图标。下方列出六位名人推荐的书单，每位名人均有其头像、姓名、职业及推荐推荐的书籍数量。如查理芒格推荐了10本好书，南添推荐了32本好书等。底部有一个“换一批”按钮。该图片直观呈现了小程序中名人推荐书单的样式，与上下文介绍的书单星球产品功能相契合。](https://feishu.cn/file/L9aTb6uvkoTRHDxT1Qjc1hohnCh)
</column>
<column width-ratio="0.500000">
![图片展示的是“书单星球”微信小程序中名人推荐书单详情页面。页面上方显示“名人书单”标题，头像下方介绍了曾任百度产品副总裁等职的俞军。其下是俞军推荐的多本书籍，包括《学会提问（原书第12版·中英文对照学习版）》《认知心理学及其启示》《经济学原理》《自私的基因》等，每本书籍旁有封面图、书名、作者及简介，部分书籍还有评分。该图片对应文档中对“书单星球”产品介绍部分，直观呈现了产品以名人推荐书单为核心的内容。](https://feishu.cn/file/KeYFbHvlboX2ogxgfKfcdT7Gndf)
</column>
</grid>

（左图是名人列表/右图是名人推荐书单详情）



![图片 addCriterion图片展示的是 addCriterion图片展示的是“书单星球”微信小程序的二维码。二维码内有一个圆形图标，图标中有一本打开的书，书的左侧有地球仪，右侧有星星，象征着知识与探索。二维码外侧有黑色圆点装饰。右下角有一个绿色图标，内有白色字母“S”。该图片位于介绍“书单星球”](https://feishu.cn/file/ECP5bSZekoYP0Fxz2aEc6gdfnDe)

大家可以自己用微信扫码体验👆🏻



这是一款以名人推荐的书单为核心的内容型产品。起源是某天我看到歸藏推荐的Andrej Karpathy书单后，突然灵感冒上心头：那么多名人推荐的好书，有没有地方汇总呢？于是就有了这款产品。



坦率的说，这个微信小程序产品，我重做了一次，第二次依然花了整整10个小时的时间用于各种试错和调试，即使是相对熟悉微信小程序开发的现在我来说，也可能还是需要若干小时才能开发完成，是一个相对复杂的产品，但整体实现依旧是可以0代码完成的。



下面我来介绍一下整体的开发路径



### 第二，微信小程序开发路径



<whiteboard token="Iy7AwuK6QhZGi4bsAXlcgc3tnHc"></whiteboard>



其实整体来说，微信小程序的开发，和网页/浏览器插件相近，我们在一开始确定要做微信小程序后，可以和Windsurf说：



> 我想做一个微信小程序，产品需求是：xxxxx



这样Windsurf会自动理解接下来的很多产品功能是基于微信小程序进行的开发。



Windsurf完成代码开发，微信开发者工具进行调试，调试OK后直接上传到微信小程序后台：

![图片展示了微信开发者工具中“小程序”页面的界面，左侧有小程序、小游戏等功能栏。中间部分有搜索框，下方有“+”号标识的添加按钮。右侧是已有的小程序项目展示区域，显示了“名人书单”等小程序项目，项目下方有文件路径信息。该图片与上文提到的在Windsurf完成代码开发后，使用微信开发者工具进行调试，并将Windsurf存放代码的文件夹导入的内容相关，展示了微信开发者工具中小程序项目管理的界面情况。](https://feishu.cn/file/TKzTbNLxIoAkqYxpMqScob7UnEb)



在Windsurf生成部分代码后，可以在微信开发者工具里将文件夹（也就是Windsurf存放代码的文件夹）导入：

![图片展示的是微信小程序开发中在Winds addCriterion()](https://feishu.cn/file/MPwyb7SPioUZ4XxP5U2cfnPKn0c)



这里有两个很重要的参数：

第一个：AppID，那AppID从哪里获得呢？需要你去注册一个微信小程序，然后在开发管理-开发者ID里获取：

![图片展示了微信 addCriterion](https://feishu.cn/file/ZKE8bA3mpoVUzexm2KIckmyGnXg)



第二个：微信云开发



怎么理解呢？书单星球是不是需要有一些数据存储和处理？比如说名人的信息存在哪？他们推荐的书籍信息存在哪？如何上传这些数据？是不是得有一个云端的数据库来进行增删改查这些？



如果你的微信小程序有这些需求，**建议开启微信云开发。**



这块是有费用的，我记得是首月免费，次月19.9元/月，有一些用量限制，具体我也不懂，用户量很小的情况下是够用的：

<grid>
<column width-ratio="0.487526">
![图片展示的是 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/AiLab8xt2oAECbxC991cawMLnwe)
</column>
<column width-ratio="0.512474">
![图片展示了了微信小程序云开发资源使用情况。。](https://feishu.cn/file/JBqBbVKjsoXN6PxKpYmcjMeLnjg)
</column>
</grid>



导入后，任何Windsurf里对于前端的修改，微信开发者工具是可以实时预览到的，以及云端也可以快速的打开云开发查看，你可以在同一个显示屏内来进行查看：

![图片展示了微信开发者工具、Windsurf及云开发界面。左侧是微信开发者工具界面，显示了项目文件结构及代码编辑区域。中间是Windsurf界面，呈现了书单星球小程序的界面设计，有用户头像、名称及书籍推荐等内容。右侧是](https://feishu.cn/file/MwvmbNWuMocVqmx39Kkc4VYnnub)

（前面的界面是微信开发者工具，后面是Windsurf）



在云开发里，有几个重要的模块：

<grid>
<column width-ratio="0.500000">
![图片展示的是书单星球微信小程序云开发中的数据库模块界面。界面左侧有“集合”列表，显示“books”等集合名称。右侧展示了“books”集合下的具体数据记录，每条记录包含“_id”“author”“celebrity”等字段及对应值，如“_id”为“b834adec772179807339447e149e98” ，“author”为“\[美\] 尼尔·布朗 (Neil Browne)”等。该图片与上文提到的云开发中重要模块的内容相关，直观呈现了云开发数据库的部分数据情况。](https://feishu.cn/file/VWxZbc71doejK3xgTQ1clMCTnRc)
</column>
<column width-ratio="0.500000">
![图片展示了书单星球微信小程序云开发界面中的云函数模块。界面中列出了多个云函数名称，如addBookToCelebrity、batchImportBooks等，显示了其类型为云函数，以及最后更新时间、函数状态（如已部署、更新失败等）。还提供了本地调试、云端测试等操作选项。此图与上文提到的云开发里有几个重要模块的内容相关，直观呈现了云开发中云函数模块的具体情况。](https://feishu.cn/file/KRybbAc9eoeI4pxzTdDckyHxnSf)
</column>
</grid>

比如数据库，我们存放的很多数据都可以在数据库里查看

比如云函数，云函数相当于帮助我们来处理云数据



这里只是简单让大家理解下概念，所有的操作，Windsurf都会告诉我们，如果对于任何操作不清楚，都可以截图问Windsurf。



当你完成了开发，可以尝试使用真机调试，

<grid>
<column width-ratio="0.503702">
![图片展示的是微信小程序开发中的真机调试界面。界面上方有“编译”“预览”“真机调试”“清缓存”“上传”等功能按钮，其中“真机调试”按钮以红色框突出显示。界面中部显示代码包大小为74KB ，已自动过滤无依赖文件3个。下方有“启动Android端自动真机调试”“启动iOS端自动真机调试”“启动Mac端自动真机调试”选项，当前选中“启动Mac端自动真机调试”，还有“编译并自动调试”等按钮。此图与上文提到的完成开发后进行真机调试的内容相关。](https://feishu.cn/file/SMmNbu3Mbox7kMxLeGkcC3hOnge)
</column>
<column width-ratio="0.496298">
![图片展示的是2024豆瓣年度读书榜单中名人书单界面。上方显示“名人书单”，右上角角有三个点、、-、、、>图标。榜单中列出多位名人及其推荐书籍数量，如vConsole推荐10本、南添推荐32本、奥特曼推荐9本、李想推荐26本、马伯庸2024年书单推荐10本、俞军推荐2](https://feishu.cn/file/AI7ubkAqIo3IkaxuF2JchjBynJg)
</column>
</grid>

比如我们选择“启动Mac端自动真机调试”，就会弹出Mac端的微信小程序界面（右图），你就可以模拟真实用户去检测小程序是否OK。



当你检查觉得OK后，可以把所有的代码上传，上传到微信小程序后台，才能够提交给官方审核：

![图片展示了于微信开发工具界面，展示了上传代码的操作。左侧为项目列表，右侧是代码编辑/](https://feishu.cn/file/KOiSb3F1PosjuIxPHdcc3MLyn3e)



上传完毕后，在小程序后台的管理---》版本管理里面，能看到开发版本，开发版本一行里点击“提交审核”，完成提交后，就会在下图中间的审核版本看到审核状态，当审核通过后，就可以“提交发布”

![图片展示的是 addCriterion](https://feishu.cn/file/C0ZSbTihoo9Gg9xZWsScCL3UnJc)



我们会尝试在得到更多朋友的反馈后，增加/优化上面的AI编程案例，但现在就先到此为止，下面我们继续去聊聊扣子Coze，并用Coze去搭建产品，别担心，有了Coze，能让我们使用AI编程做出的产品更加多样化！



# Part7：基于扣子搭建产品



## 01 扣子Coze产品介绍



扣子Coze是是一个AI应用搭建平台，通过拖拉拽节点以及配置节点的方式，组装成一个Workflow工作流，来完成各种任务，支持将构建好的 bot/workflow 发布为API、微信公众号、微信小程序、抖音小程序等多种类型 ：

![图片展示了扣子Coze平台的界面。界面顶部有“扣子，让AI离应用更近一步”的标语，表明其为新一代AI应用开发平台，支持多平台、Web SDK及API。下方有“新手教程”板块，含“什么是扣子”等内容。界面中部是“关注”区域，显示相关动态。右侧为“智能体推荐”，列出了如“涨粉大师”等智能体。该图片与上下文紧密相关，直观呈现了上下文所介绍的扣子Coze产品的平台界面情况。](https://feishu.cn/file/T8cpbWMtbocyKExlzGQcd3yIngf)



不光是可以生成各种Bot，更重要的是，我们可以用它封装出一些模块，并且用API的方式输出模块的处理结果，最后再用前面的AI编程知识，开发出AI应用，放在浏览器插件/微信小程序/App内。



为什么会用Coze？而不是全部用AI编程？

加入 Coze 后，可以大幅减少 AI 编程的复杂度。



当然，扣子Coze也在进化，已经开始支持网页和移动端应用的直接开发（在25年1月初的节点，还不那么好用）：

![图片展示了 addCriterion](https://feishu.cn/file/VE5UbrzEOoLvadx7EOAcsLE0nxg)



Coze要用好，还是需要下功夫的，我们这里先用一个案例带大家入门，再用AI编程开发一个网页，通过调用扣子Coze输出的API来实现整体功能。



## 02 使用DeepSeek R1的Functiong Call功能，实现抖音视频文案提取和改写的功能



<figure view-type="Preview"><source name="2月26日 (1).mov" mime="video/quicktime" origin-height="1080.000000" origin-width="2014.000000" size="12072429" token="DdszbphAioW5gPxPGzBcMbMynvc"/></figure>

这是成品演示，是基于扣子API输出的抖音文案提取与改写工具，使用DeepSeek R1，1分钟完成所有工作，整个开发过程也非常简单，背后是因为扣子独家支持了DeepSeek FunctionCall能力。



甚至，我都没有新建工作流！直接用提示词加插件，就可以发布API了，然后用一段提示词，AI编程直接做出了前面的网页。



给大家说一下实现原理，再说实现方式，这样不光授人以渔，还授人以鱼！



### 首先解释一下Function Call



DeepSeek R1很牛全世界人民都知道了，但同时我们也知道它是没有多模态能力的，也就是说它只能对文字进行处理，无法理解图片，解析音频，也不能生成图片。



有没有想过，如果DeepSeek R1有了这些能力，会是一个什么样的存在？



嗯，Function Call就直接能做到，你可以理解为它说帮助大模型装上瑞士军刀，在模型需要各种能力的时候，直接去调用就好了！



但是我们没有在其他地方看到过DeepSeek R1有Function Call能力吧？这也是扣子厉害的地方，为何呢？



因为即使你能Function Call，在哪里能调用到最多的工具呢？emmmm，当然是扣子了！因为：



**扣子插件商店目前拥有国内最完备的插件生态！**



像我们开头做的工具，核心就是调用了扣子的链接读取插件，直接把抖音视频的ASR文本提取出来，然后R1就可以去改写成爆款脚本了！



当然，除了这个，DeepSeek R1还可以联网/文件解读/生成图片等等，组合起来可以有无穷的玩法，甚至是抖音AI分身，硬件。。。



### 其次我们说下如何实现这个产品



这个网页产品同源的背后，我也发布了一个扣子Bot：

https://www.coze.cn/s/i52YWPGa/



![图片展示了抖音视频文案提取+改写功能的对话界面。用户提问关于抖音视频 自动生成文案的需求，扣子Bot回复了详细的回复逻辑，包括调用思维链、调用](https://feishu.cn/file/EFzSbbKAhoLUD2xJIrac3Awtnaf)

当你输入抖音视频链接后，它会先调用思维链，可以从思维链看到，它非常明确的知道哪一步要调用哪个插件来干什么。



要创建这样一个bot，以及开发本文开头的产品，极其简单，简单到几乎一步就完成了：



我们在扣子首页，创建一个智能体：

![图片展示了扣子首页创建界面。](https://feishu.cn/file/Zg3dbNijAoSGt3xlnlgc6T7onYd)



然后在插件里添加插件，搜索“短视频转文案”：

![图片展示的是在扣子首页添加插件的界面。左侧栏有.LayoutStyle addCriterion处有红色框标注。右侧是插件搜索区域，搜索框内显示“短视频转文案”，下方有“douyin_wenan”插件，包含“科普文案提取”功能，有url、key、参数、查看示例等信息，右侧“已添加”按钮被红色框标注。该图片与上下文关系紧密，直观呈现了上下文提到的在插件里添加“短视频转文案”插件的操作步骤。](https://feishu.cn/file/DSibbCoVJoI4pPxv3O3cfn3Tnnh)



注意选择DeepSeek-R1工具调用，再在人设与回复逻辑里输入你想要实现的需求：

![图片展示了扣子平台中创建智能体并设置需求实现抖音视频文案提取和改写功能的界面。左侧是人设与回复逻辑中输入的详细需求内容，如提取视频文案、优化改写等具体要求。中间部分有“DeepSeek - R1工具调用”相关设置。右侧预览与测试区域有视频文案提取功能的说明及示例链接。此图对应上文在扣子中创建智能体、添加插件并输入需求步骤的内容，直观呈现了相关功能设置与需求输入情况。](https://feishu.cn/file/GPjZbW31How0Ytx1AZLcknNPnVd)

其实我需求一开始就写了几行，只不过点击了一下“优化”，扣子就自动帮我生成了详尽的提示词。



如果大家希望复刻，可以参考下这个提示词：

```SQL
# 角色
你是一名经验丰富、创意十足的文案改写专家，擅长洞察用户需求，将普通文案改写成富有吸引力的爆款文案。

## 技能
### 技能 1: 提取抖音文案
1. 当用户给你发送抖音链接时，调用插件中的  {douyin_wenan} 方法精准提取视频 ASR 文本，以及视频标题。

### 技能 2: 改写爆款文案
1. 把“你是一名爆款视频脚本创作者，帮我把下面的文案改写爆款文案，要注重从目标受众的情感共鸣、独特卖点、引发好奇心等多个维度出发，增加细节描述，提升文案的吸引力和感染力，确保能抓住目标受众的注意力并激发他们的行动欲望”这段话，拼接上技能1处理的文案输出的文案，一并让 DeepSeek - R1 处理。
2. 输出的爆款文案需包含丰富细节，比如具体场景、人物的具体反应、独特的描述性词汇等，以提升文案的质量和吸引力。

最后按照如下格式输出：
第一：输出“视频标题：”，随后输出技能1提取的视频标题。
第二：输出“原视频文案如下：”，随后输出技能1提取的全部视频 ASR 文本。
第三：输出“爆款视频文案如下：”，随后输出技能2改写的爆款文案。

在输出时，尽量让DeepSeek-R1输出更多的token，不要缩略。

## 限制:
- 仅围绕抖音文案提取与改写进行回复，拒绝回答与该任务无关的话题。
- 必须按照上述技能步骤要求执行任务，确保处理流程的准确性。
- 输出的爆款文案要逻辑清晰、语言通顺，符合大众阅读习惯。 
```

{douyin_wenan}这里需要先添加插件，然后再输入{，就会默认显示可以调用的插件名称。



注意，很多朋友可能会遇到最后输出比较短的情况，这里要对DeepSeek R1模型进行一下设置。



![图片展示了在DeepSeek R1工具调用界面中，点击齿轮后弹出的弹层。弹层中“DeepSeek - R1工具调用”被红色框和箭头突出显示，其下方有“编辑”“调试”“工作流”“触发器”等选项。该图片与上文提到的点击DeepSeek R1，往下划找到DeepSeek R11工具调用，点击齿轮的操作步骤相关，直观呈现了操作后弹出的界面情况。](https://feishu.cn/file/MlCMbMyT2oXklaxZt0XcdZtQnAf)

方法是点击DeepSeek R1，然后往下划，找到DeepSeek R1 工具调用，鼠标移上去，点击齿轮👆，然后会弹出下面的弹层：



![图片展示的是DeepSeek - R1工具调用的参数设置界面。在“生成多样性”部分，有精确模式、平衡模式、创意模式和自定义选项。在“输入及输出设置”中，携带上下文轮数为3，最大回复长度被红色框重点突出显示为8192。该图片与上文提到的在DeepSeek - R1工具调用弹层中把最大回复长度拉满的内容相呼应，直观呈现了操作设置的参数情况。](https://feishu.cn/file/Xo1FbheyLoxxB9xJ1DgcBWwRnSg)

把最大回复长度拉满。



另外，就是在提示词里，添加“在输出时，尽量让DeepSeek-R1输出更多的token，不要缩略。”这句话引导，然后在看R1 thinking里面，就会发现模型自己在思考：“哦，要尽可能多的输出”，PUA成功。



从前面的模型思维链输出，以及下面的具体调用，DeepSeek-R1是能非常清晰的理解什么节点该调用什么插件：

![图片展示了抖音文案提取+改写任务的运行结果及调用树。左侧显示“已调用 链接读取”，并有运行耗时13.1s等信息，下方有用户输入及系统输出。右侧调用树中，红色框框 addCriterion addCriterion](https://feishu.cn/file/BJIZbgt6ZoPxkZxbUbfcqhb9ngd)

这样，我们都不用去创建工作流，直接选择DeepSeek，写写提示词，一个强大的Bot就完成了。



然后，把bot发布成API，直接把下面这段提示词丢给AI编程工具，比如Trae/Windsurf，一次就能直接出网站：



```SQL
我打算开发一个抖音文案提取+改写网站，这个网站有输入，输入的是抖音视频链接，然后点击分析按钮，网站会把这个链接通过API传给扣子，扣子对应的bot分析完成后，会完整的通过API输出，网站会显示完整的显示扣子的输出内容，注意区分模型的思考内容和正文内容，帮我生成一个美观好看的网站，API信息如下，注意API是流式输出，可以等到输出完毕后再一并在网站上显示内容：

curl --location --request POST 'https://api.coze.cn/v3/chat 
--header 'Authorization: Bearer pat_vnJOJjNCzgkFCfuBxTiqeA69DWJSxNgnOrPZWKca6IfR*****' \ 
--header 'Content-Type: application/json' \ 
--data-raw '{ 
    "bot_id": "747571851047650***", 
    "user_id": "123456789", 
    "stream": true, 
    "auto_save_history":true, 
    "additional_messages":[ 
        { 
            "role":"user", 
            "content":"2024年10月1日是星期几", 
            "content_type":"text" 
        } 
    ] 
}' 
```

标黄色的部分，请替换成你自己的token，以及botid即可。



完事了么？完事了。。。就这么简单！



### 简单是王道



这次产品开发给我的印象最为深刻，为啥呢？



黄叔之前做过线下AI编程的培训，从小白的角度，工作流很多个节点的连线，大家都得理解一阵，但用嘴说出你想要做的需求，这件事情的难度就大幅下降了。



<callout emoji="😀">
“简单”这个词，几乎是所有工具之争的制高点。 　
互联网产品，只要降低一个难度门槛，往往就会获得一批新用户。 
　　
梁宁《真需求》 　
</callout>



当强大的模型具备了Function Call的能力，我们看看下面这么多插件，那不得起飞？



![图片展示了扣子插件商店中的众多插件。包括必应搜索、代码执行器、文本扩写大神等不同功能的插件，每个插件都有简要介绍，如必应搜索可从Bing搜索任何信息和网页URL，代码执行器擅长使用代码解决问题等，还标明了发布者及发布时间。这些插件与文档中提到的扣子插件商店即将开启商业化试点，会有更多图像等插件上架的内容相关，体现了当前插件的丰富性及未来商业化的潜力。](https://feishu.cn/file/GsXjbqRtko1lnzx9xJqcuKkGnDf)



更别说扣子插件商店马上要开启商业化试点，比如天眼查、更多的图像插件都会上架，那就不光玩法更多，还会更加稳定和可靠！



另外，抖音AI分身也是个很强的在高流量场景里嵌入的端口，创建后可以分发到抖音搜索/抖音直播间/抖音群聊/视频评论区，加持了DeepSeek FunctionCall之后，能力更强了！想想都觉得牛！



模型+Function Call的方式，和人类解决问题的方式很像，人类并不能解决所有自己遇到的问题，而是需要遇到一个问题时能选正确的工具/渠道，扣子独家支持了 **Deepseek Functiocall能力**，还支持思维过程显示，这就让让模型调用工具更轻松



### 作业



在本章节的开头，其实我们看到的是使用网页来进行处理，但上面的案例只是在扣子里面使用智能体，请你琢磨下，如何才能实现用网页来进行处理？



如果不清楚，可以继续看下面的章节，再回来完成。



## 03 柴犬表情包生成器实战（网页+Coze API）



### 第一，老样子，这是个啥？

![图片展示的是柴犬表情包生成器界面。上方有“AI表情包生成器”字样，其下设有输入框，提示“输入关键词，让AI为你生成有趣的表情包”，输入框下有“害羞”“开心”等表情关键词按钮。中部有“生成表情包”的绿色按钮和“下载表情包”的蓝色按钮。下方展示了一张柴犬表情包，画面中柴犬眯着眼，周围有彩色气球，配文“飘成气球”。该图片直观呈现了上文所介绍的柴犬表情包生成器的操作界面与生成效果。](https://feishu.cn/file/OIb7bvDHooNMNbx83BXcNh1jnTh)

这是一个柴犬表情包生成器，你可以输入各种表情文字，网页显示对应的表情包（背后是通过和Coze通信来获得生成的表情包图片），支持下载表情包图片。



### 第二，在开始前，我们稍微理解一下Coze和网页的协作机制



这个案例中，我们是Windsurf和Coze一起协作完成的：

<whiteboard token="VPa3wBHNAhYi7CbZ8uBcdZ6wnjf"></whiteboard>



想象一下，我们在“**柴犬表情包生成器**”网页上，输入想看到的狗狗表情，比如“**得瑟**”，然后提交，过了会看到了**得瑟的狗狗表情包图片**，我们所有看到的网页叫做**前端页面**。你可以想象前端页面就是大堂，我们去餐厅吃饭，都是在大堂吃的对吧。



那我们吃的菜是从哪里出来？是不是我们点菜后，服务员传给后厨，后厨做好了拿出来**（后端服务）**呢？



是的，这里后厨就是**Coze**，他们通过服务员（**API**）收到我们的需求（“**得瑟**”），然后做好菜（“**得瑟的狗狗表情包图片”）**，再通过服务员（**API**）把菜端上来。



当有了后厨之后，我们只需要做好大堂的装修和点菜传菜工作即可，这样AI编程的复杂度大幅下降了，也意味着AI出错的概率下降了。



后厨也不难，接下来我们说说后厨的主要部分**工作流**的工作原理：



<whiteboard token="WBvNwJNbVhaYC6bMKWpcffUHnKd"></whiteboard>



一个节点干一件事，然后一个干完传给下一个。这像不像一个流水线？是的，这就叫工作流，英文是Workflow。



对于Workflow，你只需要理解三个点：

1. **每个节点干一件事；**
2. **节点和节点之间需要有线连起来：上一个节点的尾巴，连着下一个节点的头；**
3. **节点有输入，节点处理完之后有输出！（除了开始和结束节点）**



没理解？没事，我就简单和你说一下而已哈哈，没理解就不需要理解了，下面来一步步跟我走，做完了再回来看，你会更加理解，甚至会理解的比我说的还好：）



下面我们开始正式开工！！！跟上了，一步步做出来，绝对可以的！



### 第三，注册一个Coze账号，并升级为专业版



首先，注册一个Coze账号，https://www.coze.cn/home

其次，点击下图左下角的扣子专业版入口，完成升级，并充值1元：



![图片展示了扣子平台的首页界面。左侧是导航栏，有“首页](https://feishu.cn/file/O2eeb3SlIoZiTgxyvbgcYHqYnwc)



为何需要升级为专业版呢？别慌，我们前面不是说了要用API和前端页面传菜么？这个API是Coze专业版才有的功能，所以申请一下，很简单的！然后也只需要你充1块钱，就能玩很久。



等下，你说你没1块钱？？？再见。



### 第四，后端搭建流程



Coze的后端主体是工作流，那是谁去调动工作流呢？是智能体，这里大家可以先不用问什么是智能体，智能体和工作流的关系是什么，我们先做，做完你就知道了，我们第一步先创建智能体：



#### 步骤1：创建智能体



![图片展示了在coze.cn网站上创建智能体的操作画面。画面左侧有网站功能菜单，左上角有一个红色框圈起来的“+”号，对应步骤1中提到的点击位置。点击后弹出的对话框内，有“创建智能体”和“创建应用”选项，红色箭头指向“创建智能体”下方的“创建”按钮，对应步骤2的操作内容。这张图与上下文紧密相关，是对“步骤1：创建智能体”里文字说明的直观图示，帮助用户更清晰地了解创建智能体的操作步骤。](https://feishu.cn/file/IwnCbTPe4oESrTxN3kDczxpWndh)

1：在coze.cn首页，点击左上角的“+”

2：在弹出的对话框内选择创建智能体，点击创建



此时会弹出下面的弹层：

![图片展示的是在](https://feishu.cn/file/G5WjbexreoYkzMx4NrdcDEPVnVb)

在“智能体名称”里输入“**表情包生成器**”

然后点击右下角的“确认”按钮

此时就创建完成了，简单么？就这么简单！



#### 步骤2：创建工作流



![图片展示于ktor addCriterion图片位于介绍柴犬表情包生成器实战中后端搭建流程步骤2：创建工作流的上下文。图片展示了智能体界面，左侧为“人设与配置逻辑”板块，右侧是“编排”板块。关键信息是右侧“编排”板块中“组件”列表里“工作流](https://feishu.cn/file/X6jIbfvSror0xyxExEXcr4QZnQh)

在智能体的界面里，别的什么都不用管，我们直奔主题，点击上图中超级红框和箭头直指的“+”，加号。



点击后会弹出下面的弹框：

![图片中是智能体界面中“添加工作流”弹框。左侧有搜索框及“创建工作流”选项，上方有“+”号标识。右侧显示工作流列表，有类型、状态等筛选项。图片与上下文紧密相关，上下文提到在智能体界面点击“+”后会弹出此弹框，鼠标移到“创建工作流”并点击，弹框中“创建工作流”有两个选项，需顺着箭头点击。](https://feishu.cn/file/JJabb2lAwo1xnvxmTwgc1bz2nUf)

鼠标移到“创建工作流”，然后点击“创建工作流”，怎么有两个？套娃呗，反正你顺着两个箭头去点击就对了！

点击后会弹出下面的弹层：



![图片展示的是柴犬表情包生成器后端搭建流程中创建工作流时弹出的弹层界面。界面中有一个“创建工作流”的白色窗口，窗口内有三个被红色框标注的关键部分：一是“工作流名称”输入框，已填入“biaoqingbao”；二是“工作流描述”输入框，已填入“表情包生成”；三是右下角的“确认”按钮。这些部分与上下文提到的在工作流名称里输入“biaoqingbao”、在工作流描述里输入“表情包生成”，然后点击“确认”按钮相呼应，是创建工作流的关键操作步骤。](https://feishu.cn/file/H4MYbKoKvosq9BxW8YAcKQn9nZc)

我们在工作流名称里输入“biaoqingbao”

工作流描述里输入“表情包生成”

然后点击右下角的“确认”按钮，完成创建，进入到工作流编辑页面：

![图片展示的是柴犬表情包生成器工作流流程中工作流编辑页面。画面左侧红框内是“开始节点”，其下方有“input”字样。右侧是“结果”节点，显示“表情包生成”字样。下方有多个节点，如“summarize_article”“image_cover”等。该图片与上文提到的在工作流名称里输入“biao”、工作流描述里输入“表情包生成”后，点击“确认”按钮完成创建，进入工作流编辑页面的内容相关，直观呈现了了工作流编辑页面的布局。](https://feishu.cn/file/MfDBbTSOroSAsFx6zl6cNqNCnaf)

这是一个画布，别的先不管，我们看到上图红框框起来的是第一个节点：“开始节点”，把你的鼠标挪过去，单击它！



#### 步骤3：从“开始节点”开始设置



![图片展示了位于介绍 文](https://feishu.cn/file/CmBYbMGMmod0G1x5kcccuNwsnkf)

需要改什么么？不需要。

那“开始节点”的意义是什么呢？其实就是接受大堂传进来的的点菜菜单，这个菜单是以右侧方框里“输入”的“input”变量名来存储的。



没事，不用急，这个“input”菜单很快就会传到下一个节点那边去加工！我们继续：



#### 步骤4：添加“大模型节点”



把你的鼠标移到“开始节点”最右侧的小圆点上，它会变成一个加号，点它！：

![图片展示的是 addCriterion图片展示了在扣子平台搭建产品时，添加“大模型节点”的操作界面。画面中“开始”节点右侧有一个蓝色加号，被红色框突出显示。根据上下文，操作者需将鼠标移到“开始节点”最右侧的小圆点上，它会变成加号，点击后弹出层，选择“大模型”并点击，随后会在“开始节点”后面新增“大模型节点”，且两个节点连接起来。此图直观呈现了操作步骤中的关键位置，帮助用户准确找到添加节点的入口。](https://feishu.cn/file/ODtGbGjeioCHEsxugv3cEnbsnEg)



点击后会弹出一个层，选择其中的“大模型”并点击：

![图片展示了在扣子平台中添加“大模型节点”的操作界面。左侧是工作流编辑区域，显示“开始”节点。右侧弹出菜单中，有多个节点选项，其中“大模型”节点被红色框和箭头突出显示。该图片与上下文紧密相关，上下文提到把鼠标移到“开始节点”最右侧的小圆点上，点击后会弹出此层，选择“大模型”并点击，随后会在“开始节点”后面新增加“大模型节点”，且两个节点连接起来，此图直观呈现了操作步骤中的关键节点选择环节。](https://feishu.cn/file/Cz3obSis5o78KpxAbTncPihCnOd)



随后，会在“开始节点”后面，新增加了“大模型节点”，同时两个节点也连接了起来：

![图片展示了在流程编辑器中 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/KJRqbHLPgoX73pxc3xoc4Svunof)

这个连接很重要，务必要让节点与节点以前后的关系连接起来！



随后，我们在上图右侧方框里，对大模型节点进行设置。

还记得在前面提过，每个节点干一件事么？在咱们这案例里，大模型节点主要的作用是，根据“开始节点”传过来的菜单，去理解你到底想要的是什么菜！我们需要使用大模型来理解。



下面我们对上图中右侧的方框里，各个参数一个个来处理：



##### 步骤4-1：模型

![图片展示的是柴犬表情包生成器后端搭建流程中，添加“大模型节点”步骤里选择模型的操作界面。画面中“模型”选项处当前显示的是“豆包·通用模型-Lite”，下方有多个豆包模型列表。其中“豆包·通用模型-Pro”被红框突出显示，依据上下文提示，此处应点击“模型”，并从列表中选择“豆包通用模型Pro”。该图片与上下文紧密相关，直观呈现了步骤4-1中选择模型的具体操作内容。](https://feishu.cn/file/IdIvb6TrPoFW4ix24t6cb3BPnrf)

点击“模型”，选择“**豆包 通用模型Pro**”



##### 步骤4-2：输入

![图片展示了扣子平台中“输入”参数的设置界面。左侧显示“input String”参数，右侧“输入”区域有参数名“input”和变量值输入框，框内有“输入或引用亮部分；有箭头指向，且上下文也提及的部分；有数字序号标识步骤的内容。](https://feishu.cn/file/PbsVboCYeoPZkKxvqeqcrUwOnbd)

这里点击齿轮⚙，然后鼠标移到“**开始**”，再移到左侧的“**input** String”上面，点击选中。



##### 步骤4-3：系统提示词



![图片展示了 addCriterion addCriterion addCriterion addCriterion 自动生成的“系统提示词”界面，提示词内容为“系统提示词，可以使用{{变量名}}、{{变量名.子变量名}}、{{变量名\[数组索引 addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/Vh7abSbfXon63exOobnchCUTnQY)

直接把下面的内容复制到上面的输入框内即可：

```Markdown
# 角色：表情包创作者
## 简介
- 作者：唯庸
- 版本：0.3
- 语言：中文
- 描述：表情包创作者是一位深谙互联网文化的自媒体运营，擅长创作富有"网感"的表情包文案。

## 任务
根据用户输入的关键词生成表情包文案和内容描述
用户会提供一个表达情感的关键词（如：开心、生气、紧张等）

## 输出要求
1. 文案创作
   - 长度：4-6个字
   - 风格：网络流行语
   - 要素：押韵/谐音/双关语
   - 特点：简洁有力，易传播
   - 参考：将成语或网络热词改编（如"酸成柠檬精"）

2. 视觉描述
   - 主角：线条风格的柴犬
   - 构图：以柴犬的夸张表情动作为主
   - 细节：加入符合情感的辅助元素（如困倦时的"zzz"）
   - 风格：简笔画感，富有趣味性
   - 重点：表情和肢体语言要夸张化处理

## 输出要求

- 文案：`[4-6字网感文案]`
- 描述：[具体的视觉描述，包含以下要素]
  * 柴犬的表情特征
  * 柴犬的姿态动作
  * 周围的环境元素
  * 整体画面氛围

## 例子

用户输入：紧张
输出：

{
"title": "缩成团团",
"content": "一只柴犬蜷缩成圆球状，像个毛茸茸的饭团，眼睛瞪得圆圆的，耳朵紧贴着头，尾巴也缩在身体下面"
}

## 注意事项
1. 文案要具有当下流行语特色
2. 描述要具体且富有画面感
3. 情感表达要准确且夸张
4. 整体风格要保持可爱有趣
5. 要充分利用柴犬的特征进行创作
```

大家先这么做就好，后面可以回来慢慢理解这一段提示词（Prompt）的含义。



##### 步骤4-4：用户提示词

![图片展示的是柴犬表情包生成器实战后端搭建流程中，添加“大模型节点”步骤里的用户提示词内容。图中显示“用户提示词”区域，提示可以使用{{变量名}}、{{变量名.子变量名}}、{{变量名\[数组索引\]}} 的方式引用输入参数中的变量。这与文档上下文对应，是对步骤4-4中用户提示词的直观呈现，明确告知用户提示词的输入规范，以便直接复制粘贴到输入框进行操作。](https://feishu.cn/file/I54kbeKfUoPpEixRMFScU2Uhnfc)

用户提示词如下，直接复制粘贴到输入框即可：

```SQL
{{input}}
```

输入后应该是这样的：

![图片展示了柴犬表情包生成器中大模型节点设置的“用户提示词”部分。其中“{{input}}”被红色框突出显示，表明这是用户提示词的占位符，用于接收用户输入的提示词。该图片与上下文紧密相关，上下文提到用户提示词需直接复制粘贴到输入框，此图直观呈现了提示词占位符的位置，帮助用户理解如何在大模型节点中操作，是后端搭建流程中添加“大模型节点”步骤的示例说明。](https://feishu.cn/file/CxgvbL6pZoG1zjxhFWpcXgZdnVe)



##### 步骤4-5：输出



![图片展示的是大模型中“输出”设置界面。左侧是 输出上下图片图片描述专家<一整段文字，字数在250字以内，不能超过7句话，精简掉不必要的词汇，多说一些细节>](https://feishu.cn/file/AYApb54iro4N5QxvRtCcafY0nbc)

这里我们需要把变量名“output”更改为“title”

同时点击右上角的“+”，新增一行，同时把变量名设置为“content”



最终应该是这样的：

![图片展示了柴犬表情包生成器后端搭建流程中，大模型节点设置里的输出设置结果。输出格式为JSON，界面中有两个变量名，分别为“title”和“content”，其变量类型均为字符串（Str. String），“title”字符数为5/20，“content”字符数为7/20 。这与上文提到的将变量名“output”改为“title”，并新增变量名“content”的操作对应，呈现了最终设置完成后的状态。](https://feishu.cn/file/ERO1bPyZho4z0xx265tcI1dInRg)

到此，大模型节点设置完成了！我们到下一个节点去！！！go！



#### 步骤5：添加“图像生成节点”



![图片展示了在“大模型节点”右侧点击红色框出的 自动生成 addCriterion](https://feishu.cn/file/UvLtbu8upo7MRCxizV2c2LlFnOm)

照例还是在“大模型节点”的右侧点击“+”号👆🏻，点击后会弹出节点选择框：

![图片](https://feishu.cn/file/ZVuebv0LEokpzkxLNUFc9I7dnlh)

咦，这个时候没有看到“图像生成节点”呀，可以发现右侧有一个进度条，说明下面其实还有更多的节点类型可以选，所以用你的鼠标滚轮，往下滚！发现没：



![图片展示了扣子平台AI>AI编程平台中“图像生成节点”的添加与设置界面。左侧为大模型输入输出内容，右侧是功能分类列表图中“图像生成”功能被红色框突出显示。该图片与上下文紧密相关，上下文提到在添加“图像生成节点”后步骤5后，需设置模型，这里明确指出模型选择“通用-Pro”，该模型可在图像里生成少量汉字，被黄叔比喻 addCriterion比喻为当今地表最强模型。](https://feishu.cn/file/NQFhbKqiLo7EMpxnQRKcKJH6nJc)

点击选择后，可以看到“图像生成节点”添加成功，下面我们来设置一下，还是分成多个步骤，我们一个个来：



##### 步骤5-1：模型

![图片展示的是柴犬表情生成器中“图像生成节点”模型选择界面。界面上方有“模型”字样。下方列表中，“通用”选项被勾选，其下方有“通用-Pro”等其他 自动生成](https://feishu.cn/file/OkdObsi94o9by4xxhjwcSxRvnqb)

这里模型选择“**通用-Pro**”，这个模型可以在图像里生成少量的汉字，黄叔把它比喻成当今地表图中生成汉字的最强模型！



我们继续



##### 步骤5-2：输入

![图片展示了柴犬表情包生成器中“图像生成节点”设置步骤5 - 2的输入参数界面。左侧有“参数名”栏，分别输入“title”和“content”；右侧“变量值”栏对应填写“大模型 - title”和“大模型 - content”，右侧均有齿轮图标。图片与上下文紧密相关，上下文提到需在“图像生成节点”设置中，参数名栏输入“title”和“content”，变量值栏点击齿轮图标选择对应参数，此图直观呈现了操作界面及参数填写情况。](https://feishu.cn/file/IUUBb9SuuoF7g2xtF2kcrAPVnFd)

这里按照上图填写，特别需要注意的是，变量值一列必须都是点击⚙，然后选择大模型节点对应的参数。



**千万不用直接在变量值输入框里填写“title”、“content”，这就完全❌了！**

这里最容易出现错误了，小心一些。



##### 步骤5-3：正向提示词



![图片展示的是“图像生成节点”中“正向提示词”输入框界面。框内提示“用于生成图像的正向提示词，你可以使用{{变量名}}的方式引用输入参数中的变量”，并标注“参数值不可为空”。该图片与文档中“步骤5-3：正向提示词”内容相关，用于指导用户在“图像生成节点”设置正向提示词时的操作，强调提示词不可为空，且可使用变量引用输入参数。](https://feishu.cn/file/ZUnVb0gmDoS858xf1LecyeOWnsc)

复制下面内容到上面的正向提示词输入框

```Bash
一只柴犬，表情包，{{content}}，图片上文字内容：{{title}}，黑白风格的插画作品，流畅线条，通过墨水的晕染效果展现出毛发的蓬松感。
```



好了！恭喜你，基本完事了。



#### 步骤6：设置“结束节点”



![图片展示了文档中“步骤6：设置‘结束节点’”部分的界面。左侧有“开始”“大模型”“图像生成”三个节点，其中“图像生成”节点被红色框突出显示。右侧是 自动生成的“图像生成”窗口中，有“参考图”“输入”“输出”三个区域，其中“参考图”区域被红色框突出显示。该图片与上文提到的界面 addCriterion图片展示了文档中“步骤6：设置‘结束节点’”部分的界面。左侧有“开始”“大模型”“图像生成”三个节点，其中“图像生成”节点被红色框突出显示。右侧](https://feishu.cn/file/MJUebuIaPotXwvx4r8JctL3Wnlf)

此时我们能看到的界面是上图所示，好像没看到“结束节点”呀，怎么办呢？



来，上录屏，大家看：

<figure view-type="Preview"><source name="结束节点拖.mov" mime="video/quicktime" origin-height="2160.000000" origin-width="3826.000000" size="14138909" token="UD5vbBptZoB7HJxhGYvcRCKKnNe"/></figure>

上面全部的操作都是鼠标左键单击，大家可以多练练。



继续，咱们来设置“结束节点”：



##### 步骤6-1：选择“返回文本”



![图片展示的是 addCriterion addCriterion图片展示的是“结束”节点设置界面。界面中“结束”节点被蓝色框线突出显示，其下方文字说明“](https://feishu.cn/file/YFdwbUjX2oFrYzxkv8Icin5VnNe)

点击“返回文本”



##### 步骤6-2：输出变量

![图片展示了在扣子子](https://feishu.cn/file/SKqDbjEj9oapZwxrDSkcjapLngb)

点击齿轮⚙---》“图像生成”---》data Image



##### 步骤6-3：回答内容



```SQL
{{output}}
```

输入后应该是这样的：

![图片展示了“回答内容”设置界面。其中“{{output}}”部分被红色框突出显示。该图片与文档中“步骤6-3：回答内容”内容相关，对应输入后应为“<qa:image></qa>”的设置要求，表明在设置“结束节点”时，需在“回答内容”处输入“{{output}}”，以实现返回文本的功能。](https://feishu.cn/file/IPlLbcX5Kon30NxYwMNco2X6nNh)



OK！此时基本完成了工作流的设置！设置完了，我们得试运行一下对吧，继续！



#### 步骤7：试运行



直接上视频：

<figure view-type="Preview"><source name="试运行_VrteLma9hzo.mp4" mime="video/mp4" origin-height="720.000000" origin-width="1276.000000" size="2794803" token="JbCwbjhDkonZJ2xxp23csR4TnCg"/></figure>

在发布工作流之前，需要先试运行确认工作流是OK的。



#### 步骤8：发布

![图片展示了发布工作流的界面。](https://feishu.cn/file/DkOKb0YWdotRT4xvIbacNbCHnve)

整个页面的右上角，点击发布，然后填写一下版本描述，就可以发布了！



恭喜你，完成了最主要的工作流搭建。



#### 步骤9：智能体配置



点击发布后，会进入到智能体配置页面：

![图片展示的是柴犬表情包生成器实战中后端搭建流程里智能体配置步骤的页面。点击发布后进入此智能体配置页面，界面中间弹出提示框，显示“Workflow 发布成功！是否添加到智能体？”，并有“取消”和“确认”两个选项。根据上下文，此处点击“确认”即可，后续需在“人设与回复逻辑”里拷贝文字，并在右侧“预览与调试”输入框进行测试。](https://feishu.cn/file/HTgjb7ylqo1yCJxl1iZcDNcHnqb)



这里点击“确认”即可，你会发现工作流里增加了刚才我们配置完的工作流：

![图片展示了柴犬表情包生成器的智能体配置页面。左侧“人设与回复逻辑”区域被红色框线突出显示，右侧“预览与调试”区域有 自动生成表情包。页面中“bianqingbao”工作流被红色箭头指向，表明其是配置完](https://feishu.cn/file/SSidbUAA5oXD3FxKEyvcTiuLn42)



接着，在“人设与回复逻辑”里，把下面的文字拷贝进去：

```Bash
当用户发送内容时，调用 biaoqingbao 工作流，将用户发送的内容作为input字段传入
```



然后在右侧的“预览与调试”的输入框内，试试输入任意的表情文字，比如：“兴奋”，正常来说，智能体会把你的输入，当成“input”字段，传给bianqingbao工作流，并等待它完成后的输出。



我们可以看下录屏：

<figure view-type="Preview"><source name="智能体调试_RnVWW477pir.mp4" mime="video/mp4" origin-height="720.000000" origin-width="1276.000000" size="1074094" token="UAQab6DkaoWOAKxozR6c18WtnNb"/></figure>

整个智能体已经正常工作了，我们看到最后生成的图片文字有些乱码，这是正常的，大模型的图像生成有一定的随机性，如果不符合你要求，可以多让它工作几次即可。



最后一步，我们点击左上角的“发布”：

![图片展示的是柴犬表情包生成器智能体配置的发布界面。界面上方有“编 addCriterion图片描述专家## 目标你将收到一篇文档，及文档中的一张图片。这张图片的位置在文档中用<<image_id>>的占位符表示。你的任务是参考图片所在位置的上下文信息，描述图片中的关键信息。## 限制- 描述客观 addCriterion图片描述专家图片展示的是柴犬 addCriterion图片描述专家图片 addCriterion图片描述专家图片展示的是柴](https://feishu.cn/file/IJq1b1KvookH6zxBOhucbJY3nvf)

直接选择“跳过并发布”



最后一步，我们取消勾选发布到coze商店，仅选择发布为API，直接看视频：

<figure view-type="Preview"><source name="发布智能体.mov" mime="video/quicktime" origin-height="2160.000000" origin-width="3826.000000" size="4298037" token="I0tYb6hDhoxso9xSTuvcxUKxnHh"/></figure>



OK！这就是所有的智能体搭建流程，最后在智能体的预览与调试里输入表情：

![图片展示了柴犬表情包生成器智能体的预览与调试界面。左侧为智能体搭建界面，有“预“input”参数传给biaoqingbao工作流里的“开始节点”，然后一步步完成，最后在“结束节点”根据要求，把处理完的结果以“output”参数输出出来。右侧是预览与调试区域，显示了“柴犬”表情包生成结果，包含文字“柴犬”及一张柴犬图片，还列出了生成表情包的耗时、耗资等信息。该图直观呈现了智能体工作流程中用户输入、工作流执行、结果文档。](https://feishu.cn/file/BIOabvgnVoTPraxGsWscVqVWnie)



这一步其实是这样的工作机制：

<whiteboard token="ZtYPwJtOdhrDz7bIkV6cC2tBnI6"></whiteboard>



用户输入了一个命令，Bot理解后，调动biaoqingbao工作流去完成工作，同时把用户的命令以“input”参数传给biaoqingbao工作流里的“开始节点”，然后一步步的完成，最后在“结束节点”根据要求，把处理完的结果以“output”参数输出出来。



所以我们看到的最终结果是一张图片的链接，点击后弹出一张图片！



OK，Coze的部分我们完成了搭建，最后不是把智能体发布为API了嘛！



为了能使用到API，我们需要去申请一个API Key，你可以理解为要申请一个钥匙，用来使用属于我的API



#### 步骤10：配置Coze API Key



回到Coze首页：https://www.coze.cn/home

![图片展示了于](https://feishu.cn/file/LYcqb6elXoX0IOxSJYscX5e6nTh)

逐次点击：“扣子API”---》“授权”---》“添加新令牌”



![图片展示的是在Coze平台添加新的个人访问令牌的界面。名称处填写为“Secret token”，过期时间选择了2025 - 02 - 19（30天），权限选择了“Bot管理”，下方显示“6/6已选择”以及相关说明。在访问团队空间部分，选择了“个人空间”。右下角有“取消”和“确定”两个按钮。此图与上下文关系紧密，是后端搭建流程中配置Coze API Key时，添加新令牌步骤的具体操作展示。](https://feishu.cn/file/Hnn4bndAYoJ3krx00YwcPsdnnge)

名称：自己填写

过期时间：选择30天

权限：选择“Bot管理”即可

选择制定团队空间：个人空间



点击确认，这里要注意！！！**令牌只会出现一次**，点击复制，找个文档保存起来：

![图片展示了在Coze首页“扣子API” - “授权” - “添加新令牌”后弹出的“新的个人访问令牌”窗口。窗口提示令牌仅显示一次，需保存在安全处。有“名称”“过期时间”“令牌”等信息栏，其中“令牌”处显示了长字符串，右侧有红色框和箭头指向的“复制”图标。该图片与上文.LayoutStyle addCriterion图片所在文档](https://feishu.cn/file/A3SIb7NeSoG1jvxgQw7cn4CNngZ)

如果不小心关掉了，没事，再重新创建一个。



### 第五，前端网页



好啦，刚才的Coze完成了整个后端的搭建，现在我们需要去做一个前端页面啦，以及需要让前端页面可以通过API和后端页面完成数据传输！



下面我们一步步的来：



#### 步骤1：新建文件夹



在你喜欢的文件夹里，创建一个文件夹，可以取名为“biaoqingbao”

![图片展示了Windsurf界面中“biaoqingbao”文件夹的图标。该图标为蓝色文件夹样式，位于界面中央，下方有蓝色边框的“biaoqingbao”文字标识。此图对应文档中“步骤2：打开Windsurf，再用Windsurf打开biaoqingbao文件夹”这一步骤，直观呈现了文件夹在Windsurf中的显示状态，帮助用户确认文件夹位置，为后续操作提供指引。](https://feishu.cn/file/A6fRbSVu7onYoHxOH9kcLjH5nqf)



#### 步骤2：打开Windsurf，再用Windsurf打开biaoqingbao文件夹

![这张图片展示的是Windsurf工具的操作界面，界面中间区域提供了操作指引，包含“Getting started with Windsurf”相关操作选项，如“Code with Cascade”“Open Command Palette”等内容及对应提示按钮，页面整体以深色为背景，界面右侧呈现了Cascade功能的相关介绍与过往工作流记录，该界面是文档中步骤2对应的操作界面，用于打开指定的“biaoqingbao”文件夹，是搭建柴犬表情包生成器前端网页流程里的关键操作环节。](https://feishu.cn/file/WoWhbUfvco7SGuxmET7cERSonjb)



#### 步骤3：修改好下面这段代码，并提交给Windsurf生成



```SQL
curl --location --request POST 'https://api.coze.cn/v3/chat 
--header 'Authorization: Bearer pat_OYDacMzM3WyOWV3Dtj2bHRMymzxP****' \ 
--header 'Content-Type: application/json' \ 
--data-raw '{ 
    "bot_id": "734829333445931****", 
    "user_id": "123456789", 
    "stream": true, 
    "auto_save_history":true, 
    "additional_messages":[ 
        { 
            "role":"user", 
            "content":"2024年10月1日是星期几", 
            "content_type":"text" 
        } 
    ] 
}' 

写一个js脚本，前端请求脚本时，将发送的内容带入到参数content，调用上面的API，再写一个前端配套测试API调用的html页面，注意这个API是流式返回
```

把上面的黄色字体的内容，更换为你的，然后丢给Windsurf让它干活！

干活完成后，会生成index.html，即进入到步骤4



令牌：“pat\_"标黄的位置是你的令牌，还记得之前你存储的令牌么？找回来。

bot_id：然后再获取一下你的bot_id，bot_id的获取，请你点击进你的智能体页面，查看链接中bot后面的数字：

![这张图片展示的是Coze平台的操作界面，核心突出显示了获取智能体bot_id的步骤：界面左侧是平台的菜单导航栏，中间是当前操作的编辑区域，右侧显示“预览与调试”的相关内容，红色框线标注的位置对应上下文里提到的智能体链接中bot后的数字区域，该区域的内容正是用户需要获取的bot_id，与文档中获取柴犬表情包生成器对应智能体bot_id的操作指引直接关联，用于辅助用户找到所需的bot_id信息。](https://feishu.cn/file/YpvjbozBvoavEZxD302cxFyGnfb)

https://www.coze.cn/space/7436604156019802123/bot/74619821800016\*\*\*

即上面黄色这一段数字







---



注，以上来源于Coze的API文档：https://www.coze.cn/open/docs/developer_guides/chat_v3

![该图片展示了Coze平台的智能体开发界面，其中重点标注了左侧的“发起对话”选项与右侧的“流式响应”选项，中间红框内为Request区域的API调用请求代码，包含请求方式、目标接口地址、请求头参数及请求体相关内容，该图用于辅助说明柴犬表情包生成器实战流程中，从Coze平台获取智能体bot相关信息时参考的API请求内容，对应文档中bot_id获取部分的上下文场景，帮助开发者明确相关API请求的具体参数与格式。](https://feishu.cn/file/RSAJbhU3noSNSaxjPzDc5IYnnWf)



---

#### 步骤4：打开生成好的index.html测试



1. 打开创建的本地 biaoqingbao 项目文件夹
2. 在浏览器打开html页面
3. 顺利的话可以看到测试API的页面，填入测试数据（比如“期待”），点击提交，查看调用情况
4. 如果正常返回，说明API调用成功了，我们把所有代码拷贝下来：



![图片展示的是AI对话测试界面，上方标题为“AI对话测试界面”。界面中呈现了多条数据信息，包括id、conversation_id、bot_id等字段，如“id”为“74620254071020093599”等，还有“content_type”“section_id”“event”“data”等字段内容。下方有一个输入框，提示“请输入您的问题...”，右侧有一个蓝色的“发送”按钮。该图片与上下文关系紧密，是步骤4中打开生成好的index.html测试后，顺利看到的测试API页面示例，用于查看调用情况。](https://feishu.cn/file/ZSZnbYTWyof2zUxQI0ccYAmunWh)

1. 如果错误，把错误信息截图给Windsurf，让它修改，直到正确。



上面这一大坨被选中的代码是API返回的，我们需要进一步处理，提取其中有效的信息，继续下一步：





#### 步骤5：优化js脚本



将上面API返回的代码，粘贴到下方提示词中：

```SQL
复制上一步调用API后界面返回的代码内容，填写到这里

---
优化js脚本，上面是js脚本中调用API的返回内容，希望在后端脚本中对返回内容进行结构化提取，当API完全返回后，提取event:conversation.message.delta中content的内容，在前端直接展示
```



<callout emoji="🏝️">
这一步是对API返回内容进行过滤，只在前端展示需要的内容
API是流式返回（打字机效果，会多次返回模型生成内容，我们只需要最终的内容展示到页面上）
将原始返回的数据给模型，让模型进行内容提取
</callout>



#### 步骤6：测试效果



1. 刷新页面
2. 再次输入内容进行测试
3. 顺利的话，我们可以看到，返回内容被结构化提取了，只返回我们需要的内容：

![图片展示的是AI对话测试界面。上方显示“AI对话测试界面”，下方有用户: 开心到飞起，下方有AI链接。下方有一个输入框，提示“请输入您的问题...”，右侧有一个蓝色的“发送”按钮。该图片](https://feishu.cn/file/NY1ObGqOwoEoj2xlC4pcCf7PnJg)

注意，这个链接其实就是Coze最终生成的图片链接，不过我们不需要看链接，我们希望直接看到图片，对吧，最后一步！咬咬牙：



#### 步骤7：优化html样式



粘贴提示词

```SQL
将返回的图片链接展示为图片
仅优化html页面展示效果，主题为表情包生成器
```

最后刷新网页，我的效果如下：

![图片展示的是 addCriterion addCriterion()](https://feishu.cn/file/Ymq5bRYf1o5VdPx1urxcTtXJnYg)

哈哈哈，嗨到九霄！！！不知道现在你的心情是不是和我一样！！！



OK，以上就完成了整个Coze API+网页实现的一个柴犬表情包生成器的产品。



#### 课后练习：

<table><colgroup><col/><col/><col/></colgroup><tbody><tr><td>延伸</td><td>说明</td><td>示意图</td></tr><tr><td>尝试进一步优化前端</td><td><ol><li seq="1">可以通过点击按钮的形式输入内容</li></ol><pre lang="HTTP" wrap="true"><code>在输入框下方增加若干按钮选项，点击选项后将选项上的文本带入到输入框，文本为情绪关键词，例如：开心、震惊、疑惑、暴躁、酸了、害怕、期待等</code></pre><ol><li>可以支持图片的下载</li></ol><pre lang="HTTP" wrap="true"><code>在生成图片按钮下方增加下载图片按钮，图片展示出来后点击按钮可以下载图片</code></pre></td><td><img name="image.png" alt="图片展示的是柴犬表情包生成器的前端页面。上方标题为“AI表情包生成器”，下方提示“输入关键词，让AI为你生成有趣的表情包”。输入框内有“唱歌”字样，下方有多个情绪标签，如开心、震惊等。中间有“搜索”按钮，下方是“生成表情包”和“下载表情包”按钮，下方还展示了一张生成的柴犬表情包图片，图片上有“飘成气球”字样。该图片与文档中课后练习中优化前端的内容相关，展示了前端页面的样式和功能。" mime="image/png" scale="1.000000" src="Limyb7U3Wor8joxwqtMcXUlUnQe"/></td></tr><tr><td>尝试进一步优化后端</td><td><ol><li seq="1">可以调整大模型节点的文案提示词</li><li>可以调整图片生成节点的图像提示词</li><li>调整后发布工作流→发布智能体（仅勾选发布为API）</li><li>在页面测试即可查看效果</li></ol></td><td></td></tr></tbody></table>

甚至，黄叔把它优化成了可以生成任意动物表情包的产品，其实还是对前面的Coze工作流+网页做的优化，你能琢磨一下并优化出来么：

![图片展示的是柴犬表情包生成器的前端网页界面。上方有“表情包生成器”标题，下方有“选择情绪”和“选择动物”两个下拉菜单，分别有多种情绪和动物选项。中间有“生成表情包”按钮，下方显示生成的柴犬表情包图片，是一只柴犬面带笑容，背景为黑色，周围有多个表情符号。该图片与文档中“柴犬表情包生成器实战（网页+Coze API）”内容相关，是前端网页优化后的示例展示。](https://feishu.cn/file/XbA1bgLi7ot9jUxiiObcfCWXnmb)

![这是一幅黑白色调的趣味表情包插画，画面主体是一只神态夸张、咧嘴大笑的考拉，它眼睛圆睁、嘴巴大张，肢体动作满是喜悦。考拉上方配有醒目的文字“笑到抽抽！”，周围点缀着多个笑脸图案，还有线条、加号等装饰元素，整体风格活泼俏皮，适配表情包的趣味表达需求，契合文档中提到的柴犬表情包生成器相关的内容方向。](https://feishu.cn/file/I4T7bgtqToSsvhxrmaPcDRKNnEc)



#### 搭建逻辑

<callout emoji="🐵">
从后向前，从内到外
</callout>

回顾上面的应用搭建流程，我们可以看到，整体的流程是从后端向前端走，先搭建作为后端服务的Coze流程，再封装成API，最后进行API的调用，前端页面优化



在搭建智能体时，我们先写提示词，设计最内部的大模型节点，再链接节点构成工作流，进一步将工作流添加到智能体，最后发布智能体。

在进行API编程时，我们先对接测试API，再对跑通的API做数据结构提取，最后再把提取出的内容做最外层展示。



这样做的好处：

1. 清晰的逻辑，可以减少自己操作的错误，同时结合版本管理，便于进行回滚，有条理
2. 小白的AI编程建立在与模型对话的基础上，了解AI比了解编程更重要。AI生成结果的正确性与上文内容密切相关，通过小步骤拆解的方式，可以保证每次只推进一点点，测试没问题就保存内容，接下来在正确内容上就行开发，模型会更加容易，减少幻觉



# Part8：部署



## 01 将网页产品部署到Cloudflare！



这里我们以上一个柴犬表情包的Case作为案例，带着大家一步步把你做出来的网页产品部署到云端，让你的亲朋好友都可以使用和访问！



这里我们需要了解一个新的产品：**Cloudflare**，**免费的赛博菩萨**！当然，把产品部署到网上有很多种方案，这里我们先介绍Cloudflare。



注意，这是一个全球性的网络服务提供商（但国内访问有时候会有些限制），免费额度非常慷慨：

- Workers（每天 100,000 次请求）
- Pages（每月 500 次构建）
- 。。其他更多



咦，你可能会问，什么是Workers，什么是Pages，这个概念黄叔要先稍微解释下，还是老样子，如果能理解更好，不能理解也不影响后续的动作，先做出来就成：



前面我们已经实现了通过网页生成柴犬表情包了对吧，是不是在开发的过程中，把Coze API返回的结果做了处理呢？



我们可以这么简单理解下：



<whiteboard token="DDXTwwYcYhKfO7btZ9Cc9scznJe"></whiteboard>



我们在网页上输入表情，然后网页的一个功能部分会把我们的输入，通过API传给Coze，Coze悄咪咪的躲在后面生成表情包图片后，再通过API返回给前端网页，并且把图片呈现出来，我们才再前端网页上看到了图片。



但是现在这个前端网页只是在我们电脑上，如果我们希望全球的用户都能看到它，怎么办呢？Cloudflare就是干这事的啦，我们现在需要把前端网页和JS部分都放到网上：



<whiteboard token="QVENwodZMhLphRbnh0jcRoxensf"></whiteboard>



看到了不，相当于搬家！我们把前端网页和JS部分，都搬家到Cloudflare上了，这样用户通过网络，只要能访问到Cloudflare，就能访问到我们的网页了（姑且这么简单理解哈）



即使没理解也没事，下面我们先干！



### 步骤1：注册Cloudflare账号

https://www.cloudflare.com/zh-cn/

![图片展示的是Cloudflare官网首页。页面上方有导航栏，包括“解决方案”“产品”“定价”“资源”“合作伙伴”“为何选择Cloudflare”等选项。中间大标题为“随时随地连接、保护和构建”，并有“了解服务”“免费开始使用”按钮。下方有“控制”“安全”板块及相关图标。图片中红色箭头指向“免费开始使用”](https://feishu.cn/file/Qo3ebj5i6o6flcxKdJrcXDZ9nke)

点击中间的“免费开始使用”



![图片展示的是Cloudflare注册页面。页面上方显示“开始使用Cloudflare”，下方有“使用Google继续”和“使用Apple继续”两个按钮，中间是“电子邮件”输入框， 且有“密码”输入框，以及“告诉我们您是人类”区域，包含“确认您是真人”的勾选框和“CLOUDFLARE”标识。底部有“注册”按钮和“已有账户？登录”链接。该图片对应文档中“步骤1：注册Cloudflare账号”部分，是注册Cloudflare账号时的登录界面。](https://feishu.cn/file/VqcgbzF33opYjHxog2BcB1zmnkb)

使用适合你的方式登录注册！



![图片展示了Cloudflare网站的“Workers和Pages”页面。左侧导航栏中“Workers和Pages”被红色箭头突出显示。右侧页面标题为“提升站点的速度和安全性”，介绍可通过Cloudflare发送Web流量、使用其格式化表达式学习新语言等。下方有输入现有域、快速创建DNS记录、手动输入DNS记录、上传DNS区域文件等操作选项。](https://feishu.cn/file/KjgabKn5doiILJxKf4QcStOhnOe)

登录后，点击左侧列表的“计算（workers）”，然后再点击“Workers 和 Pages“



找到了吧！在页面中找到创建按钮，点击进行创建

![图片展示的是Cloudflare平台“Workers and Pages”页面。画面右上方有一个蓝色的“创建”按钮，被红色箭头所指。这与文档中“步骤1：注册Cloudflare账号”里“点击创建worker按钮”的内容对应，说明在注册Cloudflare账号过程中，需在该页面找到并点击此“创建”按钮，以进行后续的worker创建操作，是将网页产品部署到Cloudflare的其中一个步骤示意。](https://feishu.cn/file/GDhhbfYyjo99aMxHWjNc4atNn6d)







点击创建worker按钮



![图片展示的是Cloudflare创建应用程序的步骤1中点击“创建worker”后的页面。页面上方显示“创建应用程序”，并有“Workers”和1“Pages”选项。中间区域有“创建创建一个“Hello World”Worker并在全球范围内部署”文字，下方有“创建worker”按钮，该按钮被红色框突出显示。页面底部有“从模板开始”部分，列出多种如“](https://feishu.cn/file/C7Tfb0yWtoL9ULxcrG8c6l6PnWb)





输入worker名称，这里填写 **ai-biaoqingbao ，**完成后点击右下角的部署按钮

![图片展示的是Cloudflare平台 "Hello World World 自动生成的图片描述，与图片内容无关](https://feishu.cn/file/QFdfbVUxDo9msgxxkPTcDOTnnDe)

点击“部署”后，会进入下面的页面：



### 步骤2：部署Worker



![图片展示的是在Cloudflare上部署网页产品步骤2中的页面。页面显示“成功！您的项目已部署到以下区域：全球”，并有提示可在指定网址预览项目。页面右侧有红色箭头指向“编辑代码”按钮。此图承接上文步骤1点击“部署”后的操作，即进入该页面后，需点击图中“编辑代码”按钮，便可进入代码编辑页面，展示了网页产品部署到Cloudflare过程中的关键操作节点。](https://feishu.cn/file/GxIhb65aaoDHauxAhobcCuuKnOc)

接上一步，我们在这个页面点击编辑代码，会进入到代码编辑页面：



![图片展示的是Cloudflare代码编辑页面。左侧是代码编辑区域，显示了JavaScript代码，其中包含欢迎信息及示例函数，函数输出“Hello World!”。右侧是预览区域，显示一个简单的图标。页面顶部显示worker名称为“ai-biaoqingbao”。它与上文的关系是，上文提到在Cloudflare中点击编辑代码会进入此代码编辑页面，图片直观呈现了该页面的样子及代码编辑和预览的相关内容，展示了部署Worker过程中的代码编辑环节。](https://feishu.cn/file/VIGmbiYNuoEKuVxn5AEcMkvunjd)



OK，右侧在转呀转，说明它在工作呢，工作啥呢？对，下面我们来告诉Worker应该干啥！



### 步骤3：打开Windsurf，再用Windsurf 打开biaoqingbao文件夹

![图片展示了柴犬图片2 addCriterion addCriterion](https://feishu.cn/file/K7ILb6MjdorneXxatMBcQBbpnif)



对，就是上一个柴犬表情包的文件夹，用Windsurf打开它！（黄叔本地电脑上的文件夹是“biaoqingbao-正式”



### 步骤4：修改好下面这段代码，并提交给Windsurf生成

<callout emoji="🦾">
API key 和bot id 的替换参考之前的 柴犬表情包案例
</callout>

```JSON
写一个Cloudflare中的workers脚本，主要功能是请求一个API，注意API是流式返回，下面是API的请求样例，注意处理跨域问题。

curl --location --request POST 'https://api.coze.cn/v3/chat' \ 
--header 'Authorization: Bearer pat_SCVB8n0KYoXaXLJ9j384iQS7JG*****' \ 
--header 'Content-Type: application/json' \ 
--data-raw '{ 
    "bot_id": "7450145225****", 
    "user_id": "123456789", 
    "stream": true, 
    "auto_save_history":true, 
    "additional_messages":[ 
        { 
            "role":"user", 
            "content":"震惊", 
            "content_type":"text" 
        } 
    ] 
}' 

同时创建html页面测试API调用，worker使用get方式请求，入参为data，入参在点击发送按钮后会替换到请求体的content中进行API请求

将worker返回内容展示在页面上。一步一步来不要着急。
```

拼接好代码在Windsurf中发送，会创建worker.js文件和html文件



在Windsurf里点击worker.js，能看到它所有的代码，我们把这些代码全选中，然后复制：

![图片展示了在Windsurf中查看worker.js代码的界面。左侧中图片中，左侧文件夹中选中了“worker.js”文件。右侧代码区域显示了worker.js的代码内容，其中包含处理GET和POST请求的函数代码，如判断请求方法、处理请求内容图片所在文档中介绍在W addCriterionWindsurf里点击worker.js查看代码的操作步骤，以及将代码全选复制用于部署网页产品到Cloudflare的内容。](https://feishu.cn/file/MIgIbeXtKo64ZPxspnlc9KEdnQb)



### 步骤5：将worker.js文件中的代码复制进来，点击部署



回到前面的worker的代码编辑页面，即前面步骤2的这个：



![图片展示了Cloudflare的worker代码编辑页面。左侧是代码编辑区域，显示有部分代码。右侧为预览区域，显示一个链接：https://ai - bluesprintbook.workers.dev/ 。根据上下文，这是将网页产品部署到Cloudflare的步骤5相关内容，需把左侧代码全部删除，将worker.js文件中的代码复制粘贴进去，然后点击右上角的“部署”，之后还要把右侧链接复制下来，图片为该步骤提供了操作界面参考。](https://feishu.cn/file/GpFKbCQhloTjXCxH0b2czjianWk)



把左侧的代码全部删除，然后把你复制的代码粘贴进去👆，粘贴好之后，点击右上角的“部署”：

![图片展示的是Cloudflare工作区界面，左侧显示worker.js代码，右侧是HTTP请求栏。关键信息是右侧HTTP addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色框突出 addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色箭头指向。此 addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色框](https://feishu.cn/file/AGtRbGNwLo97dLxlICScQgiLnNe)



然后把右侧的链接复制下来！如上图所示！



### 步骤6：打开Windsurf里的index.html，替换对应位置



![图片展示了在Windsurf中index.html文件的使用说明部分。核心内容为：获取Workers的URL后，将index.html中的YOUR_WORKER_URL替换为实际的Workers URL，即可开始测试API。图片与上下文的关系是，上下文提到在Windsurf里打开index.html并替换对应位置的URL，若不好找可搜索关键词“worker”，此图片则明确展示了需要替换URL这一关键操作指示，帮助理解在index.html文件中进行URL替换的具体操作内容。](https://feishu.cn/file/CAwbbMeomo2PkwxbyK2c4TswnLb)

 

通常Windsurf会提醒我们，替换什么位置的URL！如果没有，参考上面的位置



![图片展示了网页开发环境界面，左侧为文件夹和文件列表录，右侧是代码编辑区域。代码中红框突出显示了“WORKER_URL”变量及其赋值为“https://biaoqingbao.lookforhut.worker.dev/”的。](https://feishu.cn/file/YUj7bCQ4Qobs4Txg5FIc71wUntc)

如果不好找，可以点击图中的代码区域，按下crtl+F，搜索关键词“worker”找到。然后替换！



然后打开你本地文件夹的index.html，做一个测试：

![图片](https://feishu.cn/file/DZ0Rb3Nk7o0l8qx178tcWgGjnDd)

测试成功，说明此时我们的worker部分已经部署成功了。



还记得前面的图么？

![图片展示了柴犬表情包在本地和Cloudflare部署后的流程对比。本地流程中，用户输入表情，前端网页接收，JS部分处理，将Coze addCriterion图片](https://feishu.cn/file/AslkbpuGfor7qjxXZz6caufFnhP)



图中的JS部分，已经部署到Cloudflare里的Workers了，但还没完，还需要把前端网页也部署上去，继续！



### 步骤7：创建page，前端网页托管

![图片展示了 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/SgbxbjoOfoZ5AAxfS0LcKxZzn8b)

我们从前面的worker页面，点击左上角的返回。

![图片展示的是Cloudflare平台的页面，左侧导航栏中“Workers和Pages”选项有](https://feishu.cn/file/HaPrbdhfWottWfxmwiacYEETnjc)

重新点击左侧列表里的“Workers 和 Pages”



![图片展示的是Cloudflare平台中“Workers和Pages”页面。左侧导航栏选中“Workers和Pages”选项。右侧页面显示“ai-biaoqingbao”等项目列表，其中“ai-biaoqingbao”项目下有“main”分支，右侧有 有“创建”按钮，该按钮被红色框突出显示。此图对应文档中“重新点击左侧列表里的‘Workers和Pages’，然后点击右上角的‘创建’按钮”步骤，直观呈现了操作位置。](https://feishu.cn/file/SSPWbTlj0ok0xhxMeXgcEMCSnph)

然后点击右上角的“创建”按钮



![图片展示了Cloudflare平台创建应用程序的页面。左侧列表中“Workers和Pages”选项被红色框和箭头突出显示。页面中部有“创建应用程序”提示，下方有“通过导入现有Git存储库创建”和“使用直接上传创建”两种其中“使用直接上传创建”部分有“上传资产”按钮被红色框和箭头标注。该图片与上文“重新点击左侧列表里的‘Workers和Pages’，然后点击右上角的‘创建’](https://feishu.cn/file/K8lZbfCr2o9xp8x1cufcVSWrnkb)

选择Pages，然后点击下面的“上传资产”



接着，为项目创建名称，名称输入完毕后，再点击“创建项目”：



![图片展示的是在Cloudflare中创建page、进行前端网页托管的操作界面。界面上有“通过上传项目部署站点”的提示，在“为项目创建名称”下方的输入框中已输入名称“ai-biaoqingbao”，右侧有蓝色的“创建项目”按钮。此图对应文档中“为项目创建名称，名称输入完毕后，再点击‘创建项目’”的步骤，是将网页产品部署到Cloudflare的步骤7中的一个环节，展示了创建项目名称并准备创建项目的操作画面。](https://feishu.cn/file/TqMab3KXEovm5bxjpHqcC4fnnTe)



OK，此时进入到下面这个页面，最后一步了！

![图片位于介绍将网页产品部署到Cloudflare步骤7的内容中，展示的是Cloudflare页面。页面左侧有导航栏，右侧图片内容部分显示“通过上传项目部署站点”等“](https://feishu.cn/file/N3wdbnypAoSWgtxCFo2ciRRFnqb)

点击它，然后会展开两个选项：

![图片展示的是Cloudflare页面中“上传您的项目资产”步骤界面。界面上方提示“您的项目已准备就绪。请添加文件夹或压缩文件后开始。”中间有“从计算机中选择”下拉框，下方有“上传压缩文件”和“上传文件夹”两个按钮，每个上传文件的最大大小为25 MB。图片与上下文紧密相关，上下文提到因为page功能只支持上传文件夹或压缩包，需新建文件夹，然后将“biaoqingbao”文件夹里的所有文件（除worker.js外）复制进去，最后选择上传文件夹并选中“ai-biaoqingbao”文件夹进行上传。](https://feishu.cn/file/WlTzbkgMkoeu2rxsXqQcXKawnMg)





因为page功能只支持上传文件夹或压缩包，需要自己新建一个文件夹，比如“ai-biaoqingbao”，然后把“biaoqingbao”文件夹里的所有文件，除了worker.js的之外，全部复制一份进去，比如我的复制完后是这样的（你的不一定有这么多文件，因为黄叔后面多做了一些优化）：

![图片展示了在Cloudflare页面中新建“ai - - biaoqingbao”文件夹下的内容。有index.html、README.md、script.js、styles.css四个文件，其中styles.css文件图标为带有#号的蓝色背景。该图片与上文提到的将“biaoqingbao”文件夹里的所有文件复制一份到新建的“ai - biaoqingbao”文件夹中，然后选择上传文件夹，选中“ai - biaoqingbao”文件夹，上传的内容相关，直观呈现了文件夹内文件情况。](https://feishu.cn/file/DkMbbD2UroOFuFxj996cERzUngc)



接着选择上传文件夹，选中“ai-biaoqingbao”文件夹，上传！就会显示上传成功：

![图片展示的是将网页产品部署到Cloudflare后 “ai-biaoqingba”页面时的 的上传状态。上方提示项目将被部署到“ai-biaoqingba.pages.dev”，并显示已上传4/4个文件，所有文件均成功上传。下方列出“ai-biaoqingba”文件夹下的文件及状态，如index.html为44KB等。右下角有“部署站点”按钮。该图片与上文提到的上传文件夹并点击“部署站点”后显示部署成功的内容相呼应，直观呈现了部署状态。](https://feishu.cn/file/LG72bkCRbom3w3xdXhScd5GZn4b)



不用犹豫，点击右下角的“部署站点”，稍微等1-2s，就会提示部署成功：

![图片展示了在Cloudflare上完成网页产品部署后的界面。界面提示“成功！您的项目已部署到以下区域：全球”，并给出项目链接。下方列出后续步骤，包括试用Wrangler CLI、创建或更新资源、添加自定义域等选项，右侧还有“快速链接”“Discord”“反馈”等内容及“继续探索项目”按钮。此图与上下文的关系是，它是按照前文步骤7操作完成后，显示部署成功的界面，意味着完成了步骤7中“部署站点”的操作，进入后续可进一步配置和探索项目的阶段。](https://feishu.cn/file/EfpfbpekioH1HTxzweZcNN9snzf)



### 步骤8：完成部署

恭喜，已经完成了部署！



继续点击左侧列表里的“计算（workers）”---》“workers和pages”，能看到已经部署好的网页：



![图片展示了Cloudflare平台“workers和pages”页面，其中可看到已部署好的网页“ai - biaopingbao”。该网页有“预览”按钮，被红色框线突出显示，且有红色箭头指向。页面显示该资产已上传，域名为ai - biaopingbao.pages.dev ，分支为main。结合上下文，这是将网页产品部署到Cloudflare步骤中的界面展示，后续需等待两分钟，方可点击“预览”访问在云端部署好的页面，且因是海外域名，国内访问可能受限。](https://feishu.cn/file/Nh48bSL3so1IlwxCI1zc6NeTnhg)



注意，不要急马上去访问，因为：

1. 需要等两分钟部署，随后可访问在云端部署好的页面
2. 由于是海外域名，在国内有时会被墙，使用梯子访问
3. 可以绑定自定义域名，需要额外进行设置



过两分钟，点击👆中的访问，可以打开属于你的页面啦！

![图片展示的是部署到Cloudflare后可访问的表情包生成器网页。页面上方有“选择情绪”和“选择风格”的多个选项按钮，中间是输入提示语的文本框及红色“生成”按钮，下方显示一张生成的表情包图片，画面主体是一只欢呼的熊猫，配文“乐到飞起”，周围有爱心等装饰元素。该图片与上文提到的在Cloudflare上部署网页产品，完成部署后可访问云端页面的内容相关，展示了部署成功后可直接访问的网页效果。](https://feishu.cn/file/V9VubtKZQoNLyDxXkyycEjqNnMd)

恭喜！！🎉，**完成部署的，请在这里评论，留下你的网页，让别人享受你的快乐吧：）**



## 02 使用Github+Vercel免费部署

![图片 addCriterion图片展示了AI编程蓝皮书2.0中“黄叔精选”部分内容。上方有“黄叔精选”标题，下方有“10个月，5万DAU，我们可能找到了AI1陪伴的另一种可能”等文字，还配有“查看详情”按钮。下方“解构Manus的设计哲学”部分，介绍了Manus的“Less structure, more intelligence””设计哲学，强调减少结构化代码控制，转而依赖大语言模型（LLM）的智能提升，通过“相信模型能力进步”驱动产品创新，与OpenAI CEO Sam Altman提出的“上下文](https://feishu.cn/file/DEL3b5etsoDWelx578FcrVEsn5c)

https://read.superhuang.me/



在前面的案例：[04 做一个你专属的好文推荐网站（DeepSeek R1 + 飞书多维表格）](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-WS19di3hOoHiB5xUmGxcL8adnxd) 里，我们其实在开头就给出了一个具体的网址，这个网址的第一步是通过Github+Vercel部署之后，再用国内的域名重定向来的。



这里我们先说如何通过Github+Vercel部署，完成免费的部署，这一步之后，大家就可以在线访问自己的产品了（大部分时候需要科学上网）。



Vercel网站，可以一键部署Github的仓库代码，无需自行搭建服务器，就可以完成前端页面和一些后端服务的托管，还是免费的！



<callout emoji="😀">
Vercel专注于前端部署和静态网站托管，提供免费100GB/月的带宽，对咱们部署这个案例是毫无压力的。
</callout>



### 第一，使用AI IDE完成准备工作



首先找到我们在之前的教程中已经开发完成的博客网站项目文件，使用Trae或者Windsurf打开，为了让网站顺利部署到Vercel需要对代码进行一些改造，但是别担心这个过程很简单，依然可以通过AI编程工具进行，我们只需要发出明确指令就行了：



```c++
我想把这个网站部署到Vercel，需要做什么修改？
```



![图片展示了AI编程工具对代码的改造内容。用户询问将网站部署到Vercel需代码修改需求，AI表示需创建vercel.json文件配置部署设置，已添加16行代码，删除0行；还需修改package.json文件，添加Vercel所需配置。。](https://feishu.cn/file/MixGb4wNoocHYUxO19hclosQnud)



接下来AI编程工具会自动对代码进行改造，包括创建vercel.json配置文件和在其他文件中添加所需配置，这个过程我们不必知晓全部细节，等待改造完成即可。



![图片展示了于介绍文档：使用AI编程工具完成将项目部署到Vercel所需代码改造后的说明。内容显示，已为项目创建了vercel.json配置文件，指定构建配置和路由规则，并将所有请求路由到server.js。这与上文提到的完成将项目部署到Vercel所需所有修改相呼应，是对改造完成情况的总结，为后续部署步骤做铺垫。](https://feishu.cn/file/IwgYbE6kaorxzRxzDgFcDNvHnVg)

通过vercel进行部署可以完美解决密钥暴露在代码中的问题（就是别人可以通过看你的网页代码，直接拿到你的密钥），实现方式就是通过vercel网站的环境变量把密匙保存在代码之外，在代码中只填写字段的名称，在vercel项目的设置中填写字段的名称对应各种ID和密匙。



可以看到这改造过程中已经完成了这一部分的修改：



![图片展示了在Vercel项目设置中配置环境变量的操作内容。需添加以下环境变量 addCriterion](https://feishu.cn/file/ZIfVbeoM0odYqsxFooTcDQldnEd)



现在我们先把改造完成的项目文件上传到github，因为一会必须通过github把文件同步到vercel



### 第二，把本地代码推到Github



#### 方法一：命令AI帮忙



这里我们把Github仓库创建，以及推送都放一块了，直接上一个视频操作演示，当前前提是使用注册好的Github账号登录：https://github.com/



<figure view-type="Preview"><source name="推送到Github.mp4" mime="video/mp4" origin-height="1080.000000" origin-width="1880.000000" size="250029891" token="WZsEbBmSwo8cMBxuPeXcCLehnnu"/></figure>



核心是，在Github网站上创建一个存储代码的仓库，然后让Trae把所有的代码推送上去。



大部分情况下，使用和AI对话的方式就可以完成Github推送了。



#### 方法二：可视化的从Trae推送到Github仓库

（此方法感谢<cite type="user" user-id="ou_8e047fbb71e9b70a85930336f1d8c8f5" user-name="王一成"></cite>，这里我们用Trae来做演示，Windsurf类似）



这里的前提条件是，已经在Github里新建了仓库，然后我们需要获取两个信息：

1. 仓库名称
2. 仓库地址



具体的操作方法，可以打开你的仓库后，仓库名称在左上角两个红框处，仓库地址在左下角，点击Code按钮里弹出的HTTPS里，可以点击复制按钮获取：

![图片展示了从Github获取仓库名称与地址的界面。左上角两个红框处突出显示了仓库名称“DeepSeeklifecoach”，左下角点击“Code”按钮弹出的HTTPS右侧有仓库地址，地址右方有复制按钮。这与文档上下文紧密相关，上下文提到将本地代码推到Github的准备工作，需获取仓库名称和地址，具体操作方法即如图片所示。](https://feishu.cn/file/WXf2blKdeoKZZexhiHKcHeElnvh)

还有一种情况是你的仓库是新建的，还是一片空白，那会是下图的样子，仓库名字在左上角两个红框，仓库链接可在右下角的红框复制：

![图片 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/FV1sbQXWqonI8dxOpRnc8qxlnSf)



好了，现在打开Trae，点击左上角的“源代码管理”按钮，然后点击“初始化仓库”：

![图片展示了在Trae中进行源代码管理的操作。](https://feishu.cn/file/APEhbqZayoRc8txT2jbcLmcbnbg)

> 这一步相当于git init



点击完毕后，现在的界面是下面这样：

![图片展示的是在Trae中进行源源代码管理的界面。上方有“源代码管理”标题，下方“更改”区域有“AI Rules”和“prd.md”两个文件，右侧有“U”标识。消息区域提示“#](https://feishu.cn/file/D9g7bWrGqolBv0xUUP7cswRkno4)



好了，我们继续往下操作，下一步是把鼠标移到“更改”区域里，然后点击“+”：

![图片展示了在AI](https://feishu.cn/file/HHwWbIkCgoRg7HxSLBkczWq4ncf)

> 这一步相当于git add .



ok之后，你会发现出现了“暂存的更改”：

![图片展示了在Trae中进行源代码管理时的界面。在“源代码管理”下，消息区域提示Enter在“main”提交，下方“暂存的更改”区域以红色框突出显示，列出了“AI Rules”和“_prd.md”两个文件，右侧有“2”和“A”标识。该图片与文档中介绍从Trae推送到Github仓库的操作步骤相关，对应于在Trae中点击“+”后出现的“暂存的更改”界面，是后续输入版本说明并设置关联仓库操作前的展示。](https://feishu.cn/file/EtlRbw3Ogo3kfoxooErcr8XGnwH)



下一步，自然是在消息区域，输入这个版本的说明：

![图片展示了在Trae中进行代码提交操作的界面。上方“更改”区域有“0.0.1写了AI Rules和prd”说明，下方“暂存的更改”显示 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](https://feishu.cn/file/ZNcsbbMH2otpCuxiaWycwmJKnyb)

> 这一步相当于 git commit -m "0.0.1 写了AI Rules和prd"



接下来，我们要设置具体关联哪个仓库了：

![图片展示了在Trae中中进行源核心操作的界面及步骤。画面中，左侧为“源代码管理”界面，显示“0.0.1 写了AI Rules和prd”等信息](https://feishu.cn/file/GTVSbexM4o6NpjxDhl4c37fQnag)

依次选择“三个点”--》“远程”--》“添加远程存储库”，会弹出下面的弹框：



![图片展示了](https://feishu.cn/file/VyCBb1VPjozn52xVxKdcJHBLn1g)



你可以点击上面的“从GitHub 添加远程存储库”，或者直接把前面我们获取的仓库地址粘贴过来+在输入框内回车。



完成这一步后，需要你输入远程存储库名称，比如这里我给大家演示的仓库名称是“goldencard”，然后回车确认：

![图片展示的是从Trae推送到Github仓库的可视化界面。界面左侧为](https://feishu.cn/file/L43dbuIU6oQhlVxU5B9ccD9Xnte)



这样就完成了和远程仓库的关联，这个可视化界面做的不大好的点是，没有地方显示我们当前有没有具体关联上，或者说不知道关联的是哪个仓库，可以点击下面来查看，没事，我们只是看看：

![图片展示了从Trae将本地代码可视化推送到Github仓库时查看关联仓库信息的操作界面。界面左侧是“源代码管理”区域，显示暂存的更改文件等。右侧有一个由红色箭头指示的操作菜单，点击菜单上方的“...”图标后展开选项，其中“远程”选项被红色框标注，点击后可查看当前关联的仓库名称和仓库地址，这与文档中提到的查看当前关联仓库信息的操作相对应。](https://feishu.cn/file/SP2wbx2sVodAPNxI3bDc13sznrf)



此时，会显示当前关联的仓库名称和仓库地址：

![图片展示了从Trae推送到Github仓库的可视化界面。左侧为源代码管理区域，显示了“0.0.1 写了AI Rules和prd”等内容。右侧是选择要删除的远程库区域，突出显示了“goldencard https://github.com/Backthefuture/goldencard.git”这一仓库名称及地址。该图片与上文提到的完成关联仓库操作后显示当前关联仓库名称和地址的内容相关，直观呈现了关联后的仓库信息。](https://feishu.cn/file/YfLDbghoRo6kBYxTUeLcvH8Fnpb)



ok，按“ESC”或者点击屏幕上空白区域，就可以关掉了，哈哈，别慌。



到了最后一步，我们可以点击“提交”按钮了：

![图片展示了AI](https://feishu.cn/file/ItjFbFAMeoVowJxKPc6c2VwJnqe)

鼠标挪上去，会显示提交后的影响，直接点击吧！点击后会提示“发布Branch”，同时下面的源代码管理图会有更新：

![图片展示了 addCriterion图片展示了AI编程蓝皮书2.0中部署部分的内容，具体是在把本地代码推到Github的步骤中，从Trae推送到Github仓库的可视化界面。界面中显示了“发布Branch”按钮，下方源代码管理图中呈现了“0.0.1写了AI Rules和prd superhuang”等提交信息，还标注了“main addCriterion图片展示了了AI编程蓝皮书2.0部署部分中，从Trae推送到Github仓库的可视化界面。界面中“发布Branch”按钮被红色框和箭头突出显示，下方源代码管理图呈现了提交信息，如“0.0.1写了AI Rules和prd superhuang”，并标注了“](https://feishu.cn/file/KrP0byhX5oFHJSxWhZacKRvWnvo)

下面源代码管理图，这个区域用于显示当前分支的提交历史或变更记录，帮助开发者快速查看最近的提交信息。



没毛病！继续点击“发布Branch”！随后会有个提交的动效，之后会显示下图：

![图片展示了于文档中介绍从Tra](https://feishu.cn/file/NYoWbv5w9ozMRKxmd8ecNt2jn3d)

可以看到源代码管理图里，当前这一条的右侧显示了一个小云朵，说明已经同步到云端了。

另外如果你点击这一条信息，会看到上图的右侧，左边灰色区域显示此前为空白，右边绿色区域显示更改了的代码。因为这是第一次，所有的代码都是新增的，所以全绿。



我们再访问这个仓库的链接，刷新一下，会发现出现了刚才上传的代码：

![图片展示的是在GitHub上“goldencard”仓库的代码页面。页面显示了“superhuang”分支下的三条提交记录，分别是“0.0.1写了AI Rules和prd”“AI Rules”“prd.md”，时间均为7分钟前](https://feishu.cn/file/Bw67bMvMFoN9ucxkJOBc6oAynCd)



### 第三，使用Github账号登录Vercel，并部署

> 这一步，我们使用其他案例的内容做演示，大家可以参考流程



选择GitHub账号登录Vercel：

https://vercel.com/login



![图片展示了Verc addCriterion图片展示了Vercel登录页面。页面上方显示“Log in to Vercel”。下方有四个登录选项，分别是“Continue with GitHub”（用GitHub登录，被红色框和箭头突出显示）、“Continue with GitLab”（用GitLab登录](https://feishu.cn/file/QNeBbLDbZoUdrFxyJUncWKZ7nkh)



登录后选择Add New..里的Project：

![图片展示了Vercel平台的项目管理界面。界面顶部有导航栏，右侧有“Add New...”下拉菜单，其中“Project”选项被红色框突出显示。下方是“Recent Previews”和“Projects”区域，分别列出最近预览和已创建的项目，每个项目有名称 自动生成](https://feishu.cn/file/Lm0xbFZlPooKRpxWahUcEmSQn3b)



选择刚才上传的仓库，点击“Import”：

![图片展示的是Vercite addCriterion](https://feishu.cn/file/Rixqb6gtjos22QxVnRUcNIZlnge)



在新页面里点击“Deploy”：

![图片图片展示的是在Vercel平台选择GitHub账号登录后，添加新项目时的界面。界面中显示从GitHub导入的“Backtthefuture/lifecoach”仓库，可选择创建项目位置及名称，还可设置框架预设、根目录等。图片中红色框突出显示了“Deploy”按钮，该按钮位于界面底部，点击此按钮可进行项目部署操作，是后续部署流程中的关键一步。](https://feishu.cn/file/QFICbahvzo8iSNxK117cAsRZnIb)



稍等片刻，会提示完成部署，可以点击底部的“Continue to Dashboard”返回控制台：

![图片展示的是Vercel部署项目后的提示界面。上方显示“Congratulations! You just deployed a new project...”，并有项目名称“Life Coach AI - 个人成长助手”。 与AI交流，获取AI的建议”。下方“Next Steps”部分有三个选项，分别是“Instant Previews”“Add Domain”“Enable Speed Insights”，最后是红色框突出显示的“Continue to Dashboard”按钮。该图片与上下文关系紧密，对应文档中“稍等片刻，会提示完成部署，可以点击底部 addCriterion addCriterion addCriterion addCriterion 自动生成](https://feishu.cn/file/YcyLbUSDgosKQVxgUBCcjHBKnvh)



你的域名/点击访问等，都可以在下图箭头处操作：

![图片展示了Vercel平台的项目部署界面，项目名称为“lifecoach”。画面中下方有一个“Production Deployment”区域，其中有一个网址链接“lifecoach-anonymlage.vercel.app”被红色箭头指向并高亮。右上角有一个“Visit”按钮也被红色箭头指向并框出。该图片与上文“你的域名/点击访问等，都可以在下图箭头处操作”的内容对应，直观呈现了在Vercel界面中与域名访问相关的关键部分位置。](https://feishu.cn/file/RrOob9ap6o1G7wxaVsncci9hnmg)



### 第四，把密匙配置为环境变量



进入项目首页后，可以看到一个Visit按钮，这个就是打开网站的按钮，但是现在我们还没有配置密匙的环境变量所以点击也无法正常查看网站。



![图片展示了](https://feishu.cn/file/Xk4xbG43wohlCHxV2pgcrHqln2d)

先点击设置页面开始配置环境变量



，点击后可以看到左侧有一个Environment Variables选项，点击它：

![图片展示了式 addCriterion](https://feishu.cn/file/LGiUbZ4croKhumxfTAicHOVmnvd)



在右侧的key和value的输入框中分别输入4个环境变量的名称和值，首次进入时只有一个输入框，点击下方的Add Another按钮就可以添加更多，添加并填写完成后如下图，然后点击保存按钮就行了。



![图片展示了在Vercel设置页面中添加的四个环境变量。变量名称分别为“TABLE_ID”“BASE_ID”“FEISHU_APP_SECRET”“FEISHU_APP_ID”，对应的值均为省略号，表示被隐藏。右侧显示这些变量均为“All Environments”环境，添加时间均为1小时前，状态均为绿色对勾，且右侧均有三个点的图标。该图片与上文提到的在Vercel设置页面添加环境变量的操作步骤对应，展示了添加后的环境变量情况。](https://feishu.cn/file/NRzCbniO9oeyw8xFvsecJF2SnXc)



这四个变量如何获取，在[第二步：用网页呈现多维表格里的内容](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-OR7Yd3btgoymYJxdxU0c9a5AnDJ) 里面我们已经介绍了，大家不记得的话可以回看一下。



### 第五，开始使用



保存后需要1-2分钟重新构建项目，等待以后回到首页，看到下图中的状态是Ready就可以访问网站了。



![图片展示了Vercel平台上项目“goodarticle”的部署状态页面。页面中“Production Deployment”部分显示项目状态为“Ready”，且于11小时前由“BackMuffature”部署。关键信息有默认网址“goodarticle.vercel.app”，其被红框突出显示。右上角有红色箭头指向的“Visit”按钮，点击可打开网站，并会默认给予一个网址。该图与上文提到的“保存后等待项目重新构建，状态显示Ready即可访问网站”内容相关，直观呈现了网站部署完成后的可访问状态及操作入口。](https://feishu.cn/file/KnzBbi2OPo3dflxBlbWcyUwvnne)



点击vitst按钮之后就可以打开网站，并且会默认给与一个网址。



这个网址默认是：项目名称.vercel.app

至此这个网站已经被成功部署到vercel，也可以通过网址进行访问了。



## 03 白嫖谷歌Chrome插件部署实现最简单的部署方式



<figure view-type="Preview"><source name="Chrome插件部署方式.gif" mime="image/gif" size="27621417" token="RogDb7TzIoPtLcxaOtCcXYCqnW9"/></figure>

点击插件按钮后，直接打开新标签页！



说到云端部署，前面我们介绍了两种，其实还有一种是很有意思的，我见到过一些产品直接用浏览器插件打开，一开始还纳闷呢，稍微研究一下才发现，原来这么简单！



在之前的教程中我们已经开发过Chrome插件，而Chrome插件的形态可以分成三种：

1、弹出窗口（Popup）

2、侧边栏（Sidebar）

3、全页面（Override Pages）

其中popup就是我们之前flomo插件教程中使用的形态，而Override Pages形态则完全与全屏的网页相同，使用Override Pages形态代替网页，把扩展程序加载到Chrome中，就实现了最简单的云端部署。下面是详细的教程



### 第一. 改造之前的项目为Chrome插件



我们把之前已经部署到Vercel的好文推荐网站文件夹，复制一个副本，改名成“blog1”

> 之所以复制一份，是别影响了之前正常能在Vercel部署的版本



然后使用Windsurf打开它，输入提示词：



```c++
你先仔细阅读一遍代码了解项目
```



等Windsurf理解完项目后，再输入提示词：



```c++
按照当前bolg1文件夹内的功能，改造为Chrome扩展的Override Pages形式。
不要对功能逻辑进行改动，读取env文件内的飞书API密匙信息应用到改造后的代码中：
env文件内的密钥信息如下：
# 飞书应用配置
FEISHU_APP_ID=xxxx
FEISHU_APP_SECRET=xxxx

# 多维表格配置
BASE_ID=xxxx
TABLE_ID=xxxx

最后的效果是，点击浏览器插件后，会主动新开一个标签页，使用全屏界面显示博客列表，原本Chrome浏览器的新开标签页不要受影响。
创建一个全新的文件夹保存改造后的chrome扩展程序文件
```



上面标黄字体的信息，你可以从此前项目里获取，在目前的项目中，也可以从.env文件里获取：

![图片展示了在Windsurf](https://feishu.cn/file/IvfPbCEiSoFIIsxPPcfcgTApnXf)



稍等一会，Windsurf完成了工作，我们可以在浏览器扩展程序里选择对应文件夹导入，注意，前面我们要求Windsurf重新创建一个文件夹，防止文件混淆，所以需要看一下它生成的文件夹叫啥：

![图片展示了Chrome浏览器扩展程序的开发环境文件夹结构。其中，`blog_extension`文件夹被红框突出显示。该图片与文档中改造项目为Chrome插件的内容相关，说明在使用Windsurf完成项目改造后后，需在浏览器扩展程序里选择`blog_extension`文件夹导入，以完成Chrome扩展程序的开发流程。](https://feishu.cn/file/Z3LGbogXioZIEixSMadcTaelnec)



导入后报错，没事，复制给Windsurf：

![图片展示的是一个报错界面，上方显示“Me”和“报 自动生成](https://feishu.cn/file/Mg2jbhqINoHKaIx7UMKcdPksnTb)



然后就完成了开发。此时，在你的本地已经可以正常使用了。



如果你把安装包发给朋友，他在自己电脑的Chrome上安装后，也可以访问，但如果希望别人可以直接从Chrome扩展商店里下载，可以继续往下：



### 第二. 上传到Chrome应用商店



当确定一切功能正常，我们就可以准备发布到Chrome应用商店了，首先通过下面的链接进入扩展商店页面

```markdown
https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=zh-CN
```



然后进入开发者中心



![图片展示了Chrome浏览器开发者工具栏的下拉菜单，其中“开发者信息中心”选项被红色箭头指向。该图片与文档中“上传到Chrome应用商店”步骤相关，说明在确定功能正常后，需通过浏览器开发者工具栏进入开发者中心，此图直观呈现了进入开发者中心的操作入口，帮助用户明确操作位置。](https://feishu.cn/file/OLm9blPKtoCzGixLiUYcTrgonTe)



登录谷歌账号之后跟随开发者注册流程走完即可，所有有疑问的不知道如何填写的字段都可以通过询问Trae或Windsurf完成，最后支付5美元就可以完成注册。注意这里不支持微信和支付宝及国内银行卡，需要使用国外信用卡或google pay完成支付。



完成开发者注册后，进入开发者中心就可以看到上传插件的入口了：



![图片展示的是Chrome应用商店开发者中心中上传插件的入口界面。画面中央有一个蓝色按钮，按钮上有白色“+”号和“上传新内容”字样。该ylko](https://feishu.cn/file/WXJYbIDKjoMbsRxYG3BcbstYnYe)



点击上传之后把刚刚的项目文件压缩为ZIP格式，进行上传



![图片展示的是Chrome应用商店中上传插件时的界面。界面上方显示“添加新内容”，中间区域有提示“将您的 ZIP 文件拖放到此处，或者选择一个文件”，下方有一个蓝色的“浏览文件”按钮。该图片与文档中“上传到Chrome应用商店”部分内容相关，对应点击上传后将项目文件压缩为ZIP格式进行上传的操作步骤，直观呈现了上传文件的界面。](https://feishu.cn/file/MYueby8FbohFiOxqrx2cu0Cbngb)



后续还需要填写一些信息，这些信息都可以在刚刚的AI编程工具中借助AI输出，把需要填写的字段直接截图发送过去就行，填写完成后提交审核，大约2天左右就可以看到结果～



这种方式借助了Chrome浏览器完成了产品云端部署，是最简单的把产品部署到云端的方式，Chrome扩展程序通过Web Server for Chrome等工具，将浏览器转化为HTTP服务容器。这种扩展基于Service Worker技术实现请求拦截与响应，可直接在用户设备上监听指定端口（如8887），处理静态文件托管、数据上传下载等基础服务，无需依赖远程服务器资源。



但同样有一些限制。例如无法直接操作硬件资源、性能有限无法支持高并发场景、包括当浏览器窗口关闭或系统休眠时，基于Service Worker的后台运行机制最长仅能维持5分钟活跃状态。对于需要24小时持续响应的服务场景，存在服务中断的风险。



但总体来说，对于简单工具产品已经足够了～



### 作业



我们在前面做了个插件，是在看到好文章时，点击一下后直接把文章链接插入到飞书多维表格的，如果是希望用一个插件实现两个功能，你想想怎么实现：

![图片展示了飞书多维表格内容助手的界面。上方显示“飞书多维表格内容助手”，下方有两个蓝色的按钮，分别是“打开博客”和“保存当前页面”。该图片与文档中介绍飞书多维表格内容助手功能的内容相关，直观呈现了助手的界面界面及可执行的操作，帮助读者更好地理解助手的使用场景和功能。](https://feishu.cn/file/JbDQbeT50o6N1UxHVgmchlllnZd)



## 04 最简易的免费发布：yourware



可以尝试访问黄叔发布的站点：https://8qdgjrdqd5.yourware.so/

基本就是1分钟内完成登录+发布，非常简单



打开网址：https://www.yourware.so/



![图片展示的是Yourware网站的部署页面。页面上方显示“Vibe Coder's Instagram”，并有“Don't Keep Your Code to Yourself - Share It With the World”的标语。中部有“Upload”和“Paste Code”选项卡，当前选中“Upload”。下方区域提示可拖拽或点击“Select File”或“Select Folder”上传文件，支持HTML或TSX文件，文件夹需包含HTML、CSS和JS文件且大小不超过10MB。右下角有“Visit Site”和“Boost My Design”按钮。该图与文档中介绍的在Yourware网站进行简易免费发布的内容相关，展示了发布前的上传界面。](https://feishu.cn/file/TXlCbNOHvoUBzXxSpchclWjHnEb)



两步就完成了：

第一步，右上角登录“sign in”，需要用Google账号

第二步，选择单一文件“Select File”，或者整个文件夹“Select Folder”



会弹窗请求确认，点上传即可：

![图片显示了在Yourware网站上传文件时的弹窗确认界面。弹窗标题为“将39个文件上传到此网站？”，内容提示此操作会上传“图片压缩”](https://feishu.cn/file/AfVIbvwTwoCwjJxhtoJcduBenEg)

上传完毕后，很快，就会出现下面的页面，意味着已经完成部署了：

![图片展示的是在Yourware平台完成部署后的页面。页面上方显示“Deployment Successful”，表明数字创作已成功部署至安全云网络。中间区域有“图片压缩工具”及“简单、快速地压缩您的图片”说明，下方有一个“点击或拖拽图片到这里”的区域。右下角有“Upload YOURWARE”按钮，左下角有“Boost My Design”和“Share”按钮，右下角还有“Visit Site”按钮。该图片与文档中介绍在Yourware平台完成部署的内容相关，直观呈现了部署成功后的页面情况。](https://feishu.cn/file/H3KJbIjwboBEcExvU7WcTDFCnkg)

右下角的“Visit Site”，就是直接访问部署好的站点

左下角的“Bosst My Design”，是优化你的页面，可以尝试玩一下。



打开站点后，地址栏就是你可以分享出去的网址啦：

![图片展示了在Yourware平台完成部署后，打开站点 addCriterion图片内容:](https://feishu.cn/file/R2tYbNgXloVOGKx9MFmcBdmHnzb)



## 关键：域名购买和绑定（待写）



# 降噪AI（微信服务号）



首先，欢迎大家打开微信，扫一扫关注我们的服务号产品（暂停服务了）：

![图片展示的是 addCriterion图片内容:](https://feishu.cn/file/Ts1ob2g2tojFvZx1bTWc6oIfnbc)

扫码关注后，可以点击左下角体验产品：

![图片展示了降噪AI微信服务内容\[heading1 \]降\[content addCriterion\]](https://feishu.cn/file/Dl3AbZWs7oQAYQx53f3cTgd5ncf)

如果你点击右上角的订阅更新功能，还可以在每天早上9点，收到一条推送消息，提醒你阅读今日的报道。



这个降噪AI，就集合了多个模块的能力，共同搭建了这一个AI应用：



<whiteboard token="B85jwvWYwhrJPcbISFVcP28Cnfg"></whiteboard>



图中的每一个节点就是一个模块，我们用多个模块拼装起来实现降噪AI，这里面通过把“复杂问题拆解成多个简单问题”大幅降低了AI编程里的复杂度。



![图片展示的是Coze工作即使用Linktoseet_filter工作流的界面。界面中呈现了多个节点，包括“获取链接”“获取链接内容”“获取链接内容 自动生成内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接内容”“获取链接 自动生成内容”“获取链接内容”“获取链接内容”“获取链接内容”](https://feishu.cn/file/Hr8Ib6pLJoOD9zxNmFbc5w3KnBc)

其中Coze的工作流如上图，完成了新闻的整理/打分/筛选/摘要/转存的几个步骤。



每个节点，都是一个处理环节，最后再通过API输出，把数据存入数据库，然后前端网页再从数据库定时读取出来呈现，就是大家看到的页面了。



<callout emoji="🚅">
一句话：不管黑猫白猫，抓到老鼠的就是好猫
</callout>



我们的目标是做出产品来满足用户需求，至于是如何做的，用哪些模块拼装出来，是用AI编程，还是Coze工作流，并不重要，做出来更重要。



我们不会吹嘘AI编程能做所有产品，我们理解它也有能力边界，所以本文结合了Coze，通过Coze工作流+Bot，大幅扩展了能做产品的边界。



今后，**本蓝皮书还会更新使用Windsurf开发iOS App，以及其他类型的应用**，欢迎继续点击飞书文档右上角的关注文档更新：

![图片展示了飞书文档右0x0000x0000000000000000000000000000000000000000000000000000000000000000000000000000000000x00000x](https://feishu.cn/file/P9LPbEsZ9oTnMlxw20HcECMMnih)

# 做一款App



## 一个提示词完成一款App的设计（Claude4）



Claude4发布后，我昨天用了一天时间调了30多版Prompt，完成了一步做出多个IOS界面设计的提示词，先看看效果：



第一个产品：**给你码**（没有谐音梗)！idea来源于前段时间特工宇宙的文章：**码都来**，我微创新，搞了个给你码！

![图片展示了“给你码”](https://feishu.cn/file/MpAabIFJtob52Lx8H9dcBiPHnjb)



第二个产品：高考祈福App，马上高考了，给考生祈福吧：

![图片展示了高考祈福App的设计理念及界面示例。上方标题为“高考祈福APP”，下方有“5”“375 - 812”“100%”等数据。下方分五个界面示例，包括“高考祈福”“点开心灯”“考生详情页”“拍照考号”“考生详情页”等，每个界面展示了不同功能和信息，如考生信息、祈福数量等。底部有“设计理念”说明，体现了该App为考生祈福、记录成长的初衷。](https://feishu.cn/file/UQoPbSTQvoyvSwx1CAWc6a4jnqc)



### 完整提示词



```markdown
#角色
你是一位资深产品经理、交互设计师、UI设计师

#任务
本次任务的最终目标是生成一套手机APP的UI设计图，首先在当前项目目录创建task.md文件，列举全部待办事项，每完成一个待办事项就编辑task.md文件，使用✅更新对应事项的完成状态，按照顺序依次完成待办直到所有待办事项均变为完成状态。

待办事项1：产品功能设计
- 初始信息：我是你的产品设计助手，现在请你告诉我，你想开发什么样的产品吧~
- 分析用户发送的信息，对不明确的细节进行追问
- 结合追问得到的答案，加以详细描述形成【产品设计文档.md】文件

待办事项2：交互设计
结合{待办事项1}输出的最终功能，确定该产品包含的所有页面，以下方示例格式输出全部页面的信息。
示例格式：
<页面名称>
用途：<页面的主要作用>
核心功能：<列出该页面包含的主要功能>

所有页面的信息输出完成后，更新【产品设计文档.md】，

待办事项3：UI设计
- 根据【产品设计文档.md】，同时遵守下方{UI设计风格}和{UI设计规格}，为每个设计图创建独立的html文件。

全部页面的html文件输出完成后，中断任务，提示用户输出“继续”指令

待办事项4：提示用户输入“继续”指令


待办事项5：创建一个UI.html文件
- UI.html页面的整体背景色为#f6f6f6
- 使用iframe技术将所有页面以适当的网格排列在UI.html里面，每个iframe的宽度固定为400px，高度固定为850px，保证每张设计图完整显示出来，不会被裁切或遮挡。
- iframe的背景色为##f6f6f6

待办事项6：自检代码
依次检查每个页面的html文件，
检查：强制隐藏所有滚动条
检查：设计图尺寸为 375x812PX
检查：信号栏与标题栏背景色必须一致（可以都是透明）
检查：图标和其他样式调用方式
检查：底部tab栏必须为白色填充，100%不透明度。


待办事项7：检查UI.html文件
检查UI.html文件的全部代码，删除iframe之外的多余装饰性元素，每张设计图的内部已经带有了mock up的样式代码，UI.html内的iframe不需要带有mock up的样式，如果有也需要进行删除。


#UI设计风格
优雅的清新主义美学与功能的完美平衡;
清新柔和的渐变配色与品牌色系浑然一体;
恰到好处的留白设计;
轻盈通透的沉浸式体验;
信息层级通过微妙的阴影过渡与模块化卡片布局清晰呈现;
用户视线能自然聚焦核心功能;
精心打磨的圆角;
细腻的微交互;
舒适的视觉比例;
规范的间距；

#UI设计规格
1、单个设计图尺寸为 375x812PX，带有mock up模拟手机的样式。
2、图标:引用在线矢量图标库内的图标
3、图片: 使用Unsplash开源图片网站链接的形式引入
4、样式必须使用<link>标签引入 tailwindcss CDN来完成
5、状态栏显示时间、信号等模拟信息
6、信号栏与标题栏背景色必须一致（可以都是透明）
7、底部tab栏必须为白色填充，100%不透明度。
8、使用固定高度防止容器变形

#注意事项
1、mock up的颜色只能使用黑色
2、所有html中都强制隐藏滚动条
```



注意：使用Curosr+Claude 4 Sonnet（不是thinking模型）



怎么用这个提示词呢？新建文件夹，然后用Cursor打开这个文件夹，然后选择Agent模式，选择Claude 4 Sonnet模型，然后输入上面的提示词，回车。



稍等一会，就会开始出现下面的界面：



### 开发流程



输入完提示词，Cursor会很快给你几个问题，让你确认：

![图片展示的是 addCriterion addCriterion](https://feishu.cn/file/O9CFbn5S9obpPoxdDF1cdSRNnkg)



这一步是需要你来告诉这个万能的提示词，你希望做什么样的产品！



拿我们前面的“给你码”来举例，我们输入的提示词是：

```Plain Text
做一个产品叫：给你码，现在很多AI应用都需要邀请码，然后产品蝗虫们都找不到但又想用邀请码，所以可以开发一个邀请码共享平台，这样AI应用可以来这里发布邀请码，用户也可以发布自己的邀请码，风格要酷炫一些，其他的你作为资深AI产品经理帮我补充
```



继续，Cursor会接着来追问细节：

![图片展示了在以“给你码”为例设计App过程中，AI追问细节的内容。核心概念理解部分显示，产品名称为“给你码”，核心价值是AI应用邀请码共享平台，目标用户为AI应用开发者与想体验AI应用的用户，设计风格酷炫。需进一步明确的细节方面，用户角色与权限上，提及AI应用方认证、防止虚假应用发布，普通用户积分/等级获取邀请码及管理员角色审核等问题；还有邀请码管理机制内容虽未完全展示，但也是需明确的点。这是AI基于用户描述做的分析追问。](https://feishu.cn/file/QmUCbSEgEoYUjdxvyvDcuUcunvb)



你可以详细描述需求，也可以和我这样，简单说说，让AI发挥：

```Plain Text
AI应用可以选择三个：纳米AI搜索，Lovart，天工SkyWork作为示例，你可以使用搜索获取这三个产品的信息，其他的你看着办
```



然后Claude会酷酷输出，一次生成3000行代码都没问题，是的，Claude 3.7大约只能输出1000行，所以我们静候佳音就好，然后它会完成整体的输出：

![图片展示了AI编程蓝皮书2.0中“](https://feishu.cn/file/HLayb6dt4oXaGjxrYkkcKRXrnng)



这里我们中断了一下，预防模型输出太长，只需要输出“继续”两个字，接着会一直到整个UI稿输出完毕：



![图片显示“恭喜！您现在可以打开UI.html文件查看完整的APP设计效果！””，并说明所有页面都已完美实现，符合现代移动应用的设计标准标准，具备出色的视觉效果和用户体验。该图片位于介绍AI编程生成APP设计效果的上下文之后，是对生成的UI设计效果的提示，告知用户可打开UI.html文件查看，是对上文提到的Claude生成的3000行代码完成整体输出的成果展示 addCriterion addCriterion](https://feishu.cn/file/D0GObk2JAoushBxIV1XcGFbhntf)





好的，打开UI.html，可以看到本文一开始的界面了！



如果你想看高考祈福App的提示词，以及继续查看更多有关这个提示词的设计流程，欢迎打开咱们AI编程蓝皮书来看：

![图片为蓝色背景，上方显示“AI产品黄叔 * Orange * 歸藏联合发布”，中间大字为“AI编程蓝皮书”，下方小字是“系统入门AI编程的第一本手册”。左下角有一个二维码，旁边配文“长按图片 识别二维码”。图片与上下文关系为：文中提及若想查看高考祈福App提示词及更多设计流程，可打开AI编程蓝皮书，此图片即为该蓝皮书的封面示意，通过扫码或许可获取相关内容。](https://feishu.cn/file/K8PIbdJnYoUVtTxw7etcMxfOngm)



```Plain Text
做一个产品叫：高考祈福，每个人可以给特定的用户祈福，也可以给全国考生祈福，可以新建考生，然后充钱让更多人来帮他一起祈福，也可以分享邀请更多人祈福。给那些想为高考考生祈福的朋友，祈福会有一些动画效果，其他的你来定，你是资深AI产品经理，很有洞察和创造力。
```

```Plain Text
给那些想为高考考生祈福的朋友，祈福会有一些动画效果，整体设计要比较温馨，其他的你来定，你是资深AI产品经理，很有洞察和创造力。
```





### 提示词设计过程



这套提示词的重点可以用两个词来形容，分别是**「流程」**和**「渐进」**。



换个角度想想，即使是Agent，第一步做啥第二步做啥，也是需要流程设计的。所以我们其实是用提示词代替了图形界面的工作流形式。因为提示词不像图形化界面那样可以非常明确的设置出各个环节和任务，所以流程控制是重点。



因此首先对应的提示词是：



```markdown
#角色
你是一位资深产品经理、交互设计师、UI设计师

#任务
本次任务的最终目标是生成一套手机APP的UI设计图，首先在当前项目目录创建task.md文件，列举全部待办事项，每完成一个待办事项就编辑task.md文件，使用✅更新对应事项的完成状态，按照顺序依次完成待办直到所有待办事项均变为完成状态。
```



渐进一方面是说：为了减少一开始对用户输入信息的要求过高，所以需要采用对话的方式来逐步引导用户完善信息，得到关键信息后由AI进行完善。



另一方面是指：每个环节的输入都依赖上一环节的输出。所以我们要在提示词中严格规定各个任务需要按照顺序执行，如果上一环节没有完成输出就开始下一环节，那么输入信息变差一定会导致下一环节的输出变差，影响最终结果和整体质量，所以这里把**`按照顺序依次`**任务设定为最高级规则，也需要首先设定罗列**`task.md`**。



随后是**任务部分**，也是这套提示词的重点，我们先看下提示词：

```markdown
待办事项1：产品功能设计
- 初始信息：我是你的产品设计助手，现在请你告诉我，你想开发什么样的产品吧~
- 分析用户发送的信息，对不明确的细节进行追问
- 结合追问得到的答案，加以详细描述形成【产品设计文档.md】文件

待办事项2：交互设计
结合{待办事项1}输出的最终功能，确定该产品包含的所有页面，以下方示例格式输出全部页面的信息。
示例格式：
<页面名称>
用途：<页面的主要作用>
核心功能：<列出该页面包含的主要功能>

所有页面的信息输出完成后，更新【产品设计文档.md】，

待办事项3：UI设计
- 根据【产品设计文档.md】，同时遵守下方{UI设计风格}和{UI设计规格}，为每个设计图创建独立的html文件。

全部页面的html文件输出完成后，中断任务，提示用户输出“继续”指令

待办事项4：提示用户输入“继续”指令


待办事项5：创建一个UI.html文件
- UI.html页面的整体背景色为#f6f6f6
- 使用iframe技术将所有页面以适当的网格排列在UI.html里面，每个iframe的宽度固定为400px，高度固定为850px，保证每张设计图完整显示出来，不会被裁切或遮挡。
- iframe的背景色为##f6f6f6

待办事项6：自检代码
依次检查每个页面的html文件，
检查：强制隐藏所有滚动条
检查：设计图尺寸为 375x812PX
检查：信号栏与标题栏背景色必须一致（可以都是透明）
检查：图标和其他样式调用方式
检查：底部tab栏必须为白色填充，100%不透明度。


待办事项7：检查UI.html文件
检查UI.html文件的全部代码，删除iframe之外的多余装饰性元素，每张设计图的内部已经带有了mock up的样式代码，UI.html内的iframe不需要带有mock up的样式，如果有也需要进行删除。
```



如上文所说 ，这套提示词的最重要规则就是按照流程（待办事项顺序）执行，所以在任务模块的第一部分就要创建待办事项文件，并列出具体的细分任务。



这里面，完成任务后需要输出**`产品设计文档.md`**文件，用作信息留存，作为下一环节的输入信息和后续开发流程中的参考信息。功能设计完成后需要进行交互设计工作，对页面元素的显示规则、操作结果等做出具体的定义。



然后开始做交互设计，再是UI设计，交互设计规则被更到文档后，开始UI设计就可以得到更准确的结果，而UI设计环节要考虑的就更多一些，信息涉及到视觉风格和页面规格的定义，并且需要在任务中引用这两部分内容。在开始UI设计之前，再次要求了根据产品设计文档内的信息做输出。



到这就完成了一半，接着我们截断了任务，为啥呢？是为了防止遇到代码输出量限制的问题，这里为每个页面创建单独的html文件，所以最后再形成了聚合查看全部UI设计方案的UI.html文件（使用iframe技术只需要极少的代码就可以引入其他独立的UI文件，就像插入了链接一样，只需要一行代码）



这里等待用户输入**`继续`**，再创建一个UI.html把所有单个App的界面拼到一起，最后再检查一下代码，检查一下UI.html确实是按照我们的要求实现的。



后续又添加了独立的设计风格模块和设计规格模块，整体的提示词就形成了：



```markdown
#UI设计风格
优雅的清新主义美学与功能的完美平衡;
清新柔和的渐变配色与品牌色系浑然一体;
恰到好处的留白设计;
轻盈通透的沉浸式体验;
信息层级通过微妙的阴影过渡与模块化卡片布局清晰呈现;
用户视线能自然聚焦核心功能;
精心打磨的圆角;
细腻的微交互;
舒适的视觉比例;
规范的间距；

#UI设计规格
1、单个设计图尺寸为 375x812PX，带有mock up模拟手机的样式。
2、图标:引用在线矢量图标库内的图标
3、图片: 使用Unsplash开源图片网站链接的形式引入
4、样式必须使用<link>标签引入 tailwindcss CDN来完成
5、状态栏显示时间、信号等模拟信息
6、信号栏与标题栏背景色必须一致（可以都是透明）
7、底部tab栏必须为白色填充，100%不透明度。
8、使用固定高度防止容器变形

#注意事项
1、mock up的颜色只能使用黑色
2、所有html中都强制隐藏滚动条
```



以上是全部内容\~   后续会继续更新IOS APP的实际开发过程









# 末尾（有社群）



很多人会说，上班好累，晚上回到家只想刷手机躺会，啥都不想办。



ok，如果是这样，黄叔推荐个从@泛函 那里看到的一个分享，非常有用。



他的核心策略是：



<callout emoji="👍">
平时多想需求，周末抽一天集中开发！
</callout>



我觉得这个策略非常适合普通人，碎片化的时间用来思考和优化你的产品需求，周末再集中时间，甚至找几个朋友一起，有个环境能更高效的开发产品。



相信我，如果你是喜欢创造的朋友，在你坐下来，使用windsurf指挥AI不断为你创造的过程，那种喜悦真的是会带来心流，几个小时一下就过去了！



很多朋友希望在学习过程中可以互帮互助，于是黄叔建一个免费的交流群，后续关于蓝皮书里的内容更新/活动，可以及时的同步：

<grid>
<column width-ratio="0.402338">
![图片展示了一个名为“AI编程蓝皮书”的群聊二维码。上方有几张头像图片，旁边是群聊名称及书籍图标。下方是黑白相间的二维码图案，中间有微信图标。图片底部注明该二维码7天内（7月7日前）有效，重新进入将更新。图片与上下文紧密相关，对应文中黄叔建立免费交流群，用于及时同步蓝皮书内容更新及活动的说明，方便感兴趣的朋友扫码入群。](https://feishu.cn/file/QqwOblHFuo5zD4xOPZfcAOj7nSd)
</column>
<column width-ratio="0.597662">
![图片是一个二维码，中间于文档介绍文档中黄叔建的免费交流群二维码。二维码中间有卡通人物图案，背景为白色。该图片与上下文紧密相关，上下文提到黄叔建了一个免费交流群，群内可同步蓝皮书内容更新及活动，此二维码正是用于扫描加入该交流群，方便大家在学习过程中互帮互助。](https://feishu.cn/file/YCDkbCBNuoHN1fxoccJcwmn7nCh)
</column>
</grid>







右图是黄叔的公众号“AI产品黄叔”，后面会更新更多AI编程相关的内容，欢迎关注。

![图片展示的是黄叔的公众号“AI](https://feishu.cn/file/IJbjbKm84oDwROxpYHAcGgtMnlc)