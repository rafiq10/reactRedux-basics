import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';



import Main from './components/Main';
import User from './components/User';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Rafal"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div>
                <Main changeUsername={this.changeUsername.bind(this)} />
                <br />
                <User username={this.state.username} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
