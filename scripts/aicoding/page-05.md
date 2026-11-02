## 01 图片字幕生成器

你想生成自己的金句卡片么？类似这样的：

![图片展示的是图片字幕生成器界面。左侧为上传图片区域，有“选择图片”按钮，下方有字幕设置，包括字幕高度、字体大小、字体颜色、字幕样式、字幕内容等，当前字字幕内容为“这是Manus的相关照片，也是一个历史性的时刻，Manus不一定会笑到最后，但世界已经因此此开始发生一些变化”。右侧是预览区域，有 自动生成字幕图片成功！](/courses/aicoding/img/GZDubhIrOoJ0MPxWcQpcLdwNnjh.jpg)

欢迎访问黄叔发布的网址来进行体验：https://picquote.superhuang.me/

该创意来自@南瓜博士

![图片 addCriterion](/courses/aicoding/img/UoAfbadf3oWGItx4bNZcO8F5nze.jpg)

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

![图片为一段对话界面，显示了Claude 3.7 Sonnet的提示词。用户要求Windsurf仔细查看图片，理解后描述图片功能，需清晰罗列，用于开发一个网页工具，生成的图片底部每一行文字背景相同，呈现切割感。图片与上下文紧密相关，是Windsurf根据提示词开始开发网页工具的起点，后续Windsurf将依据此提示进行开发。](/courses/aicoding/img/XW9lbJyi3ohUqsx0UG2ci3Vznfg.jpg)

然后回车，让Windsurf开始干活：

![图片展示的是一个图片字幕生成器工具的界面及功能分析。界面顶部显示“Cascade”和“Write mode”。下方文字介绍了该工具功能，包括上传图片、添加文字内容 自动生成字幕、设置字幕样式、生成带字幕图片、保存图片等。字幕特点有分行显示、切割感设计、文字样式可选、位置固定等。界面元素包括标题“图片字幕生成器”](/courses/aicoding/img/VihsbbYitomTahx6HfKcyOq5nKc.jpg)

这里我们查看了之后，发现字幕切割部分没有详细介绍，所以可以再补充一段提示词：

```Plain Text
字幕每一行之间需要有分割线

同时每个字幕背后的图片应该是一样的，都是第一行字幕所处高度切割图片后的
```

随后Windsurf开始继续干活：

![图片展示的是Winds addCriterion生成的图片字幕生成器开发过程中的对话内容。Windsurf根据字幕设计要求，创建了index.html、styles.css及JavaScript文件。其中，index.html用于网页结构，styles.css用于界面美观，JavaScript文件实现图片上传、字幕生成和保存功能。此图与上下文紧密相关，是Windsurf按要求进行开发的阶段性成果展示，展示了开发过程中的关键步骤及文件创建情况。](/courses/aicoding/img/BHRibmQuvoAO4NxUgZdcmhM8npW.jpg)

因为整个产品比较简单，所以Windsurf一遍就完成了开发：

![图片展示的是图片字幕生成器界面。上方显示“图片字幕生成器”，下方有“选择文件”输入框，可上传图片文件。中间有“字幕大小”“字幕大小”“字幕颜色”等设置项，下方有“字幕内容”输入框，可输入字幕内容。底部有“生成字幕预览”和“生成字幕”按钮。最下方是生成的字幕预览图，图中显示一张人物照片，底部有“第1行”“第2行”“第3行”等字幕。该图与上下文介绍的图片字幕生成器功能相关，展示了其操作界面及字幕生成效果。](/courses/aicoding/img/QJXQbKiCOoMlfVxqrcXcH7WfnDh.jpg)

我把上面的全屏截图给Windsurf，同时加上下面的提示词：

```Plain Text
优化一下样式，现在是竖版的界面，我希望调整成横版，并且按照苹果设计师的风格重新设计整个页面
```

优化后，就生成了下面的样式：

