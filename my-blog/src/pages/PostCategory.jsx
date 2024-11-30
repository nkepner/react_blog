import { useParams } from 'react-router-dom';
// import { posts } from '../data/posts';
import BlogPost from '../components/BlogPost/BlogPost';
import { usePosts } from '../hooks/usePosts';


const PostCategory =() => {
    const params = useParams();

    const { category } = params;

    const currentPosts = usePosts().posts.filter(post => post.category == category);

    return (
        <div className="blog-list-container">
    
        {currentPosts.length > 0 ? (
          <>
            <div className="blog-posts">
              {currentPosts.map(post => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    )
}

export default PostCategory