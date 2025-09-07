
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CertificatesProjects from '@/components/certificatesProjects.vue'
import Projects from '@/components/Projects.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/certificates', component: CertificatesProjects },
    { path: '/project', component: Projects },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
