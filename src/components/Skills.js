import React from 'react';
import "../styles/Skills.css";
import JS from "../images/Javascript.jpg";
import Figma from "../images/Figma.jpg";
import Node from "../images/Node.jpg";
import react from "../images/React.jpg";
import redux from "../images/Redux.jpg";
import VScode from "../images/VSCode.jpg";
const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-wrapper'>
        <div className='skills-text'>Skills</div>
        <div className='skills-boxes'>
          <div className='skills-box'>
            <img src={JS} alt="JavaScript" className="skill-img" />
            <p className='skill-name'>javascript</p>
          </div>
          <div className='skills-box'>
            <img src={react} alt="React" className="skill-img" />
            <p className='skill-name'>react</p>
          </div>
          <div className='skills-box'>
            <img src={redux} alt="redux" className="skill-img" />
            <p className='skill-name'>redux</p>
          </div>
        </div>
        <div className='skills-boxes'>
          <div className='skills-box'>
            <img src={Node} alt="node" className="skill-img" />
            <p className='skill-name'>node</p>
          </div>
          <div className='skills-box'>
            <img src={VScode} alt="vscode" className="skill-img" />
            <p className='skill-name'>vs code</p>
          </div>
          <div className='skills-box'>
            <img src={Figma} alt="figma" className="skill-img" />
            <p className='skill-name'>figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;