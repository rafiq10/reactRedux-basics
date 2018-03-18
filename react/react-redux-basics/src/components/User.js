import React from 'react';
import {Container, Row, Col} from 'reactstrap';


export const User = (props) => {
        return(
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>The User Page </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>User Name: {props.username}</p>
                    </Col>
                </Row>
            </Container>
        );
    };