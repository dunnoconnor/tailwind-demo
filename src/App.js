import './App.css';
import apod from './apod.jpeg'
import Header from './components/Header';
import SizeSelect from './components/SizeSelect';
import DateSelect from './components/DateSelect';
import { useState } from 'react';

function App() {
  const [date,setDate] = useState(new Date())
  return (
    <div className="App flex-col items-center justify-center text-center">
      <Header/>
      <img className="nasa w-fit" src={apod} alt="waterfall borealis"/>
      <DateSelect date={date} setDate={setDate}/>
      <SizeSelect/>
    </div>
  );
}

export default App;
