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

![图片展示的是Cloudflare官网首页。页面上方有导航栏，包括“解决方案”“产品”“定价”“资源”“合作伙伴”“为何选择Cloudflare”等选项。中间大标题为“随时随地连接、保护和构建”，并有“了解服务”“免费开始使用”按钮。下方有“控制”“安全”板块及相关图标。图片中红色箭头指向“免费开始使用”](/courses/aicoding/img/Qo3ebj5i6o6flcxKdJrcXDZ9nke.jpg)

点击中间的“免费开始使用”

![图片展示的是Cloudflare注册页面。页面上方显示“开始使用Cloudflare”，下方有“使用Google继续”和“使用Apple继续”两个按钮，中间是“电子邮件”输入框， 且有“密码”输入框，以及“告诉我们您是人类”区域，包含“确认您是真人”的勾选框和“CLOUDFLARE”标识。底部有“注册”按钮和“已有账户？登录”链接。该图片对应文档中“步骤1：注册Cloudflare账号”部分，是注册Cloudflare账号时的登录界面。](/courses/aicoding/img/VqcgbzF33opYjHxog2BcB1zmnkb.jpg)

使用适合你的方式登录注册！

![图片展示了Cloudflare网站的“Workers和Pages”页面。左侧导航栏中“Workers和Pages”被红色箭头突出显示。右侧页面标题为“提升站点的速度和安全性”，介绍可通过Cloudflare发送Web流量、使用其格式化表达式学习新语言等。下方有输入现有域、快速创建DNS记录、手动输入DNS记录、上传DNS区域文件等操作选项。](/courses/aicoding/img/KjgabKn5doiILJxKf4QcStOhnOe.jpg)

登录后，点击左侧列表的“计算（workers）”，然后再点击“Workers 和 Pages“

找到了吧！在页面中找到创建按钮，点击进行创建

![图片展示的是Cloudflare平台“Workers and Pages”页面。画面右上方有一个蓝色的“创建”按钮，被红色箭头所指。这与文档中“步骤1：注册Cloudflare账号”里“点击创建worker按钮”的内容对应，说明在注册Cloudflare账号过程中，需在该页面找到并点击此“创建”按钮，以进行后续的worker创建操作，是将网页产品部署到Cloudflare的其中一个步骤示意。](/courses/aicoding/img/GDhhbfYyjo99aMxHWjNc4atNn6d.jpg)

点击创建worker按钮

![图片展示的是Cloudflare创建应用程序的步骤1中点击“创建worker”后的页面。页面上方显示“创建应用程序”，并有“Workers”和1“Pages”选项。中间区域有“创建创建一个“Hello World”Worker并在全球范围内部署”文字，下方有“创建worker”按钮，该按钮被红色框突出显示。页面底部有“从模板开始”部分，列出多种如“](/courses/aicoding/img/C7Tfb0yWtoL9ULxcrG8c6l6PnWb.jpg)

输入worker名称，这里填写 **ai-biaoqingbao ，**完成后点击右下角的部署按钮

