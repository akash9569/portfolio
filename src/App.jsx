import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Footer } from './components/Footer';
import MainPortfolio from './components/MainPortfolio';
import Blog from './components/Blog';
import Post from './components/Post';
import AllProjects from './components/AllProjects';
import FooterAnimator from './components/FooterAnimator';
import Login from './components/Login'; // Import the new Login page

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Post />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/login" element={<Login />} /> {/* New route for the login page */}
      </Routes>
      <FooterAnimator />
    </Router>
  );
}

export default App;