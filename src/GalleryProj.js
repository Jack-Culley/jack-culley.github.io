import React from 'react';
import './index.css';

function GalleryProj() {
  return (
    <div className="Proj">
        <h2>Smart Photo Library</h2>
        <a href="https://github.com/Jack-Culley/machineLearningPrac" target="_blank" id='video'>
          <iframe className='picproj' width='50%' height='100%' src='https://www.youtube.com/embed/6-jsbPX6ho4'/>        
        </a>
        <h3 className='text-box proj'>
          I built this project to sharpen my skills with React as well as learn more backend tools. In this particular project I used
          the Django Rest Framework since I recently learned python and really enjoy it. I also used python for the neural network used to classify the images.
          A postgres database was used to store all data and React Redux was the main tool used for authentication. Part of this project was a tutorial found 
          <a className="link" href="https://www.datagraphi.com/blog/post/2020/8/30/docker-guide-build-a-fully-production-ready-machine-learning-app-with-react-django-and-postgresql-on-docker" target='_blank'> here</a>. 
          The data used to train the neural network can be found <a className="link" href="here" target='_blank'>here</a>.
        </h3>
    </div>
  );
}

export default GalleryProj;