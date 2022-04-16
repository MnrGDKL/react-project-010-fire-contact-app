import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import { addInfoToDatabase } from './utils/functions';

const initialInfo = {
  username: "",
  phoneNumber: "",
  gender: ""
}

function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(info)
    addInfoToDatabase(info)
  }
  
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts info={info}/>
    </div>
  );
}

export default App;
