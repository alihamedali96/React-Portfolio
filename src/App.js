import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
// import Particles from './components/Particles';
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import {useRef} from "react";

function App() {
  // const about = useRef(null);

  // const scrollToSection = (elementRef) =>{
  //   window.scrollTo({
  //     top:elementRef.current.offsetTop,
  //     Behaviour: "smooth"
  //   })
  // }

  const particlesInit = async (main) => {
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
  };
  return (
   
    <router>
    <NavigationBar/> 
    <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "attract",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#fff",
                  },
                  links: {
                    color: "#fff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: .5,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
           
            fullScreen: { enable: false }
          }}
      /> 
    <Header/> 
    <About/> 
    </router>
    
   
  );
}

export default App;
