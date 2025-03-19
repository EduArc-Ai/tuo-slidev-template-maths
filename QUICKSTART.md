# 拓课堂 Slidev 模板快速入门

## TuoEdu Slidev Template Quick Start

## 快速开始

1. **安装依赖**

   ```bash
   npm install  # 或使用 yarn install
   ```

2. **启动开发服务器**

   ```bash
   npm run dev  # 或使用 yarn dev
   ```

3. **编辑 slides.md 文件**

   所有幻灯片内容都在这个文件中，默认的 slides.md 已包含各种组件示例

4. **构建演示文稿**

   ```bash
   npm run build  # 或使用 yarn build
   ```

5. **部署到 GitHub Pages**
   - 推送到 main 分支会自动部署
   - 访问地址: `https://<username>.github.io/<repository-name>/`

## 创建新课程

1. **复制 slides.md 文件**

   ```bash
   cp slides.md my-new-course.md
   ```

2. **修改新文件**

   更改标题、内容等

3. **单独构建此课程**
   ```bash
   npx slidev build my-new-course.md --base /my-course/ --out dist/my-course
   ```

## 重要的格式规范

### 布局标记格式

使用布局标记时，注意以下几点：

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

### 组件格式

使用组件时，为确保数学公式正确渲染：

- 在组件开始标签和内容之间**保留一个空行**
- 在内容和组件结束标签之间**保留一个空行**

正确示例：

```vue
<Definition title="极限">

函数 $f(x)$ 在点 $c$ 的极限是指当 $x$ 无限接近 $c$ 时...

</Definition>
```

## 常用组件

```vue
<!-- 定义 -->
<Definition title="极限">

函数 $f(x)$ 在点 $c$ 的极限是指当 $x$ 无限接近 $c$ 时...

</Definition>

<!-- 定理 -->
<Theorem title="毕达哥拉斯定理">

在任意直角三角形中，$a^2 + b^2 = c^2$

</Theorem>

<!-- 示例 -->
<Example title="求导示例">

求函数 $f(x) = x^3 + 2x^2 - 5x + 1$ 的导数...

</Example>

<!-- 问题 -->
<Question title="曲线切线" source="数学练习题">

找出曲线 $y = x^2 - 3x + 2$ 在点 $(2, 0)$ 处的切线方程。

</Question>

<!-- 答案 -->
<Answer title="曲线切线解答">

1. 求导数: $f'(x) = 2x - 3$, $f'(2) = 1$
2. 切线方程: $y = x - 2$

</Answer>

<!-- 注释 -->
<Note title="求导公式">

常见函数的导数公式：$(x^n)' = nx^{n-1}$...

</Note>

<!-- 两列布局 -->
<TwoColumn>
<template #left>

左侧内容

</template>
<template #right>

右侧内容

</template>
</TwoColumn>
```

## 水印控制

在 frontmatter 中添加以下内容：

```yaml
---
# 启用水印
watermarkEnabled: true

# 禁用水印
# watermarkEnabled: false
---
```

## 幻灯片分隔符

使用三个连字符来分隔幻灯片：

```markdown
# 第一张幻灯片

内容

---

# 第二张幻灯片

更多内容
```

## 更多资源

完整文档请参阅 README.md 文件。
