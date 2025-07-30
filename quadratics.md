---
theme: default
addons: 
 - tldraw
title: AS & A Level Mathematics 9709 Lesson 1
titleTemplate: '%s - 拓课堂'
author: 拓课堂
date: 2025
logo: ./logo/company-logo.png
info: |
  AS & A Level Mathematics 9709 Lesson 1: Algebra
favicon: ./logo/favicon.png
colorSchema: light
watermarkEnabled: true
---

# 拓课堂 AS & A Level Mathematics 9709 课程

## Lesson 1: Algebra

---
layout: center
class: text-center
section: 'Quadratics'
---

# Quadratics

---

# Completing the Square

<LearningObjective>

- Carry out the process of <span v-mark.underline.red="1">completing the square</span> for a quadratic polynomial $ax^2 + bx + c$ and express it in completed square form.  
- Use the completed square form to locate the vertex or sketch the graph of $ax^2 + bx + c$.  

</LearningObjective>

<div v-click="2">

<Note type="tip">

配方法是将二次多项式 $ax^2 + bx + c$ 转化为 $a(x + p)^2 + q$ 的形式，其中 $p = \dfrac{b}{2a}$，$q = c - \dfrac{b^2}{4a}$，这样可以更直观地看出顶点等性质。

</Note>
</div>

---

# Completing the Square

<Example>

Complete the square for $y = 2x^2 - 4x + 1$ and locate its vertex.

<div v-click>

<span style="color: red; text-decoration: underline;">Solution：</span>

- <span style="color: #2563eb; font-weight: bold;">从 $x^2$ 和 $x$ 项中提取因子 $2$</span>  
  $$y = 2(x^2 - 2x) + 1$$

- <span style="color: #16a34a; font-weight: bold;">在括号内配方</span>  
  $$y = 2\big[(x - 1)^2 - 1\big] + 1$$

- <span style="color: #f59e0b; font-weight: bold;">展开并化简</span>  
  $$y = 2(x - 1)^2 - 2 + 1 = 2(x - 1)^2 - 1$$

- <span style="color: #e11d48; font-weight: bold;">Hence, the vertex is $\boxed{(1, -1)}$</span>

</div>

</Example>

---

# Graphing Quadratic Functions

<Question title="Can you graph it">

How can we graph $y = 2x^2 - 4x + 1$?（我们如何画出 $y = 2x^2 - 4x + 1$ 的图像？）

</Question>

<div v-click>

<iframe 
  src="https://www.desmos.com/calculator/wgijqnrfif?embed&xaxis_min=-2&xaxis_max=1" 
  style="width: 60%; max-width: 400px; height: 250px; border: 1px solid #ccc; display: block; margin: 0 auto;" 
  frameborder="0"
></iframe>

</div>

---

# Graphing Quadratic Functions

<Note>

**画二次函数图像的步骤**

<div v-click="1">

<span style="color: #2563eb; font-weight: bold;">1. 判断开口方向（趋势）</span>  
   - 如果 $a > 0$，抛物线开口向上；如果 $a < 0$，抛物线开口向下。

</div>

<div v-click="2">

<span style="color: #16a34a; font-weight: bold;">2. 确定顶点</span>  
   - 通过配方法或用 $\displaystyle x = -\frac{b}{2a}$ 求顶点。

</div>

<div v-click="3">

<span style="color: #f59e0b; font-weight: bold;">3. 求 $y$ 轴截距</span>  
   - 令 $x = 0$，计算 $y$ 的值。

</div>

<div v-click="4">

<span style="color: #e11d48; font-weight: bold;">4. 求 $x$ 轴截距</span>  
   - 令 $y = 0$，解二次方程求 $x$。

</div>

</Note>

---

# Graphing Quadratic Functions

<Example title="Graphing $y = 2x^2 - 4x + 1$">

How can we graph $y = 2x^2 - 4x + 1$?

<div v-click>

<span style="color: red; text-decoration: underline;">Solution: </span>

