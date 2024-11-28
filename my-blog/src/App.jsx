// import Header from './components/Header';
// import BlogList from './components/BlogList/BlogList';
// import { posts } from './data/posts';
// import PostEditor from './components/PostEditor/PostEditor';
import './App.css';
import { router } from './router/index';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} />
}

export default App;