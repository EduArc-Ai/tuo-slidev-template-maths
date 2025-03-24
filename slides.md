---
theme: default
addons: 
 - tldraw
title: STEP Lesson 1
titleTemplate: '%s - 拓课堂'
author: 拓课堂
date: 2025
logo: ./logo/company-logo.png
info: |
  STEP Lesson 1: Calculus: Differentiation
favicon: ./logo/favicon.png
colorSchema: light
watermarkEnabled: true
---

# 拓课堂 STEP 课程

## Lesson 1: Differentiation


---
layout: center
class: text-center
section: 'STEP 介绍'
---

# STEP 介绍
## 考试详解

---


# STEP 1/2/3 分别是什么

<div v-click>

- <span v-mark.red="1">**STEP（第六学期考试）**</span> 是一种数学资格考试，旨在测试数学知识和技能，通常用于大学入学。

</div>

<div v-click>

- <span v-mark.underline.gray="2">**STEP 数学 1** 自 2021 年 6 月起不再提供。</span>
- **STEP 数学 2 和 3** 仍然可用，其性质和风格在 2025 年保持不变。

</div>

<div v-click>

- 规范假定考生具备先前的知识：
  <div v-click>
  
  - <span class="text-blue-500">STEP 2 假定考生已掌握数学 1 的内容。</span>
  - <span class="text-blue-500">STEP 3 假定考生已掌握数学 1 和 STEP 2 的内容。</span>
  
  </div>
</div>

---

# 考试规范

<div v-click>

- <span class="text-orange-500 font-bold">**基于 A Level 数学**</span>：遵循教育部 A Level 数学以及 AS 和 A Level 进阶数学规范的纯数学内容，但删除了一些主题并添加了一些主题。

</div>

<div v-click>

- **附加主题**：在规范中以粗体斜体标示，包括 STEP 2 和 3 中力学和概率/统计的所有附加主题。

</div>

<div v-click>

- **考试形式**：
  - **STEP 2 和 3**：<span class="text-purple-500 font-bold">3 小时的试卷</span>，分为三个部分：
    <div v-click>
    
    - <span class="text-blue-600">A 部分：纯数学（8 道题）</span>
    - <span class="text-green-600">B 部分：力学（2 道题）</span>
    - <span class="text-red-600">C 部分：概率/统计（2 道题）</span>
    
    </div>
</div>

---

# 评估与准备

<div v-click>

- <span class="text-purple-500 font-bold">**评估**</span>：基于得分最高的<span class="text-red-500 font-bold">六道题</span>进行评估，对于从任何部分尝试的题目数量没有限制。每道题的最高分均为<span class="text-green-500 font-bold">20 分</span>。

</div>

<div v-click>

- <span class="text-blue-500 font-bold">**重要提醒**</span>：
  - <span class="text-red-500">不提供公式</span>
  - <span class="text-red-500">不允许使用计算器和双语词典</span>

</div>

<div v-click>

- **知识测试**：题目可能会以不熟悉的方式测试考生应用数学知识的能力，需要洞察力、创造力和毅力。题目还可能涉及高年级 GCSE 数学的主题。

</div>

<div v-click>

- **规范包括符号部分，和卷面书写**。

</div>


---
layout: center
class: text-center
section: 'Limits'
---

# Limits
## Fundamental Theorems and Properties

---


# Understanding Limits

<Definition title="Limit" subject="Calculus" topic="Limits">

The limit of a function $f(x)$ as $x$ approaches $c$ is the value that $f(x)$ gets <span v-mark.red="2">arbitrarily close</span> to as $x$ gets arbitrarily close to $c$.

</Definition>


让我们通过一个简单的例子来理解：

想象你在计算 $\frac{1}{x}$，其中 $x$ 不断变小：
- 当 $x = 1$ 时，结果是 $1$
- 当 $x = 0.1$ 时，结果是 $10$
- 当 $x = 0.01$ 时，结果是 $100$

这说明当 $x$ 越来越接近 $0$ 时，$\frac{1}{x}$ 会变得越来越大！




---

# Understanding Limits 

### 更有趣的是：

<div class="mt-4">

- 如果从正数接近：$0.001 \to 1000$
- 如果从负数接近：$-0.001 \to -1000$

</div>

<div class="mt-4 mb-4">


