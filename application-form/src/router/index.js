import HomePage from '@/components/login/HomePage.vue'
import RegisterPage from '@/components/register/RegisterPage.vue'
import AdminHome from '@/components/admin/AdminHome.vue'
import UserItem from '@/components/admin/components/UserItem.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/register', name: 'register', component: RegisterPage },
    {
        path: '/admin', name: 'admin', component: AdminHome,
        meta: {
            isAuthenticate: true
        }
    },
    {
        path: '/admin/detail/:id', name: '/admin/detail', component: UserItem, props: true,
        meta: {
            isAuthenticate: true
        }
    },
]


