import React, { Fragment } from 'react';
import AboutMe from './display/AboutMe';
import Hobby from './display/Hobby';
import Links from './display/Links';
import Skills from './display/Skills/Skills';

function App() {
  return (
    <Fragment>
      <AboutMe/>
      <Hobby/>
      <Skills/>
      <Links/>
     </Fragment>
  );
}

export default App;
