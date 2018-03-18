import React from 'react';
import {connect} from 'react-redux';

import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import {Main} from '../components/Main';
import {User} from '../components/User';

import {setName}  from '../actions/userActions';

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
            dispatch(setName(name));
        }
    };
};



const kaka = connect(mapStateToProps,mapDispatchToProps)(App);
export default kaka;