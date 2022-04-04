import Navbar from './navbar'
import Home from './Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

function App() {

  return (
    <div className="App">
      <Navbar/>
<div className="content">
  <Projects/>
  <About/>
  <Contact/>
  <Resume/>
  <Home/>
</div>
    </div>
  );
}

export default App;
