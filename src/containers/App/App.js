import logo from '../../logo.svg';
import './App.css';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Article from '../../components/Article';

function App() {
  
  const type = 2;
    if (type !== 2) {
    return <h1>Hallo World</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card profile='User' name='NAME' age='98'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Input />
        <Article male='netral' prof='IT'/>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
