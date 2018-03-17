import React from 'react';
import {connect} from 'react-redux';

import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Main from './Main';
import User from './User';

class App extends React.Component {

    render() {
        return (
            <Container>
                <Main changeUsername={() => this.props.setName("Vero")} />
                <br />
                <User username={this.props.user.name} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        math: state.math
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};



const kaka = connect(mapStateToProps,mapDispatchToProps)(App);
export default kaka;