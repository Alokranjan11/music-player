import './App.css';
import Header from "./components/Header.js"
import Home from "./components/Home.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {

  // const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
