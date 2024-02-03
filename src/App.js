import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';
 import {
   BrowserRouter as Router,
   Routes,
   Route
 } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#353232'
      showAlert("DarkMode Is Enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode Is Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar Name="TextUtils" Abt="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/Text-Utils" element={<Textarea heading="Enter your Text here" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route path='/*' element={<h1>Error: 404 Page Not Found</h1>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

