import React from 'react';
import {Container, Row, Col} from 'reactstrap';


class User extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>The User Page </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>User Name: {this.props.username}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default User;