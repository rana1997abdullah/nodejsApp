import logo from './logo.svg';
import './App.css';



function App() {
  fetch('http://localhost:5000/greeting').then(res =>
    res.json()
  ).then(data => console.log(data))
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
