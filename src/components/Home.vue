<template>
  <div ref="container" class="vh-100 d-flex flex-column">
    <!-- 顶部导航栏 -->
    <header class="top-bar py-3 text-center fw-bold fs-4">
      Dongyao Zheng
    </header>

    <!-- 主要内容 -->
    <div class="container flex-grow-1 d-flex mt-4 gap-4 align-items-start">
      <!-- 左侧 - 文字介绍 -->
      <div class="col-md-7 p-4 text-content">
        <section class="mb-4">
          <h2 class="h4 section-title">About Me</h2>
          <p>I am a Computer Science student at Washington University in St. Louis, currently enrolled in the 3+3 dual-degree program that leads to both a bachelor’s and master’s degree. My academic and career interests focus on software engineering, full-stack web development, and artificial intelligence.

            I have hands-on experience building web applications, including projects developed with Django, Spring Boot, and Vue.js, complemented by frontend technologies such as HTML, CSS, and JavaScript. My technical foundation also includes Java and Python, with additional exposure to machine learning (Scikit-learn, NumPy, Pandas) and deployment using AWS, Cloudflare, and Linux.

            Beyond coursework, I participated in a funded summer research project on wind tunnel design, where I contributed to CAD modeling, software-based analysis, and collaborative planning. This experience strengthened my ability to work in interdisciplinary teams and tackle engineering challenges.

            My long-term goal is to become a full-stack developer specializing in AI-driven applications, combining technical expertise with creativity to build impactful software solutions.</p>
        </section>

        <section class="mb-4">
          <h2 class="h4 section-title">Contact Information</h2>
          <p>Email: <strong>dongyao@wustl.edu</strong></p>
          <p>Location: Missouri Saint Louis Valley Park 63088-1631</p>
        </section>
        <section>
          <h2 class="h4 section-title">Skills</h2>
          <ul class="list-unstyled">
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Frontend: HTML, CSS, JavaScript (ES6+), Vue.js, Bootstrap</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Backend: Django, Spring Boot, REST API design</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Deployment & Tools: AWS, Cloudflare, Linux, Git/GitHub</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Data & Machine Learning: Scikit-learn, SQL</li>
          </ul>
        </section>
        <section class="mb-4">
          <h2 class="h4 section-title">Education & Experience</h2>
          <p><strong>Greenville University</strong></p>
          <p class="text-muted">Bachelor Degree (2023 - 2027)</p>
          <p><strong>Washington University in St.Louis</strong></p>
          <p class="text-muted">Master Degree (2025 - 2028)</p>
          <p><strong>Math Grader</strong></p>
          <p class="text-muted">Help assisting mathematics professor and grading assignments</p>
        </section>


      </div>

      <!-- 右侧 - 头像 + 导航按钮 -->
      <div class="photo-section d-flex flex-column align-items-start">
        <div ref="photo" class="photo-container p-3">
          <img src="@/assets/photo.png" alt="Profile Photo" class="profile-photo">
        </div>
        <div class="nav-links mt-4">
          <router-link class="custom-btn" to="/">Home</router-link>
          <router-link class="custom-btn" to="/certificates">Certificates</router-link>
          <router-link class="custom-btn" to="/project">Projects</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const container = ref(null);
const photo = ref(null);

onMounted(() => {
  // 进入页面时的动画
  gsap.from(container.value, { opacity: 0, y: 50, duration: 1 });

  // 头像浮动动画
  gsap.to(photo.value, {});
});
</script>

<style>
/* 🌟 让按钮更有质感 */
/* 🌟 通用 */
:root {
  --light-bg: #F5F7FA;
  --text-light: #1D1D1D;
  --primary-color: #0A58CA;
}

/* 📌 主要布局 */
body {
  background: var(--light-bg);
  color: var(--text-light);
  font-family: "Inter", sans-serif;
  transition: all 0.3s ease-in-out;
}

/* 🎨 头部导航 */
.top-bar {
  background: var(--primary-color);
  color: white;
  font-weight: bold;
}

/* 📝 主要内容卡片 */
.text-content {
  background: white;
  border: 1px solid #DEE2E6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

/* 🖼️ 头像 */
.photo-container {
  text-align: center;
}

.profile-photo {
  max-width: 100%;
  border-radius: 10px;
}

/* 📎 文字小标题 */
.section-title {
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 5px;
  margin-bottom: 15px;
}

/* 🚀 导航按钮 */
.custom-btn {
  display: block;
  width: 300px;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: white;
  background: var(--primary-color);
  transition: all 0.3s ease-in-out;
  margin-top: 8px;
  margin-left: 25px;
}

.custom-btn:hover {
  background: #0056B3;
}
</style>
