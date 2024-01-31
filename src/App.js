import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';



function App() {
  return (
    <>
      <Navbar  Name="TextUtils" Abt="About" />
      <Textarea heading="Enter your Text here"/>
    </>
  );
}

export default App;