这说明 $\displaystyle\lim_{x \to 0}\frac{1}{x}$ 不存在，因为从不同方向接近会得到不同的结果。



这就是极限的魅力：它帮助我们理解函数在某个点"附近"的行为，即使这个点上函数没有定义！


</div>


---

# Rules

<Theorem title="Basic Limit Rules">

For functions $f(x)$ and $g(x)$ where their limits exist as $x \to c$:

1. Sum/Difference Rule:
   $$\lim_{x \to c}[f(x) \pm g(x)] = \lim_{x \to c}f(x) \pm \lim_{x \to c}g(x)$$

2. Product Rule:
   $$\lim_{x \to c}[f(x)g(x)] = \lim_{x \to c}f(x) \cdot \lim_{x \to c}g(x)$$

3. Quotient Rule:
   $$\lim_{x \to c}\frac{f(x)}{g(x)} = \frac{\lim_{x \to c}f(x)}{\lim_{x \to c}g(x)}$$
   (when denominator limit ≠ 0)

</Theorem>

---

# Applying Limit Rules

<Note>

Key points to remember:

1. These rules only work when the individual limits exist
2. For quotients, always check if denominator limit is zero
3. Sometimes you need to combine multiple rules
4. Look for opportunities to factor or simplify first

</Note>
---

# Question

<Question title="Combining Limit Rules">

Find $\lim_{x \to 2}\frac{x^2 + x - 6}{x - 2}$

</Question>

---

# Answer
<Answer>

Let's solve step by step:

1. First, try direct substitution:
   - Numerator: $2^2 + 2 - 6 = 0$
   - Denominator: $2 - 2 = 0$
   - We get $\frac{0}{0}$ (indeterminate form)

2. Factor the numerator:
   $$\frac{x^2 + x - 6}{x - 2} = \frac{(x-2)(x+3)}{x-2}$$

3. Cancel common factor:
   $$\lim_{x \to 2}\frac{(x-2)(x+3)}{x-2} = \lim_{x \to 2}(x+3) = 5$$

</Answer>

---

# Composition Rule

<Theorem title="Composition Rule (Theorem 2)">

If:
1. $$\lim_{x \rightarrow c} f(x) = A$$
2. $$\lim_{y \rightarrow A} g(y) = B$$
3. $$\text{Range of } f \subseteq \text{domain of } g$$

Then:
$$\lim_{x \rightarrow c} g(f(x)) = B$$

</Theorem>

<Example title="Application">

$\lim_{x \rightarrow 0} \sin(\sin x)$
= $\sin(\lim_{x \rightarrow 0} \sin x)$
= $\sin(0) = 0$

</Example>



---

# Squeeze Theorem

<Theorem title="Squeeze Theorem (Theorem 3)">

If on interval (a,b):
1. $$f(x) \leq h(x) \leq g(x)$$
2. $\lim_{x \rightarrow c} f(x) = A$ and  $\lim_{x \rightarrow c} g(x) = A$

Then:
$$\lim_{x \rightarrow c} h(x) = A$$

</Theorem>

---

# Example of Squeeze Theorem

<TwoColumn>
<template #left>
<Example>

Proving $\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$:

1. Geometric argument:
   - Area comparisons of triangle, sector, and inscribed angle
   - $\cos x \leq \frac{\sin x}{x} \leq 1$ for x → 0

2. Since $\lim_{x \rightarrow 0} \cos x = 1$:
   $$\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$$

</Example>
</template>

<template #right>
<Note>

### Applications:
- Proving limits of trigonometric functions
- Establishing bounds for complex functions
- Foundation for many calculus proofs

</Note>
</template>
</TwoColumn>

---

# Important Limits & Applications

<TwoColumn>
<template #left>
<Definition title="Fundamental Limits">

1. $\lim_{n \rightarrow \infty}\left(1+\frac{1}{n}\right)^n = e$

2. $\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$

</Definition>

<Note>

### Applications:
- Euler's number definition
- Derivative of sin(x)
- Small angle approximations
- Taylor series expansions

</Note>
</template>

<template #right>
<Example title="Proving $\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1$">

1. Use Squeeze Theorem
2. Geometric argument:
   - Area comparisons of:
     - Triangle
     - Sector
     - Inscribed angle

3. Key inequalities:
   $\cos x \leq \frac{\sin x}{x} \leq 1$
   for x → 0