- <span style="color: #2563eb; font-weight: bold;">Vertex (顶点):</span>  
  先用顶点公式 $\displaystyle x = -\frac{b}{2a}$ 计算顶点的横坐标：
  $\displaystyle x = -\frac{-4}{2 \times 2} = 1$，
  再将 $x=1$ 代入原式求纵坐标：
  $y = 2(1)^2 - 4(1) + 1 = 2 - 4 + 1 = -1$。

  **所以顶点坐标为 $(1,\,-1)$。**

- <span style="color: #16a34a; font-weight: bold;">$y$-intercept ($y$轴截距):</span>  
  令 $x = 0$，得到 $y = 2(0)^2 - 4(0) + 1 = 1$，
  
  **所以 $y$ 轴截距为 $(0,\,1)$。**

- <span style="color: #f59e0b; font-weight: bold;">$x$-intercepts ($x$轴截距):</span>  
  令 $y = 0$，解方程 $2x^2 - 4x + 1 = 0$，得到 $\displaystyle x = \frac{4 \pm \sqrt{(-4)^2 - 4 \times 2 \times 1}}{2 \times 2} = \frac{4 \pm \sqrt{8}}{4} = 1 \pm \frac{\sqrt{2}}{2}$，
  
  **所以 $x$ 轴截距为 $\displaystyle \left(1 \pm \frac{\sqrt{2}}{2},\, 0\right)$。**

</div>

</Example>

---

# The Discriminant

<LearningObjective>

- Find and use the <span v-mark.underline.red="1">discriminant</span> of a quadratic polynomial $ax^2 + bx + c$.

- Use the <span v-mark.underline.red="1">discriminant</span> to determine the number of real roots (including the case of a repeated root) of the equation $ax^2 + bx + c = 0$.

</LearningObjective>

<div v-click="2">

<Definition title="Discriminant">

For $ax^2 + bx + c = 0$, the discriminant is:
$$\Delta = b^2 - 4ac$$
</Definition>

</div>

---

# The Discriminant

<Remark type="important">

Discriminant helps us determine the number and type of real roots for $ax^2 + bx + c = 0$

（判别式帮助我们判断 $ax^2 + bx + c = 0$ 有多少个实根以及它们的类型）

<div v-click>

  - If $\Delta > 0$: The equation has **two distinct real roots**  
    (当 $\Delta > 0$ 时，有两个不相等的实根)
  - If $\Delta = 0$: The equation has **one repeated real root**  
    (当 $\Delta = 0$ 时，有一个重根/两个相等的实根)
  - If $\Delta < 0$: The equation has **no real roots**  
    (当 $\Delta < 0$ 时，没有实根)

</div>
</Remark>

---

# The Discriminant

<Example>

Determine the number of real roots for the quadratic equation $2x^2 - 5x + 3 = 0$.

<div v-click>

<span style="color: red; text-decoration: underline;">Solution: </span>

- <span style="color: #2563eb;">**步骤 1：确定系数**</span>  
  $a = 2, b = -5, c = 3$

- <span style="color: #16a34a;">**步骤 2：计算判别式**</span>  
  $\Delta = (-5)^2 - 4 \times 2 \times 3 = 25 - 24 = 1$

- <span style="color: #f59e0b;">**步骤 3：判断根的个数**</span>  
  因为 $\Delta > 0$，所以方程有两个不相等的实根。

</div>
</Example>

---

# Solving Quadratic Equations

<LearningObjective>

- Solve quadratic equations in one variable using appropriate methods.
- Methods include: factorization, completing the square, and the quadratic formula.
</LearningObjective>

<div v-click>

<Question title="How to solve it?">

How can we solve $x^2 - 5x + 6 = 0$ using factorization, completing the square, and the quadratic formula?
</Question>

</div>

---

# Solving Quadratic Equations

<Example>

Use factorisation to solve $x^2 - 5x + 6 = 0$.

<div v-click>

<span style="color: red; text-decoration: underline;">Solution：</span>

- <span style="color: #2563eb;">**步骤 1：写出标准形式**</span>  
  将方程写成 $x^2 - 5x + 6 = 0$。

- <span style="color: #16a34a;">**步骤 2：因式分解**</span>  
  分解为 $(x-2)(x-3)=0$。

- <span style="color: #f59e0b;">**步骤 3：分别令每个因式为零**</span>  
  $x-2=0$ 或 $x-3=0$。

- <span style="color: #e11d48;">**步骤 4：解得根**</span>  
  $\boxed{x_1 = 2,\ x_2 = 3}$

</div>

</Example>

---

# Solving Quadratic Equations

<Example>

Use completing the square to solve $x^2 - 5x + 6 = 0$.

<div v-click>

<span style="color: red; text-decoration: underline;">Solution：</span>

- <span style="color: #2563eb;">**第一步：移项**</span>  
  用配方法，先将 $6$ 移到等式右边，得 $x^2 - 5x = -6$。

- <span style="color: #16a34a;">**第二步：配方**</span>  
  在左边配方，得到 $\displaystyle \left(x - \frac{5}{2}\right)^2 = \frac{1}{4}$。

- <span style="color: #f59e0b;">**第三步：开方**</span>  
  两边同时开方，$\displaystyle x - \frac{5}{2} = \pm \frac{1}{2}$。

- <span style="color: #e11d48;">**第四步：解得根**</span>  
  解得 $\boxed{x_1 = 2,\ x_2 = 3}$

</div>

</Example>

---

# Solving Quadratic Equations

<Theorem title="求根公式">

二次方程 $ax^2 + bx + c = 0$（其中 $a \neq 0$）的解为：
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
其中判别式 $\Delta = b^2 - 4ac$，当 $\Delta \geq 0$ 时有实数解。
</Theorem>

用求根公式解 $x^2 - 5x + 6 = 0$：
  - 识别系数：$a = 1,\ b = -5,\ c = 6$
  - 代入公式：$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
  - 计算判别式：$b^2 - 4ac = 25 - 24 = 1$
  - 得到根：$x = \dfrac{5 \pm 1}{2}$
  - 所以 $\boxed{x_1 = 2,\ x_2 = 3}$

---

# Solving Simultaneous Equations

<LearningObjective>

- Solve a pair of simultaneous equations where one is linear and the other is quadratic, using substitution.
</LearningObjective>

<div v-click>

<Question title="Can you solve the following system?">

(1)
$$\begin{cases}
x + y = 5 \\
x^2 + y^2 = 25
\end{cases}
$$

(2) 
$$\begin{cases}
2x + 3y = 7 \\
3x^2 = 4 + 4xy
\end{cases}
$$

</Question>
</div>

---

# Solving Simultaneous Equations

<Example>

Solve the system:
$$
\begin{cases}
x + y = 5 \\
x^2 + y^2 = 25
\end{cases}
$$

<div v-click>

<span style="color: red; text-decoration: underline;">Solution:</span>

- <span style="color: #2563eb; font-weight: bold;">将 $y$ 用 $x$ 表示：</span>$y = 5 - x$  
- <span style="color: #16a34a; font-weight: bold;">代入二次方程：</span>$x^2 + (5 - x)^2 = 25$  
- <span style="color: #f59e0b; font-weight: bold;">展开并化简：</span>$x^2 + 25 - 10x + x^2 = 25$  
- <span style="color: #a21caf; font-weight: bold;">移项并合并同类项：</span>$2x^2 - 10x + 25 = 25$，即 $2x^2 - 10x = 0$  
- <span style="color: #e11d48; font-weight: bold;">提取公因式：</span>$x(x - 5) = 0$  

**最终答案：$\boxed{(x, y) = (0, 5)\ \text{或}\ (5, 0)}$**

</div>
</Example>

---

# Solving Simultaneous Equations

<Example>
Solve the system:
$$
\begin{cases}
2x + 3y = 7 \\
3x^2 = 4 + 4xy
\end{cases}
$$

