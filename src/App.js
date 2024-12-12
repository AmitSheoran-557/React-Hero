import './App.css';
// import Comparisons from './components/Home/Comparisons';
// import Faq from './components/Home/Faq';
// import Hero from './components/Home/Hero';
// import LogoList from './components/Home/LogoList';
// import SimpleSteps from './components/Home/SimpleSteps';
// import SwitchingEnergy from './components/Home/SwitchingEnergy';
// import Testimonials from './components/Home/Testimonials';
// import Utilities from './components/Home/Utilities';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/view/HomePage';
import About from './components/view/About';
import MyFaq from './components/view/MyFaq';
import MyWork from './components/view/MyWork';
import Testimonials from './components/view/Testimonials';
import WhyUs from './components/view/WhyUs';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<MyFaq/>} />
        <Route path='/work' element={<MyWork/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/whyUs' element={<WhyUs/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
