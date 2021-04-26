
import './App.css';
import Navbarsite from './components/navbar';
import Sectionone from './components/sectionone'
import Cardsectionone from './components/card'
import Part from './components/section-part'
import Country from './components/countrys'
import Footer from './components/footer-site'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
      <Navbarsite/>
      <Sectionone/>
      <Cardsectionone/>
      <Part/>
      <Country/>
      <Footer/>
   </div>
  );
}

export default App;
