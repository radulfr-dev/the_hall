import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url("/forest.jpg")`
    }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
