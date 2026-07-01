import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Hello from './Hello';
import Message from './Message';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';

function App() {
  return (
    <div className="App">

      <FunctionClick/>
      <ClassClick/>
      {/* //practice of state
      <Message/>
      <Counter/>

      //practice of props using functional components
      <Greet name = "Zaheer Shaik"  heroName = "Superman"><p>
        This is children props</p></Greet>
      <Greet name = "John Doe"  heroName = "Spiderman"> <button>Click Me</button></Greet>
      <Greet name = "Jane Smith"  heroName = "Wonder Woman" />

      //practice of props using class components
      <Welcome name = "Zaheer Shaik"  heroName = "Superman"><p>
        This is children props</p></Welcome>
      <Welcome name = "John Doe"  heroName = "Spiderman"> <button>Click Me</button></Welcome>
      <Welcome name = "Jane Smith"  heroName = "Wonder Woman" /> */}

      
    </div>
  );
}

export default App;
