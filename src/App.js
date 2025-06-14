import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header, text-center">
        <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='App-footer'>
          <small>Coded by Christie Chinaka on Github and hosted on Netlify</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
