# 组件使用指南 | Component Usage Guide

## 📚 组件概览 | Component Overview

拓课堂 Slidev 模板提供了丰富的教育组件，专为数学教学设计。本指南将详细介绍每个组件的使用方法。

*TuoEdu Slidev Template provides rich educational components specifically designed for mathematics teaching. This guide will detail how to use each component.*

---

## 🎯 学习目标 | Learning Objectives

### 组件名称 | Component Name: `<LearningObjective>`

**用途 | Purpose**: 展示课堂学习目标  
**Usage**: Display classroom learning objectives

**中文示例 | Chinese Example**:
```vue
<LearningObjective>

理解导数的概念及其几何意义

掌握基本导数公式的运用

能解决简单的实际应用问题

</LearningObjective>
```

**English Example**:
```vue
<LearningObjective>

Understand the concept and geometric meaning of derivatives

Master the application of basic derivative formulas

Solve simple real-world application problems

</LearningObjective>
```

**特点 | Features**:
- 🎯 自动添加目标图标和标题
- ✅ 每个目标自动显示勾选标记
- 🎨 渐变背景设计，视觉效果佳

- 🎯 Automatically adds target icon and title
- ✅ Each objective shows checkmark bullets
- 🎨 Gradient background design with great visual appeal

---

## 📝 笔记 | Notes

### 组件名称 | Component Name: `<Note>`

**用途 | Purpose**: 添加重要提示或说明  
**Usage**: Add important tips or explanations

**可用类型 | Available Types**: `tip`, `warning`, `important`

**中文示例 | Chinese Examples**:
```vue
<Note type="tip">

这是一个有用的提示，帮助理解概念。

</Note>

<Note type="warning">

注意：使用链式法则时要小心复合函数的处理。

</Note>

<Note type="important">

重要：导数存在的充要条件是左导数等于右导数。

</Note>
```

**English Examples**:
```vue
<Note type="tip">

This is a helpful tip to understand the concept better.

</Note>

<Note type="warning">

Warning: Be careful with composite functions when using the chain rule.

</Note>

<Note type="important">

Important: A derivative exists if and only if left and right derivatives are equal.

</Note>
```

**特点 | Features**:
- 💡 自动图标：tip (💡), warning (⚠️), important (❗)
- 🎨 类型对应颜色：蓝色、橙色、红色
- 📱 响应式设计，移动端友好

- 💡 Auto icons: tip (💡), warning (⚠️), important (❗)
- 🎨 Type-specific colors: blue, orange, red
- 📱 Responsive design, mobile-friendly

---

## ✏️ 例题 | Examples

### 组件名称 | Component Name: `<Example>`

**用途 | Purpose**: 展示数学例题  
**Usage**: Display mathematical examples

**属性 | Props**: `index`, `topic`, `difficulty`

**中文示例 | Chinese Example**:
```vue
<Example index="1" topic="导数" difficulty="Medium">

求函数 $f(x) = 3x^2 + 2x - 1$ 的导数。

**解：**
使用基本导数公式：
$f'(x) = 6x + 2$

</Example>
```

**English Example**:
```vue
<Example index="1" topic="Derivatives" difficulty="Medium">

Find the derivative of $f(x) = 3x^2 + 2x - 1$.

**Solution:**
Using basic derivative formulas:
$f'(x) = 6x + 2$

</Example>
```

**难度等级 | Difficulty Levels**: `Easy` (绿色), `Medium` (橙色), `Hard` (红色)

---

## 💡 答案 | Answers

### 组件名称 | Component Name: `<Answer>`

**用途 | Purpose**: 提供题目解答  
**Usage**: Provide problem solutions

**属性 | Props**: `title` (可选 | optional)

**中文示例 | Chinese Example**:
```vue
<Answer title="详细解答">

1. 应用求导法则：$(x^n)' = nx^{n-1}$

2. 分别求导：
   - $(3x^2)' = 6x$
   - $(2x)' = 2$
   - $(1)' = 0$

3. 因此：$f'(x) = 6x + 2$

</Answer>
```

**English Example**:
```vue
<Answer title="Detailed Solution">

1. Apply differentiation rules: $(x^n)' = nx^{n-1}$

2. Differentiate each term:
   - $(3x^2)' = 6x$
   - $(2x)' = 2$
   - $(1)' = 0$

3. Therefore: $f'(x) = 6x + 2$

</Answer>
```

**特点 | Features**:
- 🧡 橙色主题，突出解答内容
- 📝 支持步骤化展示
- 🔢 数学公式完美渲染

- 🧡 Orange theme highlighting solution content
- 📝 Supports step-by-step presentation
- 🔢 Perfect mathematical formula rendering

---

## 📖 定义 | Definitions

### 组件名称 | Component Name: `<Definition>`

**用途 | Purpose**: 展示数学定义  
**Usage**: Display mathematical definitions

**属性 | Props**: `title`, `subject`, `topic`

**中文示例 | Chinese Example**:
```vue
<Definition title="导数" subject="微积分" topic="基础概念">

函数 $f(x)$ 在点 $x_0$ 处的导数定义为：

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

前提是此极限存在。

</Definition>
```

**English Example**:
```vue
<Definition title="Derivative" subject="Calculus" topic="Basic Concepts">

The derivative of function $f(x)$ at point $x_0$ is defined as:

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

provided this limit exists.

</Definition>
```

---

## 🎓 定理 | Theorems

### 组件名称 | Component Name: `<Theorem>`

**用途 | Purpose**: 展示数学定理  
**Usage**: Display mathematical theorems

