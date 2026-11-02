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

![图片 addCriterion图片展示了Windsurf与AI的对话界面。AI根据用户需求，生成了网页金句卡片Chrome浏览器扩展的需求和功能规划的README.md文件。文件包含项目概述、核心功能（简易版）等部分，如手动复制文字并粘贴到插件输入框、生成图片等内容。该图片与上下文紧密相关，直观呈现了W addCriterionAI根据用户需求生成需求文档的过程，为后续开发提供依据。](/courses/aicoding/img/AhBXb6j8Go4dWHxfpisc5gkhnhg.jpg)

此时，Windsurf直接生成了一个readme.md的文件，这里包含了所有的需求，你可以进行修改：

![图片展示的是 addCriterion addCriterion图片展示的是Windsurf生成的readme.md文件内容。文件中详细描述了“网页金句卡片”浏览器插件的功能，包括文字复制功能、图片生成功能、图片导出功能、图片弹窗功能等，还列出了使用需求、界面设计、响应式设计、技术栈等内容。该图片与上下文 addCriterion该图片与上下文 addCriterion图片展示的是Windsurf生成的readme.md文件内容。文件中详细描述了“网页金句卡片”浏览器插件的功能，包括文字复制功能、图片生成功能、图片导出功能、图片弹窗功能等，还列出了使用需求、界面设计、响应式设计、技术栈等。该图片与上下文紧密相关，是Windsurf根据需求生成的文件，供后续开发浏览器插件时参考。](/courses/aicoding/img/QacObZCbcoYrwyx8pC2c9ndlntb.jpg)

#### 再根据需求要求AI开发

```Plain Text
请你根据 @README.md 的需求描述，完成第一阶段：基础功能实现
```

注意，这里需要使用Windsurf里的编辑器@来进行选择文件：

<figure view-type="Preview"><source name="Windsurf的@功能.gif" mime="image/gif" size="10895845" token="Xyd9bszJToNW2txHpz1c6R3jnsb"/></figure>

#### 插件安装指南

Windsurf跑完后，生成了所有代码，具体如何安装和测试，其实已经给我们描述出来了：

