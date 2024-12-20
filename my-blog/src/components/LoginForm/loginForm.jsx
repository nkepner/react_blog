import { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
      user: '',
      username: '',
      email: [],
    });

    // id: 1,
    // username: credentials.username,
    // email: `${credentials.username}@example.com`,
    // role: 'user'
  
    const [errors, setErrors] = useState({});
    const [isDirty, setIsDirty] = useState({});
  
    const validateField = (name, value) => {
      switch (name) {
        case 'user':
          return value.trim().length < 5 
            ? 'user must be at least 5 characters' 
            : '';
        case 'username':
          return value.trim().length < 10
            ? 'username must be at least 100 characters' 
            : '';
        case 'email':
          return value.trim().length < 10
            ? 'At least one tag is required' 
            : '';
        default:
          return '';
      }
    };
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
  
      setFormData(prev => ({
        ...prev,
        [name]: newValue
      }));
  
      setIsDirty(prev => ({
        ...prev,
        [name]: true
      }));
  
      if (isDirty[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: validateField(name, newValue)
        }));
      }
    };
  
    const handleBlur = (e) => {
      const { name, value } = e.target;
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validate all fields
      const newErrors = {};
      Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      });
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        // Form is valid, handle submission
      }
    };
//   const richTextChange = (value) =>  {
//       setFormData(prev => ({
//           ...prev,
//           username: value
//       }));
//   };
  
    return (
      <form onSubmit={handleSubmit} className="post-editor">
        <div className="form-group">
          <label htmlFor="user">user *</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.user ? 'error' : ''}
          />
          {errors.user && <span className="error-message">{errors.user}</span>}
        </div>
  
        <div className="form-group">
          <label htmlFor="username">username *</label>
         {/* <RichTextEditor value={formData.username} onChange={richTextChange} error={errors.username} /> */}
        </div>
  
        {/* <TagInput
          tags={formData.tags}
          onChange={tags => handleChange({ 
            target: { name: 'tags', value: tags } 
          })}
          onBlur={() => handleBlur({ target: { name: 'tags', value: formData.tags } })}
          error={errors.tags}
        /> */}
  
        {/* <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="general">General</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
          </select>
        </div> */}
  
        {/* <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            Publish immediately
          </label>
        </div> */}
  
        <button type="submit" className="submit-button">
          {formData.isPublished ? 'Publish Post' : 'Save Draft'}
        </button>
      </form>
    );
  }
  
  export default Login;