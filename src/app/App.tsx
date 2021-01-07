import React from 'react';
import AboutMe from './display/AboutMe';
import Hobby from './display/Hobby';
import Links from './display/Links';
import SideBar from './display/SideBar';
import Skills from './display/Skills/Skills';

function App() {
  return (
  <div className="app">
   <div className="container-fluid">
     <div className="row">
     <div className="col-xl-2 col-lg-3 col-12 side-bar"><SideBar/></div>
       <div className="col-lg-8 col-md-10 main-content">
      <AboutMe/>
      <Hobby/>
      <Skills/>
      <Links/>
      </div>
      <div className="col-0 col-xl-2"></div>
      </div>
   </div>
   </div>
  );
}

export default App;
