import React from 'react';

const IndividualContact = ({contact}) => {
    return (
        <li>{contact.name} {contact.phone}</li>
    )
}

export default IndividualContact;