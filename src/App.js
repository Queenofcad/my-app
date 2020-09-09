import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content" style={{height: '660px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
        <Navigation>
          <Link to="/resume">Sobre mim</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </Navigation>
      </Header>
      <Drawer title="Menu">
        <Navigation>
          <Link to="/resume">Sobre mim</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
          <Main/>
      </Content>
    </Layout>
  </div>
    );
  }
}

export default App;
