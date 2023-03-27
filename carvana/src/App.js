import logo from './logo.svg';
import './App.css';
import MainHeader from './layouts/MainHeader';
import Section from './layouts/Section';
import Mid from './layouts/Mid';
import Mid_two from './layouts/Mid_two';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Section/>
      <Mid/>
      <Mid_two/>
    </div>
  );
}

export default App;
