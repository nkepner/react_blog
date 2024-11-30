import { useParams } from 'react-router-dom';
// import { posts } from '../data/posts';
import BlogPost from '../components/BlogPost/BlogPost';
// import { usePosts } from '../hooks/usePosts';
import { useBlog } from '../contexts/BlogContext';


const PostDetail =() => {
    const { id } = useParams();
    const { state: { posts } } = useBlog();
    console.log(`PostDetail posts: ${posts}`);

    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
        return <h2>Post not found</h2>
    }
    return (
        <BlogPost key={post.id} {...post} />
    )
}

export default PostDetail