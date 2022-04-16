import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import { addInfoToDatabase, editInfoInDatabase } from './utils/functions';

const initialInfo = {
  username: "",
  phoneNumber: "",
  gender: ""
}

function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id){
      editInfoInDatabase(info)
    }
    else {addInfoToDatabase(info)}
    setInfo(initialInfo);
  }
  const editHandler = (id, {username, phoneNumber,gender}) => {
    setInfo(id, username, phoneNumber, gender)
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts info={info} editHandler={editHandler}/>
    </div>
  );
}

export default App;
