

function SelectedContact (contact) {
console.log(contact)
    return (
      <div>
        <h2>Selected Contact: {contact.contact.name} </h2>
        <h4>Phone Number: {contact.contact.phone} </h4>
        <h4>Email Address: {contact.contact.email} </h4>
        <h4> Company: {contact.contact.company.name} </h4>
      </div>
    )
}

export default SelectedContact;