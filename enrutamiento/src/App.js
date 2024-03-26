import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Color from './components/Color';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/hello/:word" element={<Hello />} />
        <Route
          path="/hello/:word/:color"
          element={<Color />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


