import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor='username-input'>
          username
      </label>
      <input type='text' id='username-input' placeholder='user'/>
      <button>add</button>
      <h1 data-testid="myidd">sagar</h1>
    </div>
  );
}

export default App;
