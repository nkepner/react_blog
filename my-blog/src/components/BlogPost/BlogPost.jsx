import PropTypes from 'prop-types';
import styles from './BlogPost.module.css';

function BlogPost({ title, content, author, date, readTime }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>By {author}</span>
          <time className={styles.date}>{date}</time>
          <span className={styles.readTime}>{readTime} min read</span>
        </div>
      </div>
      <div className={styles.content}>
        {content}
      </div>

    </article>
  );
}
// function BlogPost({ title, content, author, date, readTime }) {
//   return (
//     <article className="blog-post">
//       <div className="blog-post__header">
//         <h2 className="blog-post__title">{title}</h2>
//         <div className="blog-post__meta">
//           <span className="blog-post__author">By {author}</span>
//           <time className="blog-post__date">{date}</time>
//           <span className="blog-post__read-time">{readTime} min read</span>
//         </div>
//       </div>

//       <div className="blog-post__content">
//         {content}
//       </div>
//     </article>
//   );
// }

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired
};

export default BlogPost;