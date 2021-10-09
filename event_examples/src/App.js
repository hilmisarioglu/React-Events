import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import EventBind from './components/HandlerInClassComp';
import MouseEvents from './components/MouseEvents'
function App() {
  return (
    <div className="App">
      <p>EventHandler with Hooks</p>
      <Counter/>
      <hr/>
      <EventBind/>
      <hr/>
      <MouseEvents/>
    </div>
  );
}

export default App;
