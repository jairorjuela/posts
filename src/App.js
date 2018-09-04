import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={8} xsOffset={2}>
              <PageHeader>
                Blog Post Populares
              </PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={10} md={8}>
            <h3>
              Orden: {' '}
              <Button bsStyle="info" bsSize="large"> Ascendente </Button>
              {' '}
              <Button bsStyle="primary" bsSize="large"> Descendente </Button>
            </h3>

          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