![图片展示的是Cloudflare平台 "Hello World World 自动生成的图片描述，与图片内容无关](/courses/aicoding/img/QFdfbVUxDo9msgxxkPTcDOTnnDe.jpg)

点击“部署”后，会进入下面的页面：

### 步骤2：部署Worker

![图片展示的是在Cloudflare上部署网页产品步骤2中的页面。页面显示“成功！您的项目已部署到以下区域：全球”，并有提示可在指定网址预览项目。页面右侧有红色箭头指向“编辑代码”按钮。此图承接上文步骤1点击“部署”后的操作，即进入该页面后，需点击图中“编辑代码”按钮，便可进入代码编辑页面，展示了网页产品部署到Cloudflare过程中的关键操作节点。](/courses/aicoding/img/GxIhb65aaoDHauxAhobcCuuKnOc.jpg)

接上一步，我们在这个页面点击编辑代码，会进入到代码编辑页面：

![图片展示的是Cloudflare代码编辑页面。左侧是代码编辑区域，显示了JavaScript代码，其中包含欢迎信息及示例函数，函数输出“Hello World!”。右侧是预览区域，显示一个简单的图标。页面顶部显示worker名称为“ai-biaoqingbao”。它与上文的关系是，上文提到在Cloudflare中点击编辑代码会进入此代码编辑页面，图片直观呈现了该页面的样子及代码编辑和预览的相关内容，展示了部署Worker过程中的代码编辑环节。](/courses/aicoding/img/VIGmbiYNuoEKuVxn5AEcMkvunjd.jpg)

OK，右侧在转呀转，说明它在工作呢，工作啥呢？对，下面我们来告诉Worker应该干啥！

### 步骤3：打开Windsurf，再用Windsurf 打开biaoqingbao文件夹

![图片展示了柴犬图片2 addCriterion addCriterion](/courses/aicoding/img/K7ILb6MjdorneXxatMBcQBbpnif.jpg)

对，就是上一个柴犬表情包的文件夹，用Windsurf打开它！（黄叔本地电脑上的文件夹是“biaoqingbao-正式”

### 步骤4：修改好下面这段代码，并提交给Windsurf生成

> **🦾**
> API key 和bot id 的替换参考之前的 柴犬表情包案例

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

![图片展示了在Windsurf中查看worker.js代码的界面。左侧中图片中，左侧文件夹中选中了“worker.js”文件。右侧代码区域显示了worker.js的代码内容，其中包含处理GET和POST请求的函数代码，如判断请求方法、处理请求内容图片所在文档中介绍在W addCriterionWindsurf里点击worker.js查看代码的操作步骤，以及将代码全选复制用于部署网页产品到Cloudflare的内容。](/courses/aicoding/img/MIgIbeXtKo64ZPxspnlc9KEdnQb.jpg)

### 步骤5：将worker.js文件中的代码复制进来，点击部署

回到前面的worker的代码编辑页面，即前面步骤2的这个：

![图片展示了Cloudflare的worker代码编辑页面。左侧是代码编辑区域，显示有部分代码。右侧为预览区域，显示一个链接：https://ai - bluesprintbook.workers.dev/ 。根据上下文，这是将网页产品部署到Cloudflare的步骤5相关内容，需把左侧代码全部删除，将worker.js文件中的代码复制粘贴进去，然后点击右上角的“部署”，之后还要把右侧链接复制下来，图片为该步骤提供了操作界面参考。](/courses/aicoding/img/GpFKbCQhloTjXCxH0b2czjianWk.jpg)

把左侧的代码全部删除，然后把你复制的代码粘贴进去👆，粘贴好之后，点击右上角的“部署”：

![图片展示的是Cloudflare工作区界面，左侧显示worker.js代码，右侧是HTTP请求栏。关键信息是右侧HTTP addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色框突出 addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色箭头指向。此 addCriterion“https://ai-bianyeguan.lookingforbupt.workers.dev/”的链接，该链接被红色框](/courses/aicoding/img/AGtRbGNwLo97dLxlICScQgiLnNe.jpg)

然后把右侧的链接复制下来！如上图所示！

### 步骤6：打开Windsurf里的index.html，替换对应位置

![图片展示了在Windsurf中index.html文件的使用说明部分。核心内容为：获取Workers的URL后，将index.html中的YOUR_WORKER_URL替换为实际的Workers URL，即可开始测试API。图片与上下文的关系是，上下文提到在Windsurf里打开index.html并替换对应位置的URL，若不好找可搜索关键词“worker”，此图片则明确展示了需要替换URL这一关键操作指示，帮助理解在index.html文件中进行URL替换的具体操作内容。](/courses/aicoding/img/CAwbbMeomo2PkwxbyK2c4TswnLb.jpg)

通常Windsurf会提醒我们，替换什么位置的URL！如果没有，参考上面的位置

![图片展示了网页开发环境界面，左侧为文件夹和文件列表录，右侧是代码编辑区域。代码中红框突出显示了“WORKER_URL”变量及其赋值为“https://biaoqingbao.lookforhut.worker.dev/”的。](/courses/aicoding/img/YUj7bCQ4Qobs4Txg5FIc71wUntc.jpg)

如果不好找，可以点击图中的代码区域，按下crtl+F，搜索关键词“worker”找到。然后替换！

然后打开你本地文件夹的index.html，做一个测试：

![图片](/courses/aicoding/img/DZ0Rb3Nk7o0l8qx178tcWgGjnDd.jpg)

测试成功，说明此时我们的worker部分已经部署成功了。

还记得前面的图么？

![图片展示了柴犬表情包在本地和Cloudflare部署后的流程对比。本地流程中，用户输入表情，前端网页接收，JS部分处理，将Coze addCriterion图片](/courses/aicoding/img/AslkbpuGfor7qjxXZz6caufFnhP.jpg)

图中的JS部分，已经部署到Cloudflare里的Workers了，但还没完，还需要把前端网页也部署上去，继续！

### 步骤7：创建page，前端网页托管

![图片展示了 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](/courses/aicoding/img/SgbxbjoOfoZ5AAxfS0LcKxZzn8b.jpg)

我们从前面的worker页面，点击左上角的返回。

![图片展示的是Cloudflare平台的页面，左侧导航栏中“Workers和Pages”选项有](/courses/aicoding/img/HaPrbdhfWottWfxmwiacYEETnjc.jpg)

重新点击左侧列表里的“Workers 和 Pages”

![图片展示的是Cloudflare平台中“Workers和Pages”页面。左侧导航栏选中“Workers和Pages”选项。右侧页面显示“ai-biaoqingbao”等项目列表，其中“ai-biaoqingbao”项目下有“main”分支，右侧有 有“创建”按钮，该按钮被红色框突出显示。此图对应文档中“重新点击左侧列表里的‘Workers和Pages’，然后点击右上角的‘创建’按钮”步骤，直观呈现了操作位置。](/courses/aicoding/img/SSPWbTlj0ok0xhxMeXgcEMCSnph.jpg)

然后点击右上角的“创建”按钮

![图片展示了Cloudflare平台创建应用程序的页面。左侧列表中“Workers和Pages”选项被红色框和箭头突出显示。页面中部有“创建应用程序”提示，下方有“通过导入现有Git存储库创建”和“使用直接上传创建”两种其中“使用直接上传创建”部分有“上传资产”按钮被红色框和箭头标注。该图片与上文“重新点击左侧列表里的‘Workers和Pages’，然后点击右上角的‘创建’](/courses/aicoding/img/K8lZbfCr2o9xp8x1cufcVSWrnkb.jpg)

选择Pages，然后点击下面的“上传资产”

接着，为项目创建名称，名称输入完毕后，再点击“创建项目”：

![图片展示的是在Cloudflare中创建page、进行前端网页托管的操作界面。界面上有“通过上传项目部署站点”的提示，在“为项目创建名称”下方的输入框中已输入名称“ai-biaoqingbao”，右侧有蓝色的“创建项目”按钮。此图对应文档中“为项目创建名称，名称输入完毕后，再点击‘创建项目’”的步骤，是将网页产品部署到Cloudflare的步骤7中的一个环节，展示了创建项目名称并准备创建项目的操作画面。](/courses/aicoding/img/TqMab3KXEovm5bxjpHqcC4fnnTe.jpg)

OK，此时进入到下面这个页面，最后一步了！

![图片位于介绍将网页产品部署到Cloudflare步骤7的内容中，展示的是Cloudflare页面。页面左侧有导航栏，右侧图片内容部分显示“通过上传项目部署站点”等“](/courses/aicoding/img/N3wdbnypAoSWgtxCFo2ciRRFnqb.jpg)

点击它，然后会展开两个选项：

![图片展示的是Cloudflare页面中“上传您的项目资产”步骤界面。界面上方提示“您的项目已准备就绪。请添加文件夹或压缩文件后开始。”中间有“从计算机中选择”下拉框，下方有“上传压缩文件”和“上传文件夹”两个按钮，每个上传文件的最大大小为25 MB。图片与上下文紧密相关，上下文提到因为page功能只支持上传文件夹或压缩包，需新建文件夹，然后将“biaoqingbao”文件夹里的所有文件（除worker.js外）复制进去，最后选择上传文件夹并选中“ai-biaoqingbao”文件夹进行上传。](/courses/aicoding/img/WlTzbkgMkoeu2rxsXqQcXKawnMg.jpg)

因为page功能只支持上传文件夹或压缩包，需要自己新建一个文件夹，比如“ai-biaoqingbao”，然后把“biaoqingbao”文件夹里的所有文件，除了worker.js的之外，全部复制一份进去，比如我的复制完后是这样的（你的不一定有这么多文件，因为黄叔后面多做了一些优化）：

![图片展示了在Cloudflare页面中新建“ai - - biaoqingbao”文件夹下的内容。有index.html、README.md、script.js、styles.css四个文件，其中styles.css文件图标为带有#号的蓝色背景。该图片与上文提到的将“biaoqingbao”文件夹里的所有文件复制一份到新建的“ai - biaoqingbao”文件夹中，然后选择上传文件夹，选中“ai - biaoqingbao”文件夹，上传的内容相关，直观呈现了文件夹内文件情况。](/courses/aicoding/img/DkMbbD2UroOFuFxj996cERzUngc.jpg)

接着选择上传文件夹，选中“ai-biaoqingbao”文件夹，上传！就会显示上传成功：

![图片展示的是将网页产品部署到Cloudflare后 “ai-biaoqingba”页面时的 的上传状态。上方提示项目将被部署到“ai-biaoqingba.pages.dev”，并显示已上传4/4个文件，所有文件均成功上传。下方列出“ai-biaoqingba”文件夹下的文件及状态，如index.html为44KB等。右下角有“部署站点”按钮。该图片与上文提到的上传文件夹并点击“部署站点”后显示部署成功的内容相呼应，直观呈现了部署状态。](/courses/aicoding/img/LG72bkCRbom3w3xdXhScd5GZn4b.jpg)

不用犹豫，点击右下角的“部署站点”，稍微等1-2s，就会提示部署成功：

![图片展示了在Cloudflare上完成网页产品部署后的界面。界面提示“成功！您的项目已部署到以下区域：全球”，并给出项目链接。下方列出后续步骤，包括试用Wrangler CLI、创建或更新资源、添加自定义域等选项，右侧还有“快速链接”“Discord”“反馈”等内容及“继续探索项目”按钮。此图与上下文的关系是，它是按照前文步骤7操作完成后，显示部署成功的界面，意味着完成了步骤7中“部署站点”的操作，进入后续可进一步配置和探索项目的阶段。](/courses/aicoding/img/EfpfbpekioH1HTxzweZcNN9snzf.jpg)

### 步骤8：完成部署

恭喜，已经完成了部署！

继续点击左侧列表里的“计算（workers）”---》“workers和pages”，能看到已经部署好的网页：

![图片展示了Cloudflare平台“workers和pages”页面，其中可看到已部署好的网页“ai - biaopingbao”。该网页有“预览”按钮，被红色框线突出显示，且有红色箭头指向。页面显示该资产已上传，域名为ai - biaopingbao.pages.dev ，分支为main。结合上下文，这是将网页产品部署到Cloudflare步骤中的界面展示，后续需等待两分钟，方可点击“预览”访问在云端部署好的页面，且因是海外域名，国内访问可能受限。](/courses/aicoding/img/Nh48bSL3so1IlwxCI1zc6NeTnhg.jpg)

注意，不要急马上去访问，因为：

1. 需要等两分钟部署，随后可访问在云端部署好的页面
2. 由于是海外域名，在国内有时会被墙，使用梯子访问
3. 可以绑定自定义域名，需要额外进行设置

过两分钟，点击👆中的访问，可以打开属于你的页面啦！

![图片展示的是部署到Cloudflare后可访问的表情包生成器网页。页面上方有“选择情绪”和“选择风格”的多个选项按钮，中间是输入提示语的文本框及红色“生成”按钮，下方显示一张生成的表情包图片，画面主体是一只欢呼的熊猫，配文“乐到飞起”，周围有爱心等装饰元素。该图片与上文提到的在Cloudflare上部署网页产品，完成部署后可访问云端页面的内容相关，展示了部署成功后可直接访问的网页效果。](/courses/aicoding/img/V9VubtKZQoNLyDxXkyycEjqNnMd.jpg)

恭喜！！🎉，**完成部署的，请在这里评论，留下你的网页，让别人享受你的快乐吧：）**

## 02 使用Github+Vercel免费部署

![图片 addCriterion图片展示了AI编程蓝皮书2.0中“黄叔精选”部分内容。上方有“黄叔精选”标题，下方有“10个月，5万DAU，我们可能找到了AI1陪伴的另一种可能”等文字，还配有“查看详情”按钮。下方“解构Manus的设计哲学”部分，介绍了Manus的“Less structure, more intelligence””设计哲学，强调减少结构化代码控制，转而依赖大语言模型（LLM）的智能提升，通过“相信模型能力进步”驱动产品创新，与OpenAI CEO Sam Altman提出的“上下文](/courses/aicoding/img/DEL3b5etsoDWelx578FcrVEsn5c.jpg)

https://read.superhuang.me/

在前面的案例：[04 做一个你专属的好文推荐网站（DeepSeek R1 + 飞书多维表格）](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-WS19di3hOoHiB5xUmGxcL8adnxd) 里，我们其实在开头就给出了一个具体的网址，这个网址的第一步是通过Github+Vercel部署之后，再用国内的域名重定向来的。

这里我们先说如何通过Github+Vercel部署，完成免费的部署，这一步之后，大家就可以在线访问自己的产品了（大部分时候需要科学上网）。

Vercel网站，可以一键部署Github的仓库代码，无需自行搭建服务器，就可以完成前端页面和一些后端服务的托管，还是免费的！

> **😀**
> Vercel专注于前端部署和静态网站托管，提供免费100GB/月的带宽，对咱们部署这个案例是毫无压力的。

### 第一，使用AI IDE完成准备工作

首先找到我们在之前的教程中已经开发完成的博客网站项目文件，使用Trae或者Windsurf打开，为了让网站顺利部署到Vercel需要对代码进行一些改造，但是别担心这个过程很简单，依然可以通过AI编程工具进行，我们只需要发出明确指令就行了：

```c++
我想把这个网站部署到Vercel，需要做什么修改？
```

![图片展示了AI编程工具对代码的改造内容。用户询问将网站部署到Vercel需代码修改需求，AI表示需创建vercel.json文件配置部署设置，已添加16行代码，删除0行；还需修改package.json文件，添加Vercel所需配置。。](/courses/aicoding/img/MixGb4wNoocHYUxO19hclosQnud.jpg)

接下来AI编程工具会自动对代码进行改造，包括创建vercel.json配置文件和在其他文件中添加所需配置，这个过程我们不必知晓全部细节，等待改造完成即可。

![图片展示了于介绍文档：使用AI编程工具完成将项目部署到Vercel所需代码改造后的说明。内容显示，已为项目创建了vercel.json配置文件，指定构建配置和路由规则，并将所有请求路由到server.js。这与上文提到的完成将项目部署到Vercel所需所有修改相呼应，是对改造完成情况的总结，为后续部署步骤做铺垫。](/courses/aicoding/img/IwgYbE6kaorxzRxzDgFcDNvHnVg.jpg)

通过vercel进行部署可以完美解决密钥暴露在代码中的问题（就是别人可以通过看你的网页代码，直接拿到你的密钥），实现方式就是通过vercel网站的环境变量把密匙保存在代码之外，在代码中只填写字段的名称，在vercel项目的设置中填写字段的名称对应各种ID和密匙。

可以看到这改造过程中已经完成了这一部分的修改：

![图片展示了在Vercel项目设置中配置环境变量的操作内容。需添加以下环境变量 addCriterion](/courses/aicoding/img/ZIfVbeoM0odYqsxFooTcDQldnEd.jpg)

现在我们先把改造完成的项目文件上传到github，因为一会必须通过github把文件同步到vercel

### 第二，把本地代码推到Github

#### 方法一：命令AI帮忙

这里我们把Github仓库创建，以及推送都放一块了，直接上一个视频操作演示，当前前提是使用注册好的Github账号登录：https://github.com/

<figure view-type="Preview"><source name="推送到Github.mp4" mime="video/mp4" origin-height="1080.000000" origin-width="1880.000000" size="250029891" token="WZsEbBmSwo8cMBxuPeXcCLehnnu"/></figure>

核心是，在Github网站上创建一个存储代码的仓库，然后让Trae把所有的代码推送上去。

大部分情况下，使用和AI对话的方式就可以完成Github推送了。

#### 方法二：可视化的从Trae推送到Github仓库

（此方法感谢，这里我们用Trae来做演示，Windsurf类似）

这里的前提条件是，已经在Github里新建了仓库，然后我们需要获取两个信息：

1. 仓库名称
2. 仓库地址

具体的操作方法，可以打开你的仓库后，仓库名称在左上角两个红框处，仓库地址在左下角，点击Code按钮里弹出的HTTPS里，可以点击复制按钮获取：

![图片展示了从Github获取仓库名称与地址的界面。左上角两个红框处突出显示了仓库名称“DeepSeeklifecoach”，左下角点击“Code”按钮弹出的HTTPS右侧有仓库地址，地址右方有复制按钮。这与文档上下文紧密相关，上下文提到将本地代码推到Github的准备工作，需获取仓库名称和地址，具体操作方法即如图片所示。](/courses/aicoding/img/WXf2blKdeoKZZexhiHKcHeElnvh.jpg)

还有一种情况是你的仓库是新建的，还是一片空白，那会是下图的样子，仓库名字在左上角两个红框，仓库链接可在右下角的红框复制：

![图片 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](/courses/aicoding/img/FV1sbQXWqonI8dxOpRnc8qxlnSf.jpg)

好了，现在打开Trae，点击左上角的“源代码管理”按钮，然后点击“初始化仓库”：

![图片展示了在Trae中进行源代码管理的操作。](/courses/aicoding/img/APEhbqZayoRc8txT2jbcLmcbnbg.jpg)

> 这一步相当于git init

点击完毕后，现在的界面是下面这样：

![图片展示的是在Trae中进行源源代码管理的界面。上方有“源代码管理”标题，下方“更改”区域有“AI Rules”和“prd.md”两个文件，右侧有“U”标识。消息区域提示“#](/courses/aicoding/img/D9g7bWrGqolBv0xUUP7cswRkno4.jpg)

好了，我们继续往下操作，下一步是把鼠标移到“更改”区域里，然后点击“+”：

![图片展示了在AI](/courses/aicoding/img/HHwWbIkCgoRg7HxSLBkczWq4ncf.jpg)

> 这一步相当于git add .

ok之后，你会发现出现了“暂存的更改”：

![图片展示了在Trae中进行源代码管理时的界面。在“源代码管理”下，消息区域提示Enter在“main”提交，下方“暂存的更改”区域以红色框突出显示，列出了“AI Rules”和“_prd.md”两个文件，右侧有“2”和“A”标识。该图片与文档中介绍从Trae推送到Github仓库的操作步骤相关，对应于在Trae中点击“+”后出现的“暂存的更改”界面，是后续输入版本说明并设置关联仓库操作前的展示。](/courses/aicoding/img/EtlRbw3Ogo3kfoxooErcr8XGnwH.jpg)

下一步，自然是在消息区域，输入这个版本的说明：

![图片展示了在Trae中进行代码提交操作的界面。上方“更改”区域有“0.0.1写了AI Rules和prd”说明，下方“暂存的更改”显示 addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion addCriterion](/courses/aicoding/img/ZNcsbbMH2otpCuxiaWycwmJKnyb.jpg)

> 这一步相当于 git commit -m "0.0.1 写了AI Rules和prd"

接下来，我们要设置具体关联哪个仓库了：

![图片展示了在Trae中中进行源核心操作的界面及步骤。画面中，左侧为“源代码管理”界面，显示“0.0.1 写了AI Rules和prd”等信息](/courses/aicoding/img/GTVSbexM4o6NpjxDhl4c37fQnag.jpg)

依次选择“三个点”--》“远程”--》“添加远程存储库”，会弹出下面的弹框：

![图片展示了](/courses/aicoding/img/VyCBb1VPjozn52xVxKdcJHBLn1g.jpg)

你可以点击上面的“从GitHub 添加远程存储库”，或者直接把前面我们获取的仓库地址粘贴过来+在输入框内回车。

完成这一步后，需要你输入远程存储库名称，比如这里我给大家演示的仓库名称是“goldencard”，然后回车确认：

![图片展示的是从Trae推送到Github仓库的可视化界面。界面左侧为](/courses/aicoding/img/L43dbuIU6oQhlVxU5B9ccD9Xnte.jpg)

这样就完成了和远程仓库的关联，这个可视化界面做的不大好的点是，没有地方显示我们当前有没有具体关联上，或者说不知道关联的是哪个仓库，可以点击下面来查看，没事，我们只是看看：

![图片展示了从Trae将本地代码可视化推送到Github仓库时查看关联仓库信息的操作界面。界面左侧是“源代码管理”区域，显示暂存的更改文件等。右侧有一个由红色箭头指示的操作菜单，点击菜单上方的“...”图标后展开选项，其中“远程”选项被红色框标注，点击后可查看当前关联的仓库名称和仓库地址，这与文档中提到的查看当前关联仓库信息的操作相对应。](/courses/aicoding/img/SP2wbx2sVodAPNxI3bDc13sznrf.jpg)

此时，会显示当前关联的仓库名称和仓库地址：

![图片展示了从Trae推送到Github仓库的可视化界面。左侧为源代码管理区域，显示了“0.0.1 写了AI Rules和prd”等内容。右侧是选择要删除的远程库区域，突出显示了“goldencard https://github.com/Backthefuture/goldencard.git”这一仓库名称及地址。该图片与上文提到的完成关联仓库操作后显示当前关联仓库名称和地址的内容相关，直观呈现了关联后的仓库信息。](/courses/aicoding/img/YfLDbghoRo6kBYxTUeLcvH8Fnpb.jpg)

ok，按“ESC”或者点击屏幕上空白区域，就可以关掉了，哈哈，别慌。

到了最后一步，我们可以点击“提交”按钮了：

![图片展示了AI](/courses/aicoding/img/ItjFbFAMeoVowJxKPc6c2VwJnqe.jpg)

鼠标挪上去，会显示提交后的影响，直接点击吧！点击后会提示“发布Branch”，同时下面的源代码管理图会有更新：

![图片展示了 addCriterion图片展示了AI编程蓝皮书2.0中部署部分的内容，具体是在把本地代码推到Github的步骤中，从Trae推送到Github仓库的可视化界面。界面中显示了“发布Branch”按钮，下方源代码管理图中呈现了“0.0.1写了AI Rules和prd superhuang”等提交信息，还标注了“main addCriterion图片展示了了AI编程蓝皮书2.0部署部分中，从Trae推送到Github仓库的可视化界面。界面中“发布Branch”按钮被红色框和箭头突出显示，下方源代码管理图呈现了提交信息，如“0.0.1写了AI Rules和prd superhuang”，并标注了“](/courses/aicoding/img/KrP0byhX5oFHJSxWhZacKRvWnvo.jpg)

下面源代码管理图，这个区域用于显示当前分支的提交历史或变更记录，帮助开发者快速查看最近的提交信息。

没毛病！继续点击“发布Branch”！随后会有个提交的动效，之后会显示下图：

![图片展示了于文档中介绍从Tra](/courses/aicoding/img/NYoWbv5w9ozMRKxmd8ecNt2jn3d.jpg)

可以看到源代码管理图里，当前这一条的右侧显示了一个小云朵，说明已经同步到云端了。

另外如果你点击这一条信息，会看到上图的右侧，左边灰色区域显示此前为空白，右边绿色区域显示更改了的代码。因为这是第一次，所有的代码都是新增的，所以全绿。

我们再访问这个仓库的链接，刷新一下，会发现出现了刚才上传的代码：

![图片展示的是在GitHub上“goldencard”仓库的代码页面。页面显示了“superhuang”分支下的三条提交记录，分别是“0.0.1写了AI Rules和prd”“AI Rules”“prd.md”，时间均为7分钟前](/courses/aicoding/img/Bw67bMvMFoN9ucxkJOBc6oAynCd.jpg)

### 第三，使用Github账号登录Vercel，并部署

> 这一步，我们使用其他案例的内容做演示，大家可以参考流程

选择GitHub账号登录Vercel：

https://vercel.com/login

![图片展示了Verc addCriterion图片展示了Vercel登录页面。页面上方显示“Log in to Vercel”。下方有四个登录选项，分别是“Continue with GitHub”（用GitHub登录，被红色框和箭头突出显示）、“Continue with GitLab”（用GitLab登录](/courses/aicoding/img/QNeBbLDbZoUdrFxyJUncWKZ7nkh.jpg)

登录后选择Add New..里的Project：

![图片展示了Vercel平台的项目管理界面。界面顶部有导航栏，右侧有“Add New...”下拉菜单，其中“Project”选项被红色框突出显示。下方是“Recent Previews”和“Projects”区域，分别列出最近预览和已创建的项目，每个项目有名称 自动生成](/courses/aicoding/img/Lm0xbFZlPooKRpxWahUcEmSQn3b.jpg)

选择刚才上传的仓库，点击“Import”：

![图片展示的是Vercite addCriterion](/courses/aicoding/img/Rixqb6gtjos22QxVnRUcNIZlnge.jpg)

在新页面里点击“Deploy”：

![图片图片展示的是在Vercel平台选择GitHub账号登录后，添加新项目时的界面。界面中显示从GitHub导入的“Backtthefuture/lifecoach”仓库，可选择创建项目位置及名称，还可设置框架预设、根目录等。图片中红色框突出显示了“Deploy”按钮，该按钮位于界面底部，点击此按钮可进行项目部署操作，是后续部署流程中的关键一步。](/courses/aicoding/img/QFICbahvzo8iSNxK117cAsRZnIb.jpg)

稍等片刻，会提示完成部署，可以点击底部的“Continue to Dashboard”返回控制台：

![图片展示的是Vercel部署项目后的提示界面。上方显示“Congratulations! You just deployed a new project...”，并有项目名称“Life Coach AI - 个人成长助手”。 与AI交流，获取AI的建议”。下方“Next Steps”部分有三个选项，分别是“Instant Previews”“Add Domain”“Enable Speed Insights”，最后是红色框突出显示的“Continue to Dashboard”按钮。该图片与上下文关系紧密，对应文档中“稍等片刻，会提示完成部署，可以点击底部 addCriterion addCriterion addCriterion addCriterion 自动生成](/courses/aicoding/img/YcyLbUSDgosKQVxgUBCcjHBKnvh.jpg)

你的域名/点击访问等，都可以在下图箭头处操作：

![图片展示了Vercel平台的项目部署界面，项目名称为“lifecoach”。画面中下方有一个“Production Deployment”区域，其中有一个网址链接“lifecoach-anonymlage.vercel.app”被红色箭头指向并高亮。右上角有一个“Visit”按钮也被红色箭头指向并框出。该图片与上文“你的域名/点击访问等，都可以在下图箭头处操作”的内容对应，直观呈现了在Vercel界面中与域名访问相关的关键部分位置。](/courses/aicoding/img/RrOob9ap6o1G7wxaVsncci9hnmg.jpg)

### 第四，把密匙配置为环境变量

进入项目首页后，可以看到一个Visit按钮，这个就是打开网站的按钮，但是现在我们还没有配置密匙的环境变量所以点击也无法正常查看网站。

![图片展示了](/courses/aicoding/img/Xk4xbG43wohlCHxV2pgcrHqln2d.jpg)

先点击设置页面开始配置环境变量

，点击后可以看到左侧有一个Environment Variables选项，点击它：

![图片展示了式 addCriterion](/courses/aicoding/img/LGiUbZ4croKhumxfTAicHOVmnvd.jpg)

在右侧的key和value的输入框中分别输入4个环境变量的名称和值，首次进入时只有一个输入框，点击下方的Add Another按钮就可以添加更多，添加并填写完成后如下图，然后点击保存按钮就行了。

![图片展示了在Vercel设置页面中添加的四个环境变量。变量名称分别为“TABLE_ID”“BASE_ID”“FEISHU_APP_SECRET”“FEISHU_APP_ID”，对应的值均为省略号，表示被隐藏。右侧显示这些变量均为“All Environments”环境，添加时间均为1小时前，状态均为绿色对勾，且右侧均有三个点的图标。该图片与上文提到的在Vercel设置页面添加环境变量的操作步骤对应，展示了添加后的环境变量情况。](/courses/aicoding/img/NRzCbniO9oeyw8xFvsecJF2SnXc.jpg)

这四个变量如何获取，在[第二步：用网页呈现多维表格里的内容](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-OR7Yd3btgoymYJxdxU0c9a5AnDJ) 里面我们已经介绍了，大家不记得的话可以回看一下。

### 第五，开始使用

保存后需要1-2分钟重新构建项目，等待以后回到首页，看到下图中的状态是Ready就可以访问网站了。

![图片展示了Vercel平台上项目“goodarticle”的部署状态页面。页面中“Production Deployment”部分显示项目状态为“Ready”，且于11小时前由“BackMuffature”部署。关键信息有默认网址“goodarticle.vercel.app”，其被红框突出显示。右上角有红色箭头指向的“Visit”按钮，点击可打开网站，并会默认给予一个网址。该图与上文提到的“保存后等待项目重新构建，状态显示Ready即可访问网站”内容相关，直观呈现了网站部署完成后的可访问状态及操作入口。](/courses/aicoding/img/KnzBbi2OPo3dflxBlbWcyUwvnne.jpg)

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

![图片展示了在Windsurf](/courses/aicoding/img/IvfPbCEiSoFIIsxPPcfcgTApnXf.jpg)

稍等一会，Windsurf完成了工作，我们可以在浏览器扩展程序里选择对应文件夹导入，注意，前面我们要求Windsurf重新创建一个文件夹，防止文件混淆，所以需要看一下它生成的文件夹叫啥：

![图片展示了Chrome浏览器扩展程序的开发环境文件夹结构。其中，`blog_extension`文件夹被红框突出显示。该图片与文档中改造项目为Chrome插件的内容相关，说明在使用Windsurf完成项目改造后后，需在浏览器扩展程序里选择`blog_extension`文件夹导入，以完成Chrome扩展程序的开发流程。](/courses/aicoding/img/Z3LGbogXioZIEixSMadcTaelnec.jpg)

导入后报错，没事，复制给Windsurf：

![图片展示的是一个报错界面，上方显示“Me”和“报 自动生成](/courses/aicoding/img/Mg2jbhqINoHKaIx7UMKcdPksnTb.jpg)

然后就完成了开发。此时，在你的本地已经可以正常使用了。

如果你把安装包发给朋友，他在自己电脑的Chrome上安装后，也可以访问，但如果希望别人可以直接从Chrome扩展商店里下载，可以继续往下：

### 第二. 上传到Chrome应用商店

当确定一切功能正常，我们就可以准备发布到Chrome应用商店了，首先通过下面的链接进入扩展商店页面

```markdown
https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=zh-CN
```

然后进入开发者中心

![图片展示了Chrome浏览器开发者工具栏的下拉菜单，其中“开发者信息中心”选项被红色箭头指向。该图片与文档中“上传到Chrome应用商店”步骤相关，说明在确定功能正常后，需通过浏览器开发者工具栏进入开发者中心，此图直观呈现了进入开发者中心的操作入口，帮助用户明确操作位置。](/courses/aicoding/img/OLm9blPKtoCzGixLiUYcTrgonTe.jpg)

登录谷歌账号之后跟随开发者注册流程走完即可，所有有疑问的不知道如何填写的字段都可以通过询问Trae或Windsurf完成，最后支付5美元就可以完成注册。注意这里不支持微信和支付宝及国内银行卡，需要使用国外信用卡或google pay完成支付。

完成开发者注册后，进入开发者中心就可以看到上传插件的入口了：

![图片展示的是Chrome应用商店开发者中心中上传插件的入口界面。画面中央有一个蓝色按钮，按钮上有白色“+”号和“上传新内容”字样。该ylko](/courses/aicoding/img/WXJYbIDKjoMbsRxYG3BcbstYnYe.jpg)

点击上传之后把刚刚的项目文件压缩为ZIP格式，进行上传

![图片展示的是Chrome应用商店中上传插件时的界面。界面上方显示“添加新内容”，中间区域有提示“将您的 ZIP 文件拖放到此处，或者选择一个文件”，下方有一个蓝色的“浏览文件”按钮。该图片与文档中“上传到Chrome应用商店”部分内容相关，对应点击上传后将项目文件压缩为ZIP格式进行上传的操作步骤，直观呈现了上传文件的界面。](/courses/aicoding/img/MYueby8FbohFiOxqrx2cu0Cbngb.jpg)

后续还需要填写一些信息，这些信息都可以在刚刚的AI编程工具中借助AI输出，把需要填写的字段直接截图发送过去就行，填写完成后提交审核，大约2天左右就可以看到结果～

这种方式借助了Chrome浏览器完成了产品云端部署，是最简单的把产品部署到云端的方式，Chrome扩展程序通过Web Server for Chrome等工具，将浏览器转化为HTTP服务容器。这种扩展基于Service Worker技术实现请求拦截与响应，可直接在用户设备上监听指定端口（如8887），处理静态文件托管、数据上传下载等基础服务，无需依赖远程服务器资源。

但同样有一些限制。例如无法直接操作硬件资源、性能有限无法支持高并发场景、包括当浏览器窗口关闭或系统休眠时，基于Service Worker的后台运行机制最长仅能维持5分钟活跃状态。对于需要24小时持续响应的服务场景，存在服务中断的风险。

但总体来说，对于简单工具产品已经足够了～

### 作业

我们在前面做了个插件，是在看到好文章时，点击一下后直接把文章链接插入到飞书多维表格的，如果是希望用一个插件实现两个功能，你想想怎么实现：

![图片展示了飞书多维表格内容助手的界面。上方显示“飞书多维表格内容助手”，下方有两个蓝色的按钮，分别是“打开博客”和“保存当前页面”。该图片与文档中介绍飞书多维表格内容助手功能的内容相关，直观呈现了助手的界面界面及可执行的操作，帮助读者更好地理解助手的使用场景和功能。](/courses/aicoding/img/JbDQbeT50o6N1UxHVgmchlllnZd.jpg)

## 04 最简易的免费发布：yourware

可以尝试访问黄叔发布的站点：https://8qdgjrdqd5.yourware.so/

基本就是1分钟内完成登录+发布，非常简单

打开网址：https://www.yourware.so/

![图片展示的是Yourware网站的部署页面。页面上方显示“Vibe Coder's Instagram”，并有“Don't Keep Your Code to Yourself - Share It With the World”的标语。中部有“Upload”和“Paste Code”选项卡，当前选中“Upload”。下方区域提示可拖拽或点击“Select File”或“Select Folder”上传文件，支持HTML或TSX文件，文件夹需包含HTML、CSS和JS文件且大小不超过10MB。右下角有“Visit Site”和“Boost My Design”按钮。该图与文档中介绍的在Yourware网站进行简易免费发布的内容相关，展示了发布前的上传界面。](/courses/aicoding/img/TXlCbNOHvoUBzXxSpchclWjHnEb.jpg)

两步就完成了：

第一步，右上角登录“sign in”，需要用Google账号

第二步，选择单一文件“Select File”，或者整个文件夹“Select Folder”

会弹窗请求确认，点上传即可：

![图片显示了在Yourware网站上传文件时的弹窗确认界面。弹窗标题为“将39个文件上传到此网站？”，内容提示此操作会上传“图片压缩”](/courses/aicoding/img/AfVIbvwTwoCwjJxhtoJcduBenEg.jpg)

上传完毕后，很快，就会出现下面的页面，意味着已经完成部署了：

![图片展示的是在Yourware平台完成部署后的页面。页面上方显示“Deployment Successful”，表明数字创作已成功部署至安全云网络。中间区域有“图片压缩工具”及“简单、快速地压缩您的图片”说明，下方有一个“点击或拖拽图片到这里”的区域。右下角有“Upload YOURWARE”按钮，左下角有“Boost My Design”和“Share”按钮，右下角还有“Visit Site”按钮。该图片与文档中介绍在Yourware平台完成部署的内容相关，直观呈现了部署成功后的页面情况。](/courses/aicoding/img/H3KJbIjwboBEcExvU7WcTDFCnkg.jpg)

右下角的“Visit Site”，就是直接访问部署好的站点

左下角的“Bosst My Design”，是优化你的页面，可以尝试玩一下。

打开站点后，地址栏就是你可以分享出去的网址啦：

![图片展示了在Yourware平台完成部署后，打开站点 addCriterion图片内容:](/courses/aicoding/img/R2tYbNgXloVOGKx9MFmcBdmHnzb.jpg)

## 关键：域名购买和绑定（待写）
