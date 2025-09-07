<template>
  <div ref="container" class="vh-100 d-flex flex-column" :class="{ 'dark-mode': isDarkMode }">
    <!-- 顶部导航栏 -->
    <header class="top-bar py-3 text-center fw-bold fs-4">
      Certificates
    </header>

    <!-- 主要内容 -->
    <div class="container flex-grow-1 d-flex mt-4 gap-4 align-items-start">
      <!-- 左侧 - 证书与项目展示 -->
      <div class="col-md-7 p-4 text-content">
        <section class="mb-4">
          <h2 class="h4 section-title">Certificates</h2>
          <div class="certificate-item d-flex align-items-center mb-3" v-for="(cert, index) in certificates" :key="index">
            <img :src="cert.image" :alt="cert.title" class="certificate-image me-3" />
            <div>
              <h3 class="h5">{{ cert.title }}</h3>
              <p class="text-muted">{{ cert.issuer }} - {{ cert.date }}</p>
            </div>
          </div>
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
import cert1 from "@/assets/1.png";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { usePreferredDark } from "@vueuse/core";

const isDarkMode = ref(usePreferredDark().value);
const container = ref(null);
const photo = ref(null);

const certificates = ref([
  { title: "Google Data Analytics Online Courses", issuer: "Coursera", date: "2022-10", image: cert1 },
]);

const projects = ref([
  { title: "Wind Tunnel Building", description: "Over 2025 summer, I completed a summer research about building a wind tunnel", image: cert1 },
]);

onMounted(() => {
  gsap.from(container.value, { opacity: 0, y: 50, duration: 1 });
});
</script>

<style scoped>
.certificate-item {
  display: flex;
  align-items: center;
  gap: 15px; /* 增加间距 */
}

.certificate-image {
  width: 420px;  /* 调大图片宽度 */
  height: auto; /* 保持原始比例 */
  border-radius: 8px; /* 让图片有点圆角 */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* 增加一点阴影 */
}

.certificate-item h3 {
  font-size: 18px; /* 增大字体 */
  font-weight: bold; /* 加粗 */
  color: #343a40; /* 文字颜色 */
}

.certificate-item p {
  font-size: 14px;
  color: #6c757d;
}
.project-item {
  display: flex;
  align-items: center; /* 让图片和文字垂直居中对齐 */
  gap: 20px; /* 控制图片和文字的间距 */
}

.project-image {
  width: 300px;  /* 适当调整图片大小 */
  height: auto; /* 保持原始比例 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.project-text {
  flex: 1; /* 让文本部分占据剩余空间 */
  display: flex;
  flex-direction: column;
}

.project-item h3 {
  font-size: 20px; /* 增大字体 */
  font-weight: bold; /* 加粗 */
  color: #343a40; /* 文字颜色 */
  margin-bottom: 5px;
}

.project-item p {
  font-size: 16px;
  color: #6c757d;
  line-height: 1.5;
}

</style>
