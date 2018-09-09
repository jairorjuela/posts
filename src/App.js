import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Button, Image, Glyphicon } from 'react-bootstrap';
import posts from './posts'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 1,
      posts: posts,
      newPosts: ''
    };
    this.upwardButton = this.upwardButton.bind(this);
    this.upwardButton1 = this.upwardButton1.bind(this);
    this.fallingButton = this.fallingButton.bind(this);
    this.fallingButton1 = this.fallingButton1.bind(this);
  }

  renderPosts() {
    const renderPosts = posts.map(postDetail =>
        <Row className="show-grid" key={postDetail.id}>
          <Col xs={8} xsOffset={1} md={3} mdOffset={1}>
            <br />
            <Image src={postDetail.post_image_url} key={postDetail.post_image_url} style={{width:250}} />
          </Col>
          <Col xs={3} md={1} >
            <br />
            <a onClick={this.upward.bind(this, postDetail.id)} >
              <Glyphicon glyph="chevron-up" align="top"/>
            </a>
            <br />
            <span className="value" align="middle">{postDetail.votes}</span>
            <br />
            <a onClick={this.falling.bind(this, postDetail.id)}>
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
      )
      return renderPosts
  }


  upward(id, event) {
    const estado = this.state.votes
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.votes = post.votes + 1
        return post
      }
      return newPosts
    })
    if (estado === 1 || estado === 0){
      this.setState({
        newPosts: posts.sort(function (post1, post2) {
            if (post1.votes > post2.votes) return 1;
            if (post1.votes < post2.votes) return -1;
            if (post1.title > post2.title) return 1;
            if (post1.title < post2.title) return -1;
          return posts
        })
      })
    }
    if (estado === -1){
      this.setState({
        newPosts: posts.sort(function (post1, post2) {
            if (post1.votes > post2.votes) return -1;
            if (post1.votes < post2.votes) return 1;
            if (post1.title > post2.title) return -1;
            if (post1.title < post2.title) return 1;
          return posts
        })
      })
    }
  }

  falling(id, event) {
    const estado = this.state.votes
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.votes = post.votes - 1
        return post
      }
      return newPosts
    })
    if (estado === 1 || estado === 0){
      this.setState({
        newPosts: posts.sort(function (post1, post2) {
            if (post1.votes > post2.votes) return 1;
            if (post1.votes < post2.votes) return -1;
            if (post1.title > post2.title) return 1;
            if (post1.title < post2.title) return -1;
          return posts
        })
      })
    }
    if (estado === -1){
      this.setState({
        newPosts: posts.sort(function (post1, post2) {
            if (post1.votes > post2.votes) return -1;
            if (post1.votes < post2.votes) return 1;
            if (post1.title > post2.title) return -1;
            if (post1.title < post2.title) return 1;
          return posts
        })
      })
    }
  }

  upwardButton(event){
    this.setState({
      posts: posts.sort(function (post1, post2) {
        if (post1.votes > post2.votes) return 1;
        if (post1.votes < post2.votes) return -1;
        if (post1.title > post2.title) return 1;
        if (post1.title < post2.title) return -1;
        return posts
      })
    })
  }

  upwardButton1(event){
    this.setState({
      votes: 1
    });
    console.log(this.state.votes);
  }

  fallingButton1(event){
    this.setState({
      votes: -1
    });
    console.log(this.state.votes);
  }

  fallingButton(event){
    this.setState({
      posts: posts.sort(function (post1, post2) {
        if (post1.votes > post2.votes) return -1;
        if (post1.votes < post2.votes) return 1;
        if (post1.title > post2.title) return -1;
        if (post1.title < post2.title) return 1;
        return posts
      })
    })
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

          <Row className="show-grid" >
            <Col xs={10} md={6}>
              <h3>
                Orden: {' '}
                <Button bsStyle="info" bsSize="large" onClick={event => {
                      this.upwardButton();
                      this.upwardButton1();
                    }
                  } >
                  Ascendente
                </Button>
                {' '}
                <Button bsStyle="primary" bsSize="large" onClick={event => {
                      this.fallingButton();
                      this.fallingButton1();
                    }
                  } > Descendente </Button>
              </h3>
            </Col>
          </Row>

          {this.renderPosts()}

        </Grid>
      </div>
    )
  }
}

export default App;
