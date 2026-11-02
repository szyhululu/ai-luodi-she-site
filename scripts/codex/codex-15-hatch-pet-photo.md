最后核对

官方资料最后核对日期：2026-09-04。本文记录 Codex 客户端中的 Hatch Pet 使用流程，相关入口、Slash Command、素材格式和生成结果请以当前 Codex 客户端为准；通用能力说明可参考 [Codex App 官方文档](https://learn.chatgpt.com/docs/app) 与 [Codex Skills 官方文档](https://learn.chatgpt.com/docs/build-skills)。

Codex 内置了一个宠物系统——**Hatch Pet**。

你不仅可以从现有宠物中选择，还可以用一张照片生成**专属动画宠物**，让编程时有一只独一无二的电子宠物。

本篇介绍如何用 Codex 的 Hatch Pet 功能，快速制作自定义宠物。

* * *

在对话框中输入 `/`，选择「Hatch Pet」。

![image.png](https://cdn.canghecode.com/yanyan/20260603164239865.png)

* * *

上传一张图片（头像、照片都可以），然后输入提示词：

```
/Hatch Pet 帮我根据上传的照片生成一个萌系 Q 版的宠物。
```

![image.png](https://cdn.canghecode.com/yanyan/20260603165113247.png)

Codex 会自动完成风格转换、生成帧数、添加动画效果。

![image.png](https://cdn.canghecode.com/yanyan/20260603165417268.png)

生成过程中会显示进度提示：

![image.png](https://cdn.canghecode.com/yanyan/20260603170909630.png)

> 生成时间通常需要 1-3 分钟，请耐心等待。

* * *

生成完成后，在「自定义宠物」区域点击选择，专属宠物就诞生了。

![image.png](https://cdn.canghecode.com/yanyan/20260603171016784.png)

最终效果：

![image.png](https://cdn.canghecode.com/yanyan/20260603171438425.png)

生成后的动画效果可以在 Codex 的自定义宠物列表和输出目录中查看。

宠物包输出位置：

![](https://cdn.canghecode.com/yanyan/20260603180110711.png)

* * *

**分享给朋友：** 将宠物文件压缩后发送即可，将宠物文件放到以下路径。

```bash
~/.codex/pet
```

![image.png](https://cdn.canghecode.com/yanyan/20260603174027962.png)

* * *

风格

提示词示例

萌系 Q 版

生成一个萌系 Q 版的宠物，大眼睛，可爱风格

像素风

生成一个像素风格的宠物，复古游戏风格

赛博朋克

生成一个赛博朋克风格的宠物，霓虹配色

水彩风

生成一个水彩风格的宠物，柔和配色

极简风

生成一个极简风格的宠物，线条简洁

* * *

-   更换素材图片，使用更清晰的照片
-   调整提示词，增加更多风格描述
-   多生成几次，选择最佳效果

-   检查 Codex 是否为最新版本
-   尝试重新选择宠物
-   重启 Codex App

进入 `~/.codex/pet` 目录，删除对应的宠物文件夹即可。

---

> 本文转载自 [Codex 中文指南](https://codexguide.ai)（codexguide.ai），作者 canghe。
> 原文链接：[Codex × Hatch Pet：用一张照片生成专属宠物](https://codexguide.ai/recipes/15-hatch-pet-photo.html)
> 本页内容由 AI落地社 整理收录，版权归原作者所有。