import './App.css';
import Header from './components/Header.component';
import Main from './components/Main.component';
import SubContents from './components/SubContents.component';
import Advertisement from './components/Advertisement.component';
import Navigation from './components/Navigation.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='nav-main'>
        <Navigation />
        <Main>
          <SubContents />
          <Advertisement />  
        </Main>
      </div>
    </div>
  );
}

export default App;
