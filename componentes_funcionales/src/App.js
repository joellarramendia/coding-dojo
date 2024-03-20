import './App.css';
import PersonaCard from './components/PersonaCard.component';

function App() {
  return (
    <div className="App">
      <PersonaCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonaCard firstName="Jon" lastName="Smith" age={88} hairColor="Brown" />
      <PersonaCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonaCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
