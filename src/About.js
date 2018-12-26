import React from 'react';
import {Component} from 'react';

class About extends Component {

    state = {
        id: null
    }

    componentDidMount() {
        //console.log(this.props);
        let id = this.props.match.params.user_id;
        this.setState({id: id});
    }

    render() {
        return (
            <React.Fragment>
                <h1>ABOUT PAGE for user {this.state.id}</h1>
            </React.Fragment>
        )
    }
}

export default About;