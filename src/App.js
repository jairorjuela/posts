import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Button, Image, Glyphicon } from 'react-bootstrap';
import './App.css';

const posts = [
  {
    "id": 1,
    "title": "Manejo de dependencias en Ruby con Bundler",
    "description": "Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.",
    "url": "http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/",
    "votes": 42,
    "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    "post_image_url": "http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg"
  },
  {
    "id": 2,
    "title": "Descubre si Make it Real es para ti",
    "description": "En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.",
    "url": "http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/",
    "votes": 43,
    "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    "post_image_url": "http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg"
  },
  {
    "id": 3,
    "title": "¿Qué es código?",
    "description": "Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.",
    "url": "http://blog.makeitreal.camp/que-es-codigo/",
    "votes": 44,
    "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    "post_image_url": "http://blog.makeitreal.camp/assets/images/bg-images/code.jpg"
  },
  {
    "id": 4,
    "title": "Aprende Desarrollo Web gratis",
    "description": "¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.",
    "url": "http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/",
    "votes": 45,
    "writer_avatar_url": "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    "post_image_url": "http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
      posts: posts.sort(function (post1, post2) {
        if (post1.votes > post2.votes) return 1;
        if (post1.votes < post2.votes) return -1;
        if (post1.title > post2.title) return 1;
        if (post1.title < post2.title) return -1;
        return posts
      }),
      newPosts: ''
    }
  }


  upward(id, event) {
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.votes = post.votes + 1
        return post
      }
      return post
    })
    this.setState({
      posts: newPosts
    })
  }

  falling(id, event) {
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.votes = post.votes - 1
        return post
      }
      return post
    })
    this.setState({
      posts: newPosts
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
                <Button bsStyle="info" bsSize="large" > Ascendente </Button>
                {' '}
                <Button bsStyle="primary" bsSize="large" > Descendente </Button>
              </h3>
            </Col>
          </Row>







  {this.state.posts.map(postDetail =>
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



              )}










        </Grid>
      </div>


    );











  }
}

export default App;
