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
          <p>I am an undergraduate student in the engineering department with a strong passion for data science, programming, and software development.
            My academic and research interests are centered around artificial intelligence, web development, and software engineering. Currently,
            I am pursuing my studies at Greenville University and am enrolled in a 3+2/3+3 program in collaboration with St. Washington University. I plan to transition into
            a computer science major in the upcoming fall semester.
            My technical foundation lies in Java and Python, and I am particularly interested in AI development. Additionally,
            I strive to gain a comprehensive understanding of software architecture and backend systems, as I find these areas intellectually stimulating.
            To complement my skill set, I have independently studied frontend technologies, including JavaScript, CSS, and HTML, to enhance my ability to design and develop web applications.
            Besides, I study the Django and Springboot as the backend development, so I am able to complete a website by myself
            Originally from China, I completed my high school education at Maple Leaf International School. I was deeply engaged in engineering-related projects,
            fostering my curiosity in physics, chemistry, and, most significantly, programming and artificial intelligence.
            I strongly believe in the values of humility, passion, and optimism. I am committed to continuous learning, never shy away from challenges,
            and approach my academic journey and future career with unwavering determination and resilience. My dream career is to be a full-stack developer.</p>
        </section>

        <section class="mb-4">
          <h2 class="h4 section-title">Contact Information</h2>
          <p>Email: <strong>dongyao.zheng8133@panthers.greenville.edu</strong></p>
          <p>Location: Greenville, Illinois, 62246</p>
        </section>

        <section class="mb-4">
          <h2 class="h4 section-title">Education</h2>
          <p><strong>Greenville University</strong></p>
          <p class="text-muted">Bachelor Degree (2023 - 2027)</p>
        </section>

        <section>
          <h2 class="h4 section-title">Skills</h2>
          <ul class="list-unstyled">
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Frontend: HTML, CSS, JS, Vue, Bootstrap</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Backend: Django, Spring Boot</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Deployment: AWS, Cloudflare, Linux</li>
            <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Machine Learning: Scikit-learn</li>
          </ul>
        </section>
      </div>

      <!-- 右侧 - 头像 + 导航按钮 -->
      <div class="photo-section d-flex flex-column align-items-start">
        <div ref="photo" class="photo-container p-3">
          <img src="@/assets/photo.png" alt="Profile Photo" class="profile-photo">
        </div>
        <div class="nav-links mt-4">
          <router-link class="custom-btn" to="/">Home</router-link>
          <router-link class="custom-btn" to="/certificates">Certificates & Projects</router-link>
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
