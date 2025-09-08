import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import initialBlogPosts from '../data/blogData';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('blogPosts');
        return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
    });

    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', summary: '', content: '', image: '' });
    const [editingPostId, setEditingPostId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // New state to check if user is admin

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    }, [posts]);

    // Check auth state on component mount
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, so we assume they are the admin
                setIsAdmin(true);
            } else {
                // User is signed out
                setIsAdmin(false);
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prevPost => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPostId) {
            setPosts(posts.map(post => post.id === editingPostId ? { ...newPost, id: editingPostId } : post));
        } else {
            const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
            const postToAdd = { ...newPost, id: newId };
            setPosts(prevPosts => [...prevPosts, postToAdd]);
        }
        setNewPost({ title: '', summary: '', content: '', image: '' });
        setEditingPostId(null);
        setShowForm(false);
    };

    const handleDelete = (idToDelete) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this post?");
        if (isConfirmed) {
            setPosts(posts.filter(post => post.id !== idToDelete));
        }
    };

    const handleEdit = (postToEdit) => {
        setNewPost(postToEdit);
        setEditingPostId(postToEdit.id);
        setShowForm(true);
    };

    return (
        <section className="blog-section" id="blog">
            <h1 className="heading text-center">
                <i className="fas fa-pencil-alt"></i> My <span>Blog</span>
            </h1>
            <Container className="mt-5">
                {/* The "Add New Blog Post" button and form are now conditionally rendered */}
                {isAdmin && (
                    <div className="text-center mb-4">
                        <Button onClick={() => setShowForm(!showForm)} className="btn-add-blog">
                            {showForm ? 'Cancel' : 'Add New Blog Post'}
                        </Button>
                    </div>
                )}
                
                {showForm && isAdmin && (
                    <div className="add-blog-container mb-5">
                        <h2 className="text-center">{editingPostId ? 'Edit Post' : 'Add a New Post'}</h2>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="title" placeholder="Title" value={newPost.title} onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" name="summary" placeholder="Summary" value={newPost.summary} onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" name="content" placeholder="Full Content" value={newPost.content} onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="image" placeholder="Image URL (optional)" value={newPost.image} onChange={handleInputChange} />
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit" className="btn-publish">
                                    {editingPostId ? 'Update Post' : 'Publish Post'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}

                <Row className="blog-container justify-content-center">
                    {posts.map(post => (
                        <Col lg={4} md={6} key={post.id} className="mb-4">
                            <div className="blog-post-card">
                                {post.image && <img src={post.image} alt={post.title} className="img-fluid" />}
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h3 className="card-title">{post.title}</h3>
                                        {isAdmin && (
                                            <Button variant="danger" className="btn-delete-card" onClick={() => handleDelete(post.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </Button>
                                        )}
                                    </div>
                                    <p className="card-text">{post.summary}</p>
                                    <div className="d-flex justify-content-between mt-auto">
                                        <Link to={`/blog/${post.id}`} className="btn-read-more">Read More <i className="fas fa-arrow-right"></i></Link>
                                        {isAdmin && (
                                            <Button className="btn-edit-card" onClick={() => handleEdit(post)}>
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Blog;