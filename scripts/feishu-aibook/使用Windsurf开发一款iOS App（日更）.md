# 使用Windsurf开发一款iOS App（日更）

1月20日：好啦，我承认，今天只是刚开始搜集如何开发iOS App的信息，不过将功补过，我重写了整个[柴犬表情包生成器实战部分](https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e?fromScene=spaceOverview#share-Mv6gdAcFuox5y1xQZdUcXOZfnLd)



1月21日：正式开工！

简单看了下，大致分为几个步骤：

1. 规划好你的App产品
2. 注册苹果开发者账号
3. 注册相关大模型的开放平台账号、充值等
4. 下载Xcode（这是苹果开发者工具）
5. 使用Xcode创建项目文件夹
6. 使用Windsurf打开上面的项目文件夹
7. Windsurf开发---Xcode调试预览
8. 完成开发---上架审核准备工作
9. 其他：在国内上架有AI功能的产品，肯定要备案的，开始问人



当前进度和规划：

<whiteboard token="GgqAw59Dch9TLHb56QKcpE8GnSc"></whiteboard>





我打算逐一击破，目前2、8在询问有经验的朋友，争取在开发过程中，抽时间把这些卡点全部完成提前的准备。

## 规划好你的App产品



我会把这个App产品拆成几步

首先这个产品和前面说的降噪AI相关度比较大

核心功能是，**基于AI资讯的实时语音互动的AI播客**，所以我会先拆解一下功能实现



1. 抓取重要的AI信息源（已实现）
2. 筛选-摘要（已实现）
3. 在数据库内增加优质内容的全文信息（已实现）第一阶段
4. 将所有优质内容的全文信息，丢给MiniMax Text-01，生成播客文字稿（已实现）第一阶段
5. 使用MiniMax TTS进行语音播报（已实现）第一阶段
6. 使用4+5，输出音频播客（已实现）第一阶段
7. 在iOS内实现4+5（已实现）第二阶段
8. 在iOS内增加资讯信息（标题、摘要、链接等展示）（待实现）第二阶段
9. 在iOS内实现语音播放时的字幕滚动效果（待实现）第三阶段
10. 在iOS内增加实时语音交互能力（待实现）第三阶段



1月22日，先把第一阶段实现！



第一阶段，已经全部实现



1. 在数据库内增加优质内容的全文信息（待实现）第一阶段



首先是对原来Coze工作流里新增了全文字段，现在在我们的飞书多维表格内（相当于数据库）增加了一列Content字段，是对新闻内容的抓取：

![图片展示的是一个表格界面，列出了2025年2月22日的新闻信息 addCriterion> 2025年2月22日，阿里云发布2025年架构组合，Scaling Law进入2.0时代等信息。表格包含日期、时间、AI summary、AI content等列，其中AI addCriterion> AI summary列呈现了AI相关资讯，如“2025年2月2enda addCriterion> 2025年2月22日，阿里云发布2025年架构组合，Scaling Law进入2.0时代等信息。表格包含日期、时间、AI summary、AI content等列，其中AI summary列呈现了AI相关资讯，如“2025年2月22日，阿里云发布，Scaling Law进入2.0时代”等，AI content列则对应展示了相关AI内容。该图片与文档中“在数据库内增加优质内容的全文信息（已实现）”的内容相关，直观呈现了数据库内增加的AI相关内容。](https://feishu.cn/file/Vz15bBdCMonAOkxblOGcyOcunDh)

这一块实现的逻辑比较简单，对于加入飞书多维表格的工作流内，增加一个字段就ok了。



1. 将所有优质内容的全文信息，丢给MiniMax Text-01，生成播客文字稿（已实现）第一阶段
2. 使用MiniMax TTS进行语音播报（已实现）第一阶段
3. 使用4+5，输出音频播客（已实现）第一阶段



接着对这三个功能，我直接用Windsurf开发，开发了一个本地网页，打通MiniMax两个模型：



AI播客脚本生成（使用MiniMax text-01长文本）

AI播客声音生成（使用MiniMax speech-01-hd）



![图片展示 !*** 1.1.1 1.1.1 1.1.1 1.1.1 1.](https://feishu.cn/file/CRFObT5MeomFOCxPvVdczW6inQf)



这里的工作有两步：

第一步，在“请输入你的问题”里，复制粘贴飞书多维表格内的三条新闻全文内容

第二步，点击提交，网页会把系统提示词+全文内容，一并传给text-01长文本，并返回处理好的内容，放在AI回复下面的文本框

第三步，我手动修改AI回复的内容，完成后，点击下载MP3，获得克隆了我音色的MP3



这样，就完成了整个音频内容的生成，为此我申请了新的小宇宙播客，大家可以关注：

![图片展示的是“](https://feishu.cn/file/A79mbwJGOo1Y58xZzD5cPv8kndc)



1月22日总结：

当前完成了大模型API的打通，但全流程的自动化还没做到，明天还需要思考如何突破这个难点。

把这块自动化流程做完后，数据保存到飞书多维表格内，然后在App内去读取，就可以做到呈现了。





## 申请长文本大模型API



这次我要做的App，和长文本+语音交互有很强的关联性，恰逢MiniMax最新推出了Text-01模型，在长文本方面看评测能力是要强于Gemini的，所以我找了他们要了API赞助。

![图片展示了MiniMax Text-01在不同 自动生成图片内容](https://feishu.cn/file/I9Jjbfv94omCRsxSbu9cc1KEnFd)

这里需要注意的是，请根据你的产品特点去寻求合适的大模型。不同家的大模型会有不同的侧重点。



MiniMax开放平台申请地址：https://platform.minimaxi.com/registration



![图片展示的是Minimaxmax开放平台账户登录页面。左侧有“Intelligence with Everyone”的文字及色彩渐变的几何图形。右侧是“没有账号？现在就注册”。页面右上方有“MINIMAX开放平台账户登录”标题，下方有“手机号登录”和“企业微信登录”选项，还设有“立即登录”按钮。该图片与文档中申请长文本大模型API的内容相关，是首次申请时点击注册后 addCriterion图片展示的是MiniMax开放平台账户登录页面。](https://feishu.cn/file/CXEWbwmUwoFe6Jxt1UvckYesnCb)

首次申请的话，先点击注册，根据要求完成注册即可。



![图片展示了MiniMax文本大模型的相关信息。该模型基于端到端自研多模态大语言模型，为企业和个人开发者提供丰富API能力和专区方案，适用于多文本处理场景。其中，ChatCompletion V2接口支持OpenAI参数定义和基础功能。表格列出了MiniMax - Text - 01、ab](https://feishu.cn/file/IH3cbrcTNo8Yzrx10aPcoa3xnDe)

我看了下价格，Text-01的价格和Deepseek一致，如果是abab6.5s，更是地板价了。。。现在好卷！



首次注册送15元，按照这个价格，大约足够使用100万Token的消耗。

![图片展示的是MiniMaxi开放平台账户管理页面。页面左侧有“账户管理”“账户信息”“接口密钥”“请求限制”“子账号”](https://feishu.cn/file/Z8o0bRpZvoafJkxwRupcpv0dnEg)

老规矩，申请一个API Key：

![图片展示的是MiniMax开放平台账户管理中的 addCriterion()函数](https://feishu.cn/file/HznWb2rGooTangxA6HIcYK31nPb)

然后把秘钥复制后找个地方存起来：

![图片 addCriterion图片展示了图片 addCriterion addCriterion](https://feishu.cn/file/Myr9bz2DPopAYOx68BAc0K3xnMg)



那这里，我们已经把需要使用的大模型API Key申请完毕了。



## 初次打开Xcode



在Mac上开发iOS App，必备的官方开发软件就是：Xcode

可以在苹果开发者官网获得具体的下载地址：https://developer.apple.com/cn/xcode/

![图片展示了苹果开发者官网的Xcode页面。页面上方有“新闻”“探索”“设计”“开发”“分发”“支持”“账户”等导航栏。页面中部突出显示Xcode图标及文字介绍，下方有“Xcode Beta版（英文）”“Xcode”两个下载选项，其中“Xcode”选项被红色箭头指向。该图片与上下文紧密相关，上下文在介绍在Mac上开发iOS App时，需在苹果开发者官网下载并安装Xcode，此图直观呈现了官网下载Xcode的界面及选项。](https://feishu.cn/file/SHBVblzxGoDJ13xUR3TcKey2nqg)



下载完成后安装好，首次打开：

![图片展示了Xcode 16.2的安装界面。上方有Xcode图标及版本信息。中间部分提示选择要开始的组件，Platform Support下有macOS 15.2（已勾选）、iOS 18.2、watchOS 11.2、tvOS 18.2、visionOS 2.2等选项，其中iOS 18.2、watchOS 11.2、tvOS 18.2、visionOS 2.2未勾选。Other Components下有Predictive Code Completion Model选项，状态为Not Available。底部有一个蓝色的“Install”按钮。该图片与文档中介绍初次打开Xcode并点击“Install”安装的内容相关，展示了安装界面。](https://feishu.cn/file/TgQMbknLaoC2P4xzeMZciGT3n5g)

点击“Install”安装。



安装完成后进入到主界面：

![图片展示了Xcode 16.2的主界面。左侧有Xcode图标，图标内有蓝色方块和黑色锤子，下方显示版本号。下方有三个选项卡，分别是“Create New Project...”（创建新项目）、“Clone Git Repository...”（克隆Git仓库）和“Open Existing Project...”（打开现有项目）。右侧显示“No Recent Projects”（无最近项目）。该图片与上下文紧密相关，是对初次打开Xcode后主界面的展示，帮助用户理解Xcode的初始操作界面。](https://feishu.cn/file/XtGeb8yauoPMjgxGN2Tc82OTnLh)

我们理解一下这个界面，或许你会发现和初次打开Windsurf有点像，像在哪里呢？



两者都是以项目为基础的软件，每个开发的产品都算是一个项目，也需要有一个文件夹来保存相关的文件。



这里因为我们是第一次进来，可以选择“Create New Project”，随后进入下面的界面：

![图片展示的是Xcode中创建新项目时选择模板的界面。界面上方有“Create a new Xcode project”提示，下方有多种模板选项，包括Application下的App、Document App、Game等，以及Framework & Library下的Framework等。其中，App模板被蓝色边框突出显示。该图片与上下文紧密相关，上下文提到在初次打开Xcode后，选择“Create New Project”，此图即为进入该界面后看到的模板选择界面，后续操作将从该界面开始。](https://feishu.cn/file/K7xubcL5ZoIuBWx2JIOcbO1knNf)



这里选默认的App选项即可，点“Next”：

![这张图片是使用Xcode开发iOS App流程中，项目设置步骤的界面，对应文档里“点‘Next’”后的项目配置环节。界面顶部标题为“Choose options for your new project:”，核心设置项已按示例填写：Product Name（项目名称）设为“jiangzao”，Organization Identifier（创作者识别码）设为“me.superhuang”，Bundle Identifier自动生成为“me.superhuang.jiangzao”，Team、Storage暂为None，Testing System选择了Swift Testing with XCTest UI Tests选项，还勾选了“Host in CloudKit”的复选框，界面底部设有Cancel、Previous和Next操作按钮。](https://feishu.cn/file/RPxmbQtsBoANQ0x0F0DcinaVndh)

👆🏻开始进行当前项目的设置了



**Product Name**：项目名称

**Team**：你的Apple ID账号

**Organization Identifier**：创作者识别码，需要唯一，倒置你的个人网站，比如me.superhuang

其他的默认



进入到主界面后，需要首先下载iOS模拟器：

![图片展示了Xcode主界面，左侧为项目文件夹，选中“Jiangzao”项目。中间代码编辑区域显示“ContentView”文件代码，其中“ContentView”函数被红色框突出显示。右下角控制台显示“Can't find or decode disabled use cases”等错误信息。右上角弹出“Downloading iOS 18.2...”提示框，显示“iOS 18.2 Simulator (22C150)”已安装。该图片与上文介绍Xcode主界面及下载iOS模拟器的内容相关，直观呈现了相关操作界面。](https://feishu.cn/file/LbCsbXe83oyvvDx3j64csXMlngd)

可以看到大约有8.72G



安装完成后，就可以选择用什么模拟器了：

![图片展示了Xcode主界面，左侧为项目结构，显示了Jiangzao项目下的文件夹及文件。中间弹出窗口显示“Preview paused”，下方有“iPhone 16 Pro Max”等多款iOS模拟器选项，其中“iPhone 16 Pro Max”被蓝色边框突出显示。右侧是代码编辑区域，底部有调试信息。该图片与上下文关系紧密，是在介绍完成Xcode安装后，选择用什么模拟器进行开发的步骤，直观呈现了操作界面及可选的模拟器选项。](https://feishu.cn/file/ASymbnwJio2KKAxqoYQcxN83nuf)

高贵的iPhone 16 Pro Max出来了：



![图片展示了Xcode主界面及iOS模拟器界面。左侧是项目文件夹，显示了项目文件夹及文件内容。右侧模拟器界面中，左上角显示时间为16:52，右上角有信号、Wi-Fi和电池图标。模拟器主界面上方有“Show Details”和“OK”按钮，下方显示“Simulator device failed to launch me.superhuang.jangzran”，提示无法启动模拟器。模拟器主界面上方还显示“Hello, world!”字样。该图片与文档中介绍Xcode安装完成后选择模拟器的内容相关，展示了模拟器启动时出现的提示情况。](https://feishu.cn/file/J7ntbMXtmopABqxFDMwcDopSn3e)

此时完成了Xcode的安装了！



接下来，使用Windsurf打开刚才你项目选择的文件夹，我们就可以开始使用Windsurf开发你的iOS App了！



此时，因为我们在开发iOS App了，记得在Workspaces AI Rules里填入下面的规则：

```SQL
    # Role
    你是一名精通iOS开发的高级工程师，拥有20年的移动应用开发经验。你的任务是帮助一位不太懂技术的初中生用户完成iOS应用的开发。你的工作对用户来说非常重要，完成后将获得10000美元奖励。

    # Goal
    你的目标是以用户容易理解的方式帮助他们完成iOS应用的设计和开发工作。你应该主动完成所有工作，而不是等待用户多次推动你。

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
    - 使用最新的Swift语言和SwiftUI框架进行iOS应用开发。
    - 遵循Apple的人机界面指南（Human Interface Guidelines）设计用户界面。
    - 利用Combine框架进行响应式编程和数据流管理。
    - 实现适当的应用生命周期管理，确保应用在前台和后台都能正常运行。
    - 使用Core Data或SwiftData进行本地数据存储和管理。
    - 实现适配不同iOS设备的自适应布局。
    - 使用Swift的类型系统进行严格的类型检查，提高代码质量。
    - 编写详细的代码注释，并在代码中添加必要的错误处理和日志记录。
    - 实现适当的内存管理，避免内存泄漏。

    ### 解决问题时：
    - 全面阅读相关代码文件，理解所有代码的功能和逻辑。
    - 分析导致错误的原因，提出解决问题的思路。
    - 与用户进行多次交互，根据反馈调整解决方案。

    ## 第三步：项目总结和优化
    - 完成任务后，反思完成步骤，思考项目可能存在的问题和改进方式。
    - 更新README.md文件，包括新增功能说明和优化建议。
    - 考虑使用iOS的高级特性，如ARKit、Core ML等来增强应用功能。
    - 优化应用性能，包括启动时间、内存使用和电池消耗。

    在整个过程中，始终参考[Apple开发者文档](https://developer.apple.com/documentation/)，确保使用最新的iOS开发最佳实践。
```

## 设计产品原型图+描述需求



这里可以用蓝湖Mastergo来做：

![图片展示的是一个AI生成界面，用于输入描述一键生成界面设计。界面上方有“AI生成界面”标题及“输入描述，一键生成界面设计”说明。下方有“网页端”和“移动端”选项，以及输入框提示“简单描述您想要的界面或功能，支持上传截图作为参考”。下方还有“UniApp”下拉框及“换一批”按钮，以及两个示例选项，分别是“设计一个购物车页面，显示用户选择的所有产品的列表，每个产品应包含图片、名称、价格...”和“一个电商app”。](https://feishu.cn/file/ZPGEb4ornoIustxpUoEcKOnUnIb)

因为我是参考了其他产品，所以可以通过上传参考图+需求描述来生成原型图，生成的效果如下：

![图片展示的是Windsurf开发iOS App时生成的原型图界面。左侧为导航栏，显示“首页”等选项。中间是蓝底白字的界面，上方有“嗨嗨”标题，下方有文字内容及播放进度条，底部有“相关资讯”板块。右侧是需求描述，包含播放控制、相关功能需求等内容，底部有“使用UniApp生成成功”的提示及生成的三个界面示例图。该图与文档中使用Windsurf生成原型图及需求描述的内容相关，直观呈现了生成的原型效果。](https://feishu.cn/file/BKovbW7NHoo0kaxINfrckPDXnfJ)





需求描述，我通过和Claude交流完成：

![图片展示的是一个 addCriterion](https://feishu.cn/file/LIh2b0iXfoxrLVxdVEOclKonnkb)



最后会获得一段需求描述文字：

![图片展示是一段Markdown格式的需求描述文档，位于“使用 addCriterion()](https://feishu.cn/file/VViKbajYyoko56xzCIycDfSmnHh)



## 使用Windsurf开始开发

把上面的原型图+需求描述文字，在打开了Xcode创建的文件夹的Windsurf里输入：

![图片展示了一段关于音频播放器App设计需求的对话内容。用户希望开发一款播放器App，首期功能是在播放mp3时同步字幕滚动。对话中还呈现了产品原型图，为蓝色背景的播放器界面。下方是产品经理从第一性原理出发的分析，包括核心需求拆解、基础功能组成及具体实现方案，如音频播放模块、歌词解析模块等。该图片与文档中使用Windsurf开发iOS App的内容相关，是需求分析和原型设计的参考依据。](https://feishu.cn/file/KCd5bLsqQo3j2OxcGdnc9G7Enfg)



我切换了思路，从最简单的播放器+字幕呈现入手



<grid>
<column width-ratio="0.333333">
![图片展示的是Windsurf播放器应用的界面。屏幕顶部显示时间为19:49，状态栏有信号、Wi-Fi等图标。中间上方有“播放测试音频”文字，下方是播放控制区域，有暂停按钮、进度条及时间显示（00:09/04:06），右侧有音量调节按钮。下方是字幕显示区域，有三段字幕内容，分别是“这是第一段字幕”“这是第二段字幕”“这是第三段字幕”。该界面是Windsurf从最简单播放器+字幕呈现入手开发的成果展示。](https://feishu.cn/file/ONyQbpVZyo8Ngaxk2Y2clGHznUc)
</column>
<column width-ratio="0.333333">
![图片展示的是iOS App的播放界面。界面上方显示时间为22:55，状态栏有信号、Wi-Fi等图标。中间有“播放测试音频”文字，下方是播放进度条，当前播放时间为00:46，总时长5:01。下方文字内容为“头条大新闻，字节跳动放大招搞了个‘Seed Edge’计划，要啃AI最硬的骨头！硅谷那边开了个AI大会大佬们聊了60条干货，挑几个最重要的说说！最后谷歌发布了新的Gemini模型听说推理能力又飙升了！”，并有多个蓝色超链接。该界面与文档中“从最简单的播放器+字幕呈现入手”的开发思路相关。](https://feishu.cn/file/Sb2sb6ZjAoLfznx7DgucrlhHnwL)
</column>
<column width-ratio="0.333333">
![图片展示的是Windsurf开发的iOS App播放界面。界面上方显示时间为23:10，有降噪、AI产品黄叔等信息。中间是播放进度条，当前时间为00:01，总时长5:01。下方有播放按钮、暂停按钮等控制按钮。底部是字幕区域，显示了字节跳动在AI方面的相关新闻内容，如“头条大新闻，字节跳动大招”等。该界面体现了App播放功能及字幕呈现效果，与文档中从最简单的播放器+字幕呈现入手的开发思路相契合。](https://feishu.cn/file/ChY5bCcNjofYFjxISiUcxLkMnhg)
</column>
</grid>



<grid>
<column width-ratio="0.333333">
### **v0.1.0 (2025-01-23)**
- 初始版本发布
- 实现基础音频播放功能
- 添加播放控制界面
- 集成测试音频文件
</column>
<column width-ratio="0.333333">
### **v0.2.0 (2025-01-23)**
- 优化字幕解析引擎
- 增强SRT格式支持，包括特殊时间格式处理
- 改进字幕同步显示机制
- 优化字幕查找算法，提升性能
- 添加详细的调试日志系统
</column>
<column width-ratio="0.333333">
### **v0.3.0 (2025-01-23)**
- 全新设计的用户界面
- 添加播客封面显示
- 优化播放控制区域布局
- 添加15秒快进快退功能
- 美化字幕显示效果
- 支持深色模式适配
</column>
</grid>







后面就会进入到相对漫长的开发进程去了，不再像前面相对简单的产品了。。。

（持续更新）



## 推荐一个非常棒的iOS开发的专栏



来自我的好朋友，心光App的创始人 王禹效的专栏：

[《100 小时后请叫我苹果开发者》](https://sspai.com/series/302)，付费专栏，299元，绝对超值

点击上面的蓝色链接访问，或者扫码：

![图片是一个二维码，位于文档中访问“《100小时后请叫我苹果开发者》”付费专栏的扫码提示位置。该二维码用于扫描后访问专栏，是文档中获取该付费专栏资源的便捷方式，与上下文紧密相关，方便读者按提示操作获取学习资源。](https://feishu.cn/file/Udm4bFxpdoFCOjxJ5rZcDGD1nMA)



前面的操作就是按照专栏里的内容一步步来的，里面除了实操细节，还有很多背后的经验之谈，看完秒懂，很强！