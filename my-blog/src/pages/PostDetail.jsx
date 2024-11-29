import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import BlogPost from '../components/BlogPost/BlogPost';


const PostDetail =() => {
    const { id } = useParams();

    const post = posts.find(post => post.id === parseInt(id));

    return (
        <BlogPost key={post.id} {...post} />
    )
}

export default PostDetail