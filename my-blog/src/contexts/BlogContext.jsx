import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { posts as cannedPosts } from '../data/posts'; // Import canned posts

const BlogContext = createContext();

const initialState = {
  posts: [],
  categories: [],
  tags: [],
  isLoading: false,
  error: null
};

function blogReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_POSTS':
      return { ...state, posts: action.payload, isLoading: false };
    case 'ADD_POST':
      return { 
        ...state, 
        posts: [action.payload, ...state.posts] 
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_TAGS':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
}

export function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        let posts = [];
        dispatch({ type: 'SET_LOADING', payload: true });
        
        // Load from localStorage for now
        const savedPosts = localStorage.getItem('blog_posts');
        if (savedPosts) {
          posts = JSON.parse(savedPosts);
          if (Array.isArray(posts) && posts.length > 0) {
            dispatch({ type: 'SET_POSTS', payload: posts });
          } else {
            dispatch({ type: 'SET_POSTS', payload: cannedPosts });
            posts = cannedPosts;
          }
        } else {
          dispatch({ type: 'SET_POSTS', payload: cannedPosts });
          posts = cannedPosts;
        }

        // Extract unique categories and tags
        const categories = [...new Set(posts.map(post => post.category))];
        const tags = [...new Set(posts.flatMap(post => post.tags))];

        dispatch({ type: 'SET_CATEGORIES', payload: categories });
        dispatch({ type: 'SET_TAGS', payload: tags });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    loadData();
  }, []);

  // Save posts to localStorage when they change
  useEffect(() => {
    localStorage.setItem('blog_posts', JSON.stringify(state.posts));
    console.log('Posts saved to localStorage');
  }, [state.posts]);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};