![图片展示了浏览器插件安装和测试的步骤。首先打开Chrome浏览器，输入chrome://extensions/；接着开启右上角的“开发者模式”；然后点击“加载已解压的扩展程序”；选择项目文件夹（金句卡片）；最后扩展将被安装到浏览器中，可点击工具栏图标使用。该图片与上文“在Chrome浏览器内加载并测试扩展程序”的内容紧密相关，是对具体操作步骤的详细说明](/courses/aicoding/img/PcRcb8sSEojahvxy29qcdtAAnTf.jpg)

接下来，我们需要在Chrome浏览器内加载这个扩展程序，进行调试，保证它做出来的是我们想要的：

![图片展示了Chrome浏览器的扩展程序管理操作步骤。画面中，浏览器右上角的三个点被红色箭头指向，点击后弹出下拉菜单，其中“扩展程序”选项被红色框线突出显示。此外，左下角“管理扩展程序”选项也被红色框线标出。该图片与文档中“插件安装指南”部分内容相关，用于指导用户在Chrome浏览器内加载扩展程序，进行调试，以确保其功能符合预期。](/courses/aicoding/img/MXODbSLhooK6xAxW01mcsdoenCf.jpg)

然后会进入扩展程序的管理页面，先打开右上角的“开发者模式”，然后在左上角选择“加载已解压的扩展程序”，然后选择这个产品代码所在的文件夹。

![图片展示了Chrome浏览器的扩展程序管理页面，右上角有“开发者模式”开关，已被开启；左上角有“加载已解压的扩展程序”选项，用红色框突出显示。这与文档上下文紧密相关，文档介绍在Chrome浏览器中加载扩展程序进行调试的步骤，其中提到要先打开“开发者模式”，再选择“加载已解压的扩展程序”，图片正是对这一操作步骤的可视化呈现，直观展示了扩展程序管理页面中关键操作选项的位置。](/courses/aicoding/img/IsWcbExNIopbTpx6WqUcjJgjnkf.jpg)

加载成功：

![图片展示了Chrome浏览器扩展程序管理页面。页面左侧有“加载已解 addCriterion图片展示的是 addCriterion图片展示](/courses/aicoding/img/Jku4bz7t9okpVqx40YfcHw2WnKg.jpg)

注意，通常来说，使用Claude3.5很容易出现下面的错误，3.7黄叔尝试并没有出现：

![图片显示了Chrome浏览器加载扩展程序时出现的错误提示。标题为“未能成功加载扩展程序”，下方显示文件路径为“~/文稿/Trae/goldenchrome”，错误提示为“Could not load icon 'images/icon16.png' specified in 'icons'. 无法加载清单。”右下角有“取消”和“重试”两个按钮。该图片与上文提到的使用Claude3.5加载浏览器扩展程序时容易出现错误的内容相关，具体是因为没有创建浏览器插件的图标而导致加载失败。](/courses/aicoding/img/PXW9bpGrEoRGl8xfi6gcA4dBnIb.jpg)

这个其实是没有创建浏览器插件的图标导致。照例，我们把截图发给Windsurf，让它来搞定。

很快Windsurf就跑完了，然后我们重新点“加载已解压的扩展程序”，会发现这次OK了。

> 但我们需要提醒大家，Claude 3.5模型其实并不具备直接生成图片的能力，所以事实上生成的几个icon是无法打开的，不过Chrome对图标的要求不严，所以仍旧可以加载，只是实际上图标并不能真的显示出的，如果真的希望有更美观的图标，可以用其他AI生成图片的软件来生成图标。

### Chrome插件logo自动生成

这里提供一个@安德 在评论里给出的工具：https://icons.txtx.me/

- 支持根据插件描述AI生图
- 支持将上传的图片自动压缩为Chrome商店需要的尺寸

![图片展示的是Chrome插件LOGO生成界面。](/courses/aicoding/img/KfEybajEDohEl6xALK4cXrsPnyc.jpg)

好，现在我们去打开一个网页试试，比如我点开黄叔的一篇公众号文章：

https://mp.weixin.qq.com/s/Cl9siWXt4VfMBtK5wdbDYg

然后可以在浏览器里把这个插件固定，以后就更方便测试：

![图片展示了Chrome浏览器扩展程序管理界面 addCriterion addCriterion图片内容:](/courses/aicoding/img/MfwVbOC6io8GaWxfanecZ5MEnke.jpg)

测试后，发现完成了最基础的功能开发：

<grid>
<column width-ratio="0.458558">
![图片展示的是网页金句卡片生成界面。上方标题为“网页金句卡片”，下方有输入框提示“请输入或粘贴金 自动生成的网页金句”。下方有“选择卡片风格”区域，有“简约”“文艺”“商务”三个选项 自动生成的网页金句”image_id>>](/courses/aicoding/img/T4pHbL82WorMzZxt7aDc5EXvnGd.jpg)
</column>
<column width-ratio="0.541442">
![图片展示了一篇 addCriterion图片展示了一篇公众号文章的金句卡片样式。卡片背景为浅棕色，中间白色文字写着“黄叔上篇首发字节AI IDE Tra e的文章，已经有3.8万阅读，可惜的是，Windows版彼时还未上线。”卡片顶部和底部有 addCriterion图片展示了一篇公众号文章的金句卡片样式。卡片背景为浅棕色，中间白色文字写着“黄叔上篇首发字节AI IDE Tra e的文章，已经有3.8万阅读，可惜的是，Windows版彼时还未上线。”卡片顶部和底部](/courses/aicoding/img/VLMwbFWOIo22GLx9S2YcOrkXn0d.jpg)
</column>
</grid>

上右图是金句卡片的样式，当然是不大好看的，这里我们先以实现功能为主，大家可以自行优化。

中间如果出现错误，很正常，可以在扩展程序内点击插件的“错误”查看详细的报错信息，截图发给Windsurf。

![图片展示了Chrome浏览器中“所有扩展程序”界面，重点突出“Golden Quote 1.0”插件。该插件图标为灰色方块内有字母“G”和相机图案，名称及描述为“将网页中的文字内容转换成精美的图片”。下方显示ID为“occkjbiogjjhkoemodiiomolfhbkch”，并有“详情”“移除”“错误”](/courses/aicoding/img/QmFbbYctgoJHCKxhLJwc0MFLnAc.jpg)

![图片展示的是一个错误提示界面，标题为 自动生成的“](/courses/aicoding/img/JhZ4bl2EUobCPMxSO2YcL1i3nod.jpg)

Windsurf修改完后，记得在扩展程序内点击刷新按钮（记得清除掉错误信息），或者你也可以先移除，再加载：

![图片展示 addCriterion图片展示了Chrome浏览器扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，下方是“我的扩展程序”“键盘快捷键”](/courses/aicoding/img/ZzJxbJmaJowSPxx0EhDchboCn4b.jpg)

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

![图片展示的是在浏览器中打开的网页内容。左侧显示文章标题“我和AI”，右侧<](/courses/aicoding/img/OsMSbEi70oXrFLxhAOScVVlCnbh.jpg)

### 第二，前置准备，拥有flomo会员账号

flomo是少楠&Light开发的一个非常轻量化的笔记软件，有App，有网页端，运营了多年，很稳定。

我们可以通过黄叔提供的注册链接，快速完成注册： https://v.flomoapp.com/login

注册并登录后，点击左上角你的个人名称，在弹出的弹层里选择“免费领会员”

![图片展示了图片展示了flomo应用中个人名称下弹出的下拉菜单。菜单顶部有“PRO Super黄”标识，下方有多个选项，其中“免费领会员”被红色框和箭头突出显示。该图片与上下文紧密相关，上下文文 2.0 文档中提到，注册并登录flomo后，点击左上角个人名称，在弹出的弹层里选择“免费领会员”，即可免费获得会员资格，此 !***](/courses/aicoding/img/TqCUbETASon6SuxYr4Mcyp8bnjh.jpg)

输入黄叔的邀请码：**MTY1OA**

即可免费获得会员，如果你希望获得更长的会员，可以了解flomo的奖励计划：https://help.flomoapp.com/membership/gift.html

完成会员资格的获取后，可以点击左上角个人昵称，在弹层里选择“扩展中心&API”

![图片展示了 addCriterion图片展示了flomo应用中 addCriterion图片占位符](/courses/aicoding/img/AXC0b66G3oJ7fmxA1fvcaArMnIg.jpg)

然后右边有一个“你的专属记录API”，点击下面的“复制链接”，就可以获取你的API了，下一小节里我们会用到它。

![图片展示了flomo应用中“你的专属记录API”页面。页面左侧显示用户笔记、标签、天](/courses/aicoding/img/OFfTbKkiCotBO0xQ2qPcBO6ZnWg.jpg)

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

> **🍞**
> 解释：
> 这一步相当于实现了两个部分
> 1. 浏览器插件在前端可以被你看到了，并且能够抓到网页链接和标题信息
> 2. 点击提交时，数据能够通过flomo的API，传到flomo的服务器里
> 其中，我们还把flomo API页面里的代码参考案例提供给了AI，这样AI就知道如何设计代码了，后面还会用到这个小技巧。

把上面这些内容在输入框内提交给Windsurf后，它会开始自动运行，运行完成后，会和你确认一些细节：

![图片展示了Windsurf运行完成后与用户确认细节的界面。界面右侧红框内是需要确认的问题，包括内容格式，如发送到flomo时希望的内容格式；使用体验方面，如提交后是否提示信息、是否清空输入框等；功能补充方面，如是否添加快捷键、保存历史记录等。这些问题用于明确用户需求，以便开始开发。此图对应上文提到的Windsurf运行完成后会和用户确认细节的内容。](/courses/aicoding/img/PKuBbM6JioeS10x3BA0cFsFqnRf.jpg)

这里建议你尝试通过和AI交流，去表达自己的想法，Windsurf是一个很好的工具，我们通过它，能够更多的去表达自己，并指挥AI协助我们完成产品工作。

如果你实在不知道说什么好，可以和他说：

> 你来定吧，开工！

回车后，它就会开始干活：

![图片展示了Winds addCriterionWindsurf在帮助用户创建Chrome插件时的对话界面图片。Windsurf先是询问是否开始，产品经理回复“你来定吧，开工！”，接着Windsurf列出](/courses/aicoding/img/SV5vb0kNRoixVkxXAbLcJYCYnpd.jpg)

完成工作后，Windsurf会提示：

![图片中列出的步骤是关于在Chrome浏览器中安装扩展程序的流程。首先，需创建一个images图片中的关键信息图片](/courses/aicoding/img/LxVJb65BKoLQhmxbmHacdD5gn5d.jpg)

你需要按照它的提示一步步来，如果哪一步不清楚，完全可以提问它

比如第一步，我们需要在文件夹内新建一个images文件夹，并按照要求把三个尺寸的图标放进去：

![图片展示的是文件夹内的内容，其中有一个名为“images”的文件夹被展开。“images”文件夹内有三个尺寸的图标文件，分别是icon16.png、icon48.png和icon128.png，它们被红色框突出显示。根据上下文，在使用Windsurf制作浏览器插件时，需在文件夹内新建“images”文件夹，并按要求将这三个尺寸的图标放进去，这是制作插件的步骤之一。](/courses/aicoding/img/FokXbSf6QoXpapxYXnXcgWLInCc.jpg)

随后，可以打开Chrome浏览器的扩展程序页面，把它加载进去：

![图片展示了Chrome浏览器扩展程序页面。页面右上角有“开发者模式”开关，处于开启状态。下方“所有扩展程序”区域显示了名为“Flomo Clipper 1.0”的扩展程序，其图标为绿色背景的“F”，下方有“详情”和“移除”按钮。页面左上角有“加载已解压的扩展程序”按钮。该图片与文档中“打开Chrome浏览器，找到扩展程序页面，把它加载进去”的操作步骤相关，直观呈现了加载扩展程序的页面及扩展程序所在位置。](/courses/aicoding/img/E68RbXRcdo4j4UxHUOJcOjKbnag.jpg)

说明扩展程序安装完成了，对，就这么简单。

然后我们打开一个有内容的网页，比如新闻页面，或者是微信公众号文章页，都ok的，再点击插件，现在正常显示了：

![图片展示了一个打开的网页，网页上有文章内容，标题为“再见2024，憧憬2025”等。在网页右侧有一个弹层样式的插件窗口，显示了一篇文章的相关信息，包括发布时间“2023/11/20 07:00”、标题“万字长文：为什么AI陪伴产品都想抄星野？”，以及阅读量13,934、点赞数11等数据。图片对应上文提到的打开有内容的网页（如新闻页面或微信公众号文章页）并点击插件后正常显示的情况，展示了插件当前弹层的样式。](/courses/aicoding/img/DfHEbW7gPoPj3hxPDMhctqyTn3d.jpg)

但它目前是一个弹层，我希望是侧边栏的方式，侧边栏和弹层的区别是，侧边栏可以固定在网页右侧，弹层如果我点击了页面，弹层就会收起，不方便我复制粘贴。

这时候就可以怒斥AI：

![图片展示了向AI反馈需求的聊天输入框界面。输入框内文字为“现在是弹层的形式，我需要点击插件后，在右侧固定侧边栏，你先想想方案，别急着动手”。这对应上文提到的希望将当前弹层形式的浏览器插件改为可固定在网页右侧的侧边栏形式，向AI提出需求的场景。左下角有添加图片等功能选项，右下角有“Write”和“Chat”等按钮，表明这是一个与AI交互的聊天窗口。](/courses/aicoding/img/WTXKbYKXJoLaAnxUj72cLiRbngc.jpg)

小技巧1：先截图，然后在输入框内粘贴，就可以快速把截图提交给Windsurf。

小技巧2：“你先想想方案，别急着动手”这句话是因为Windsurf往往很着急的开始干活，但我们需要它慢一点，先和我们对好方案，等我们确认后再开始，这样可以大幅减少错误率的发生。

<grid>
<column width-ratio="0.483696">
![图片展示了使用Windsurf制作浏览器插件时的对话及方案设计。用户提出将插件从弹窗形式改为右侧固定侧边栏形式，AI理解需求后进行实现方案设计。方案一是调整manifest.json，将插件类型从popup改为sidebar形式并添加新权限；技术实现有两种方案，推荐的方案A为使用Chrome Side Panel API，优点是原生支持、用户体验佳且与浏览器完美融合，但仅支持Chrome 114+版本。方案B为注入式侧边栏，通过注入HTML和CSS创建侧边栏。这与上下文提到的AI提供两种方案相契合。](/courses/aicoding/img/XYhwbt7WBomr7XxAqnzcGNnHngc.jpg)
</column>
<column width-ratio="0.516304">
![图片展示了Windsurf复刻善 addCriterion addCriterion善思flomo插件时的两种方案对比及推荐方案。方案A为Chrome Side Panel API，更现代，用户体验好，不影响网页布局，性能好，推荐采用；方案B为注入式侧边栏，兼容性好，可自定义样式，但可能与样式冲突，需额外处理滚动等问题。图片与上下 addCriterion图片与上下文紧密相关，上下文在介绍Windsurf复刻善思flomo插件时，先提出两种方案，再推荐方案A，图片直观呈现了两种方案的优缺点及推荐理由，为后续代码实现打下基础。](/courses/aicoding/img/WjsfbpwXdoC65NxR7vpcNbv3nFh.jpg)
</column>
</grid>

这里AI提供了两种方案，并推荐方案A，我也觉得可以，那就这么干吧！

很快，Windsurf就改好了。改好后，需要继续到扩展程序内，刷新小程序，或者先移除，再加载。都是可以的：

![图片展示的是 自动生成的Flomo Chrome插件界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”图片右侧显示了Flomo扩展程序的相关信息，包括名称 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在Chrome应用商店中发现更多扩展程序和主题”等内容。右侧显示该扩展程序的ID为图片 addCriterion图片图片展示的是一个名为“Flomo Clipper 1图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在Chrome应用商店中发现更多扩展程序和主题。右侧显示该扩展程序的ID为图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已解压的扩展程序”“打包扩展程序”“更新”等选项，以及“我的扩展程序”“键盘快捷键”“在图片 addCriterion图片展示的是一个名为“Flomo Clipper 1.0”的Chrome扩展程序界面。左侧有“加载已](/courses/aicoding/img/XGZ7bhKLcowc2GxvRGScL3MZnjh.jpg)

这次更新后，点击插件没有反应，别急，我们打开扩展程序，发现有错误提示：

![图片展示了Chrome浏览器中“所有扩展程序”界面中“Flomo Clipper 1.0”插件的详细信息。该插件由“善思”开发，描述为“一键将网页内容同步到Flomo的Chrome插件”，其ID为“folnlgleiijbdlbbkaklolblmjhfcbgf”。界面中“错误”按钮被红色框突出显示，表明插件存在错误。此图与上下文紧密相关，上下文提到点击插件后有错误提示，此图直观呈现了错误提示的具体位置，帮助理解错误提示的来源。](/courses/aicoding/img/TgQAbYYzSoqXo7xPiQjcjraRnmh.jpg)

点击错误，查看具体的错误信息：

![图片展示的是浏览器扩展 addCriterion错误 addCriterion("图片")](/courses/aicoding/img/QGP5bDAZtop7yfxQXSJczLVknF0.jpg)

可以把错误信息复制，或者截图，告诉Windsurf：

![图片展示的是Winds文档](/courses/aicoding/img/T3JXbzTIooCszRx9rF0cJgPmnyf.jpg)

ok之后，我们继续测试插件。这次还是点击后没有反应，也没有报错，怎么办呢？

一样的，把问题描述出来：

![图片展示的是agraph addCriterion.json，添加后台脚本的配置：](/courses/aicoding/img/V0KubBygCoHRg6x2f5scx9PtnNf.jpg)

完成开发后，在扩展程序内刷新一下，回到网页里点击插件后，正常显示了：

![图片展示了在](/courses/aicoding/img/WasnbMHomowH35xwmk1cmM95nWe.jpg)

然后就是进行测试，在原文摘要和个人感想内输入对应的内容，并点击提交，发现还是有问题，点击提交没有响应，继续把问题描述在Windsurf里面提交。

注意，这个循环可能会重复几次，直到你测试下来，发现插件正常工作：

<grid>
<column width-ratio="0.272804">
![图片展示了的是Windsurf插件中“同步到Flomo”功能的界面。界面上方显示“原文信息”，包含原文标题“再见2024，憧憬2025”及原文链接。下方有“](/courses/aicoding/img/NOeOb6QgaofyPFxLhYycqjEknWf.jpg)
</column>
<column width-ratio="0.727196">
![图片展示的是一个](/courses/aicoding/img/AHkmbPTtmoLSBexBjLpcQcSLnOe.jpg)
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

![图片展示了代码编辑界面中README文件的内容。画面左侧是代码编辑区域，右侧是文件预览区域。左侧代码区域中，有部分内容被红色框线突出显示，显示了版本相关记录，如版本号及更新时间等。右侧预览区域也以红框突出显示了对应的更新内容，包括将当前版本设置为0.1.0等多项更新说明。图片与上下文相关，展示了在浏览器插件开发后，按照指示执行“帮我把当前版本设置成0.1.0，并更新Readme”命令后，README文件更新的具体呈现情况。](/courses/aicoding/img/Ua9RbJQxAoZUpQxsxHIcmCnDn8f.jpg)

可以看到，上面我们只是实现了一个最基础的产品形态，不能存储对话，不能针对过去的对话做全面的洞察分析，我们可以在此基础上不断的去迭代它！

这里留给大家当成作业，不过在继续迭代之前，很重要的一点是：

#### 使用Git做版本管理

> **📍**
> 如何做版本管理？

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

![图片展示了在终端执行git init命令后，初始化空Git仓库的界面。左侧是文件资源管理器，显示了“GitCode”文件夹下的“TextOne”文件夹，右侧终端窗口中，命令行显示“Initialized empty Git repository in F:/GitCode/TextOne/.git/”，表明在F:/GitCode/TextOne/目录下已成功初始化一个空的Git仓库。该图片与文档中介绍使用Git做版本管理的内容相关，直观呈现了初始化Git仓库的操作结果。](/courses/aicoding/img/QzR5bukv7oswY2xPcT5cfvdwnIg.jpg)

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

![图片展示了在终端执行Git命令完成版本存档后的信息。先是执行`git init`初始化空的Git仓库，接着执行`git add .`将当前目录下的所有改动添加到暂存区，最后执行`git commit -m "0.1.0 完成了侧边栏开发，同步到flomo完成"`在Git中创建新提交，记录当前版本快照。终端显示了9个文件被创建，如`_DS_Store`、`README.md`等，还显示了提交的哈希值`87b56db`。该图片与上文介绍的使用Git做版本管理的三个命令操作流程紧密相关，直观呈现了操作结果。](/courses/aicoding/img/ZY2Dbba30o3bbRxy8fOcvRsjnfb.jpg)

**前面三个命令，就完成了对当前版本的存档！**

**第四个命令：查看简洁提交历史**

```Plain Text
git log --oneline
```

这个命令会罗列出当前所有存档的版本信息

![图片展示的是在终端执行`git log --oneline`命令后的输出结果。显示了当前版本为`01830de (HEAD -> main, origin/main)`，并罗列了多个提交记录，如`feat: 优化 AI 回复的流式输出体验`、`feat: 优化 AI 回复显示效果`等，还包含`v0.3.0`、`v0.3.1`等版本信息。该图片与上文提到的查看简洁提交历史命令相关，直观呈现了当前所有存档版本信息。](/courses/aicoding/img/Wq9ObGX3voLllNxOYCYc8IkxnHe.jpg)

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

更多的进阶教程，如果有兴趣，可以阅读此文章：[栋人佳Dougle整理：Git使用](https://superhuang.feishu.cn/wiki/ZZZSwwuodicLIEkgQW9cPFk3nlb)

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

![图片展示了一段对话内容，是(1,1)处为“Me”标识对话中，“Me”提出在原文摘要旁添加AI总结功能，总结字数不超过200字，字数不超过200字 addCriterion](/courses/aicoding/img/WpPPbK9LMoMHScx8nfSctb7unVe.jpg)

ok的！一切准备就绪，下达你的指令让AI开工吧！

很快，AI说开发完成了！

测试后，确实AI总结能出内容了。

![图片展示了360 AI负责人梁志辉关于AI搜索的采访内容及Flomo界面。左侧是梁志辉的采访内容，他提到AI搜索不是“缝”，2](/courses/aicoding/img/DpcbbTtcToTv9ExnsXdcjZ83nUd.jpg)

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
