import { useState, useCallback, useEffect } from 'react';
import { posts as cannedPosts } from '../data/posts';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load posts from localStorage
  useEffect(() => {
    const storedPosts = localStorage.getItem('blog_posts');
    if (storedPosts && storedPosts.length > 0) {
      setPosts(JSON.parse(storedPosts));
    }
    if (!posts || posts.length === 0) {
      // use canned posts...
      setPosts(cannedPosts);
    }
  }, []);

  // Save posts to localStorage
  useEffect(() => {
    console.log('Save posts to localStorage in usePosts useEffect posts:', posts);
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = useCallback((newPost) => {
    console.log('in usePosts newPost:', newPost);
    setPosts(prevPosts => {
      prevPosts.forEach(post => {
        console.log('in usePosts post:', post);
      });
      return [
        ...prevPosts,
        {
          ...newPost,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          likes: 0,
          comments: []
        },
      ]
    });
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