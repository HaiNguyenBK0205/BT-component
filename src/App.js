import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Carousel from './Component/Carousel';
import Container from './Component/Container';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
