import HomePage from '@/components/login/HomePage.vue'
import RegisterPage from '@/components/register/RegisterPage.vue'
import AdminHome from '@/components/admin/AdminHome.vue'
import UserDetail from '@/components/admin/components/UserDetail.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/register', name: 'Register', component: RegisterPage },
    {
        path: '/admin', name: 'Admin', component: AdminHome,
        meta: {
            isAuthenticate: true
        }
    },
    {
        path: '/admin/detail/:id', name: 'Detail', component: UserDetail, props: true,
        meta: {
            isAuthenticate: true
        }
    },
]


