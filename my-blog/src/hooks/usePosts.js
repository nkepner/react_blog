import { useState, useCallback, useEffect } from 'react';
import { posts as cannedPosts } from '../data/posts';

export function usePosts() {
  console.log('usePosts() is being called somewhere...');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load posts from localStorage
  useEffect(() => {
    console.log('useEffect(<called first time in usePosts>)');
    const storedPosts = localStorage.getItem('blog_posts');
    console.log(`storedPosts: ${storedPosts}`);
    if (storedPosts && storedPosts.length > 0) {
      const parsedPosts = JSON.parse(storedPosts);
      console.log(`parsedPosts: ${parsedPosts}`);
      setPosts(JSON.parse(storedPosts));
    }
    if (!posts || posts.length === 0) {
      // use canned posts...
      console.log('usePosts() - using canned posts');
      setPosts(cannedPosts);
      console.log(`posts: ${posts}`);
    }
    console.log(`posts: ${posts}`);
    console.log('typeof(posts): ' + typeof(posts));
  }, []);

  // Save posts to localStorage
  useEffect(() => {
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = useCallback((newPost) => {
    setPosts(prevPosts => [
      { 
        ...newPost, 
        id: Date.now(),
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: []
      },
      ...prevPosts
    ]);
  }, []);

  const updatePost = useCallback((id, updates) => {
    setPosts(prevPosts => 
      prevPosts.map(post =>
        post.id === id ? { ...post, ...updates } : post
      )
    );
  }, []);

  const deletePost = useCallback((id) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  }, []);

  const likePost = useCallback((id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }, []);

  const addComment = useCallback((postId, comment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), ...comment, createdAt: new Date().toISOString() }
              ]
            }
          : post
      )
    );
  }, []);

  if (!posts) {
    setPosts(cannedPosts);
  }

  return {
    posts,
    isLoading,
    error,
    addPost,
    updatePost,
    deletePost,
    likePost,
    addComment
  };
}