<template>
  <div ref="container" class="vh-100 d-flex flex-column" :class="{ 'dark-mode': isDarkMode }">
    <!-- 顶部导航栏 -->
    <header class="top-bar py-3 text-center fw-bold fs-4">
      Projects
    </header>

    <!-- 主要内容 -->
    <div class="container flex-grow-1 d-flex mt-4 gap-4 align-items-start">
      <!-- 左侧 - 证书与项目展示 -->
      <div class="col-md-7 p-4 text-content">

        <section>
          <h2 class="h4 section-title">2025 Summer Research</h2>

          <!-- 每个项目一行：左图右文 -->
          <div
              class="project-item row g-3 align-items-start mb-4"
              v-for="(project, index) in projects"
              :key="index"
          >
            <div class="col-md-7 col-lg-6">
              <img :src="project.image" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image1" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image2" :alt="project.title" class="img-fluid rounded shadow-sm" />
            </div>

            <div class="col-md">
              <h3 class="h5 mb-2">{{ project.title }}</h3>
              <p class="text-muted mb-0">{{ project.description }}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="h4 section-title">Practicum Project</h2>

          <div
              class="project-item row g-3 align-items-start mb-4"
              v-for="(project, index) in projects2"
              :key="index"
          >
            <div class="col-md-7 col-lg-6">
              <img :src="project.image" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image1" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image2" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image3" :alt="project.title" class="img-fluid rounded shadow-sm" />
            </div>

            <div class="col-md">
              <h3 class="h5 mb-2">{{ project.title }}</h3>
              <p class="text-muted mb-0">{{ project.description }}</p>
              <p class="text-muted mb-0">Github code: https://github.com/QwQ1231043/Music-Website-Practicum-Project.git</p>
            </div>
          </div>
        </section>
        <section>
          <h2 class="h4 section-title">2025 Summer Research</h2>
          <div
              class="project-item row g-3 align-items-start mb-4"
              v-for="(project, index) in projects3"
              :key="index"
          >
            <div class="col-md-7 col-lg-6">
              <img :src="project.image"  :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image1" :alt="project.title" class="img-fluid rounded shadow-sm" />
              <img :src="project.image2" :alt="project.title" class="img-fluid rounded shadow-sm" />
            </div>

            <div class="col-md">
              <h3 class="h5 mb-2">{{ project.title }}</h3>
              <p class="text-muted mb-0" v-html="project.description"></p>
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
import img5 from '@/assets/5.jpg';
import img6 from "@/assets/6.png";
import img7 from '@/assets/7.png';
import img11 from '@/assets/11.png';
import img12 from "@/assets/12.png";
import img13 from '@/assets/13.png';
import img14 from '@/assets/14.png';
import img22 from '@/assets/22.png';
import img23 from "@/assets/23.png";
import img24 from '@/assets/24.png';

const isDarkMode = ref(usePreferredDark().value);
const container = ref(null);
const photo = ref(null);

const projects = ref([
  { title: "Wind Tunnel Building", description: "During the 2025 Summer Research Experience at Greenville University, " +
        "I worked under the supervision of Dr. Daniel Raja on the design and construction of a closed-circuit wind tunnel. " +
        "My contributions included 3D CAD modeling in SolidWorks, assisting with fluid mechanics analysis, and supporting the " +
        "manufacturing process. I also participated in project planning and mid-term evaluations, ensuring that the design met both aerodynamic " +
        "and structural requirements. This experience strengthened my teamwork, " +
        "research, and engineering problem-solving skills, and culminated in presenting our results at the Summer Research Symposium.", image: img5 ,image1:img6,image2:img7},
]);
const projects2 = ref([
  { title: "Music Website", description: "As part of my practicum project in 2025, I developed a full-stack music and video sharing platform using Django. The system allows users to create accounts, " +
        "upload and organize videos into folders, and manage their personal profiles. It also includes social features such as adding friends and viewing shared content. I was responsible for " +
        "both the backend logic and the frontend integration, implementing secure user authentication, " +
        "database design, and a responsive user interface. This project enhanced my practical skills in web application development, database management, and deployment.", image: img11,image1: img12 ,image2:img13,image3:img14 },
]);
const projects3 = ref([
  { title: "Greenville Resell Website", description: "I developed the Greenville Resell Website, a full-stack application for students to " +
        "trade second-hand merchandise. The site was built with Vue.js for the frontend and Django REST framework for the backend, with SQLite as the database. It " +
        "supports account registration, posting items with images and details, " +
        "and messaging between users. This project gave me experience integrating frontend design with backend logic to create a functional and user-friendly platform. <br> Github code: https://github.com/QwQ1231043/Music-Website-Practicum-Project.git", image: img22,image1: img23 ,image2:img24 },
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
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>
