import React from 'react';
import fire from './../config/fire';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>TEST</h1>
                <button onClick={this.logout}>logout</button>
            
            </div>
        )
    }
}

export default Home;