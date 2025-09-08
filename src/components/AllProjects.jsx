import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import getAuth and onAuthStateChanged
import projectsData from '../data/projectsData';
import './AllProjects.css';

const AllProjects = () => {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projectsList');
        return savedProjects ? JSON.parse(savedProjects) : projectsData;
    });

    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState({ title: '', image: '', description: '', viewLink: '', codeLink: '' });
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        localStorage.setItem('projectsList', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prevProject => ({ ...prevProject, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProjectId) {
            setProjects(projects.map(project => project.id === editingProjectId ? { ...newProject, id: editingProjectId } : project));
        } else {
            const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
            const projectToAdd = { ...newProject, id: newId };
            setProjects(prevProjects => [...prevProjects, projectToAdd]);
        }
        setNewProject({ title: '', image: '', description: '', viewLink: '', codeLink: '' });
        setEditingProjectId(null);
        setShowForm(false);
    };

    const handleDelete = (idToDelete) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this project?");
        if (isConfirmed) {
            setProjects(projects.filter(project => project.id !== idToDelete));
        }
    };

    const handleEdit = (projectToEdit) => {
        setNewProject(projectToEdit);
        setEditingProjectId(projectToEdit.id);
        setShowForm(true);
    };

    return (
        <section className="all-projects-section" id="all-projects">
            <h2 className="heading text-center">
                <i className="fas fa-laptop-code"></i> All <span>Projects</span>
            </h2>
            <Container className="mt-5">
                {isAdmin && (
                    <div className="text-center mb-4">
                        <Button onClick={() => setShowForm(!showForm)} className="btn-add-project">
                            {showForm ? 'Cancel' : 'Add New Project'}
                        </Button>
                    </div>
                )}
                
                {showForm && isAdmin && (
                    <div className="add-project-container mb-5">
                        <h3 className="text-center">{editingProjectId ? 'Edit Project' : 'Add a New Project'}</h3>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="title" placeholder="Title" value={newProject.title} onChange={handleInputChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="image" placeholder="Image URL" value={newProject.image} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" name="description" placeholder="Description" value={newProject.description} onChange={handleInputChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="viewLink" placeholder="View Link (URL)" value={newProject.viewLink} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="codeLink" placeholder="Code Link (URL)" value={newProject.codeLink} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <Button type="submit" className="btn-publish-project">
                                    {editingProjectId ? 'Update Project' : 'Publish Project'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}

                <Row className="justify-content-center">
                    {projects.map(project => (
                        <Col lg={4} md={6} key={project.id} className="mb-4">
                            <div className="project-box">
                                <img src={project.image} alt={project.title} className="img-fluid" />
                                <div className="content p-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h3 className="project-card-title">{project.title}</h3>
                                        {isAdmin && (
                                            <div className="action-btns d-flex gap-2">
                                                <Button className="btn-edit-card" onClick={() => handleEdit(project)}>
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                                <Button variant="danger" className="btn-delete-card" onClick={() => handleDelete(project.id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="btns d-flex justify-content-between mt-3">
                                        <Button href={project.viewLink} target="_blank" className="btn-project">
                                            <i className="fas fa-eye me-2"></i> View
                                        </Button>
                                        <Button href={project.codeLink} target="_blank" className="btn-project">
                                            Code <i className="fas fa-code ms-2"></i>
                                        </Button>
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

export default AllProjects;