import { useParams } from 'react-router-dom';
// import { posts } from '../data/posts';
import BlogPost from '../components/BlogPost/BlogPost';
import { usePosts } from '../hooks/usePosts';


const PostDetail =() => {
    const { id } = useParams();

    const post = usePosts().posts.find(post => post.id === parseInt(id));

    return (
        <BlogPost key={post.id} {...post} />
    )
}

export default PostDetail