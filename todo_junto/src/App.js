import './App.css';
import './components/PersonaCard.component.css';
import PersonaCard from './components/PersonaCard.component';

function App() {
  return (
    <div className="App">
      <PersonaCard className="content" firstName="Jane" lastName="Doe" age={45} hairColor="Black" btnBirthday="Jane"/>
      <PersonaCard className="content" firstName="John" lastName="Smith" age={88} hairColor="Brown" btnBirthday="John"/>
      <PersonaCard className="content" firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" btnBirthday="Millard"/>
      <PersonaCard className="content" firstName="Maria" lastName="Smith" age={62} hairColor="Brown" btnBirthday="Maria"/>
    </div>
  );
}

export default App;
