import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import BlogList from '../pages/BlogList';
import PostDetail from '../pages/PostDetail';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login';
import Settings from '../components/Settings/Settings';
// import { posts } from '../data/posts';
import PostCategory from '../pages/PostCategory';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <BlogList />
          },
          {
            path: ':id/detail',
            element: <PostDetail />
          },
          {
            path: 'new',
            element: <NewPost />
          },
          {
            path: ':category/category',
            element: <PostCategory />
          },
        ]
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'login',
        element: <Login />
      },{
        path: 'settings',
        element: <Settings />
      },
    ]
  }
]);