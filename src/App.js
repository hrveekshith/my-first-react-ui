import TextBox from './components/TextBox';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomButton from './components/CustomButton';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <Header title="React Counter App" />
      <main>
        <Greeting name="Veekshith H R" />
        <p>You're building your first React UI!</p>
                  <p>Count:{count}</p>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg mt-4" onClick={()=>setCount(count+1)}>Click Me</button>
        <TextBox />
      </main>
      <Footer condition = {count>5} />
    </div>
  );
};

export default App;
