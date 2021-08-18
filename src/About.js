import React from 'react';
import './index.css';
import useOnScreen from './Hooks/useOnScreen';

function About() {

  var mediaQuery = window.matchMedia("(max-width: 600px)");
  let Options;
  if(mediaQuery){
    Options = {
      threshold : 0.5,
      rootMargin : "1000px 0px 0px 0px"
    };
  } else {
    Options = {
      threshold : 0.5,
      rootMargin : "-40% 0px 0px 0px"
    };
  }
   
   const [introRef, introVisibility] = useOnScreen(Options);
   const [profRef, profVisibility] = useOnScreen(Options);
   const [intRef, intVisibility] = useOnScreen(Options);

  return (

    <div className="main" id='about'>
      <h1 className={profVisibility ? 'head' : 'head not'}>About me</h1>
      <div className={profVisibility ? 'prof vis' : 'prof unvis'}>
        <div className='heading'>
        <h3 className={profVisibility ? 'head' : 'head not'}>Professional</h3>
        </div>
        <div className='info' ref={profRef}>
        <img className={profVisibility ? 'right visible' : 'right unvisible'} src='Files/prof.JPG' width='200px' height='auto'/>
        <h6 className={profVisibility ? 'left ab text-box visible' : 'left ab text-box unvisible'}>
        I graduated high school in May of 2019. I chose to attend The Ohio State University where I am
        currently a junior pursuing a bachelors degree in Computer Science and Engineering. I plan to graduate with my
        intended degree in the spring of 2023.</h6>
        </div>
      </div>
      <a href="#prof" className={profVisibility ? 'plug arrow' : 'plug not arrow'} id='prof'>
            <img className='ext' src='Files/down-done.png' width="40" height="40"/>
      </a>
      <div className={introVisibility ? 'intro vis' : 'intro unvis'}>
        <div className='heading'>
        <h3 className={introVisibility ? 'head' : 'head not'}>College Life</h3>
        </div>
        <div className='info' ref={introRef}>
        <img className={introVisibility ? 'right visible' : 'right unvisible'} src='Files/life.JPG' width='250px' height='auto'/>
        <h6 className={introVisibility ? 'left ab text-box visible' : 'left ab text-box unvisible'}>
          Outside of the classroom I am involved in Cru student ministries and Beta Upsilon Chi(BYX),
          a Christian fraternity. In Cru, I lead a small group for one of the dorms on campus. In BYX I am the 
          Pledge Captain, which involves leading and educating men who wish to join the fraternity. 
        </h6>
        </div>
      </div>
      <a href="#int" className={introVisibility ? 'plug arrow' : 'plug not arrow'} id='int'>
            <img className='ext' src='Files/down-done.png' width="40" height="40"/>
      </a>
      <div className={intVisibility ? 'interests vis' : 'interests unvis'}>
        <div className='heading'>
        <h3 className={intVisibility ? 'head' : 'head not'}>Interests</h3>
        </div>
        <div className='info'  ref={intRef}>
        <img className={intVisibility ? 'right visible' : 'right unvisible'} src='Files/int.JPG' width='290px' height='100%'/>
        <h6 className={intVisibility ? 'left ab text-box visible' : 'left ab text-box unvisible'}>
        Outside of school I enjoy spending my time lifting, cycling, video-gaming, woodworking, traveling, and simply hanging out with
        friends/family. I also enjoy coding(hence my major) and like to learn new technologies for building various applications.
        My immediate interests related to computer science are backend web development(PHP, SQL, MySQL), and python.</h6>
        </div>
      </div>
      <a href="#proj" className={intVisibility ? 'plug arrow' : 'plug not arrow'} id="proj">
            <img className='ext' src='Files/down-done.png' width="40" height="40"/>
      </a>
    </div>
  );
}

export default About;