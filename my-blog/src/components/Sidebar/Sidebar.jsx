import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
// import { posts } from '../../data/posts';
import { usePosts } from '../../hooks/usePosts';

function Sidebar() {
  const navigate = useNavigate();
  
  const categories = [
    'Technology',
    'Lifestyle',
    'Travel',
    'General',
  ];

  const recentPosts = usePosts().posts.slice().reverse();
  console.log(`recentPosts: ${recentPosts}`);
  recentPosts.forEach(post => console.log(post));
  recentPosts.forEach(post => console.log(post.title));

  return (
    <aside className="sidebar">
      <section className="sidebar__section">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {categories.map(category => (
            <li key={category} className="sidebar__item">
              <button 
                onClick={() => navigate(`/posts/${category}/category`)}
                className="sidebar__link"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__title">Recent Posts</h3>
        <ul className="sidebar__list">
          {recentPosts.map(post => (
            <li key={post.id} className="sidebar__item">
              <button
                onClick={() => navigate(`/posts/${post.id}/detail`)}
                className="sidebar__link"
              >
                {post.title}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;