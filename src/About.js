import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="main">
      <title>About Me</title>
      <h1>About Jack Culley</h1>
      <div className='intro'>
        <div className='heading'>
        <h3>Introduction</h3>
        </div>
        <div className='info'>
        <img src='/Files/todo.png' width='200px' height='200px'/>
        <p className='left'>My name is John, but some people call me Jack. I was born and raised in Columbus, Ohio. I am currently 20
        years old. </p>
        </div>
      </div>
      <div className='prof'>
        <div className='heading'>
        <h3>Professional</h3>
        </div>
        <div className='info'>
        <p className='right'>I graduated high school in the spring of 2019. I chose to attend The Ohio State University where I am
        currently a junior pursuing a bachelors degree in Computer Science and Engineering. I plan to graduate with my
        intended degree in the spring of 2023.</p>
        <img src='/Files/todo.png' width='200px' height='200px'/>
        </div>
      </div>
      <div className='interests'>
        <div className='heading'>
        <h3>Interests</h3>
        </div>
        <div className='info'>
        <img src='/Files/todo.png' width='200px' height='200px'/>
        <p className='left'>Outside of school I enjoy spending my time lifting, video-gaming, woodworking, and simply hanging out with
        friends/family. I also enjoy coding(hence my major) and like to learn new technologies for building various applications.
        My immediate interests related to computer science are DATABASE STUFF, and python</p>
        </div>
      </div>
    </div>
  );
}

export default About;