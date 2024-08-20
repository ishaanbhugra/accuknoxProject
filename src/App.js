import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import { store } from './store';

function App() {
  return (
<>
<Provider store={store}>
      <div className="App">
        <h1>Dashboard - Category - Widget - Add/Remove</h1>
        <h3>ISHAAN BHUGRA - ishaanbhugra2@gmail.com - +91 7011025720</h3>
        <Dashboard />


        <footer style={{position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%"}}>Project for AccuKnox India Pvt Ltd</footer>
      </div>
    </Provider>




</>




  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
