---
permalink: /zh/
title: ""
excerpt: "董浩森的学术主页"
author_profile: true
---

<span class="anchor" id="about"></span>

<section class="intro-hero intro-hero--mech">
  <p class="intro-kicker">AGENTIC RL · MULTIMODAL INTELLIGENCE · 3D GENERATION</p>
  <h1>让智能体在真实世界中<br /><span>学会推理、行动与创造。</span></h1>
  <p class="intro-lead">我是董浩森，一名专注于大模型后训练与多模态智能体的算法研究者。</p>
  <div class="intro-actions">
    <a class="intro-button intro-button--primary" href="mailto:haosendong2004@gmail.com">与我联系</a>
    <a class="intro-button" href="https://github.com/Dhs2004">GitHub</a>
  </div>
  <div class="intro-facts">
    <span><strong>USTC</strong> 2026 直博</span>
    <span><strong>WHU</strong> Top 3%</span>
    <span><strong>ByteDance</strong> 算法实习</span>
  </div>
  <model-viewer class="hero-mech-trick" src="{{ site.baseurl }}/models/mech-pilot.glb" alt="可交互的机甲驾驶员三维模型" camera-controls disable-pan auto-rotate auto-rotate-delay="900" rotation-per-second="10deg" interaction-prompt="none" shadow-intensity="1" shadow-softness=".85" exposure="1.05" tone-mapping="neutral"></model-viewer>
</section>

## About Me

