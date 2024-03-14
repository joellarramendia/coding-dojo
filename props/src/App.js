import PersonaCard from './components/PersonaCard';  

function App() {
  return (
    <div className="App">
      <PersonaCard fistName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonaCard fistName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonaCard fistName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonaCard fistName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
