import { createApp } from 'vue';
import{ createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(),//how to manage routing history in this app
    routes:[//here we register all the routes,the different paths,the different URL's //array full of routes
        { path:'/team', component:TeamsList },
        { path:'/users', component:UsersList },
    ],
    linkActiveClass:'active'
});

const app = createApp(App)
app.use(router); //this is a built in method which allow us to connect our vue app to third party packages with some other functionality.
app.mount('#app');
