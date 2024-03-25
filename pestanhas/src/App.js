import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Contenido de la pestaña 1' },
    { label: 'Tab 2', content: 'Contenido de la pestaña 2' },
    { label: 'Tab 3', content: 'Contenido de la pestaña 3' }
  ];

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
