

function AllContacts (contactList,hash) {

    return (
        <ul>
        {
        contactList.contactList.map((contact) => {
          return (<li key={contact.id}>
              <a href={`#${contact.id === hash ? "" : contact.id}`}>
                {contact.name}
              </a>
          </li>
          )
        })}
      </ul>
        
    
    )
}

export default AllContacts;