</Example>
</template>
</TwoColumn>

---
section: Differentiation
layout: center
class: text-center
---

# Differentiation
## Deep Dive

---

# Differentiation

## Definition & Concept

<v-clicks>

- Differentiation measures how sensitive a function's output value is to changes in its input value
- It is a fundamental tool of calculus
- Example: The derivative of position with respect to time is velocity, measuring how quickly position changes

</v-clicks>

<div class="mt-8" v-click>

### Key Applications

- Rate of change problems
- Optimization (finding maximum/minimum values)
- Motion problems (velocity, acceleration)
- Tangent line calculations

</div>

---

# First Principle of Differentiation

<Definition title="Mathematical Definition">
<div class="text-center my-4">

$f^{\prime}(x)=\lim _{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}$

</div>

This is the formal definition of the derivative, derived from the concept of instantaneous rate of change.
</Definition>

<Note title="Key Interpretations">

- **Rate of Change**: This limit represents the instantaneous rate of change of the function
- **Geometric Meaning**: The slope of the tangent line at a point
- **Physical Applications**: 
  - Velocity (derivative of position) / Acceleration (derivative of velocity)
  - Rate of growth/decay

</Note>

---

# Existence of Limits

<Definition title="Left and Right Limits">

The limit of a function $f(x)$ at point $c$ exists if and only if the left limit equals the right limit:

$$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$$

</Definition>

<Note>

For a function to be differentiable at point $c$, two conditions must be met:

1. $f(c)$ must be defined
2. $\displaystyle\lim_{h \to 0^-} \frac{f(c+h)-f(c)}{h} = \lim_{h \to 0^+} \frac{f(c+h)-f(c)}{h}$

</Note>

---

# Example of Non-differentiable Case
<TwoColumn>
<template #left>

<Example title="Non-differentiable Case" class="mt-4">

Consider the function $f(x) = |x|$ at $x = 0$:

- Left derivative: $\displaystyle\lim_{h \to 0^-} \frac{|h| - 0}{h} = -1$
- Right derivative: $\displaystyle\lim_{h \to 0^+} \frac{|h| - 0}{h} = 1$

Since the left and right derivatives are not equal, $|x|$ is not differentiable at $x = 0$.

</Example>
</template>

<template #right>
<iframe src="https://www.desmos.com/calculator/c7z2sayxwo?embed" style="width: 100%; height: 100%; border: 1px solid #ccc" frameborder=0></iframe>
</template>
</TwoColumn>



---

# General Power Rule

<Definition title="Power Rule from First Principles">

For any function $f(x) = x^n$ where $n$ is a positive integer, the derivative is:

$$f'(x) = nx^{n-1}$$

This can be proven using the binomial theorem and first principles:

$$\lim_{h \to 0}\frac{(x+h)^n - x^n}{h}$$

</Definition>

---

# Proof of Power Rule

<Answer title="Proof of Power Rule">

For $f(x) = x^n$:

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{(x+h)^n - x^n}{h} \\
&= \lim_{h \to 0}\frac{\sum_{k=0}^n \binom{n}{k}x^{n-k}h^k - x^n}{h} \\
&= \lim_{h \to 0}\left(\binom{n}{1}x^{n-1} + \sum_{k=2}^n \binom{n}{k}x^{n-k}h^{k-1}\right) \\
&= nx^{n-1}
\end{aligned}
$$

</Answer>

---

# Your Turn: Exponential & Natural Log

<TwoColumn>
<template #left>
<Question title="Exponential Function">

Try to find $\frac{d}{dx}(e^x)$ using first principle:

<div class="text-center my-4">
$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{e^{x+h}-e^x}{h} \\[1ex]
&= \lim_{h \to 0}\frac{e^x(e^h-1)}{h} \\[1ex]
&= e^x\lim_{h \to 0}\frac{e^h-1}{h}
\end{aligned}
$$

<div v-click class="mt-2 text-blue-500">
Can you show that:
<div class="text-center my-2">

$\displaystyle\lim_{h \to 0}\frac{e^h-1}{h} = 1$?
</div>
</div>
</div>

</Question>
</template>

<template #right>
<Question title="Natural Logarithm">

Try to find $\frac{d}{dx}(\ln x)$ using first principle:

