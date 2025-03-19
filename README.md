# 拓课堂 Slidev 模板 | TuoEdu Slidev Template

[![Slidev](https://img.shields.io/badge/Powered%20by-Slidev-0AC5BB)](https://sli.dev/)
[![Made for Math](https://img.shields.io/badge/Made%20for-Mathematics-blue)](https://github.com/AFFFPupu/tuo-slidev-template-maths)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Enabled-brightgreen)](https://afffpupu.github.io/tuo-slidev-template-maths/)

<div align="center">
  <img src="./public/logo/company-logo.png" width="300" alt="拓课堂 Logo">
  <h3>专为数学教学设计的演示文稿模板</h3>
  <h4><i>Presentation Template Designed for Mathematics Education</i></h4>
</div>

## 📝 简介 (Introduction)

这是一个基于 [Slidev](https://sli.dev/) 的演示文稿模板，专为拓课堂的数学教学设计。该模板包含了丰富的数学组件和布局，支持完整的 LaTeX 数学公式渲染，以及交互式绘图功能。

_This template is built on [Slidev](https://sli.dev/) for mathematics education at TuoEdu, featuring rich components, LaTeX support, and interactive tools._

### ✨ 特点 (Features)

- 🧮 完整支持 LaTeX 数学公式
- 📊 内置多种数学教学组件（定理、定义、示例等）
- 🎨 可定制的公司水印
- 🌈 美观的设计风格
- 🔄 交互式演示功能
- 📱 响应式设计
- 🚀 快速开发和部署

## 🚀 开始使用 (Getting Started)

### 前提条件 (Prerequisites)

确保你的系统中已安装：

- Node.js (v16.0.0+)
- npm 或 yarn

### 安装 (Installation)

```bash
# 克隆仓库
git clone [repository-url]

# 进入项目目录
cd tuo-slidev-template-maths

# 安装依赖
npm install  # 或使用 yarn install
```

### 开发 (Development)

```bash
# 启动开发服务器
npm run dev  # 或使用 yarn dev
```

### 构建 (Build)

```bash
# 构建演示文稿
npm run build  # 或使用 yarn build
```

### 部署 (Deployment)

本模板已配置好 GitHub Actions 自动部署工作流程。每当你推送更改到 main 分支时，你的幻灯片将自动部署到 GitHub Pages。

要启用 GitHub Pages 部署：

1. 在你的 GitHub 仓库中，转到 Settings > Pages
2. 在 Build and deployment 下，选择 GitHub Actions
3. 确保仓库中存在 `.github/workflows/deploy.yml` 文件
4. 推送更改到 main 分支以触发部署

你的幻灯片将发布在 `https://<username>.github.io/<repository-name>/`

## 📄 如何创建演示文稿 (Creating Presentations)

### 编辑内容 (Edit Content)

所有演示文稿内容都在 `slides.md` 文件中。你可以直接编辑此文件来创建你的演示文稿。默认的 `slides.md` 已包含各种组件示例，你可以参考并修改它。

### 幻灯片分隔符 (Slide Separators)

使用 `---` 来分隔幻灯片：

```markdown
# 第一张幻灯片

这是内容

---

# 第二张幻灯片

这是更多内容
```

### 幻灯片配置 (Slide Configuration)

在演示文稿开头使用 frontmatter 来配置全局设置：

```yaml
---
theme: default
addons:
  - tldraw
title: 课程标题
titleTemplate: "%s - 拓课堂"
author: 拓课堂
date: 2024
logo: ./logo/company-logo.png
info: |
  课程描述
favicon: ./logo/favicon.png
colorSchema: light
watermarkEnabled: true # 启用/禁用水印
---
```

### 重要的格式规范 (Important Formatting Guidelines)

#### 布局标记格式

使用布局标记时，确保以下几点：

- `---` 和第一个属性之间**不要有空行**
- 属性之间可以有空格，但不要有空行
- 最后一个属性和结束的 `---` 之间**不要有空行**

正确示例：

```markdown
---
layout: center
class: text-center
section: "STEP 介绍"
---
```

错误示例：

```markdown
---

layout: center
class: text-center
section: "STEP 介绍"

---
```

#### 组件格式

使用组件时，为确保数学公式正确渲染，请遵循以下规则：

- 在组件开始标签和内容之间**保留一个空行**
- 在内容和组件结束标签之间**保留一个空行**

正确示例：

```vue
<Definition title="极限" subject="微积分">

函数 $f(x)$ 在点 $c$ 的极限是指当 $x$ 无限接近 $c$ 时，$f(x)$ 无限接近的值。

</Definition>
```

错误示例：

```vue
<Definition title="极限" subject="微积分">
函数 $f(x)$ 在点 $c$ 的极限是指当 $x$ 无限接近 $c$ 时，$f(x)$ 无限接近的值。
</Definition>
```

## 🧩 组件使用 (Component Usage)

### 数学公式 (Mathematical Formulas)

使用 LaTeX 语法编写数学公式：

```markdown
内联公式: $E = mc^2$

块级公式:

$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$
```

### 定义组件 (Definition Component)

```vue
<Definition title="极限">

函数 $f(x)$ 在点 $c$ 的极限是指当 $x$ 无限接近 $c$ 时，$f(x)$ 无限接近的值。

</Definition>
```

### 定理组件 (Theorem Component)

```vue
<Theorem title="毕达哥拉斯定理">

在任意直角三角形中，直角边的平方和等于斜边的平方：
$$a^2 + b^2 = c^2$$

</Theorem>
```

### 示例组件 (Example Component)

```vue
<Example title="求导示例">

求函数 $f(x) = x^3 + 2x^2 - 5x + 1$ 的导数。

解答:
$$f'(x) = 3x^2 + 4x - 5$$

</Example>
```

### 问题组件 (Question Component)

```vue
<Question title="曲线切线" source="数学练习题">

找出曲线 $y = x^2 - 3x + 2$ 在点 $(2, 0)$ 处的切线方程。

</Question>
```

### 答案组件 (Answer Component)

```vue
<Answer title="曲线切线解答">

1. 求导数: $f'(x) = 2x - 3$, $f'(2) = 1$
2. 切线方程: $y = x - 2$

</Answer>
```

### 注释组件 (Note Component)

```vue
<Note title="求导公式">

常见函数的导数公式：
- $(x^n)' = nx^{n-1}$
- $(e^x)' = e^x$
- $(\sin x)' = \cos x$

</Note>
```

### 两列布局 (Two-Column Layout)

```vue
<TwoColumn>
<template #left>

### 左侧内容
这里可以放置文本、公式等。

</template>
<template #right>

### 右侧内容
这里可以放置示例或解释。

</template>
</TwoColumn>
```

## 🎨 水印 (Watermark)

该模板内置了公司水印功能，可通过 frontmatter 中的 `watermarkEnabled` 属性来控制显示或隐藏：

```yaml
---
# 启用水印
watermarkEnabled: true

# 禁用水印
# watermarkEnabled: false
---
```

## 📦 目录结构 (Directory Structure)

```
├── components/       # 自定义组件
├── layouts/          # 自定义布局
├── public/           # 静态资源
│   └── logo/         # Logo 和图标
├── setup/            # 配置脚本
├── styles/           # CSS 样式
├── slides.md         # 主要演示文稿内容（包含示例）
├── slidev.config.ts  # Slidev 配置
└── global-top.vue    # 全局顶部组件
```

## 🧪 高级用法 (Advanced Usage)

### 自定义主题 (Custom Themes)

可以通过修改 `styles/` 目录下的文件来自定义主题。

### 添加新组件 (Adding New Components)

1. 在 `components/` 目录下创建新的 Vue 组件
2. 在 `global-components.ts` 中注册组件
3. 在演示文稿中使用新组件

### 构建特定课程 (Building Specific Lessons)

可以创建多个 `.md` 文件用于不同的课程，然后分别构建它们：

```bash
# 复制现有 slides.md 作为新课程
cp slides.md lesson2.md

# 编辑新课程内容
# ...

# 构建特定课程
npx slidev build lesson2.md --base /lesson2/ --out dist/lesson2
```

## 📚 实用资源 (Useful Resources)

- [Slidev 官方文档](https://sli.dev/)
- [Vue.js 文档](https://vuejs.org/)
- [KaTeX 文档](https://katex.org/docs/supported.html)
- [Markdown 指南](https://www.markdownguide.org/)

## 🤝 贡献 (Contributing)

如果你想为这个模板做出贡献，请提交 pull request 或联系拓课堂技术团队。

## 📄 许可证 (License)

© 2024 拓课堂 (TuoEdu). 保留所有权利 (All rights reserved).
