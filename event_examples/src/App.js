import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import EventBind from './components/HandlerInClassComp';
import MouseEvents from './components/MouseEvents'
import KeyPress from './components/KeyPress';
function App() {
  return (
    <div className="App">
      <p>EventHandler with Hooks</p>
      <Counter/>
      <hr/>
      <EventBind/>
      <hr/>
      <MouseEvents/>
      <hr/>
      <KeyPress/>
    </div>
  );
}

export default App;
