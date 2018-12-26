import React, {Component} from 'react';
import IndividualContact from './IndividualContact';

class Filter extends Component {

    state = {
        contacts: [
            {name: 'Alex', phone: '415-657-9876'},
            {name: 'George', phone: '707-657-4657'},
            {name: 'Bob', phone: '510-456-3420'},
            {name: 'Joana', phone: '213-107-2687'}
        ],
        search: ''
    }

    handleInput = (e) => {  
        this.setState({
            search: e.target.value
        })
        //console.log(this.state.search);
    }

    render() {
        /*
        EXPLANATION: 
        1. WE INTERATE THRU THE CONTACTS ARRAY IN STATE
        2. WHEN WE GET TO THE INDIVIDUAL OBJECT WE LOOK FOR NAME PROPERTY
        3. WE THEN LOOK THRU THAT STRING (THE NAME) THAT IS THE VALUE OF NAME PROPERTY
        AND SEE IF WHAT IS BEING TYPED IN THE SEARCH BOX MATCHES THE INDEX OF THE STRING (THE NAME).
        4. IF IT DOES IT WILL RETURN A POSITIVE NUMBER FOR INDEX AND WILL BE SHOWN
        5. IF IT DOESN'T THEN IT WILL RETURN -1 AND WILL BE FILTERED OUT.
        6. WE STORE THE RESULTS IN THE filteredContacts VARIABLE
        7. THEN WE map() OVER filteredContacts AND THAT IS WHAT IS RENDERED TO SCREEN
        8. REMEMBER: HERE WE ARE USING INDEXOF FOR STINGS. THERE IS ALSO INDEXOF FOR ARRAYS.
        */
        let filteredContacts = this.state.contacts.filter(contact => {
           console.log(contact.name.indexOf(this.state.search.toLowerCase()));
           return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <React.Fragment>
                <h1>Contacts List</h1>
                <form>
                    <input type='text' value={this.state.search} onChange={this.handleInput} />
                </form>
                <br />
                <ul>
                    {/* 
                    WHAT WE ARE DOING HERE IS WE'RE ITERATING OVER THE CONTACTS ARRAY. THEY FOR EACH 
                    INDIVIDUAL OBJ IN THE ARRAY, WE ARE PASSING THAT DATA TO THE <IndividualContact />
                    COMPONENT AS PROPS. THAT IS WHY WE ARE RETURNIG THE COMPONENT DURING EACH ITERATION.
                    THE <IndividualContact /> RETURNS AN <li> WHICH WE THEN POPULATE WITH THE PASSED PROP
                    DATA.
                    */}
                    {filteredContacts.map(contact => {
                        return <IndividualContact contact={contact} />
                    })}
                </ul>
            </React.Fragment>

        )
    }
}

export default Filter;
