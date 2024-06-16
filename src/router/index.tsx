import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const Home = React.lazy(() => import('../views/home'));
const School = React.lazy(() => import('../views/school'));
const Strategy = React.lazy(() => import('../views/strategy'));
const About = React.lazy(() => import('../views/about'));
const Message = React.lazy(() => import('../views/message'));
const SunFlower = React.lazy(() => import('../views/sunflower'));
const Signup = React.lazy(() => import('../views/signup'));
const Detail = React.lazy(() => import('../views/detail'));
const Promote = React.lazy(() => import('../views/promote'));
const Academy = React.lazy(() => import('../views/academy'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'school',
    element: <School />
  },
  {
    path: 'strategy',
    element: <Strategy />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'message',
    element: <Message />
  },
  {
    path: 'promote',
    element: <Promote />
  },
  {
    path: 'sunflower',
    element: <SunFlower />
  },
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path: '/school/:id',
    element: <Detail />
  },
  {
    path: '/academy',
    element: <Academy />
  }
];

export default routes;
