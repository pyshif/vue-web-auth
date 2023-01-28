import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
const HomeView = () => import('@/views/Home/index.vue')
const UserView = () => import('@/views/User/index.vue')
const AuthView = () => import('@/views/Auth/index.vue')
const SignInView = () => import('@/views/Auth/SignIn/index.vue')
const SignUpView = () => import('@/views/Auth/SignUp/index.vue')
const ForgotView = () => import('@/views/Auth/Forgot/index.vue')
const ResetView = () => import('@/views/Auth/Reset/index.vue')
const ErrorView = () => import('@/views/Error/index.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView,
            children: [
                {
                    path: 'signin',
                    name: 'signin',
                    component: SignInView,
                },
                {
                    path: 'signup',
                    name: 'signup',
                    component: SignUpView,
                },
                {
                    path: 'forgot',
                    name: 'forgot',
                    component: ForgotView,
                },
                {
                    path: 'reset/:id?',
                    name: 'reset',
                    component: ResetView,
                },
                {
                    path: 'user',
                    name: 'user',
                    component: UserView,
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: ErrorView,
        },
    ]
})

export default router
