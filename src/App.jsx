import { useEffect, useState } from 'react'
import './App.css'
import SelectedContact from './selectedContact';
import AllContacts from './allContacts';

function App() {
  const [contactList, setContactList] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)

  useEffect(() => {
    const fetchList = async () => {
      const getList = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
      const getListData = await getList.json();
      setContactList(getListData);
    }
    fetchList();
  },[])
  
  useEffect(() => {
    window.addEventListener("hashchange", ()=> {
      setHash(window.location.hash.slice(1)*1);
    })
  },[])

  const contact = contactList.find((person) => {
    return hash === person.id
  })

  return (
   <div>
      <h1>Contact List ({contactList.length})</h1>
      {
        contact ? <SelectedContact contact={contact}/> : null
      }
      <AllContacts contactList={contactList} hash={hash}/>

   </div>
  )
}

export default App
