import React from 'react';
import {Component} from 'react';

class Form extends Component {

    state = {
        name: '',
        age: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.handleNewUser(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    name: <input type="text" name="name" onChange={this.handleChange} />
                    age: <input type="text" name="age" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>submit</button>
                </form>
            </React.Fragment>
        )
    }

}

export default Form;