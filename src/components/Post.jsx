import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './Post.css';

const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Retrieve posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const allPosts = JSON.parse(savedPosts);
      // Find the post that matches the URL parameter ID
      const foundPost = allPosts.find(p => p.id === parseInt(postId));
      setPost(foundPost);
    }
  }, [postId]);

  if (!post) {
    return (
      <Container className="text-center my-5" style={{ paddingTop: '10rem' }}>
        <h2 className="text-white">Post not found!</h2>
        <Button onClick={() => navigate('/blog')} className="mt-3 btn-read-more">Go to Blog Page</Button>
      </Container>
    );
  }

  return (
    <section className="single-post-section" id="single-post-container">
      <Container>
        <div className="back-btn-container text-start mb-4">
          <Button onClick={() => navigate(-1)} className="btn-back">
            <i className="fas fa-arrow-left me-2"></i> Back
          </Button>
        </div>
        <div className="post-content-wrapper">
          {post.image && <img src={post.image} alt={post.title} className="img-fluid post-image" />}
          <h1 className="post-title">{post.title}</h1>
          <div className="post-body">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Post;