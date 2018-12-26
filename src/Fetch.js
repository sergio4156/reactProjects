import React, {Component} from 'react';

class Fetch extends Component {

    state = {
        userData: [
            {
                userId: null,
                id: null,
                title: "",
                body: ""
            }
        ]
    }


    fetchData = () => {
        let temp = [];
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(users => users.map(obj => {
                //console.log(obj);
                temp.push(obj);
            }))
            .then(arr => {
                this.setState({userData: temp})
                console.log(this.state);
            })
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={this.fetchData}>Fetch Data</button>
                {this.state.userData.map(user => {
                    return (
                        <React.Fragment>
                            <div>{user.userId}</div>
                            <div>{user.id}</div>
                            <div>{user.title}</div>
                            <div>{user.body}</div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }

}


export default Fetch; 