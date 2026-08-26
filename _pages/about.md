---
permalink: /
title: ""
excerpt: "董浩森的学术主页"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about"></span>

## About Me

你好，我是 **董浩森（Haosen Dong）**，目前在字节跳动抖音直播部门担任大模型算法实习生，即将进入[中国科学技术大学](https://www.ustc.edu.cn/)计算机学院攻读电子信息专业。此前，我在[武汉大学](https://www.whu.edu.cn/)计算机学院获得计算机科学与技术学士学位，GPA **3.91/4.00（Top 3%）**。

我的研究兴趣集中在 **Agentic Reinforcement Learning、Multimodal Large Language Models 和 3D Generation**。我尤其关注稀疏奖励下的长程信用分配、外部技能内化、多模态推理一致性，以及如何构造真正符合人类偏好的奖励信号。

我正在寻找大模型后训练、Agent RL 与多模态方向的研究和工程机会。欢迎通过 [Email](mailto:haosendong2004@gmail.com) 与我交流，也可以查看我的 [GitHub](https://github.com/Dhs2004) 或[下载完整简历]({{ site.baseurl }}/files/Dong-Haosen-CV.pdf)。

<span class="anchor" id="news"></span>

## 🔥 News

- **2026.06** — 加入字节跳动抖音直播部门，开展多模态 4D 拆件模型与 3D 模组质量奖励模型训练。
- **2026.06** — 完成 TeleAI 视觉理解研发中心实习，参与 TeleMM-2.0-Thinking 的八个版本训练迭代。
- **2025.10** — 获得 MARS2 2025 现实场景视觉定位（VG-RS）挑战赛第三名。
- **2024.10** — 获得国家奖学金。

<span class="anchor" id="research"></span>

## 📝 Selected Research

<div class="research-card">
  <div class="research-mark">DEPPO</div>
  <div class="research-copy">
    <span class="research-status">First Author · EMNLP 2026 Submission</span>
    <h3>DEPPO: Dual Experience Pool Policy Optimization for Long-Horizon Agentic RL</h3>
    <p><strong>董浩森</strong> 等</p>
    <p>提出成功/失败双经验池，在无需 Critic 或过程监督的情况下进行 step-level 信用分配。在 Qwen2.5-7B 上，ALFWorld 平均成功率达到 <strong>95.7%</strong>，WebShop Score/Success 达到 <strong>90.1/84.3</strong>。</p>
    <div class="metric-row"><span>ALFWorld 95.7</span><span>WebShop +9.1</span><span>OA 3.5 · Meta 3.5</span></div>
  </div>
</div>

<div class="research-card">
  <div class="research-mark">SVO</div>
  <div class="research-copy">
    <span class="research-status">First Author · EMNLP 2026 Submission</span>
    <h3>SVO: Consistency-aware RLVR for Multimodal Reasoning</h3>
    <p><strong>董浩森</strong> 等</p>
    <p>针对传统 RLVR 只奖励最终答案、推理过程可能与答案不一致的问题，引入推理—答案一致性约束，缓解 shortcut reasoning。</p>
    <div class="metric-row"><span>一致性 +20%</span><span>约束准确率 +8%</span><span>OA 3.33 · Meta 3</span></div>
  </div>
</div>

<div class="research-card">
  <div class="research-mark">SkillD</div>
  <div class="research-copy">
    <span class="research-status">First Author · AAAI 2027 Submission</span>
    <h3>Difficulty-aware Skill-contrastive Reinforcement Learning for Multi-step Agents</h3>
    <p><strong>董浩森</strong> 等</p>
    <p>按任务成功率划分难度，自适应使用外部 Skill 引导探索，并通过技能条件与无技能策略的对比优势定位关键步骤，提升训练稳定性、样本效率与泛化能力。</p>
  </div>
</div>

<div class="research-card">
  <div class="research-mark">SkillG</div>
  <div class="research-copy">
    <span class="research-status">First Author · AAAI 2027 Pre-submission</span>
    <h3>Skill Internalization under Sparse Rewards</h3>
    <p><strong>董浩森</strong> 等</p>
    <p>通过技能预热、依赖感知课程学习与无技能冷却，将外部技能提示逐步内化为 Agent 的独立执行能力。</p>
  </div>
</div>

<span class="anchor" id="experience"></span>

## 💻 Experience

<div class="timeline-item">
  <div class="timeline-date">2026.06 — 至今</div>
  <div><h3>字节跳动 · 抖音直播部门</h3><p class="role">大模型算法实习生 · 北京</p>
  <ul>
    <li><strong>多模态 4D 拆件：</strong>完成 GLB 清洗、多视图渲染、Tree/Schema、3D BBox 与 CoT 生成，构建 17 万条训练数据；在 SeedLite 与 Qwen3.6-35B-A3B 上完成 LoRA / 全量 SFT。</li>
    <li><strong>3D 奖励模型：</strong>构建 1,299 个模组、5,196 条正负均衡数据，覆盖悬浮断连、几何渲染、穿插嵌入及比例姿态四类问题。</li>
    <li><strong>质量评测：</strong>搭建融合八视图渲染和 Three.js 源码证据的 LLM-as-Judge 管线，支持 RL/DPO 奖励信号与数据过滤。</li>
  </ul></div>
</div>

<div class="timeline-item">
  <div class="timeline-date">2025.08 — 2026.06</div>
  <div><h3>中国电信人工智能研究院（TeleAI）</h3><p class="role">VLM 算法实习生 · 视觉理解研发中心 · 上海</p>
  <ul>
    <li><strong>TeleMM-2.0-Thinking：</strong>参与八个版本的 RL 训练迭代，实现 verl / ms-swift 训练支持和 VLMEvalKit 测评，构建 10 万条 RLVR 可验证数据。</li>
    <li><strong>视觉 Grounding：</strong>负责基于 GRPO 的训练实现，并为 DenseFusion-1M、LLaVA91M 构建细粒度区域—文本数据。</li>
    <li><strong>Agent 训练：</strong>将 ALFWorld、WebShop、Sokoban、AndroidWorld 等九类环境接入 slime，并提出 DEPPO。</li>
  </ul></div>
</div>

<span class="anchor" id="education"></span>

## 📖 Education

- **2026.09 — 预计入学**，中国科学技术大学，计算机学院，电子信息，合肥。
- **2022.09 — 2026.06**，武汉大学，计算机学院，计算机科学与技术，武汉。
  - GPA 3.91/4.00，专业 Top 3%。
  - 国家奖学金、甲等奖学金、乙等奖学金、金山助学金。

## 🏆 Honors & Skills

- 三项国家发明专利，八项竞赛获奖，一篇计算机视觉方向 SCI 论文。
- MARS2 2025 现实场景视觉定位（VG-RS）挑战赛第三名。
- **Post-training:** GRPO, DAPO, SPO, DPO, RLVR, SFT, LoRA.
- **Engineering:** PyTorch, verl, slime, ms-swift, VLMEvalKit, Three.js.

<div class="contact-panel">
  <div><strong>Let&apos;s build agents that learn.</strong><br />欢迎交流大模型后训练、Agent RL 与多模态研究。</div>
  <div><a href="mailto:haosendong2004@gmail.com">Email</a> · <a href="https://github.com/Dhs2004">GitHub</a> · <a href="{{ site.baseurl }}/files/Dong-Haosen-CV.pdf">CV</a></div>
</div>
