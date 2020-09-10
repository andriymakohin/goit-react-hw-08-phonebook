import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/Home/HomeView')),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/Register/RegisterView')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/Login/LoginView')),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./views/Contacts/ContactsView')),
    private: true,
    restricted: false,
  }
]