**属性 | Props**: `title`, `author`, `year`

**中文示例 | Chinese Example**:
```vue
<Theorem title="中值定理" author="拉格朗日" year="1797">

设函数 $f(x)$ 在闭区间 $[a,b]$ 上连续，在开区间 $(a,b)$ 内可导，则存在 $\xi \in (a,b)$，使得：

$$f'(\xi) = \frac{f(b) - f(a)}{b - a}$$

</Theorem>
```

**English Example**:
```vue
<Theorem title="Mean Value Theorem" author="Lagrange" year="1797">

If function $f(x)$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $\xi \in (a,b)$ such that:

$$f'(\xi) = \frac{f(b) - f(a)}{b - a}$$

</Theorem>
```

---

## 🤔 课堂问题 | Class Questions

### 组件名称 | Component Name: `<ClassQuestion>`

**用途 | Purpose**: 互动课堂提问  
**Usage**: Interactive classroom questioning

**属性 | Props**: `title`, `time`, `difficulty`, `showTimer`, `showPause`

**中文示例 | Chinese Example**:
```vue
<ClassQuestion title="快速检测" time="2分钟" difficulty="Medium" :showTimer="true" :showPause="true">

函数 $f(x) = \sin(x^2)$ 的导数是什么？

*请考虑使用**链式法则**...*

</ClassQuestion>
```

**English Example**:
```vue
<ClassQuestion title="Quick Check" time="2 min" difficulty="Medium" :showTimer="true" :showPause="true">

What is the derivative of $f(x) = \sin(x^2)$?

*Think about using the **chain rule**...*

</ClassQuestion>
```

**特点 | Features**:
- 🎨 紫色主题，吸引注意力
- ⏱️ 显示思考时间提示
- 🎯 动画边框效果
- 🤔 图标有轻微弹跳动画

- 🎨 Purple theme to grab attention  
- ⏱️ Shows thinking time reminder
- 🎯 Animated border effect
- 🤔 Icon has subtle bounce animation

---

## 💬 备注 | Remarks

### 组件名称 | Component Name: `<Remark>`

**用途 | Purpose**: 添加教学备注和观察  
**Usage**: Add teaching remarks and observations

**可用类型 | Available Types**: `observation`, `insight`, `caution`, `remember`

**中文示例 | Chinese Examples**:
```vue
<Remark type="observation">

注意导数表示**瞬时变化率** - 这与区间上的平均变化率根本不同。

</Remark>

<Remark type="insight">

微积分的美妙之处在于从离散到连续的转换 - 我们实际上是在寻找曲线上单点的斜率！

</Remark>

<Remark type="caution">

应用洛必达法则时要小心 - 它只适用于 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 等未定式。

</Remark>

<Remark type="remember">

处理函数时要检查定义域 - 除零和负数开方会造成问题！

</Remark>
```

**English Examples**:
```vue
<Remark type="observation">

Notice how the derivative represents the **instantaneous rate of change** - this is fundamentally different from average rate of change over an interval.

</Remark>

<Remark type="insight">

The beauty of calculus lies in this transition from discrete to continuous - we're essentially finding the slope of a curve at a single point!

</Remark>

<Remark type="caution">

Be careful when applying L'Hôpital's rule - it only works for indeterminate forms like $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

</Remark>

<Remark type="remember">

Always check your domain when working with functions - division by zero and negative square roots can cause issues!

</Remark>
```

**图标对应 | Icon Mapping**:
- `observation` 👁️ (观察)
- `insight` 💭 (洞察) 
- `caution` ⚡ (注意)
- `remember` 🧠 (记住)

---

## 🎨 使用技巧 | Usage Tips

### 格式规范 | Formatting Guidelines

**重要 | Important**: 为确保数学公式正确渲染，请遵循以下规则：
*To ensure proper mathematical formula rendering, follow these rules:*

1. **组件内容格式 | Component Content Format**:
   ```vue
   <Component>

   内容在这里 | Content goes here

   </Component>
   ```

2. **数学公式 | Mathematical Formulas**:
   - 行内公式 | Inline: `$E = mc^2$`
   - 块级公式 | Block: `$$\frac{d}{dx}(x^n) = nx^{n-1}$$`

3. **布局标记 | Layout Markers**:
   ```markdown
   ---
   layout: center
   class: text-center
   ---
   ```

### 最佳实践 | Best Practices

1. **内容长度 | Content Length**: 
   - 每个组件内容不宜过长，避免超出页面边界
   - Keep component content moderate to avoid page overflow

2. **组件组合 | Component Combination**:
   - 一个幻灯片建议使用1-3个组件
   - Recommend 1-3 components per slide

3. **颜色搭配 | Color Coordination**:
   - 避免在同一页面使用过多颜色主题
   - Avoid too many color themes on the same page

### 常见问题 | Common Issues

**Q**: 数学公式不显示？  
**A**: 确保公式前后有空行，使用正确的 LaTeX 语法。

**Q**: Mathematical formulas not displaying?  
**A**: Ensure there are blank lines before and after formulas, use correct LaTeX syntax.

**Q**: 组件内容溢出页面？  
**A**: 减少内容长度或分割到多个幻灯片。

**Q**: Component content overflows the page?  
**A**: Reduce content length or split across multiple slides.

---

## 📞 支持 | Support

如有问题或建议，请联系拓课堂技术团队。  
*For questions or suggestions, please contact the TuoEdu technical team.*

© 2024 拓课堂 (TuoEdu). 保留所有权利 (All rights reserved).