import Header from './components/Header';
import Footer from './components/Footer';
import CustomButton from './components/CustomButton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Hello Veekshith 👋</h2>
        <p>You're building your first React UI!</p>
        <CustomButton />

      </main>
      <Footer />
    </div>
  );
}

export default App;
