import './App.css';
import { useState } from 'react';
import ChangeLanguage from './Changelanguage';
import Display from './Display';
import NavMenu from './NavMenu';



function App() {
  const [language,setLanguage] = useState("eng")
  return (
    <div className="App">
      <ChangeLanguage.Provider value={{language,setLanguage}}>
      <NavMenu/> 
      </ChangeLanguage.Provider>
      <Display/> 
    

    </div>
  );
}

export default App;