<div v-click>

<span style="color: red; text-decoration: underline;">Solution:</span>

- <span style="color: #2563eb; font-weight: bold;">将 $y$ 用 $x$ 表示：</span> $y = \dfrac{7 - 2x}{3}$
- <span style="color: #16a34a; font-weight: bold;">将 $y$ 代入第二个方程：</span> $3x^2 = 4 + 4x \cdot \dfrac{7 - 2x}{3}$
- <span style="color: #f59e0b; font-weight: bold;">化简并整理：</span> $17x^2 - 28x - 12 = 0$, 解得$x = 2$ 或 $x = -\dfrac{6}{17}$
- <span style="color: #e11d48; font-weight: bold;">代入：</span> 当 $x = 2$ 时，$y = 1$； 当 $x = -\dfrac{6}{17}$ 时，$y = \dfrac{119}{51}$。

**最终答案：**$\boxed{(x, y) = (2,\,1)\ \text{或}\ \left(-\dfrac{6}{17},\,\dfrac{119}{51}\right)}$

</div>
</Example>

---

# Recognising Quadratic Equations

<LearningObjective>

- Recognize and solve equations in $x$ that are quadratic in some function of $x$ (e.g., $x^2$, $\sqrt{x}$, $\sin x$).

</LearningObjective>

<div v-click>

<Question title="Can you recognise the following quadratics">

Can you recognise that equations like 
  - $x^4 - 5x^2 + 4 = 0$
  - $6x + \sqrt{x} - 1 = 0$
  - $\tan^2 x = 1 + \tan x$ 

can be transformed into quadratic equations in some function of $x$?

</Question>

</div>

---

# Recognising Quadratic Equations

<Example>

Solve $x^4 - 5x^2 + 4 = 0$ by transforming it into a quadratic equation.

<div v-click>
<span style="color: red; text-decoration: underline;">Solution:</span>

- <span style="color: #2563eb; font-weight: bold;">令$y = x^2$</span>，则原方程变为 $y^2 - 5y + 4 = 0$。
- <span style="color: #16a34a; font-weight: bold;">因式分解：</span> $(y - 4)(y - 1) = 0$，所以 $y = 4$ 或 $y = 1$。
- <span style="color: #f59e0b; font-weight: bold;">由于$y = x^2$</span> $x^2 = 4$ 或 $x^2 = 1$。
- <span style="color: #a21caf; font-weight: bold;">因此，</span> $x = \pm2$ 或 $x = \pm1$。
- <span style="color: #e11d48; font-weight: bold;">最终答案：</span> $\boxed{x_1 = 2,\, x_2 = -2,\, x_3 = 1,\, x_4 = -1}$
</div>

</Example>

---

# Recognising Quadratic Equations

<Example>

Solve $6x + \sqrt{x} - 1 = 0$ by transforming it into a quadratic equation.

<div v-click>
<span style="color: red; text-decoration: underline;">Solution:</span>

- <span style="color: #2563eb; font-weight: bold;">令</span> $y = \sqrt{x}$，则 $x = y^2$。
- <span style="color: #16a34a; font-weight: bold;">代入原方程，得到</span> $6y^2 + y - 1 = 0$。
- <span style="color: #f59e0b; font-weight: bold;">因式分解：</span> $(3y - 1)(2y + 1) = 0$，所以 $\displaystyle y = \frac{1}{3}$ 或 $\displaystyle y = -\frac{1}{2}$。
- <span style="color: #a21caf; font-weight: bold;">由于 $y = \sqrt{x} \geq 0$，所以只有$\displaystyle y = \frac{1}{3}$ 合理。</span> 
- <span style="color: #e11d48; font-weight: bold;">代回：</span> $\displaystyle \sqrt{x} = \frac{1}{3}, x = \left(\frac{1}{3}\right)^2 = \frac{1}{9}$。

**最终答案： $\boxed{x = \frac{1}{9}}$**
</div>

</Example>