import VueRouter from 'vue-router'
import Home from './pages/Home'
import Users from './pages/Users'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/users',
            component: Users
        }
    ],
    mode: 'history'     // необходимо для удаления "#" в адресе
});