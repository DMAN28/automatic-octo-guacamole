import Navbar from './navbar'
//import Home from './Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
//import Contact from './components/Contact/Contact';
//import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <layout>
    <div className="App">
      <Navbar/>
<div className="content">

  <Projects/>
  <About/>

</div>
    </div>
   <Footer/>
</layout>
  );
}

export default App;

  //<Projects/>
  //<About/>
  //<Contact/>
  //<Resume/>
  //<Home/>