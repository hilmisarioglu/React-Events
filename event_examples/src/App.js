import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import EventBind from './components/HandlerInClassComp';
function App() {
  return (
    <div className="App">
      <p>EventHandler with Hooks</p>
      <Counter/>
      <hr/>
      <EventBind/>
    </div>
  );
}

export default App;
