import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
      <footer className='footer'>
        <a target="blank" href="https://icons8.com/icon/2VXZb3OKn14e/satellite">Satellite icon by Icons8</a>
      </footer>
    </>
  );
}

export default App;
