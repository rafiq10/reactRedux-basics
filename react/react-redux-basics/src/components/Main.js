import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Button color="primary" 
                    onClick={() => this.props.changeUsername('Anna')}>
                    Change the username
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