你好，我是 **董浩森（Haosen Dong）**，目前在字节跳动抖音直播部门担任大模型算法实习生，即将进入[中国科学技术大学](https://www.ustc.edu.cn/)计算机学院攻读电子信息专业博士学位（直博）。此前，我在[武汉大学](https://www.whu.edu.cn/)计算机学院获得计算机科学与技术学士学位，GPA **3.91/4.00（Top 3%）**。

我的研究兴趣集中在 **Agentic Reinforcement Learning、Multimodal Large Language Models 和 3D Generation**。我尤其关注稀疏奖励下的长程信用分配、外部技能内化、多模态推理一致性，以及如何构造真正符合人类偏好的奖励信号。

我正在寻找大模型后训练、Agent RL 与多模态方向的研究和工程机会。欢迎通过 [Email](mailto:haosendong2004@gmail.com) 与我交流，也可以查看我的 [GitHub](https://github.com/Dhs2004)。

<span class="anchor" id="news"></span>

## 🔥 News

- **2026.08** — DEPPO 被 EMNLP 2026 Main Conference 接收
- **2026.06** — 加入字节跳动抖音直播部门，开展多模态 4D 拆件模型与 3D 模组质量奖励模型训练。
- **2025.10** — 获得 MARS2 2025 现实场景视觉定位（VG-RS）挑战赛第三名。
- **2025.08** — 加入 TeleAI 视觉理解研发中心实习，参与 TeleMM-2.0-Thinking 的训练迭代。
- **2025.05** — 低光图像恢复论文 DED-Net 发表于 *The Visual Computer*。
- **2024.10** — 获得国家奖学金。

<span class="anchor" id="research"></span>

## 📝 Selected Research

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/ded-net-method.png" alt="DED-Net 方法流程图" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge">The Visual Computer</span><span>First Author · 2025</span></div>
    <h3>DED-Net: Multi-Scale Fusion and Illumination-Guided Enhancement for Low-Light Image Restoration</h3>
    <p><strong>Haosen Dong</strong>, Shihao Cheng, Tianyou Fang, Jin Chen, Zhigang Tu</p>
    <p>以多尺度图像特征增强模块估计光照信息，并通过照明引导恢复模块建模不同照明区域间的非局部交互，在控制计算成本的同时提升低光图像的细节恢复质量。</p>
    <p class="paper-links"><a href="https://doi.org/10.1007/s00371-025-03924-7">Paper</a> · <a href="https://github.com/Dhs2004/DED-Net">Code</a></p>
    <div class="metric-row"><span>JCR Q2</span><span>IF 3.0</span><span>SCI 3区</span><span>LOLv1 PSNR 25.87</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/deppo-method.png" alt="DEPPO 双经验池策略优化方法总览图" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--accepted">EMNLP 2026 Main Conference</span><span>First Author · Accepted</span></div>
    <h3>DEPPO: Dual Experience Pool Policy Optimization for Long-Horizon Agentic RL</h3>
    <p><strong>董浩森</strong> 等</p>
    <p>提出成功/失败双经验池，在无需 Critic 或过程监督的情况下进行 step-level 信用分配。在 Qwen2.5-7B 上，ALFWorld 平均成功率达到 <strong>95.7%</strong>，WebShop Score/Success 达到 <strong>90.1/84.3</strong>。</p>
    <p class="paper-links"><a href="{{ site.baseurl }}/files/DEPPO.pdf">Paper</a></p>
    <div class="metric-row"><span>ALFWorld 95.7</span><span>WebShop +9.1</span><span>OA 3.5 · Meta 3.5</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/skilld-method.png" alt="SkillD 难度感知技能对比强化学习方法图" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--submission">AAAI</span><span>First Author · Submitted</span></div>
    <h3>SkillD: Difficulty-Aware Skill-Contrastive Reinforcement Learning for Multi-Step LLM Agents</h3>
    <p><strong>Haosen Dong</strong> et al.</p>
    <p>根据近期 rollout 成功率将任务动态路由为困难、中等与简单三类：困难任务强化 Skill 引导探索，中等任务促进技能内化，简单任务使用标准强化学习；同时以 step-level skill influence gap 对关键动作进行对比式优势加权。</p>
    <div class="metric-row"><span>ALFWorld 86.7</span><span>Search-QA 45.2</span><span>WebShop 69.9</span><span>3B / 7B</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/skillg-method.png" alt="SkillG Skill-Gap 引导强化学习方法图" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--submission">AAAI</span><span>First Author · Submitted</span></div>
    <h3>SkillG: Skill-Gap Guided Reinforcement Learning for Skill-Free Long-Horizon Language Agents</h3>
    <p><strong>Haosen Dong</strong> et al.</p>
    <p>通过同一动作在有 Skill 与无 Skill 上下文中的 token-mean log-probability 差异度量 step-level 依赖，并结合正向 gap 信用分配与“预热—自适应削减—无技能冷却”课程学习，将技能引导探索迁移为无技能执行能力。</p>
    <div class="metric-row"><span>ALFWorld</span><span>Search-QA</span><span>WebShop</span><span>Skill-Free Evaluation</span></div>
  </div>
</div>

<span class="anchor" id="experience"></span>

## 💻 Experience

<div class="timeline-item">
  <div class="experience-header">
    <div class="company-logo company-logo--bytedance"><img src="{{ site.baseurl }}/images/bytedance-logo.png" alt="字节跳动 ByteDance Logo" loading="lazy" /></div>
    <div class="experience-heading"><h3>字节跳动 · 抖音直播部门</h3><p class="role">大模型算法实习生 · 北京</p><p class="mentor">指导老师：邓诗弘老师</p></div>
    <div class="timeline-date">2026.06 — 至今</div>
  </div>
  <ul>
    <li><strong>多模态 4D 拆件：</strong>完成 GLB 清洗、多视图渲染、Tree/Schema、3D BBox 与 CoT 生成，构建 17 万条训练数据；在 SeedLite 与 Qwen3.6-35B-A3B 上完成 LoRA / 全量 SFT。</li>
    <li><strong>3D 奖励模型：</strong>构建 1,299 个模组、5,196 条正负均衡数据，覆盖悬浮断连、几何渲染、穿插嵌入及比例姿态四类问题。</li>
    <li><strong>质量评测：</strong>搭建融合八视图渲染和 Three.js 源码证据的 LLM-as-Judge 管线，支持 RL/DPO 奖励信号与数据过滤。</li>
  </ul>
</div>

<div class="timeline-item">
  <div class="experience-header">
    <div class="company-logo company-logo--teleai"><img src="{{ site.baseurl }}/images/teleai-logo.jpg" alt="中国电信人工智能研究院 TeleAI Logo" loading="lazy" /></div>
    <div class="experience-heading"><h3>中国电信人工智能研究院（TeleAI）</h3><p class="role">VLM 算法实习生 · 视觉理解研发中心 · 上海</p><p class="mentor">指导老师：孙皓老师、贾梦溪老师</p></div>
    <div class="timeline-date">2025.08 — 2026.06</div>
  </div>
  <ul>
    <li><strong>TeleMM-2.0-Thinking：</strong>参与八个版本的 RL 训练迭代，实现 verl / ms-swift 训练支持和 VLMEvalKit 测评，构建 10 万条 RLVR 可验证数据。</li>
    <li><strong>视觉 Grounding：</strong>负责基于 GRPO 的训练实现，并为 DenseFusion-1M、LLaVA91M 构建细粒度区域—文本数据。</li>
    <li><strong>Agent 训练：</strong>将 ALFWorld、WebShop、Sokoban、AndroidWorld 等九类环境接入 slime，并提出 DEPPO。</li>
  </ul>
</div>

<span class="anchor" id="education"></span>

## 📖 Education

- **2026.09 — 预计入学**，中国科学技术大学，计算机学院，电子信息直博，合肥。
- **2022.09 — 2026.06**，武汉大学，计算机学院，计算机科学与技术，武汉。
  - GPA 3.91/4.00，专业 Top 3%。
  - 国家奖学金、甲等奖学金、乙等奖学金、金山助学金。

<span class="anchor" id="patents"></span>

## 📜 Patents

1. **基于 GNSS 双频载波历元差无几何组合观测的改进相位平滑伪定位方法及装置**，CN118583160A，2024.09。
2. **在城市环境下的视觉惯性里程计辅助 PPP 定位方法及系统**，CN118363050B，2024.12。
3. **基于鱼眼相机的全天时 GNSS NLOS 识别方法及装置**，CN118938271A，2024.11。

## 🏆 Honors & Skills

- 国家奖学金、甲等奖学金、乙等奖学金、金山助学金，八项竞赛获奖。
- DED-Net 发表于 *The Visual Computer*（JCR 2 区，IF 3.0，SCI 3 区）。
- MARS2 2025 现实场景视觉定位（VG-RS）挑战赛第三名。
- **Post-training:** GRPO, DAPO, SPO, DPO, RLVR, SFT, LoRA.
- **Engineering:** PyTorch, verl, slime, ms-swift, VLMEvalKit, Three.js.

<div class="contact-panel">
  <div><strong>Let&apos;s build agents that learn.</strong><br />欢迎交流大模型后训练、Agent RL 与多模态研究。</div>
  <div><a href="mailto:haosendong2004@gmail.com">Email</a> · <a href="tel:15623287592">电话</a> · 微信同号：15623287592 · <a href="https://github.com/Dhs2004">GitHub</a></div>
</div>

<span class="anchor" id="support"></span>
<div class="support-row">
  <span class="page-view-counter" id="vercount_container_page_pv"><span class="counter-dot" aria-hidden="true"></span> 本页访问 <strong id="vercount_value_page_pv">—</strong> 次</span>
  <button class="tip-button" type="button" onclick="document.getElementById('tip-dialog').showModal()">打赏支持</button>
</div>

<dialog class="tip-dialog" id="tip-dialog">
  <button class="tip-close" type="button" aria-label="关闭" onclick="document.getElementById('tip-dialog').close()">×</button>
  <img src="{{ site.baseurl }}/images/wechat-tip.jpg" alt="微信支付打赏二维码" />
</dialog>

<script>
  (function () {
    var dialog = document.getElementById('tip-dialog');
    if (!dialog) return;
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
  })();
</script>