![图片展示的是image1```](/courses/aicoding/img/IaUeb3NvqoGW4gxBxeccYuE1nok.jpg)

至此，使用多模态来复刻产品就完成了。

小结下，第一个产品的思路，是通过直接给截图，让Windsurf理解，然后我们再补充需求的逻辑，让Windsurf完成开发，最后再做一些优化。

是不是特别简单？有了Claude，你只需要想创意，实现可以完全交给AI！

### 课后练习

可以看到，这次我们使用截图直接上传给Windsurf，让其理解后直接生成，并对未完成部分做了针对性优化，完成了产品的复刻。

当然，我们可以继续优化，增加更多功能，这里就留给大家当成作业！

比如：增加你的专属水印

比如：增加更多字体样式

比如：增加网站图标

![图片展示的是“图片字幕生成器”相关内容，画面中呈现出一个带有圆角的白色长条框，框内左侧有一个淡紫色小方块，右侧有黑色文字“图片字幕生成器...”。它与文档上下文的关系是，该图片对应着文档中“01图片字幕生成器”课后练习部分；上下文中提到可对图片字幕生成器进行优化，添加专属水印、更多字体样式、网站图标等功能，当前状态是没有图标的。](/courses/aicoding/img/UbJ7b4GGVo9oEtxpAyLcHVkSnPl.jpg)

（当前是没有图标的）

## 02 注册硅基流动，获赠4000万Token

![图片展示了硅基流动与华为云联合推出的基于昇腾云的DeepSeek R1 & V3推理服务。画面中，硅基流动、华为云及昇腾云服务的标志并列，下方文字说明该服务可注册体验。右下角有“立即尝鲜”按钮。图片位于介绍注册硅基流动可获赠4000万Token的上下文之后，是对注册后可使用的服务的宣传，引导用户注册体验相关服务。](/courses/aicoding/img/I9bVb241ooUlAYx1YGuctFHXnWS.jpg)

感谢硅基流动的支持，我们会主要使用它们家的SiliconCloud，即模型云服务平台：

![图片展示的是BlockFlow平台的模型广场界面。左侧为功能导航栏，有模型广场、对话、接入、生成、工具等选项。右侧是模型列表，显示了多个模型名称、版本、大小、类型等信息，如deepseek - ai/DeepSeek - R1 - Chitll - Llama - 8B、deepseek - ai/DeepSeek - R1 - Chitll - Qwen - 14B等，部分模型有“对齐”按钮。该图片与上下文介绍的硅基流动支持的模型云服务平台相呼应，直观呈现了平台上的模型情况。](/courses/aicoding/img/DGFzbx6pooVVhFx5OUFcy0f8nbc.jpg)

简单可以理解为，只需要注册硅基流动，就可以一键接入包括Deepseek在内的诸多模型。

大家可以点击链接注册，首次使用手机号注册，可获得AI编程蓝皮书专属的4000万Token：

https://cloud.siliconflow.cn/s/AIbclps

注册完成后，建议先完成实名认证，这样可以充值（因为最近Deepseek R1比较火，建议大家稍微冲一些钱，使用Deepseek的Pro版本，这样能够保证稳定使用，有关Pro版的信息，详情可以阅读硅基流动的官方公众号文章：[**稳定护航！硅基流动上线 Pro 版 DeepSeek R1 & V3**](https://mp.weixin.qq.com/s/IFP0OgiouItX0z7oujkicw) ）

![图片展示的是硅基流动平台的实名认证页面。页面左侧有导航栏，其中“实名认证”选项被红色框突出显示。右侧是实名认证的说明，强调为了账户安全需完成实名认证，且完成认证后可使用国际先进模型等专属权益。下方有“个人认证”和“企业认证”两个选项，其中“个人认证”被红色箭头指向。该图片与上下文介绍的完成实名认证操作步骤相关，是完成认证前的页面展示。](/courses/aicoding/img/PZMQbXxydoxUkAxjBm7cfsVEnOH.jpg)

完成认证后显示如下：

![图片展示的是硅基流动平台的实名认证页面。页面左侧有导航栏，选中“实名认证认证”选项。右侧显示“已完成实名认证”，认证状态 !*** addCriterion状态为已认证，认证类型为个人，证件类型是大陆二代居民身份证，证件号码部分显示为4527****，真实姓名为姜某，认证时间为2025 - 02 - 09 16:49:26。页面右上角有“修改个人认证信息”和“变更为 addCriterion为企业用户”两个选项。该图片与文档中完成实名认证后显示的内容对应，直观呈现了实名认证后的页面。](/courses/aicoding/img/Nvd7brzIlo5MfZx0ARIcc13ineh.jpg)

随后点击“余额充值”：

![图片展示的是硅基流动平台的余额充值页面。页面左侧有导航栏，当前选中“余额充值”。页面上方显示总余额63.7893元，其中充值余额49.7935元，赠送余额13.9957元。在线充值部分有多个金额选项，其中“10”元被红色框突出显示。下方有“确认支付”按钮，其下方有勾选框，提示确认支付即代表同意平台mlp](/courses/aicoding/img/Fy8vbyk9iogmeExM2Smc4xzCnqg.jpg)

选择“其他金额”，我们可以充个10元或者更少的金额尝试。

充值完成后，可以在“API密钥”里生成专属密钥：

![图片展示的是式 addCriterion()函数的使用示例。左侧为代码编辑区域，示例代码中定义了两个变量，分别赋值为“Hello”和“World”。右侧为运行结果区域，显示了两个变量的值分别为“Hello”和“World”。该图片与上下文紧密相关，图片中的代码示例是对上文对` addCriterion()`函数功能介绍的直观呈现，帮助读者更清晰地准确地理解该函数的使用方法。](/courses/aicoding/img/ADNGb1MBBoNmM6xscE1ctrfknTd.jpg)

密钥描述可以填写具体的用途，比如“给老外起中文名”，输入完毕后点击“新建密钥”：

![图片展示了硅基流动API密钥页面。页面中有密钥列表，每行密钥前有眼睛图标，右侧有描述。其中一行密钥被红色框线突出显示，其前的眼睛图标被红色框线包围，右侧描述为“给老外起中文名”。该密钥被红色箭头指向，旁边有“复制”按钮。该图片与上文“在‘API密钥’里生成专属密钥，密钥描述填写用途后点击‘新建密钥’”的内容相关，展示了密钥生成后的展示界面，以及密钥复制操作的提示位置。](/courses/aicoding/img/Vcz1bbJTBop2OixnJsickce9nLe.jpg)

将鼠标移到一串星号的密钥字母上面，会显示“复制”，鼠标移过去点击，就完成了复制啦！

> **🦄**
> 注意：
> 硅基流动平台的总余额分为：**充值余额**和**赠送余额** 两种。

Pro版的DeepSeek R1/V3，需要充值余额，相当于你得充钱，但可以保证稳定、可用。

其他版本的DeepSeek R1/V3，以及其他模型，可以用赠送余额，就是注册后送的4000万Token。

最近DeepSeek确实太火了，所以黄叔是建议先充点钱用Pro版本，过段时间大家冷静下来了，没什么人用了，我们再换成非Pro版的DeepSeek模型。

好了，完成了注册，有了API密钥，下面我们可以开始用DeepSeek啦，第一个案例，先用最牛的R1，来帮我们深度的思考下如何给老外起好玩的中文名！

## 03 使用Deepseek R1，帮老外起中文名吧！

前阵子小红书好多老外涌入，于是有了这个案例，我们使用国产最强模型Deepseek R1，来帮他们起个有意思的中文名吧：）

<grid>
<column width-ratio="0.491792">
![图片展示的是“给老外起中国名字”](/courses/aicoding/img/ZSW4bl3h5oHeVgxsZZHc6KkNnnh.jpg)
</column>
<column width-ratio="0.508208">
![图片展示的是一个名为“寻名 XunMing”的AI助力中文姓名生成器页面，英文名为“Find Your Chinese Name”。页面中输入框内有“Tim Cook”，右侧红色按钮写着“Generate Names”（生成名字）。下方列出了为“Tim Cook”生成的中文名，包括提轲飨、库大福、蒂厨子，每个名字都有拼音及文化寓意介绍。这张图片与上文提到的使用国产模型Deepseek R1帮老外起中文名的案例相关，展示了实际生成名字的效果。](/courses/aicoding/img/NBAEbBgDDo0sGUxPLPNcvXNQnDf.jpg)
</column>
</grid>

**给特朗普起名：川建国，库克起名：库大福，是不是还蛮好玩的？**

这个案例很简单，很快你也能做出自己的！下面开始：

### 第一，本地新建一个文件夹

比如在你常用的地方创建一个文件夹：“给老外起中国名字”

![图片展示了在 自动生成的文件夹界面，左侧有“给老外起中国名字”文件夹图标，右侧中间位置有一个蓝色边框的输入框，输入框内显示“给老外起中国名字”。该图片对应文档中“第二，使用Windsurf打开它”步骤后的内容，直观呈现了在Windsurf中打开新建文件夹后的界面情况，与上下文介绍的使用Windsurf操作相呼应。](/courses/aicoding/img/WxcKb516Vo4ePjxHppdcdMNknTc.jpg)

### 第二，使用Windsurf打开它

![图片展示了Windsurf的界面，左侧为代码编辑区域，显示“pandas”字样；右侧是“Write with Cascade”区域，有“Ask with Cascade”输入框，下方有“Add Images”](/courses/aicoding/img/BlucbVtG3oG5LQxnb8dcVHDDnkQ.jpg)

打开后是上面这个样子。

注意右侧中间的输入框了没，等会我们在输入框内输入我们的需求。

### 第三，设置WorkSpace AI Rules

![图片展示了W](/courses/aicoding/img/WWEMb2rJjobVk7xU0Zuc3vx6nLh.jpg)

> **🎼**
> 注意：本文内的Rules/Prompt，需要复制的话，点击文档：[相关Rules和Prompt](https://superhuang.feishu.cn/wiki/W1LCwYA8eiTl77kpi81c31yNnJd)，里面可以复制。

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

> **⛱️**
> WorkSpace AI Rules，相当于是当前项目的具体规则，在 Global 之下
> 他们的区分可以理解为：Global 是国际法，讲大面宏观的，Workspace 是地方法，是具体干活的实操的

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

![图片展示了使用Windsurf开发帮助外国人起中文名网站时的交互内容。用户输入需求，包括让外国人输入英文名、点击生成按钮等核心功能，还提到调用Pro/deepseek -ai/DeepSeek - R1模型及需修改的API Key，以及相关API文档网址。之后Windsurf开始工作，显示创建大纲、分析内容、创建README.md文件等操作步骤。该图片与上文接入大模型的内容相关，呈现了输入需求后Windsurf的响应与工作流程。](/courses/aicoding/img/HerGbP0AvoYTplxDcvecChuln7d.jpg)

### 第五，检查开发完成的网页产品

Windsurf完成工作后，会有类似的提示：

![图片展示了使用Deepseek R1帮老外起中文名网站的使用步骤法。内容为： “要使用这个网站，您只需要：1. 在浏览器中打开index.html 2. 在输入框中输入英文名 3.](/courses/aicoding/img/EmphbqTSVoGntJxoI0nchY13nEf.jpg)

此时，我们可以打开你电脑上前面创建的文件夹，双击里面的“**index.html**”文件：

![图片展示了了在电脑上打开“给老外起名字 - deepseek r1”文件夹后，双击“index.html”文件的操作。文件夹内有多个文件夹和文件，其中“index.html”文件被红色框和箭头突出显示。该图片与上下文紧密相关，上下文提到Windsurf完成工作后，可打开电脑上创建的文件夹，双击“index.html”文件，此图片直观呈现了该操作步骤，帮助用户明确找到并双击“index.html”文件以打开网页。](/courses/aicoding/img/Jb0RbtnqPoadGrxFNdtcD2tin0g.jpg)

浏览器会打开一个网页：

![图片展示的是网页开发中使用Deepseek R1帮老外起中文名的网页界面。上方标题为“寻找你的中文名”，下方提示“输入你的英文名，获取独特的中文名字建议”。界面中有“输入你的英文名”输入框和“](/courses/aicoding/img/VucmbRv1BowUVexNfRDcHY32nme.jpg)

我们可以尝试输入特朗普的英文名，然后点击“生成中文名”，发现报错了，弹出下面的提示框：

![图片展示了一个网页界面，标题为“寻找你的中文名”，提示输入英文名获取中文名字建议。输入框中已填入“Donald John Trump”，点击“生成中文名”按钮后，弹出一个提示框，显示“生成名字时出错，请稍后重试”，有“OK”按钮和“Don't allow this page to display more alerts”选项。该图片与上下文相关，在上下文描述打开“index.html”文件，尝试输入特朗普英文名生成中文名却报错的情境中，这张图片正是报错时弹出提示框的展示。](/courses/aicoding/img/KokWbrBUIoVDIBx6mbNco0rlnse.jpg)

没关系，AI如果一次就正确了，不是你的产品太简单，就是运气太好。

此时我们在Windsurf里输入并提交：

```SQL
生成中文名报错：生成名字时出错，请稍后重试
你仔细阅读下API文档：https://docs.siliconflow.cn/api-reference/chat-completions/chat-completions，检查可能报错的地方
```

![图片展示了Windsurf与用户关于生成中文名的对话界面。用户在Windsurf中输入并提交后，Windsurf检查出一处错误并完成修复，还列 自动生成中文名报错：给定名字时出错，请稍后重试。你仔细阅读下API文档：https://docs.siliconflow.cn/api-reference/chat-com -completions/chat -completions，检查可能报错的地方。并让其再次查看API文档，发现几个可能问题，如API addCriterionendpoint地址不正确需修改等。还要求修改script.js文件，对代码做了改进，如添加max_tokens参数、增加错误处理等。](/courses/aicoding/img/XQ7ZbQ5THoJsJvxRTBKcbXQ7nif.jpg)

你会发现它检查出了一处错误，并完成了修复。

我们刷新index.html，再次输入特朗普的英文全名，点击生成：

![图片展示 addCriterion](/courses/aicoding/img/Q5DCbZ0droFYkrxRQu8cfeWmnYf.jpg)

此时完成了！恭喜你！

### 进阶1：优化名字生成质量

我们可以看到这种生成中文名的质量还是挺一般的，那怎么才能生成更好的中文名呢？

比如特朗普被我们戏称为“川建国”，这种幽默感怎么才能显示出来呢？

我们再Windsurf里点击“资源管理器”里的script.js：

![图片展示了网页开发中使用Deepseek R1帮老外起中文名 2024年10月10日名字的代码界面。左侧是资源管理器，选中“script.js”。右侧代码区域中，红框突出显示了“生成中文名字的系统提示词”，内容为一位精通中国传统文化的起名大师根据英文名生成3个独特的中文名字，需体现中国传统文化特色、音韵优美、](/courses/aicoding/img/GZchbIrw5okcQ1xIkrqc5tDsnbc.jpg)

可以看到，上图右侧的红框位置，写着“生成中文名字的系统提示词”，实际上，DeepSeek R1再强大，也是根据我们的命令来干活的，如果命令下的不好，最后生成的结果和我们想要的也会很不一样。

OK，我们可以在系统提示词下面增加一行：

```SQL
5. 理解英文名字的含义，然后生成中文名字，并且有幽默成分，适当可以加一些梗
```

![图片展示的是网页开发中使用 addCriterion()函数的 addCriterion()函数](/courses/aicoding/img/Bf1db5Y5tofSQZxBiSucT6YGnUg.jpg)

别忘了点保存，菜单里的“文件”--“保存”：

![图片展示了Windsurf中“文件”菜单下的“保存”选项。菜单中“保存”选项被红色框突出显示，](/courses/aicoding/img/ZO05bYUCTo6CvexJ9KMcuGINnuc.jpg)

好了，我们刷新网页index.html，然后再次输入：

![图片展示的是网页深Windsurf网页开发中使用Deepseek R1帮老外起中文名的界面。上方标题为“寻找你的中文名”，下方提示输入英文名获取中文名字建议。输入框内显示英文名“Donald John Trump”，右侧有“生成中文名”按钮。下方列出三条中文名字建议，分别是唐锣谱、川建国、金发狮王，每条建议有拼音、中文和英文解释。该图与上下文介绍的在Windsurf里使用Deepseek R1帮老外起中文名的操作步骤相关，展示了操作后的结果界面。](/courses/aicoding/img/Y9mZb24rlokrgWxIMnscmSHKnkn.jpg)

哈哈哈，这次“川建国”出来了，并且有很棒的解释。甚至还有金发狮王！

### 进阶2：优化页面

前面已经把功能都做出来了，那我们还想让网页更好看一些，怎么办呢？很简单，在Windsurf里输入：

```SQL
你是苹果设计师，请对整个页面进行美化，同时带上中国红元素
整个界面以英文为主，同时辅以中文
```

完成后继续刷新index.html，可以看到这次效果好多了：

![图片展示的是一个网页界面，标题为“Find Your Chinese Name”及“寻找你的中文名”，下方说明将英文名转化为富有文化韵味的中文名。界面中有一个输入框，显示“Donald John Trump”，右侧有一个红色的“Generate 生成名字”按钮。底部有“Powered by AI with love for Chinese culture”字样。该图片与上文提到的在Windsurf里输入内容后刷新index.html以优化页面效果的案例相关，展示了优化后的页面样式。](/courses/aicoding/img/YUkYbBaQuoNhkrx1RM4cRVfAn1c.jpg)

OK，这个案例就到此为止！

### 课后练习：

1. 你可以优化整个网站的样式，比如加上圣诞风、春节风
2. 你可以增加90后/80后选项，从而有不同的中文名字结果
3. 可以增加生成姓名时等待的样式，比如：

![这是一款名为“Chinese Name Generator”的网页工具，用途是为用户生成具有文化寓意的中文名字。页面顶部设有输入框，其中填入内容为“Barack Hussein Obama”，右侧搭配红色的“Generate Names”生成按钮。页面下方展示了生成中文名字的加载过程，依次显示“Connecting to ancient Chinese wisdom……”“Loading cultural references……”“Mixing traditional and modern elements……”“Brewing the perfect name……”“Final touches of humor……”五个阶段的提示内容，对应课后练习中提到的生成姓名等待样式，用于在名字生成过程中向用户展示进度。](/courses/aicoding/img/AMqNbaF3DoAGZ0x6v2pcpcFOnRf.jpg)

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

![图片 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景为森林，中间有麦克风图案。右侧上方是“降噪”标题，下方有“Super黄”及头像 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面 addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景为森林，中间有麦克风图案。右侧上方是“降噪”标题，下方有“Super黄 addCriterion addCriterion图片展示了黄叔刚做的AI播客“降噪”。左侧是播客封面，背景](/courses/aicoding/img/QYTWbGLy4oBgFTxNvrQcHNCBn9f.jpg)

这个能力的实现，依赖于接入MiniMax的长文本模型和超拟人的语音模型，我评估了一下，实现难度不高，大部分同学都可以做到，但是有成本：

1. 语音克隆，9.9元，一次克隆长期使用（如果用系统音色则不需要花这笔钱）；
2. 长文本转写，单次1分左右，这个很便宜；
3. 语音生成，2分钟一条在3毛钱左右。

大致的效果：

![图片展示的是AI播客“降噪”制作AI](/courses/aicoding/img/OWwAbBA2tojtJqx0Wt9cdV6Hngv.jpg)

黄叔来教你使用语音克隆技术，和语音生成技术，做一个专属你的AI播客吧。

你可以先试听一下：

<figure view-type="Preview"><source name="AI产品黄叔朗诵.mp3" mime="audio/mpeg" size="3295341" token="Ezusbw71Jo438BxWguQcaHmJnR2"/></figure>

完成这个播客的工作，完全由下面这个网页构成：

![图片展示的是一个网页界面，标题为“降噪”。界面中有一个系统提示词输入框，提示词内容为“你是一档名为《降噪》的AI科技广播节目的资深编辑，名字叫AI产品黄叔，擅长将专业的AI文章”。下方有“原始文案”和“AI生成”两个区域，原始文案是关于字节Trae AI IDE的介绍，AI生成部分是对原始文案的扩展](/courses/aicoding/img/C3pbbGS8XoLm6dxMCiIcCRC8nnh.jpg)

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

![图片展示了MiniMax开放平台的账户管理页面。页面上方有MINIMAX标志及“开放平台”“API调试台”等选项，当前选中“账户管理”，并用红色框突出显示。页面左侧列出账户管理的各项内容，如账户信息、接口密钥等。右侧显示基本信息，邮箱处未显示具体内容；认证信息显示已个人认证，姓名为黄**；还有安全设置相关内容。该图片与上文申请MiniMax的API相关，可能是介绍认证等账户管理操作。](/courses/aicoding/img/TGdxbok2KomnMCxRbPacyoRRnWh.jpg)

这里要说一下，API消耗是会消耗余额的，根据我的经验，生成一条3分钟的语音

文本模型会消耗1分钱

语音模型会消耗5毛钱

以及克隆音色还需要一笔额外的费用，现在优惠是9.9元：

![图片是一则关于MiniMax声音克隆接口价格调整的公告。公告显示，由于技术升级和成本下降，声音克隆接口价格由99元直降为9.9元。](/courses/aicoding/img/PWytbDWnHo14MWxYDLScI8zjnNf.jpg)

> **🏝️**
> 首次注册会赠送15元，我们无需充值就能玩啦！

接着，需要你创建一个API Key，也就是密钥，然后保存好，后面用来替换：

![图片图片所在文档中“申请MiniMax的API”部分内容，图片展示了MiniMax开放平台的账户管理界面。界面左侧有“](/courses/aicoding/img/Sq9ZbeSpsoLLYzxDVTAclspxnrd.jpg)

以及groupid：

![图片展示的是MiniMax开放平台的账户管理页面。在页面左侧选中“账户信息”，右侧基本信息栏中，groupID处被红框突出显示，数值为1881321189897420948。页面上方“账户管理”也被红框标注。该图片对应文档中讲解申请MiniMax的API时需获取groupid的内容，直观呈现了groupid在平台页面中的位置，帮助用户明确获取groupid的操作页面及具体位置。](/courses/aicoding/img/BbisbYRN6oogsIxjGpCczlsMnZb.jpg)

以及，可以克隆一下声音：

https://platform.minimaxi.com/examination-center/voice-experience-center/voiceCloning

![图片展示的是MiniMaxmax平台创建voice id的界面。界面上方有“创建voice_id时需注意”提示，包括自定义的voice_id长度范围、](/courses/aicoding/img/G3beb4M0Aokvr6xD4GUcvmd3nRg.jpg)

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

![图片展示了一段指令内容，要求参考图片、根据prd.md开发网页，网页开发规范参考AI Rules。指令下方有“Claude-3.5-Sonnet”标识。这张图片与上文开发网页的内容相关，上文提到使用\[网页的AI Rules\](https://waytoagi.feishu.cn/wiki/UspJwJk95iKoegkoUdWcmX7rnib#share-WxkHdiglioKBivxBDFvczGyNnVb) 进行网页开发，还提及需将标黄处替换为自己的API Key和克隆后的voice - id，图片中的指令是开发网页过程中的具体要求。](/courses/aicoding/img/J0VAbfUR7o5HW8xDlHrcaZ9qnhc.jpg)

Trae非常给力，一次就生成了整体的框架：

![图片展示的是AI](/courses/aicoding/img/JEAWbXXDuoFoavxuRaTc6npEn1c.jpg)

测试了一下，可以生成MP3下载，完成开发。

如果你遇到了问题，还是把报错信息提交给Windsurf，继续优化。
