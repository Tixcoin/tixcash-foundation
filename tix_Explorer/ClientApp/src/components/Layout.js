import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { Header } from './Header';
import { SearchBar } from './SearchBar';

import { Footer } from './Footer';



export class Layout extends Component {
  static displayName = Layout.name;

    dologgedOut = () => {
        
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        alert(window.location.href.indexOf("dashboard") > 0);
        if (window.location.href.indexOf("dashboard") > 0) {
            window.location.reload();
        }
    };

  render() {
    return (
       <div class="tron-wrapper">
            <Header onLogout={this.dologgedOut} />
            <SearchBar />
            
            <Container onLogout={this.dologgedOut}>
                {this.props.children}
            </Container>
            <Footer />
      </div>
    );
  }
}
