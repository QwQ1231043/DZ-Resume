import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import CertificatesProjects from '@/components/certificatesProjects.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/certificates', component: CertificatesProjects },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
