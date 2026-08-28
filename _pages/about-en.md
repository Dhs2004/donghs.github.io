---
permalink: /
title: ""
excerpt: "Haosen Dong's academic homepage"
author_profile: true
author: haosen_en
lang: en
redirect_from:
  - /en/
  - /about/
  - /about.html
---

<span class="anchor" id="about"></span>

<section class="intro-hero intro-hero--mech">
  <p class="intro-kicker">AGENTIC RL · MULTIMODAL INTELLIGENCE · 3D GENERATION</p>
  <h1>Building agents that can<br /><span>reason, act, and create.</span></h1>
  <p class="intro-lead">I am Haosen Dong, an AI researcher focused on large-model post-training and multimodal agents.</p>
  <div class="intro-actions">
    <a class="intro-button intro-button--primary" href="mailto:haosendong2004@gmail.com">Contact Me</a>
    <a class="intro-button" href="https://github.com/Dhs2004">GitHub</a>
  </div>
  <div class="intro-facts">
    <span><strong>Research</strong> Agentic RL</span>
    <span><strong>WHU</strong> Top 5%</span>
    <span><strong>ByteDance</strong> Research Intern</span>
  </div>
  <model-viewer class="hero-mech-trick" src="{{ site.baseurl }}/models/mech-pilot.glb" alt="Interactive 3D mech pilot" camera-controls disable-pan auto-rotate auto-rotate-delay="900" rotation-per-second="10deg" interaction-prompt="none" shadow-intensity="1" shadow-softness=".85" exposure="1.05" tone-mapping="neutral"></model-viewer>
</section>

## About Me

