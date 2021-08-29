import './App.css';
import Generator from './components/Generator';
import Halloween from './components/Halloween';
import Nav from './components/Nav';
import { HalloweenProvider } from './HalloweenData';

function App() {
  return (
    <HalloweenProvider>
    <div className="App">
      <h1>This is Halloween</h1>
      <Generator />
      <Halloween />
      <Nav />
    </div>
    </HalloweenProvider>
  );
}

export default App;