<div class="text-center my-4">
$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{\ln(x+h)-\ln x}{h} \\[1ex]
&= \lim_{h \to 0}\frac{\ln(1+\frac{h}{x})}{h} \\[1ex]
&= \frac{1}{x}\lim_{h \to 0}\frac{\ln(1+h)}{h}
\end{aligned}
$$

<div v-click class="mt-2 text-blue-500">
Can you show that:
<div class="text-center my-2">

$\displaystyle\lim_{h \to 0}\frac{\ln(1+h)}{h} = 1$?
</div>
</div>
</div>

</Question>
</template>
</TwoColumn>

---

# Exponential Function: Detailed Derivation

<TwoColumn>
<template #left>
<div v-click>
<Answer title="Key Steps">

For $f(x)=e^x$, we showed:

<div class="text-center my-4">

$$
\begin{aligned}
f'(x) &= e^x\lim_{h \to 0}\frac{e^h-1}{h} \\[1ex]
&= e^x \cdot 1 \\[1ex]
&= e^x
\end{aligned}
$$

But why is $\displaystyle\lim_{h \to 0}\frac{e^h-1}{h} = 1$?

</div>
</Answer>
</div>
</template>

<template #right>
<v-clicks>
<Answer title="Proof Using the Definition of e">

Recall that $e$ is defined as:

$$e = \lim_{n \to \infty}(1 + \frac{1}{n})^n$$

Let $h = \frac{1}{n}$. Then as $n \to \infty$, $h \to 0$:

$$
\begin{aligned}
\lim_{h \to 0}\frac{e^h-1}{h} &= \lim_{h \to 0}\frac{(1+h)^{\frac{1}{h}}-1}{h} \\[1ex]
&= 1
\end{aligned}
$$

</Answer>
</v-clicks>
</template>
</TwoColumn>

---

# Natural Log: Detailed Derivation

<TwoColumn>
<template #left>
<div v-click>
<Answer title="Key Steps">

For $f(x)=\ln x$, we showed:

<div class="text-center my-4">

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{\ln(x+h)-\ln x}{h} \\[1ex]
&= \lim_{h \to 0}\frac{\ln(1+\frac{h}{x})}{h} \\[1ex]
&= \frac{1}{x}\lim_{h \to 0}\frac{\ln(1+h)}{h}
\end{aligned}
$$

But why is $\displaystyle\lim_{h \to 0}\frac{\ln(1+h)}{h} = 1$?

</div>
</Answer>
</div>
</template>

<template #right>
<v-clicks>
<Answer title="Proof Using Properties of ln">

Let $y = \lim_{h \to 0}\frac{\ln(1+h)}{h}$

Then $e^y = e^{\lim_{h \to 0}\frac{\ln(1+h)}{h}}$

$$
\begin{aligned}
e^y &= \lim_{h \to 0}(1+h)^{\frac{1}{h}} \\[1ex]
&= e
\end{aligned}
$$

Therefore, $y = 1$

</Answer>
</v-clicks>
</template>
</TwoColumn>


---

# Homework: Trigonometric Derivatives

<TwoColumn>
<template #left>
<Question title="Problem 1: Sine Function">

Prove that $\frac{d}{dx}\sin x = \cos x$ using first principle.

<div class="text-center my-4">

$\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{\sin(x+h)-\sin x}{h}
\end{aligned}$
</div>

<div v-click class="mt-2">

1. Use addition formula: $\sin(A+B) = \sin A\cos B + \cos A\sin B$
2. Group terms with $\sin x$
3. You'll need these limits:
   - $\lim_{h \to 0}\frac{\sin h}{h} = 1$
   - $\lim_{h \to 0}\frac{\cos h-1}{h} = 0$

</div>

</Question>
</template>

<template #right>
<Question title="Problem 2: Cosine Function">

Prove that $\frac{d}{dx}\cos x = -\sin x$ using first principle.

<div class="text-center my-4">

$\begin{aligned}
g'(x) &= \lim_{h \to 0}\frac{\cos(x+h)-\cos x}{h}
\end{aligned}$
</div>

<div v-click class="mt-2">

1. Use addition formula: $\cos(A+B) = \cos A\cos B - \sin A\sin B$
2. Group terms with $\cos x$
3. Use the same limits as Problem 1
4. Watch for the negative sign!

</div>

