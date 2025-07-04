   import React from 'react';
   import NavBar from './components/NavBar/NavBar';
   import Home from './pages/Home';
   import About from './pages/About';
   import Contact from './pages/Contact';
   import './App.css'; // Import global CSS
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

   const App = () => {
       return (
           <Router>
               <div>
                   <NavBar />
                   <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/about" element={<About />} />
                       <Route path="/contact" element={<Contact />} />
                   </Routes>
               </div>
           </Router>
       );
   };

   export default App;
   