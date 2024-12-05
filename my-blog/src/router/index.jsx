import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import BlogList from '../pages/BlogList';
import PostDetail from '../pages/PostDetail';
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login';
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
          {
            path: ':id/edit',
            element: <EditPost />
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
      },
    ]
  }
]);