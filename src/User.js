import React from 'react';

let User = (props) => {
    return (
        <React.Fragment>
            {props.users.map(elem => {
                return (
                    <React.Fragment>
                        <div>{elem.name}</div>
                        <div>{elem.age}</div>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default User;