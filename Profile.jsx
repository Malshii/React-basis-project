import React from 'react';
import Navigation from './Navigation';

function Profile(){
    return(
        <>
        <Navigation />
        <div class="middle-container">
        <div class="profile">
          <img class="myprofile" src="Picture1.jpg" alt="profile"/>
          <h2>Hello.</h2>
          <p class="intro">I'm a second year Undergraduate in University of Moratuwa. Currently I'm following a
            degree program about Information Technology and Management. 🧚‍♀️And also I'm not anti-social,
            I'm selectively social person.</p>
        </div>
        <hr/>
        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img class="code-img" src="code.gif" alt="code"/>
            <h3>Design & Development</h3>
            <p>I love to try coding when I'm free. C language is the most preference programming language for me. And also I'm beginner of the web development. I'm excited to learn in deep about web development.</p>
          </div>
          <div class="skill-row">
            <img class="chilli-img" src="https://media.giphy.com/media/Tem9y8wKyCNOmbxrTX/giphy.gif" alt="chilli"/>
            <h3>Problem Solution</h3>
            <p>In my study time I find company's problem.Because I want to be a problem solutioner (Business Analyst). So far, I solved three main problems which has faced by the company. And also I proposed solutions by report. Information system management and learning management are most helpful me when I solve these problem.  </p>
          </div>
        </div>
        <hr/>
        
      </div>
        </>
    );
}

export default Profile;