import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export const Main = (props) => {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Button color="primary" 
                    onClick={() => props.changeUsername('Anna')}>
                    Change the username
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };