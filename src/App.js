import './App.css';
import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import FurtherTrainings from './components/FurtherTrainings';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Certificates />
        <FurtherTrainings />
         <Contact />
      </main> 
      <Footer />
    </>
  );
}

export default App;