</Question>
</template>
</TwoColumn>

---

# Real STEP Question

<Question title="Osculating Circle" source="STEP 2010 P2 Q1">

Let $P$ be a given point on a given curve $C$. The osculating circle to $C$ at $P$ is defined to be the circle that satisfies the following two conditions at $P$:

1. It touches $C$
2. The rate of change of its gradient is equal to the rate of change of the gradient of $C$

Find the centre and radius of the osculating circle to the curve:

$y = 1-x+\tan x$

at the point on the curve with $x$-coordinate $\frac{1}{4}\pi$.

</Question>

---

# Solution to Osculating Circle

<Answer title="Solution to Osculating Circle">

To find the center and radius of the osculating circle to the curve $y = 1-x+\tan x$ at $x = \frac{1}{4}\pi$:

1. **Derivatives**: 
   - $y' = -1 + \sec^2 x$, $y'' = 2\sec^2 x \tan x$.
   - At $x = \frac{1}{4}\pi$: $y' = 1$, $y'' = 4$.

2. **Radius of Curvature**:
   - $R = \frac{(1 + (y')^2)^{3/2}}{|y''|} = \frac{\sqrt{2}}{2}$.

3. **Center of Osculating Circle**:
   - $h = \frac{1}{4}(\pi - 1)$, $k = 1.25$.

Thus, the center is $\left(\frac{1}{4}(\pi - 1), 1.25\right)$ and the radius is $\frac{\sqrt{2}}{2}$.

</Answer>

---

# Basics

<Definition title="Common Derivatives">

| Function          | Derivative          |
|-------------------|---------------------|
| $f(x) = x^n$      | $f'(x) = nx^{n-1}$  |
| $f(x) = e^x$      | $f'(x) = e^x$       |
| $f(x) = \ln x$    | $f'(x) = \frac{1}{x}$ |
| $f(x) = \sin x$   | $f'(x) = \cos x$    |
| $f(x) = \cos x$   | $f'(x) = -\sin x$   |
| $f(x) = \tan x$   | $f'(x) = \sec^2 x$  |

</Definition>

---

# Inverse Trig Derivatives

<Definition title="Inverse Trig Derivatives">

| Function          | Derivative          | Domain          |
|-------------------|---------------------|---------------------|
| $f(x) = \arcsin x$   | $f'(x) = \frac{1}{\sqrt{1-x^2}}$   | $-1 \leq x \leq 1$   |
| $f(x) = \arccos x$   | $f'(x) = -\frac{1}{\sqrt{1-x^2}}$   | $-1 \leq x \leq 1$   |
| $f(x) = \arctan x$   | $f'(x) = \frac{1}{1+x^2}$   | $-\infty < x < \infty$   |

</Definition>

---

# Chain Rule

<Definition title="Chain Rule">

If $f(x) = g(h(x))$, then $f'(x) = g'(h(x)) \cdot h'(x)$

</Definition>

Can you prove it?

<Note>

Try to use first principles. It is not too bad.

</Note>

---

# Chain Rule: Proof (only for interest)

<TwoColumn>
<template #left>
<Note title="Proof of Chain Rule">

To prove the Chain Rule for $f(x) = g(h(x))$, we find $f'(x)$:

1. **Derivative Definition**:
   $$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

2. **Substitute**:
   $$f'(x) = \lim_{h \to 0} \frac{g(h(x+h)) - g(h(x))}{h}$$

3. **Intermediate Variable**: Let $u = h(x)$, then $u \to h(x+h) - h(x)$.

4. **Derivative of $g$**:
   $$g'(u) = \lim_{u \to 0} \frac{g(h(x) + u) - g(h(x))}{u}$$


</Note>
</template>

<template #right>
<Note>


5. **Chain the Limits**:
   $$f'(x) = \lim_{h \to 0} \left( \frac{g(h(x+h)) - g(h(x))}{h(x+h) - h(x)} \cdot \frac{h(x+h) - h(x)}{h} \right)$$

6. **Recognize Derivatives**:
   - $g'(h(x))$
   - $h'(x)$

7. **Combine**:
   $$f'(x) = g'(h(x)) \cdot h'(x)$$

Thus, the Chain Rule is proven.

</Note>
</template>
</TwoColumn>


---

# Product Rule

<Definition title="Product Rule">

If $f(x) = g(x)h(x)$, then $f'(x) = g'(x)h(x) + g(x)h'(x)$

</Definition>

Can you prove it?

<Note>

There are many ways to prove it. You can use first principles, or you can use the implicit differentiation and logarithms method.

</Note>

<!--
this is the note we have for this slide. 
-->

---

# Product Rule: Proof Using Implicit Differentiation and Log

<TwoColumn>
<template #left>
<Note title="Proof of Product Rule">

1. **Consider the function**:
   Let $f(x) = g(x)h(x)$.

2. **Take the natural logarithm**:
   $$ \ln f(x) = \ln(g(x)h(x)) = \ln g(x) + \ln h(x)$$

3. **Differentiate both sides with respect to $x$**:
   - Using implicit differentiation, we have:
   $$ \frac{d}{dx}[\ln f(x)] = \frac{d}{dx}[\ln g(x) + \ln h(x)] $$

</Note>
</template>

<template #right>
<Note>

4. **Apply the derivative of the natural logarithm**:
   $$ \frac{f'(x)}{f(x)} = \frac{g'(x)}{g(x)} + \frac{h'(x)}{h(x)} $$

5. **Multiply through by $f(x) = g(x)h(x)$**:
   $$ f'(x) = g(x)h(x) \left( \frac{g'(x)}{g(x)} + \frac{h'(x)}{h(x)} \right) $$

6. **Simplify the expression**:
   $$ f'(x) = h(x)g'(x) + g(x)h'(x) $$



</Note>
</template>
</TwoColumn>

---

# Quotient Rule

<Definition title="Quotient Rule">

If $f(x) = \frac{g(x)}{h(x)}$, then $f'(x) = \frac{g'(x)h(x) - g(x)h'(x)}{h(x)^2}$

</Definition>

<Note>

This is just a matter of applying the product rule and the chain rule.

</Note>

---

# Real STEP Question

<Question title="Function Analysis" source="STEP 2000 P1 Q7">

Let $f(x)$ be defined as:

$$f(x) = ax - \frac{x^3}{1+x^2}$$

where $a$ is a constant.

Show that, if $a \geq \frac{9}{8}$, then $f'(x) \geq 0$ for all $x$.

</Question>




---


# Solution to Function Analysis


<Answer>

**Step 1: Differentiate $f(x)$**  
Using the **Quotient Rule** on $\frac{x^3}{1+x^2}$:

$$
\begin{aligned}
f(x) &= ax - \frac{x^3}{1+x^2}, \\[6pt]
f'(x) &= a - \frac{d}{dx}\!\Bigl(\frac{x^3}{1+x^2}\Bigr).
\end{aligned}
$$

Now,
$$
\begin{align*}
\frac{d}{d x}\left(\frac{x^3}{1+x^2}\right)=\frac{\left(1+x^2\right) \cdot 3 x^2-x^3 \cdot 2 x}{\left(1+x^2\right)^2}=\frac{3 x^2+3 x^4-2 x^4}{\left(1+x^2\right)^2}=\frac{3 x^2+x^4}{\left(1+x^2\right)^2}
\end{align*}
$$

Hence,

$$
f'(x)
= a - \frac{3x^2 + x^4}{(1+x^2)^2}.
$$

</Answer>

---

# Solution to Function Analysis Continued
<Answer>

**Step 2: Multiply Out and Analyze Sign**

To show $f'(x)\geq 0$, multiply both sides by $(1+x^2)^2$:

$$
f'(x)\,(1+x^2)^2
= a(1+x^2)^2 - \bigl(3x^2 + x^4\bigr).
$$

Expand:

$$
f'(x)\,(1+x^2)^2
= a + 2ax^2 + ax^4 - 3x^2 - x^4
= a + (2a - 3)x^2 + (a - 1)x^4.
$$

**Step 3: The Constraint on $a$**  
Define $t = x^2 \ge 0$. Then we want

$$
a + (2a-3)\,t + (a-1)\,t^2 \ \ge\ 0
\quad\text{for all }t \ge 0.
$$



Therefore, if $a \ge \frac{9}{8}$, then the entire expression is non-negative for every $x$, ensuring

$$
f'(x) \ \ge\ 0\ \ \text{for all }x.
$$

</Answer>

---
layout: center
class: text-center
---

# Thank you!



