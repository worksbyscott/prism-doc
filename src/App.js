

//Styles
import './styles/App.scss';

//Components

import AnimationControls from './sections/animationControls'
import HowWorks from './sections/howWorks'
import Background from './sections/background'
import DurationEasing from './sections/durationEasing'
import QuickStart from './sections/quickStart'
import StateCallbacks from './sections/stateCallbacks'
import SupportedProps from './sections/supportedProps'

import Footer from './components/footer'

// React Sections

import react from './sections/react/react'
import prismComponent from './sections/react/prismComponent'
import scrollTrigger from './sections/react/scrollTrigger'

//Sections

const prismGuide = [
  { id: 0, title: "Background", Component: Background },
  { id: 1, title: "Quick Start Guide", Component: QuickStart },
  { id: 2, title: "How it works", Component: HowWorks },
  { id: 3, title: "Duration and Easing", Component: DurationEasing },
  { id: 4, title: "Supported Props", Component: SupportedProps },
  { id: 5, title: "Animation Controls", Component: AnimationControls },
  { id: 6, title: "State callbacks", Component: StateCallbacks },
  { id: 7, title: "Implementing React", Component: react },
  { id: 8, title: "Prism Component", Component: prismComponent },
  { id: 9, title: "Scroll Trigger", Component: scrollTrigger },
]

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById('section' + id)
    element.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="doc">
          <div className="left">
            {prismGuide.map(({ id, title }) => (
              <h3 key={'button' + id} onClick={() => scrollToSection(id)}>{title}</h3>
            ))}

          </div>
          <div className="right">
            <div className="header">
              <h1> Prism Animation </h1>
              <p>React Javascript animation Libary</p>


              <div className="npmpackage">
                <a href="https://www.npmjs.com/package/prism-animation">
                  <img alt="" src='https://img.shields.io/npm/v/prism-animation.svg' height='auto' width='auto' />
                  <img alt="" src='https://img.shields.io/badge/code_style-standard-brightgreen.svg' height='auto' width='auto' />
                </a>
              </div>

              <div className="action">
                <a href="https://github.com/worksbyscott/prism-animation">View Github   →</a>
              </div>


            </div>
            <div className="content">
              {prismGuide.map(({ id, Component }) => (
                <section key={id} id={'section' + id}>
                  <Component />
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
