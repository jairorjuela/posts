import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Button, Image, Glyphicon } from 'react-bootstrap';
import PostDada from '../src/post.json'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  upward(e){
    this.setState({
      count: this.state.count + 1
    });
  }

  falling(e){
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={9} xsPush={1} md={9} mdPush={1}>
              <PageHeader>
                Blog Post Populares
              </PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={10} md={6}>
            <h3>
              Orden: {' '}
              <Button bsStyle="info" bsSize="large" > Ascendente </Button>
              {' '}
              <Button bsStyle="primary" bsSize="large" > Descendente </Button>
            </h3>
          </Col>
          </Row>




              {PostDada.map(postDetail =>


                <Row className="show-grid" key={postDetail.id}>
                  <Col xs={8} xsOffset={1} md={3} mdOffset={1}>
                  <br />
                    <Image src={postDetail.post_image_url} key={postDetail.post_image_url} style={{width:250}} />
                  </Col>

                  <Col xs={3} md={1} >
                    <br />
                    <a onClick={this.upward.bind(this)}>
                      <Glyphicon glyph="chevron-up" align="top"/>
                    </a>
                    <br />
                    <span className="value" align="middle">{this.state.count}</span>
                    <span className="value" align="middle">{postDetail.votes}</span>
                    <br />
                    <a onClick={this.falling.bind(this)}>
                      <Glyphicon glyph="chevron-down" align="bottom"/>
                    </a>
                  </Col>

                  <Col xs={12} md={5} align="left">
                  <br />
                    <h5><a href={postDetail.url} key={postDetail.url} target="_blank"> {postDetail.title}</a></h5>
                    <p key={postDetail.description}>{postDetail.description}</p>
                    <p key={postDetail.writer_avatar_url} className="text-muted">
                      Escrito por: {'   '}
                      <Image src={postDetail.writer_avatar_url} style={{width:40}} circle/>
                    </p>
                  </Col>
                  <br />
                  </Row>



              )}










        </Grid>
      </div>
    );
  }
}

export default App;