I am **Haosen Dong**, currently a Large Language Model Algorithm Intern with Douyin Live at ByteDance. I received my B.Eng. in Computer Science and Technology from the School of Computer Science at [Wuhan University](https://www.whu.edu.cn/), with a GPA of **3.91/4.00 (Top 5%)**.

My research interests include **Agentic Reinforcement Learning, Multimodal Large Language Models, and 3D Generation**. I am particularly interested in long-horizon credit assignment under sparse rewards, external-skill internalization, consistent multimodal reasoning, and reward signals that better reflect human preferences.

I am open to research and engineering collaborations in post-training, Agent RL, and multimodal intelligence. Feel free to reach out via [Email](mailto:haosendong2004@gmail.com) or visit my [GitHub](https://github.com/Dhs2004).

<span class="anchor" id="news"></span>

## 🔥 News

- **2026.08** — DEPPO was accepted to the EMNLP 2026 Main Conference.
- **2026.06** — Joined Douyin Live at ByteDance to work on multimodal 4D part decomposition and 3D module quality reward models.
- **2025.10** — Placed third in the MARS2 2025 Visual Geo-localization in Real-world Scenarios Challenge.
- **2025.08** — Joined the Visual Understanding R&amp;D Center at TeleAI and contributed to TeleMM-2.0-Thinking training iterations.
- **2025.05** — DED-Net was published in *The Visual Computer*.
- **2024.10** — Received the National Scholarship.

<span class="anchor" id="research"></span>

## 📝 Selected Research

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/ded-net-method.png" alt="DED-Net method overview" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge">The Visual Computer</span><span>First Author · 2025</span></div>
    <h3>DED-Net: Multi-Scale Fusion and Illumination-Guided Enhancement for Low-Light Image Restoration</h3>
    <p><strong>Haosen Dong</strong>, Shihao Cheng, Tianyou Fang, Jin Chen, Zhigang Tu</p>
    <p>DED-Net estimates illumination through multi-scale feature enhancement and models non-local interactions across differently illuminated regions, improving detail restoration while maintaining practical computational cost.</p>
    <p class="paper-links"><a href="https://doi.org/10.1007/s00371-025-03924-7">Paper</a> · <a href="https://github.com/Dhs2004/DED-Net">Code</a></p>
    <div class="metric-row"><span>JCR Q2</span><span>IF 3.0</span><span>SCI Q3</span><span>LOLv1 PSNR 25.87</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/deppo-method.png" alt="DEPPO method overview" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--accepted">EMNLP 2026 Main Conference</span><span>First Author · Accepted</span></div>
    <h3>DEPPO: Dual Experience Pool Policy Optimization for Long-Horizon Agentic RL</h3>
    <p><strong>Haosen Dong</strong> et al.</p>
    <p>DEPPO introduces dual successful and failed experience pools for step-level credit assignment without a critic or process supervision. With Qwen2.5-7B, it reaches <strong>95.7%</strong> average success on ALFWorld and <strong>90.1/84.3</strong> score/success on WebShop.</p>
    <p class="paper-links"><a href="{{ site.baseurl }}/files/DEPPO.pdf">Paper</a></p>
    <div class="metric-row"><span>ALFWorld 95.7</span><span>WebShop +9.1</span><span>OA 3.5 · Meta 3.5</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/skilld-method.png" alt="SkillD method overview" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--submission">AAAI</span><span>First Author · Submitted</span></div>
    <h3>SkillD: Difficulty-Aware Skill-Contrastive Reinforcement Learning for Multi-Step LLM Agents</h3>
    <p><strong>Haosen Dong</strong> et al.</p>
    <p>SkillD dynamically routes tasks into hard, medium, and easy regimes using recent rollout success rates. It combines skill-guided exploration, skill internalization, standard RL, and step-level contrastive advantage weighting.</p>
    <div class="metric-row"><span>ALFWorld 86.7</span><span>Search-QA 45.2</span><span>WebShop 69.9</span><span>3B / 7B</span></div>
  </div>
</div>

<div class="research-card has-figure">
  <div class="research-figure"><img src="{{ site.baseurl }}/images/skillg-method.png" alt="SkillG method overview" loading="lazy" /></div>
  <div class="research-copy">
    <div class="publication-meta"><span class="venue-badge venue-badge--submission">AAAI</span><span>First Author · Submitted</span></div>
    <h3>SkillG: Skill-Gap Guided Reinforcement Learning for Skill-Free Long-Horizon Language Agents</h3>
    <p><strong>Haosen Dong</strong> et al.</p>
    <p>SkillG measures step-level dependence using the token-mean log-probability gap between skill-conditioned and skill-free contexts. Positive-gap credit assignment and a warmup–adaptive reduction–cooldown curriculum transfer guided exploration into skill-free execution.</p>
    <div class="metric-row"><span>ALFWorld</span><span>Search-QA</span><span>WebShop</span><span>Skill-Free Evaluation</span></div>
  </div>
</div>

<span class="anchor" id="experience"></span>

## 💻 Experience

<div class="timeline-item">
  <div class="experience-header">
    <div class="company-logo company-logo--bytedance"><img src="{{ site.baseurl }}/images/bytedance-logo.png" alt="ByteDance logo" loading="lazy" /></div>
    <div class="experience-heading"><h3>ByteDance · Douyin Live</h3><p class="role">Large Language Model Algorithm Intern · Beijing</p><p class="mentor">Mentor: Shihong Deng</p></div>
    <div class="timeline-date">Jun 2026 — Present</div>
  </div>
  <ul>
    <li><strong>Multimodal 4D decomposition:</strong> built 170K training samples covering GLB cleaning, multi-view rendering, Tree/Schema generation, 3D bounding boxes, and chain-of-thought data; performed LoRA and full-parameter SFT on SeedLite and Qwen3.6-35B-A3B.</li>
    <li><strong>3D reward modeling:</strong> constructed 5,196 balanced positive/negative samples over 1,299 modules, covering floating disconnections, rendering defects, geometric intersections, and scale/pose issues.</li>
    <li><strong>Quality evaluation:</strong> developed an LLM-as-Judge pipeline combining eight-view renders with Three.js source evidence for RL/DPO rewards and data filtering.</li>
  </ul>
</div>

<div class="timeline-item">
  <div class="experience-header">
    <div class="company-logo company-logo--teleai"><img src="{{ site.baseurl }}/images/teleai-logo.jpg" alt="TeleAI logo" loading="lazy" /></div>
    <div class="experience-heading"><h3>TeleAI · Visual Understanding R&amp;D Center</h3><p class="role">VLM Algorithm Intern · Shanghai</p><p class="mentor">Mentors: Hao Sun and Mengxi Jia</p></div>
    <div class="timeline-date">Aug 2025 — Jun 2026</div>
  </div>
  <ul>
    <li><strong>TeleMM-2.0-Thinking:</strong> contributed to eight RL training iterations, implemented verl/ms-swift support and VLMEvalKit evaluation, and built 100K verifiable RLVR samples.</li>
    <li><strong>Visual grounding:</strong> implemented GRPO-based training and built fine-grained region–text data from DenseFusion-1M and LLaVA91M.</li>
    <li><strong>Agent training:</strong> integrated nine environments, including ALFWorld, WebShop, Sokoban, and AndroidWorld, into slime and proposed DEPPO.</li>
  </ul>
</div>

<span class="anchor" id="education"></span>

## 📖 Education

- **Sep 2022 — Jun 2026**, Wuhan University, School of Computer Science, B.Eng. in Computer Science and Technology, Wuhan.
  - Mentored by Prof. Zhigang Tu.
  - GPA 3.91/4.00, Top 5%.
  - National Scholarship, First-Class Scholarship, Second-Class Scholarship, and Kingsoft Scholarship.

<span class="anchor" id="patents"></span>

## 📜 Patents

1. **Improved phase-smoothed pseudorange positioning method and apparatus based on geometry-free epoch-differenced GNSS dual-frequency carrier observations**, CN118583160A, Sep 2024.
2. **Visual-inertial-odometry-assisted PPP positioning method and system for urban environments**, CN118363050B, Dec 2024.
3. **All-weather GNSS NLOS identification method and apparatus based on a fisheye camera**, CN118938271A, Nov 2024.

## 🏆 Honors & Skills

- National Scholarship, First-Class Scholarship, Second-Class Scholarship, Kingsoft Scholarship, and eight competition awards.
- DED-Net published in *The Visual Computer* (JCR Q2, IF 3.0, SCI Q3).
- Third place in the MARS2 2025 Visual Geo-localization in Real-world Scenarios Challenge.
- **Post-training:** GRPO, DAPO, SPO, DPO, RLVR, SFT, LoRA.
- **Engineering:** PyTorch, verl, slime, ms-swift, VLMEvalKit, Three.js.

<div class="contact-panel">
  <div><strong>Let&apos;s build agents that learn.</strong><br />Open to conversations about post-training, Agent RL, and multimodal research.</div>
  <div><a href="mailto:haosendong2004@gmail.com">Email</a> · <a href="tel:15623287592">Phone</a> · WeChat: 15623287592 · <a href="https://github.com/Dhs2004">GitHub</a></div>
</div>

<span class="anchor" id="support"></span>
<div class="support-row">
  <span class="page-view-counter"><span class="counter-dot" aria-hidden="true"></span> Total views <strong class="unified-page-view-count">—</strong></span>
  <button class="tip-button" type="button" onclick="document.getElementById('tip-dialog-en').showModal()">Support My Work</button>
</div>

<dialog class="tip-dialog" id="tip-dialog-en">
  <button class="tip-close" type="button" aria-label="Close" onclick="document.getElementById('tip-dialog-en').close()">×</button>
  <img src="{{ site.baseurl }}/images/wechat-tip.jpg" alt="WeChat Pay support QR code" />
</dialog>

<script>
  (function () {
    var dialog = document.getElementById('tip-dialog-en');
    if (!dialog) return;
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
  })();
</script>
